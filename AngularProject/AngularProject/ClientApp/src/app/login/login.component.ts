import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import {NgForm} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { UserModel } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
login: Login;
  constructor(private authService: AuthService, private router: Router) {
    this.login = new Login();
   }

  ngOnInit() {
  }

  Login(form: NgForm) {
  if (form.valid) {
    this.authService.ValidateUser(this.login).subscribe(res => {
      console.log(res);
      if (res != null) {
        const user: UserModel = res;
        const data = JSON.stringify(user);
        sessionStorage.setItem('user', data);
        if (user.Roles.indexOf('Admin') > -1) {
          this.router.navigate(['/admin']);
        } else if (user.Roles.indexOf('User') > -1) {
          this.router.navigate(['/user']);
        }
      }
    });
  }

  }

}
