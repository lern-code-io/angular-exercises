import {Component, DestroyRef, inject} from '@angular/core';
import {TodoService} from "../../service/todo.service";
import {Todo} from "../../model/todo.modal";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-todo-viewer',
  standalone: true,
  imports: [],
  template: `
    <div class="main-container">
      <h3>My Todo!</h3>
      <div class="information-container">
        <p>{{todo?.title}}</p>
      </div>
    </div>
  `,  styleUrl: './todo-viewer.component.scss'
})
export class TodoViewerComponent {

  // Inject ToDoService here and assign to this variable
  private todoService: TodoService | undefined = undefined;

  private destroyRef: DestroyRef = inject(DestroyRef);

  public todo: Todo | undefined = undefined;

  ngOnInit(): void {
    this.todoService?.getTodoWithIdOne()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(response => {
        this.todo = response;
      });
  }
}
