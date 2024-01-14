import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VotePageComponent } from './vote-page/vote-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupPageComponent } from './signup-page/signup-page.component';  // Import de ReactiveFormsModule
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component'; // Importer FormsModule
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ResultatPageComponent } from './resultat-page/resultat-page.component';

@NgModule({
  declarations: [
    AppComponent,
    VotePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    HomePageComponent,
    ResultatPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,  // Ajoutez ceci
    ToastrModule.forRoot(),  // Ajoutez ToastrModule
    AppRoutingModule,
    ReactiveFormsModule,  // Ajout de ReactiveFormsModule ici
    FormsModule, // Ajouter FormsModule ici
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
