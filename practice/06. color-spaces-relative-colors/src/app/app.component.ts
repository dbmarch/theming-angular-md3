import { Component } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { PlaygroundComponent } from "./components/playground/playground.component";

@Component({
  selector: 'app-root',
  imports: [CardComponent, PlaygroundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'color-spaces';
}
