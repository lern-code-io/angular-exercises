import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-display-view',
  standalone: true,
  imports: [],
  template:
  `
    <div class="main-container">
      <button (click)="getValueFromSignal()">Display value from signal</button>
      <p>{{ valueFromSignal}}</p>
    </div>
  `,
  styleUrl: './display-view.component.scss'
})
export class DisplayViewComponent {

  valueFromSignal: number | undefined = undefined;
  valueHolderSignal= signal(23);


  getValueFromSignal()
  {
    // Get value from Signal here
  }

}
