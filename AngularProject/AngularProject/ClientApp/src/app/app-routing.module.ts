import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'notfound', component: NotfoundComponent},
  {path: 'admin', loadChildren: () => import('./Areas/admin/admin.module').then(m => m.AdminModule)},
  {path: 'user', loadChildren: () => import('./Areas/user/user.module').then(m => m.UserModule)},
  {path: '**', redirectTo: 'notfound'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
