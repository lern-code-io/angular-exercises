import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-message-component',
  standalone: true,
  imports: [
    NgIf
  ],
  template:
  `
    <div class="main-container">
      <button > Click to show message</button>
      <p *ngIf="showMessage"> Congratulations! It works</p>
    </div>
  `,
  styleUrl: './message.component.scss'
})
export class MessageComponent {

  showMessage: boolean = false;

  setShowMessageToTrue()
  {
    this.showMessage = true;
  }
}
