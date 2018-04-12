import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from "./sign-in/sign-in.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthGuard} from "./services/auth-guard.service";

const routes:Routes = [
  {path: '', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'sign-in', component: SignInComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
