import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VotePageComponent } from './vote-page/vote-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

const routes: Routes = [
  { path: 'vote', component: VotePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '', redirectTo: '/vote', pathMatch: 'full' },
  { path: 'signup', component: SignupPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
