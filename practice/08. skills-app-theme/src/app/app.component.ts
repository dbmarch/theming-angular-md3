import { Component, signal } from '@angular/core';
import { ALL_ACTIVITIES } from './data/all-activities';
import { ActivityCardComponent } from "./components/activity-card/activity-card.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { ALL_NOTIFICATIONS } from './data/all-notifications';
import { NotificationComponent } from "./components/notification/notification.component";

@Component({
  selector: 'app-root',
  imports: [ActivityCardComponent, ToolbarComponent, NotificationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly activities = signal(ALL_ACTIVITIES);

  readonly notifications = signal(ALL_NOTIFICATIONS);
}
