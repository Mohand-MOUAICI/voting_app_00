import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router'; // Importer Router
import { ToastrService } from 'ngx-toastr';
import { Candidat } from '../models/candidat.model';
import { Resultvote } from '../models/resultvote.model';
import { ManageService } from '../services/manage.service';
import { NotificationModalComponent } from '../notification-modal/notification-modal.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vote-page',
  templateUrl: './vote-page.component.html',
  styleUrls: ['./vote-page.component.scss']
})
export class VotePageComponent {
  location: any;
  showResults() {
    this.router.navigate(['/results']);
  }
  votingMethod(votingMethod: any) {
    throw new Error('Method not implemented.');
  }
  @ViewChild(NotificationModalComponent) private notificationModal!: NotificationModalComponent;

  candidats: Candidat[] = [];
  results_vote: Resultvote[] = [];
  is_result: boolean = false;
  showSuccessAlert: any;
  showErrorAlert: any;

  constructor(
    private router: Router, // Injecter le service Router
    private managerSrv: ManageService, 
    private toastr: ToastrService,

  ) {
    this.handleGetAllCandidat();
  }

  private handleGetAllCandidat() {
    this.managerSrv.onGetAllCandidat().subscribe({
      next: (candidats: Candidat[]) => {
        this.candidats = candidats;
      },
      error: (err) => {
        this.showError(err.message);
      }
    });
  }

  handlerVoter(candidateId: string) {
    const userVote = this.getUserVote();
    if (userVote && userVote.vote === 'true' && userVote.email === this.getUserEmail()) {
      this.toastr.warning('Vous avez déjà voté', 'Alerte');
      return;
    }

    const vote = { userEmail: this.getUserEmail(), candidateId: candidateId };
    this.managerSrv.onGetVoter(vote).subscribe({
      next: () => {
        this.setUserVote();
        this.showSuccess('Opération réussie!');
      },
      error: (err) => {
        this.showError(err.message);
      }
    });
  }

  private getUserVote() {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }

  private getUserEmail(): string {
    return localStorage.getItem('email') || '';
  }

  private setUserVote() {
    const alreadyDone = { email: this.getUserEmail(), vote: 'true' };
    localStorage.setItem('user', JSON.stringify(alreadyDone));
  }

  private showError(message: string) {
    this.showNotification(`Erreur: ${message}`);
  }

  private showSuccess(message: string) {
    this.showNotification(`Succès: ${message}`);
  }

  showNotification(message: string): void {
    this.notificationModal.open(message);
  }

  closeNotification(): void {
    this.notificationModal.close();
  }

  handleLogout() {
    // Ajouter ici la logique de déconnexion si nécessaire
    this.router.navigate(['/home']); // Rediriger vers la page d'accueil
  }
  goBack() {
    window.history.back();
  }
}
