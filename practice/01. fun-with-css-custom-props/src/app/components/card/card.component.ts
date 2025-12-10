import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly image = input.required<string>();

}
