import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DashboardComponent } from './areas/admin/dashboard/dashboard.component';
import { AuthService } from './services/auth.service';
import { LayoutComponent } from './shared/layout/layout.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductService } from './services/product.service';
import { UserAuthGuard, AdminAuthGuard } from './shared/auth.gaurd';
import { UnauthorizeComponent } from './unauthorize/unauthorize.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    LoginComponent,
    SignupComponent,
    NotfoundComponent,
    DashboardComponent,
    LayoutComponent,
    LogoutComponent,
    UnauthorizeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, ProductService, UserAuthGuard, AdminAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
