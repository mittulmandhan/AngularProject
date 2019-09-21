import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { environment } from '../../environments/environment.prod';
import { UserModel } from '../models/user';

@Injectable({providedIn: 'root'})
export class AuthService {
    user: UserModel;
    headers: HttpHeaders;
    constructor(private httpClient: HttpClient) {
        this.headers = new HttpHeaders({'content-type:': 'application/json'});
    }
    // method to store the user details in the local storage
    public SetAuthUser(user: UserModel) {
        localStorage.setItem('authInfo', JSON.stringify(user));
        this.user = user;
    }
    // dont know the purpose of this method
    private LoadAuthUser() {
        const data = localStorage.getItem('authInfo');
        if (data !== undefined && data !== null) {
            this.user = JSON.parse(data);
        } else {
            this.user = new UserModel();
        }
    }

    // ValidateUser(model: Login ): Observable<any> {
    // tslint:disable-next-line:max-line-length
    //      this.httpClient.post<UserModel>(environment.apiAddress + '/auth/ValidateUser', JSON.stringify(user), {headers: this.headers, observe: 'body'}).subscribe(res => {
    //         console.log(res);
    //         if (res != null) {
    //           const user = JSON.stringify(res);
    //           // sessionStorage is a built-In javascript feature
    //           sessionStorage.setItem('user', user);
    //           return true;
    //         } else {
    //             return false;
    //         }
    //       });
    // }

    ValidateUser(model: Login ): Observable<UserModel> {
        // tslint:disable-next-line:max-line-length
        return this.httpClient.post<UserModel>(environment.apiAddress + '/auth/ValidateUser', JSON.stringify(model), {headers: this.headers});
    }
    // method to get the user details from the local storage
    getUserDetails(): UserModel {
        // scope of session storage is the current tab only
        // but if u use local storage then u can access the details in multiple tabs also plus it is a part of browser
        // that's why we are replacing session storage with the local storage
        const data = localStorage.getItem('user');
        if (data !== undefined && data != null) {
            const user: UserModel = JSON.parse(data);
            return user;
        } else {
            return null;
        }
    }
    // To clear user details when session ends
    clearUserDetails() {
        localStorage.removeItem('user');
    }
}
