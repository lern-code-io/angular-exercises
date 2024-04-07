import { Component } from '@angular/core';
import {TodoViewerComponent} from "../../component/todo-viewer/todo-viewer.component";

@Component({
  selector: 'app-todo-viewer-page',
  standalone: true,
  imports: [TodoViewerComponent],
  template: `<app-todo-viewer />`,
})
export class TodoViewerPageComponent {

}
