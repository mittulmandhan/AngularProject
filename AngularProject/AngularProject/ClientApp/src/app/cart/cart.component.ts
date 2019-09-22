import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../models/cart';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: []
})
export class CartComponent implements OnInit {
cart: Cart;

  // tslint:disable-next-line:max-line-length
  constructor(public cartService: CartService, private authService: AuthService, private storeService: StoreService, private router: Router) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }
  chekout() {
    if (this.authService.user.UserId) {
      this.cart.UserId = this.authService.user.UserId;
      this.storeService.SaveCart(this.cart).subscribe(res => {
        this.cart.CartId = res;
        this.cartService.checkoutPayUmoney(this.authService.user);
      });
    } else {
      window.location.href = 'Account/login';
    }
  }
}
