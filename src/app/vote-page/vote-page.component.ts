import { Component } from '@angular/core';
import { Candidat } from '../models/candidat.model';
import { ManageService } from '../services/manage.service';

@Component({
  selector: 'app-vote-page',
  templateUrl: './vote-page.component.html',
  styleUrls: ['./vote-page.component.scss']
})
export class VotePageComponent {
  candidats: Candidat[] = [];
  alreadyDone: boolean = false;

  constructor(private managerSrv: ManageService,
) {
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
  async handlerVoter(candidateId: String) {
    let userEmail = localStorage.getItem('email')
    // @ts-ignore
    let check = JSON.parse(localStorage.getItem('user'))
    console.log(check)
    if (check) {
      let vote = check['vote']
      let email = check['email']
      console.log(vote, '---', email)
      if (vote == 'true' && email == userEmail)
        console.log('Vous avez déja voté')
        //this.presentToast('Vous avez déja voté', 'warning')
    
    } else {
      // @ts-ignore
      const vote: Vote = {'userEmail': userEmail, 'candidateId': candidateId}
      this.managerSrv.onGetVoter(vote).subscribe({
        next: vote => {
 
          const alreadyDone = {'email': userEmail, vote: 'true'}

          localStorage.setItem('user', JSON.stringify(alreadyDone))
          //this.presentToast('Vous avez voté avec success', 'success')
        }, error: err => {

          //this.presentToast('Une erreur est survenue', 'danger')
        }
      })
    }
  }
  players = [
    { name: 'Mohamed Salah (Liverpool)', votes: 0, image: '/assets/Mohamed Salah (Liverpool).jpg' },
    { name: 'Alejandro Grimaldo (Bayer Leverkusen)', votes: 0, image: 'assets/Alejandro Grimaldo (Bayer Leverkusen).jpg' },
    { name: 'Antoine Griezmann (Atlético de Madrid)', votes: 0, image: 'assets/Antoine Griezmann (Atlético de Madrid).jpg' },
    { name: 'Bukayo Saka (Arsenal)', votes: 0, image: 'assets/Bukayo Saka (Arsenal).jpg' },
    { name: 'Declan Rice (Arsenal)', votes: 0, image: 'assets/Declan Rice (Arsenal).jpg' },
    { name: 'Erling Haaland (Manchester City)', votes: 0, image: 'assets/Erling Haaland (Manchester City).jpg' },
    { name: 'Harry Kane (Bayern Munich)', votes: 0, image: 'assets/Harry Kane (Bayern Munich).jpg' },
    { name: 'Jude Bellingham (Real Madrid)', votes: 0, image: 'assets/Jude Bellingham (Real Madrid).jpg' },
    { name: 'Kylian Mbappé (PSG)', votes: 0, image: 'assets/Kylian Mbappé (PSG).jpg' },
    { name: 'Lautaro Martinez (Inter Milan)', votes: 0, image: 'assets/Lautaro Martinez (Inter Milan).jpg' },
    { name: 'Martin Odegaard (Arsenal)', votes: 0, image: 'assets/Martin Odegaard (Arsenal).jpg' },
    { name: 'Rafael Leão (AC Milan)', votes: 0, image: 'assets/Rafael Leão (AC Milan).jpg' },
    { name: 'Rodri (Manchester City)', votes: 0, image: 'assets/Rodri (Manchester City).jpg' },
    { name: 'Ruben Dias (Manchester City)', votes: 0, image: 'assets/Ruben Dias (Manchester City).jpg' },
    { name: 'Vinicius Junior (Real Madrid)', votes: 0, image: 'assets/Vinicius Junior (Real Madrid).jpg' },
    
    // ... autres joueurs
  ];

  vote(player: any) {
    player.votes++;
    // Implémentez ici la logique pour traiter le vote
  }
}
