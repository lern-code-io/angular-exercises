import {Component, DestroyRef, inject} from '@angular/core';
import {TodoService} from "../../service/todo.service";
import {Todo} from "../../model/todo.modal";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {NgIf} from "@angular/common";
import {catchError, of} from "rxjs";

@Component({
  selector: 'app-todo-viewer',
  standalone: true,
  imports: [
    NgIf
  ],
  template:
  `
    <div class="main-container">
      <h3>My Todo!</h3>
      <button (click)="onGetTodo()">Get Todo!</button>
      <div *ngIf="todo" class="information-container">
        <p>{{ todo.title }}</p>
      </div>
      <p *ngIf="error">An Error Has Occurred in the HTTP call</p>
    </div>
  `,
  styleUrl: './todo-viewer.component.scss'
})
export class TodoViewerComponent {

  private todoService: TodoService = inject(TodoService);
  private destroyRef: DestroyRef = inject(DestroyRef);

  public todo: Todo | undefined = undefined;
  public error: boolean = false;

  onGetTodo()
  {
    this.todoService.getTodo("4")
      .pipe(takeUntilDestroyed(this.destroyRef),
        // ToDo add catch error operator here

        )
      .subscribe(response => {
        this.todo = response;
      });  }
}
