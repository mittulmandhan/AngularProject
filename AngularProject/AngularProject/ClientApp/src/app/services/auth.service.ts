import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { environment } from '../../environments/environment.prod';
import { UserModel } from '../models/user';

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private httpClient: HttpClient) { }
    ValidateUser(user: Login ): Observable<UserModel> {
        return this.httpClient.post<UserModel>(environment.apiAddress + '/auth/ValidateUser', JSON.stringify(user));
    }
}
