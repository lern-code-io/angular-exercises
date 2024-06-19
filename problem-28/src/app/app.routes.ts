import { Routes } from '@angular/router';
import {TodoViewPageComponent} from "./page/todo-viewer-page/todo-view-page.component";

export const routes: Routes = [
  {
    path: 'todo',
    component: TodoViewPageComponent,
  },
  {
    path: '',
    redirectTo: '/todo',
    pathMatch: 'full',
  },
];
