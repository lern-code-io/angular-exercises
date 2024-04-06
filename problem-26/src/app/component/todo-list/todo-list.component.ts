import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {TodoService} from "../../service/todo.service";
import {Todo} from "../../model/todo.modal";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {map} from "rxjs";

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
  ,  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit{
  private todoService: TodoService = inject(TodoService);
  private destroyRef: DestroyRef = inject(DestroyRef);

  public todoList: Todo[] = [];

  ngOnInit(): void {
    this.todoService.getTodoList()
      .pipe(takeUntilDestroyed(this.destroyRef),
        // insert map rxjs operator and filter here
        map(todoList => todoList.filter(todo => todo.id >= 1 && todo.id <= 3))
      )
      .subscribe(response => {
        this.todoList = response;
      });
  }


}
