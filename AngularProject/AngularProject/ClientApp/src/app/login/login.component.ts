import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
login: Login;
  constructor() {
    this.login = new Login();
   }

  ngOnInit() {
  }

  Login(form: NgForm) {
  if (form.valid) {

  }

  }

}
