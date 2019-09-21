import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable()
export class ProductService {
    headers: HttpHeaders;
    constructor(private httpClient: HttpClient) {
        this.headers = new HttpHeaders({ 'content-type': 'application/json' });
    }
    AddProduct(form): Observable<any> {
        return this.httpClient.post<any>(environment.apiAddress + '/product/add', form);
    }
    GetProducts(): Observable<Product[]> {
        return this.httpClient.get<Product[]>(environment.apiAddress + '/product/getall');
    }
}
