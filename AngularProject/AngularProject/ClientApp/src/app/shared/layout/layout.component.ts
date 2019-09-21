import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserModel } from 'src/app/models/user';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Cart } from 'src/app/models/cart';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: []
})
export class LayoutComponent implements OnInit {
  user: UserModel;
  cart: Cart;
  constructor(private authService: AuthService, private router: Router, private cartService: CartService) {
    this.user = this.authService.user;
    this.cart =  this.cartService.getCart();
  }

  ngOnInit() {
  }
  logOut() {
    this.authService.clearUserDetails();
    // this.router.navigate(['/logout']);
    window.location.href = '/logout';
  }
}
