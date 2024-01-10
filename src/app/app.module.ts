import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VotePageComponent } from './vote-page/vote-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';  // Import de ReactiveFormsModule

@NgModule({
  declarations: [
    AppComponent,
    VotePageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule  // Ajout de ReactiveFormsModule ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
