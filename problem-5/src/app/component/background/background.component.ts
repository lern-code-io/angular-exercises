import { Component } from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [
    NgClass
  ],
  template:
  `
    <div [ngClass]="'main-container'">
        <div class="container-height">

         </div>
    </div>
  `,
  styleUrl: './background.component.scss'
})
export class BackgroundComponent {

}
