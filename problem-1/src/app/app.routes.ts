import { Routes } from '@angular/router';
import {TodolistPageComponent} from "./page/todolist-page/todolist-page.component";

export const routes: Routes = [
  {
    path: 'todolist',
    component: TodolistPageComponent,
  },
  {
    path: '',
    redirectTo: '/todolist',
    pathMatch: 'full',
  },
];
