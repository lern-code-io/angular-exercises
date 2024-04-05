import {Component, inject, OnInit} from '@angular/core';
import {Todo} from "../../modal/todo.modal";
import {TodoService} from "../../service/todo.service";
import {NgForOf, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgForOf,
    UpperCasePipe
  ],
  template:
          `
    <div id="mainContainer" class="main-container">
      <h3 id="todoHeader">List of ToDo's!</h3>
      <div *ngFor="let todo of todoList " id="loopContainer"  class="todo-card">
            <p id="todoCapitalTitle" class="todo-title">
<!--              todo: add uppercase pipe operator inside the string interpolation-->
              {{todo.title}}
            </p>
      </div>

    </div>
  `
      ,
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit {
  private todoService: TodoService = inject(TodoService);
  public todoList: Todo[] = [];
  ngOnInit(): void {
    this.todoService.getTodoList().subscribe(response => {
      this.todoList = response;
    });
  }

}
