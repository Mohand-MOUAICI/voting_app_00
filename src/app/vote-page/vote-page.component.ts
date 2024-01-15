import { Component } from '@angular/core';
import { Candidat } from '../models/candidat.model';
import { ManageService } from '../services/manage.service';
import { Resultvote } from '../models/resultvote.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-vote-page',
  templateUrl: './vote-page.component.html',
  styleUrls: ['./vote-page.component.scss']
})
export class VotePageComponent {
showSuccessAlert: any;
showErrorAlert: any;
closeAlert(_t26: any) {
throw new Error('Method not implemented.');
}
  candidats: Candidat[] = [];
  alreadyDone: boolean = false;
  results_vote: Resultvote[] = [];
  is_result: boolean = false;
alerts: any;
  constructor(private managerSrv: ManageService, private toastr: ToastrService)
   {
this.handleGetAllCandidat();
}
async handleGetAllCandidat() {

  this.managerSrv.onGetAllCandidat().subscribe({
    next: (candidats: Candidat[]) => {
      this.candidats = candidats;
    }, error: err => {
      console.log(err)
    }
  })

}
async handlerGetResultVte() {
  this.managerSrv.onGetResultVote().subscribe({
    next: (result: Resultvote[]) => {
      result.forEach(item => {
        item.pourcentage = +item.pourcentage.toFixed(2)
      })
      this.results_vote = result;
    }, error: err => {
      console.log(err)

    }
  })
}
  async handlerVoter(candidateId: String) {
    let userEmail = localStorage.getItem('email')
    this.is_result = true
    this.handlerGetResultVte()
    // @ts-ignore
    let check = JSON.parse(localStorage.getItem('user'))
    console.log(check)
    if (check) {
      let vote = check['vote']
      let email = check['email']
      console.log(vote, '---', email)
      if (vote == 'true' && email == userEmail)
      this.toastr.warning('Vous avez déjà voté', 'Alerte');
      return; // Arrêtez ici pour éviter de continuer avec le vote
        //this.presentToast('Vous avez déja voté', 'warning')
    
    } else {
      // @ts-ignore
      const vote: Vote = {'userEmail': userEmail, 'candidateId': candidateId}
      this.managerSrv.onGetVoter(vote).subscribe({
        next: vote => {
 
          const alreadyDone = {'email': userEmail, vote: 'true'}

          localStorage.setItem('user', JSON.stringify(alreadyDone))
          //this.presentToast('Vous avez voté avec success', 'success')
          this.toastr.success('Opération réussie !', 'Succès');

        }, error: err => {

          //this.presentToast('Une erreur est survenue', 'danger')
          this.toastr.error('Une erreur est survenue', 'Erreur');

        }
      })
    }
  }
  vote(player: any) {
    player.votes++;
    // Implémentez ici la logique pour traiter le vote
  }
}
