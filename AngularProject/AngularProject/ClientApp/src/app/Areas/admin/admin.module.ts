import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { AdminRoutingModule } from './admin.routing.module';
import { LayoutComponent } from './shared/layout/layout.component';



@NgModule({
  declarations: [DashboardComponent, ProductsComponent, LayoutComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
