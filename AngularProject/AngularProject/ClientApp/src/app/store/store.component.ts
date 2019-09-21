import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styles: []
})
export class StoreComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService, public cartService: CartService) { }

  ngOnInit() {
    this.productService.GetProducts().subscribe(res => {
      this.products = res;
    });
  }

}
