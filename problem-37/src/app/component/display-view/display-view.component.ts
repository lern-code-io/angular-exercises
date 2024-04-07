import {Component, effect, OnInit, signal} from '@angular/core';

@Component({
  selector: 'app-display-view',
  standalone: true,
  imports: [],
  template:
  `
    <div class="main-container">
      <button (click)="onShowMessage()" >Show Message</button>
        <p>{{message}}</p>
    </div>
  `,
  styleUrl: './display-view.component.scss'
})
export class DisplayViewComponent {

  showMessage =  signal(false)

  message: string | undefined = undefined


  constructor() {
    // Add effect here
    // inside effect track showMessage so that if it turns True, it will assign message with value 'Hello World'
  }


  onShowMessage()
  {
    // set the signal 'showMessage' to true here
  }



}
