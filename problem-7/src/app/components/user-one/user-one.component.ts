import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {User} from "../../models/User.modal";
import {UserService} from "../../service/user.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-user-one',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  template: `
    <div class="main-container">
      <h3> {{ user?.company.name }}</h3>
      <img ngSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxn6HttfyveJwe2VY0xQYuwC7_3JdVOnLnKg&s" height="125" width="125"/>
      <a src="/">Return</a>
    </div>
  `,
  styleUrl: './user-one.component.scss'
})
export class UserOneComponent implements OnInit{

  private userService: UserService = inject(UserService);
  private destroyRef: DestroyRef = inject(DestroyRef);

  public user: User | undefined = undefined;

  ngOnInit(): void {
    this.userService.getUsers("1")
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(response => {
      this.user = response;
    });
  }

}
