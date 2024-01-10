import { Component } from '@angular/core';

@Component({
  selector: 'app-vote-page',
  templateUrl: './vote-page.component.html',
  styleUrls: ['./vote-page.component.scss']
})
export class VotePageComponent {
  players = [
    { name: 'Mahrez', votes: 0, image: 'assets/mahrez.jpg' },
    { name: 'Salah', votes: 0, image: 'assets/salah.jpg' },
    { name: 'Benzema', votes: 0, image: 'assets/benzema.jpg' },
    { name: 'Mbappe', votes: 0, image: 'assets/mbappe.jpg' }
    // ... autres joueurs
  ];

  vote(player: any) {
    player.votes++;
    // Implémentez ici la logique pour traiter le vote
  }
}
