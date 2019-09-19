import { AdminLayoutComponent } from './shared/layout/adminlayout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { AdminRoutingModule } from './admin.routing.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [DashboardComponent, ProductsComponent, AdminLayoutComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
