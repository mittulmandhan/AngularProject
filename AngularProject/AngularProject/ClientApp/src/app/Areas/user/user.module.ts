import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserRoutingModule } from './user.routing.module';
import { UserLayoutComponent } from './shared/layout/userlayout.component';



@NgModule({
  declarations: [DashboardComponent, UserLayoutComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
