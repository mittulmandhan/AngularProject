import { AdminLayoutComponent } from './shared/layout/adminlayout.component';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { AdminRoutingModule } from './admin.routing.module';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [DashboardComponent, ProductsComponent, AdminLayoutComponent, ProductComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
