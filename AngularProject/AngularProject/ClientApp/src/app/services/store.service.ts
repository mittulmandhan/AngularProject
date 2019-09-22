
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable()
export class StoreService {
    headers: HttpHeaders;
    constructor(protected httpClient: HttpClient, private authService: AuthService) {
        // this.headers = new HttpHeaders({ 'content-type': 'application/json'});
        this.headers = new HttpHeaders({ 'content-type': 'application/json', Authorization: `Bearer ${this.authService.user.Token}` });
    }

    GetProducts(): Observable<Product[]> {
        return this.httpClient.get<Product[]>(environment.apiAddress + '/store', { headers: this.headers });
    }

    SaveCart(cart: any): Observable<any> {
        return this.httpClient.post<any>(environment.apiAddress + '/store/savecart', JSON.stringify(cart), { headers: this.headers });
    }
}
