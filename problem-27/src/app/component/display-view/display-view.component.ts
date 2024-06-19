import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {ChildComponent} from "../child/child.component";

@Component({
  selector: 'app-display-view',
  standalone: true,
  imports: [
    ChildComponent
  ],
  template: `
  <div class="main-container">
    <app-child></app-child>
    <button (click)="setHiddenValue()">Click to get hidden value</button>
    <p>The hidden value is: {{hiddenValue}} </p>
  </div>
  `,
  styleUrl: './display-view.component.scss'
})
export class DisplayViewComponent  {

  // Add view child tag here and view 'ChildComponent'
  hiddenValue: number | undefined = undefined

  setHiddenValue()
  {
    // call get hidden value method here and assign to 'hiddenValue'
  }
}
