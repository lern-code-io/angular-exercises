import {Component, inject} from '@angular/core';
import {RouterLink} from "@angular/router";
import {DisplayConnectorService} from "../../service/display-connector.service";

@Component({
  selector: 'app-display-one',
  standalone: true,
  imports: [
    RouterLink
  ],
  template:
  `
    <div class="main-container">
      <p> Display 1 </p>
      <button (click)="onIncrement()"> Click to increment counter on display 2</button>
      <a routerLink="/display-two"> Go to display 2</a>
    </div>
  `,
  styleUrl: './display-one.component.scss'
})
export class DisplayOneComponent {
  private displayConnectorService: DisplayConnectorService = inject(DisplayConnectorService);

  onIncrement()
  {
    // Call the on increment function here
  }
}
