import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-layout',
  templateUrl: './userlayout.component.html',
  styles: []
})
export class UserLayoutComponent implements OnInit {
  user: UserModel;
  constructor(private authService: AuthService) {
    this.user = this.authService.getUserDetails();
  }

  ngOnInit() {
  }

}
