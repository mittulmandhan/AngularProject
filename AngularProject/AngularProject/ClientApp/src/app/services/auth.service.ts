import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { environment } from '../../environments/environment.prod';
import { UserModel } from '../models/user';

@Injectable({providedIn: 'root'})
export class AuthService {
    headers: HttpHeaders;
    constructor(private httpClient: HttpClient) {
        this.headers = new HttpHeaders({'content-type:': 'application/json'});
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
}
