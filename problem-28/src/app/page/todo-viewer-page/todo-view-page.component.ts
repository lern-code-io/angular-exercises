import { Component } from '@angular/core';
import {TodoViewComponent} from "../../component/todo-viewer/todo-view.component";

@Component({
  selector: 'app-todo-view-page',
  standalone: true,
  imports: [TodoViewComponent],
  template:`<app-todo-view/>`,
})
export class TodoViewPageComponent {

}
