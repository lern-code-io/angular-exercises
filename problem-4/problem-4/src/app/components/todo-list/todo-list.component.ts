import {Component, inject, OnInit} from '@angular/core';
import {TodoService} from "../../services/todo.service";
import {Todo} from "../../modal/todo.modal";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  template:
      `
    <div id="mainContainer" class="main-container">
      <h3 id="todoHeader">List of ToDo's!</h3>
      <div *ngFor="let todo of todoList " id="loopContainer"  class="todo-card">
            <p id="todoTitle" class="todo-title">
              {{todo.title}}
            </p>
      </div>

    </div>
  `
  ,
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  private todoService: TodoService = inject(TodoService);
  public todoList: Todo[] = [];

  // Todo: add lifecycle method here
  loadTodoListInsideLifecycleHook(): void {
    this.todoService.getTodoList().subscribe(response => {
      this.todoList = response;
    });
  }
}
