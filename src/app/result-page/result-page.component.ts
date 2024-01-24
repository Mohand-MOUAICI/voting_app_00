import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importez Router depuis @angular/router

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss']
})
export class ResultPageComponent {
  // Injectez Router dans le constructeur du composant
  constructor(private router: Router) {}

  results: any;
  results_vote: any;

  goBackToVote() {
    this.router.navigate(['/vote']); // Redirige vers la page de vote
  }

  logout() {
    // Ajoutez ici la logique de déconnexion si nécessaire
    this.router.navigate(['/home']); // Redirige vers la page d'accueil après la déconnexion
  }
}
