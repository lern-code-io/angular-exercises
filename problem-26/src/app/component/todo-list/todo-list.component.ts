import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {TodoService} from "../../service/todo.service";
import {Todo} from "../../model/todo.modal";
import {forkJoin, map, Observable, switchMap} from "rxjs";
import { User } from '../../model/User.modal';
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  template:
    `
      <div class="main-container">
        <h3>List of ToDo's!</h3>
        <button (click)="onGetTodos()"> Get User and List Of Todos</button>
        <p *ngIf="user">{{user.name}}'s Todo list: </p>
        <div *ngFor="let todo of todoList " class="todo-card">
          <p class="todo-title">
            {{todo.title}}
          </p>
        </div>

      </div>
    `
  ,  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  private todoService: TodoService = inject(TodoService);
  private userService: UserService = inject(UserService);

  public todoList: Todo[] = [];
  public user: User | undefined = undefined;

  onGetTodos()
  {
    // Todo: convert this nested subscription chain to use RXJS Switch Map operator
    this.userService.getUser$()
        .subscribe( (user) => {
          this.todoService.getTodoList().subscribe((todoList) => {

            this.todoList = todoList;
            this.user = user

          })
        })

  }
}
