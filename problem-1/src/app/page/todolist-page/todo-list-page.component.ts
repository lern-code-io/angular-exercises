import { Component } from '@angular/core';
import {TodoListComponent} from "../../components/todolist-component/todo-list.component";

@Component({
  selector: 'app-todo-list-page',
  standalone: true,
  imports: [TodoListComponent],
  template: `<app-todo-list-component/>`,
})
export class TodoListPageComponent {

}
