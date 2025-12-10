import { Component, input } from '@angular/core';

@Component({
  selector: 'app-fav-button',
  standalone: true,
  imports: [],
  templateUrl: './fav-button.component.html',
  styleUrl: './fav-button.component.scss'
})
export class FavButtonComponent {
  readonly isFavorite = input.required<boolean>();
}
