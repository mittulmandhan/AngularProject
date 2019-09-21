import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminAuthGuard, UserAuthGuard } from './shared/auth.gaurd';
import { UnauthorizeComponent } from './unauthorize/unauthorize.component';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [ // eager loading
      {path: '', component: StoreComponent},
      {path: 'cart', component: CartComponent},
      {path: 'login', component: LoginComponent},
      {path: 'logout', component: LogoutComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'notfound', component: NotfoundComponent},
      { path: 'unauthorize', component: UnauthorizeComponent }
    ]
  },
  // In canActive option just mention the service(s) you are using authentication gaurd
  { path: 'admin', loadChildren: () => import('./Areas/admin/admin.module').then(m => m.AdminModule), canActivate: [AdminAuthGuard] },
  { path: 'user', loadChildren: () => import('./Areas/user/user.module').then(m => m.UserModule), canActivate: [UserAuthGuard] },
  {path: '**', redirectTo: 'notfound'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
