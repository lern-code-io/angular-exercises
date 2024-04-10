import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-access-denied',
  standalone: true,
  imports: [
    RouterLink
  ],
  template: `
  <div class="main-container">
    <h3>Access Denied!</h3>
    <nav>
      <a routerLink="/dashboard">Return</a>
    </nav>
  </div>
    `,
  styleUrl: './access-denied.component.scss'
})
export class AccessDeniedComponent {

}
