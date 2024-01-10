import { Component } from '@angular/core';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent {
  user = { username: '', email: '', password: '' };

  onSignup() {
    console.log('Inscription demandée', this.user);
    // Ici, vous ajouteriez la logique pour l'inscription
  }
}
