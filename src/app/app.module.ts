import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgModule} from '@angular/core';

import {JwtModule} from "@auth0/angular-jwt";

import {AppComponent} from './app.component';
import {AppRoutingModule} from './/app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {AuthGuard} from "./services/auth-guard.service";
import {AuthService} from "./services/auth.service";

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
