import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: []
})
export class CartComponent implements OnInit {
cart: Cart;
  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

}
