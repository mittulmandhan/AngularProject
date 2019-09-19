import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserRoutingModule } from './user.routing.module';
import { LayoutComponent } from './shared/layout/layout.component';



@NgModule({
  declarations: [DashboardComponent, LayoutComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
