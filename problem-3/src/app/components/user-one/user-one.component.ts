import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {UserService} from "../../service/user.service";
import {User} from "../../modal/User.modal";

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
      <a routerLink="/">Return</a>
    </div>
  `,
  styleUrl: './user-one.component.scss'
})
export class UserOneComponent implements OnInit {

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
