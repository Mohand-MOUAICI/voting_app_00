import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

// Définition de l'interface pour le résultat de la connexion
interface LoginResult {
  email: string;
  idToken: string;
  // ajoutez ici d'autres propriétés attendues de votre objet de résultat
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    this.authService.login(this.loginForm.value).subscribe(
      // Fonction de rappel pour 'next'
      (result: any) => {  // Vous pouvez remplacer 'any' par 'LoginResult' si votre service le retourne spécifiquement.
        localStorage.setItem('email', result.email);
        localStorage.setItem('token', result.idToken);
  
        const successHtml = '<span class="icon"></span><div class="content"><strong>Connexion réussie!</strong><p>Vous êtes maintenant connecté.</p></div>';
        this.toastr.success(successHtml, undefined, {
          enableHtml: true,
          toastClass: 'toast toast-success'
        });
  
        this.router.navigateByUrl('/vote');
      },
      // Fonction de rappel pour 'error'
      (err) => {
        console.error(err);
        this.toastr.error('Échec de la connexion.', 'Erreur');
      }
      // Vous pouvez également fournir une fonction de rappel pour 'complete' si nécessaire
    );
  }
  
}
