import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { UserModel } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlayout',
  templateUrl: './adminlayout.component.html',
  styles: []
})
export class AdminLayoutComponent implements OnInit {
  user: UserModel;
  constructor(private authService: AuthService, private router: Router) {
    this.user = this.authService.getUserDetails();
  }

  ngOnInit() {
  }
  logOut() {
    this.authService.clearUserDetails();
    this.router.navigate(['/logout']);
  }

}
