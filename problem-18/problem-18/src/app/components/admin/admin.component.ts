import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    RouterLink,
  ],
  template: `
  <div class="main-container">
    <h3>Welcome to the admin page</h3>
    <h6>We detect you should not have access to this page</h6>
    <nav>
        <a routerLink="/dashboard">Return</a>
     </nav>
  </div>
    `,
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
