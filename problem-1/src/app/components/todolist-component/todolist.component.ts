import {Component, inject, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {Todo} from "../../modal/todo.modal";
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todolist-component',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <div id="mainContainer" class="main-container">
      <h3 id="todoHeader">List of ToDo's!</h3>
<!--            TODO: Add Angular tag to loop through the "todoList" array defined below -->
<!--            Add the todo title dynamically between the <p class="todo-title"></p>-->
      <div  id="loopContainer"  class="todo-card">
            <p id="todoTitle" class="todo-title">
<!--              add todo title here-->
            </p>
      </div>

    </div>
  `,
  styleUrl: './todolist.component.scss'
})
export class TodolistComponent implements OnInit {

  private todoService: TodoService = inject(TodoService);

  public todoList: Todo[] = [];

  ngOnInit(): void {
    this.todoService.getTodoList().subscribe(response => {
      this.todoList = response;
    });
  }

}
