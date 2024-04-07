import {Component, DestroyRef, inject} from '@angular/core';
import {TodoService} from "../../service/todo.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import { Todo } from '../../model/todo.modal';



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

  private todoService: TodoService = inject(TodoService);
  private destroyRef: DestroyRef = inject(DestroyRef);

  public todo: Todo | undefined = undefined;

  // subscribe to HTTP observable and assign result to todo variable
  ngOnInit(): void {
  }

}
