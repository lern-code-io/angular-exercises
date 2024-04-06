import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterLink
  ],
  template: `
  <div class="main-container">
    <h3>Welcome to the admin panle</h3>
    <nav>
        <a routerLink="/admin">Go to admin page</a>
     </nav>
  </div>
    `,
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
