import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { AdminLayoutComponent } from './shared/layout/adminlayout.component';

const routes: Routes = [
  {
      path: '', component: AdminLayoutComponent, children: [
        {path: '', component: DashboardComponent},
        {path: 'products', component: ProductsComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
