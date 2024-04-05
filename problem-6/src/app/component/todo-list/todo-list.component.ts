import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {Todo} from "../../modal/todo.modal";
import {TodoService} from "../../service/todo.service";
import {NgForOf, UpperCasePipe} from "@angular/common";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgForOf,
    UpperCasePipe
  ],
  template:
          `
    <div class="main-container">
      <h3 >List of ToDo's!</h3>
      <div *ngFor="let todo of todoList " class="todo-card">
            <p class="todo-title">
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
  private destroyRef: DestroyRef = inject(DestroyRef);

  public todoList: Todo[] = [];

  ngOnInit(): void {
    this.todoService.getTodoList()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(response => {
      this.todoList = response;
    });
  }

}
