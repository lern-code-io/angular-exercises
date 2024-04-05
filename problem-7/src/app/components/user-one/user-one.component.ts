import {Component, inject} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {User} from "../../models/User.modal";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-user-one',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  template: `
    <div id="main-container " class="main-container">
      <h3> {{ user.company.name }}</h3>
      <img ngSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxn6HttfyveJwe2VY0xQYuwC7_3JdVOnLnKg&s" height="125" width="125"/>
      <a src="/">Return</a>
    </div>
  `,
  styleUrl: './user-one.component.scss'
})
export class UserOneComponent {

  private userService: UserService = inject(UserService);

  public user: User = {
    company:
        {
          name: '',
          catchPhrase: '',
          bs: ''
        },
    phone: "",
    website: ""
  }
  ngOnInit(): void {
    this.userService.getUsers("1").subscribe(response => {
      this.user = response;
    });
  }

}
