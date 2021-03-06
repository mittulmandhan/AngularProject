import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
import { AuthService } from './auth.service';
import { UserModel } from '../models/user';

@Injectable()
export class ProductService {
    headers: HttpHeaders;
    user: UserModel;
    constructor(private httpClient: HttpClient, private authService: AuthService) {
        // this.user = this.authService.getUserDetails();
        console.log(this.authService.user.Token);
        this.headers = new HttpHeaders({ 'content-type': 'application/json', Authorization: `Bearer ${this.authService.user.Token}` });
    }
    AddProduct(form): Observable < any > {
        return this.httpClient.post<any>(environment.apiAddress + '/product/add', form);
    }
    GetProducts(): Observable < Product[] > {
        return this.httpClient.get<Product[]>(environment.apiAddress + '/product/getall', { headers: this.headers } );
    }
        }
