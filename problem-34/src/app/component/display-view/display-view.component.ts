import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-display-view',
  standalone: true,
  imports: [],
  template:
    `
      <div class="main-container">
        <button (click)="incrementSignal()">Display value from signal</button>
        <p>{{ valueHolderSignal() }}</p>
      </div>
    `,
  styleUrl: './display-view.component.scss'
})
export class DisplayViewComponent {

  valueHolderSignal= signal(0);

  incrementSignal()
  {
    this.valueHolderSignal.update(value => value + 1);

  }
}
