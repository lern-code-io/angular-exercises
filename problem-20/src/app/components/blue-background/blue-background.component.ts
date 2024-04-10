import { Component } from '@angular/core';
import {BlueBackgroundDirective} from "../../directives/blue-background.directive";

@Component({
  selector: 'app-blue-background',
  standalone: true,
  imports: [
    BlueBackgroundDirective
  ],
  template:
  `
    <div class="main-container">
<!--      apply custom directive on the div below-->
      <div class="container-height">
        <p>Apply the custom blue background directive created to my div container!</p>
      </div>
    </div>

  `,
  styleUrl: './blue-background.component.scss'
})
export class BlueBackgroundComponent {

}
