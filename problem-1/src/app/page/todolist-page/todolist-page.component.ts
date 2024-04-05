import { Component } from '@angular/core';
import {TodolistComponent} from "../../components/todolist-component/todolist.component";

@Component({
  selector: 'app-todolist-page',
  standalone: true,
  imports: [TodolistComponent],
  template: `<app-todolist-component/>`,
})
export class TodolistPageComponent {

}
