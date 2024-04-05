import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {TodoService} from "../../service/todo.service";
import {Todo} from "../../modal/todo.modal";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-todo-viewer',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf
  ],
  template: `
    <div class="main-container">
      <h3>My Todo!</h3>
      <div class="information-container">
        <p>This ToDo is completed!</p>
        <img priority height="125" width="125"
             ngSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKNl0J6BipZCmRtWuJE_6nRGWyoBMfNVps9A&s"/>
      </div>
      <div class="information-container">
        <p>This ToDo is incomplete!</p>
        <img priority height="125" width="125"
             ngSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRanAYVU90a2_zmg1aTSiSqQNV8LBDHLME8cg&s"/>
      </div>
    </div>
  `,
  styleUrl: './todo-viewer.component.scss'
})
export class TodoViewerComponent implements OnInit {

  private todoService: TodoService = inject(TodoService);
  private destroyRef: DestroyRef = inject(DestroyRef);

  public todo: Todo | undefined = undefined;

  ngOnInit(): void {
    this.todoService.getTodo("4")
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(response => {
      this.todo = response;
    });
  }

}
