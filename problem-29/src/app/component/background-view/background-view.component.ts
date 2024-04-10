import { Component } from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-background-view',
  standalone: true,
  imports: [
    NgClass
  ],
  template:
    `
    <div class="main-container">
      <!--          TODO: Add dynamic styling and mouse events on div below-->
      <div class="container-height">
            <p> Link style sheet to add border and background!</p>
        </div>
    </div>
  `,  styleUrl: './background-view.component.scss'
})
export class BackgroundViewComponent {

  showBlueBackground: boolean = false;

  setBlueBackgroundToTrue()
  {
    this.showBlueBackground = true
  }

  setBlueBackgroundToFalse()
  {
    this.showBlueBackground = false

  }
}
