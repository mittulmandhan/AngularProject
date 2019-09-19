import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  templateUrl: './userlayout.component.html',
  styles: []
})
export class UserLayoutComponent implements OnInit {
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
