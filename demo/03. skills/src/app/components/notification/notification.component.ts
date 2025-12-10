import { Component, input } from '@angular/core';
import { Notification } from '../../models/notification.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification',
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
  host: {
    '[class.info]': "notification().type === 'info'",
    '[class.warning]': "notification().type === 'warning'",
    '[class.error]': "notification().type === 'error'",
    '[class.success]': "notification().type === 'success'",
  },
})
export class NotificationComponent {
  readonly notification = input.required<Notification>();
}
