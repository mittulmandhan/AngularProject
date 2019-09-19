import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserLayoutComponent } from './shared/layout/userlayout.component';

const routes: Routes = [
    {
      path: '', component: UserLayoutComponent, children: [
        {path: '', component: DashboardComponent}
      ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
