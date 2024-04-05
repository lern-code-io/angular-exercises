import { Routes } from '@angular/router';
import {TodoViewerPageComponent} from "./page/todo-viewer-page/todo-viewer-page.component";

export const routes: Routes = [
  {
    path: 'todo',
    component: TodoViewerPageComponent,
  },
  {
    path: '',
    redirectTo: '/todo',
    pathMatch: 'full',
  },
];
