import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserModel } from '../models/user';

// this is an admin authorization guard service for restricting others to access admin urls
@Injectable()
export class AdminAuthGuard implements CanActivate {
  public user: UserModel;
  constructor(private authService: AuthService, private router: Router) { }
  canActivate() {
    if (!(this.authService.user !== undefined)) {
      // if user's object contained undefined value then redirect to the login page
      this.router.navigate(['login']);
      return false;
    } else if (this.authService.user.Roles.indexOf('Admin') > -1) {
      // if the user is indexed in list of Admin then approve the authentication
      return true;
    } else {
      // state the url access as unauthorized in all ather cases
      this.router.navigate(['unauthorize']);
      return false;
    }
  }
}

// this is a user authorization guard service for restricting others to access admin urls
@Injectable()
export class UserAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate() {
    if (!(this.authService.user !== undefined)) {
      // if the user is indexed in list of Admin then approve the authentication
      this.router.navigate(['login']);
      return false;
    } else if (this.authService.user.Roles.indexOf('User') > -1) {
      // if the user is indexed in list of User then approve the authentication
      return true;
    } else {
      // state the url access as unauthorized in all ather cases
      this.router.navigate(['unauthorize']);
      return false;
    }
  }
}
