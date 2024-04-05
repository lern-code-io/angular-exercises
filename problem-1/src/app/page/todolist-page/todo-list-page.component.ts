import { Component } from '@angular/core';
import {TodoListComponent} from "../../components/todolist-component/todo-list.component";

@Component({
  selector: 'app-todolist-page',
  standalone: true,
  imports: [TodoListComponent],
  template: `<app-todolist-component/>`,
})
export class TodoListPageComponent {

}
