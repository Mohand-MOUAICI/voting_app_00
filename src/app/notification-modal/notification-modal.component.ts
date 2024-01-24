import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification-modal',
  templateUrl: './notification-modal.component.html',
  styleUrls: ['./notification-modal.component.scss']
})
export class NotificationModalComponent {
  @Input() message: string = '';
  display: boolean = false;

  open(message: string) {
    this.message = message;
    this.display = true;
  }

  close() {
    this.display = false;
  }
}
