import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {TodoListComponent} from "../../component/todo-list/todo-list.component";

@Component({
  selector: 'app-todo-list-page',
  standalone: true,
  imports: [TodoListComponent],
  template: `<app-todo-list/>`,
})
export class TodoListPageComponent {

}
