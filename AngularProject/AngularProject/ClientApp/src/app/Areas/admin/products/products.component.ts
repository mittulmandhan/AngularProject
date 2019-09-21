import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService, ) { }

  ngOnInit() {
    this.productService.GetProducts()
      .subscribe(res => {
        this.products = res;
      });
  }
}
