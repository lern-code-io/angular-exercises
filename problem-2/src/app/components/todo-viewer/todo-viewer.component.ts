import {Component, inject, OnInit} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {TodoService} from "../../service/todo.service";
import {Todo} from "../../modal/todo.modal";

@Component({
  selector: 'app-todo-viewer',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf
  ],
  template: `
    <div id="main-container" class="weatherReportContainer">
      <h3>Today's Weather Report!</h3>
      <div *ngIf="todo.completed" id="complete"  class="information-container">
        <p>This ToDo is completed!</p>
        <img priority height="125" width="125"
             ngSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKNl0J6BipZCmRtWuJE_6nRGWyoBMfNVps9A&s"/>
      </div>
      <div *ngIf="!todo.completed"  id="notComplete" class="information-container">
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

  public todo: Todo = {
    completed: false,
    id: 0,
    title: "",
    userId: 0
  };

  ngOnInit(): void {
    this.todoService.getTodo("4").subscribe(response => {
      this.todo = response;
    });
  }

}
