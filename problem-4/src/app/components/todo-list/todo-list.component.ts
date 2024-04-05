import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {TodoService} from "../../services/todo.service";
import {Todo} from "../../modal/todo.modal";
import {NgForOf} from "@angular/common";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  template:
      `
    <div class="main-container">
      <h3>List of ToDo's!</h3>
      <div *ngFor="let todo of todoList " class="todo-card">
            <p class="todo-title">
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
  private destroyRef: DestroyRef = inject(DestroyRef);

  public todoList: Todo[] = [];

  // Todo: add lifecycle method here


  loadTodoListInsideLifecycleHook(): void {
    this.todoService.getTodoList()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(response => {
      this.todoList = response;
    });
  }
}
