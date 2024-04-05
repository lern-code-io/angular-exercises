import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-all-users',
  standalone: true,
  imports: [RouterLink],
  template: `
      <div class="main-container">
        <h3>Welcome to the Main users page</h3>
        <nav>
            <a src="/userone">Find User One</a>
         </nav>
      </div>
    `,
  styleUrl: './all-users.component.scss'
})
export class AllUsersComponent {

}
