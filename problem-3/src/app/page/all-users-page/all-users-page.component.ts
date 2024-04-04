import { Component } from '@angular/core';
import {AllUsersComponent} from "../../components/all-users/all-users.component";

@Component({
  selector: 'app-all-users-page',
  standalone: true,
  imports: [AllUsersComponent],
  template: '<app-all-users/>',
})
export class AllUsersPageComponent {

}
