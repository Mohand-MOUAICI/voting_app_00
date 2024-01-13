import { Component } from '@angular/core';

@Component({
  selector: 'app-vote-page',
  templateUrl: './vote-page.component.html',
  styleUrls: ['./vote-page.component.scss']
})
export class VotePageComponent {
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
