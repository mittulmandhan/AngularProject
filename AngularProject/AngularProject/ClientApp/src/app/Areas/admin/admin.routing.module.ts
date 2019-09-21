import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { AdminLayoutComponent } from './shared/layout/adminlayout.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
      path: '', component: AdminLayoutComponent, children: [
        {path: '', component: DashboardComponent},
        {path: 'product', component: ProductComponent},
        {path: 'products', component: ProductsComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
