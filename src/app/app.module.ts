import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgModule} from '@angular/core';

import {GridModule} from '@progress/kendo-angular-grid';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './/app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {AuthGuard} from "./services/auth-guard.service";
import {AuthService} from "./services/auth.service";
import {DashboardService} from "./services/dashboard.service";

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
    GridModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    DashboardService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
