import { Component } from '@angular/core';

@Component({
  selector: 'app-blue-background',
  standalone: true,
  imports: [],
  template:
  `
    <div class="'main-container'">
        <div class="container-height blue-background">
            <p> Link style sheet to add border and background!</p>
        </div>
    </div>
  `,
  // add styleURL below
})
export class BlueBackgroundComponent {

}
