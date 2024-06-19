import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [],
  template: `
    <div class="main-container">
     <h3> Welcome! Log In was successful.</h3>
    </div>
  `,
  styleUrl: './welcome-page.component.scss'
})
export class WelcomePageComponent {

}
