import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserModel } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: []
})
export class LayoutComponent implements OnInit {
  user: UserModel;
  constructor(private authService: AuthService, private router: Router) {
    this.user = this.authService.user;
  }

  ngOnInit() {
  }
  logOut() {
    this.authService.clearUserDetails();
    // this.router.navigate(['/logout']);
    window.location.href = '/logout';
  }
}
