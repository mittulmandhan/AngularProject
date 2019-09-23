import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styles: []
})
export class StoreComponent implements OnInit {
  products: Product[];
  constructor(private storeService: StoreService, public cartService: CartService) { }

  ngOnInit() {
    this.storeService.GetProducts().subscribe(res => {
      this.products = res;
    });
  }

}
