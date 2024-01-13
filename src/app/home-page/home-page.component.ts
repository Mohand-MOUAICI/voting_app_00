import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
StatsPageComponent() {
throw new Error('Method not implemented.');
}

  constructor(private router: Router) {}

  redirectToLogPage() {
    this.router.navigate(['/login']);
  }
}
