import { Component } from '@angular/core';
import {UserModal} from "../../modal/User.modal";
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-user-one',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  template: `
    <div id="profileContainer " class="profileContainer">
      <h3> {{ userOne.name }}</h3>
      <img ngSrc="{{userOne.imageUrl}}" height="125" width="125"/>
      <a routerLink="/">Return</a>
    </div>
  `,
  styleUrl: './user-one.component.scss'
})
export class UserOneComponent {

  public userOne: UserModal = {
    name: 'User One',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLd7X8LpAPJmUOLdnoaOSoXalm3babOYpqWw&s'
  }
}
