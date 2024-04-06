import { Routes } from '@angular/router';
import {TodoListPageComponent} from "./page/todo-list-page/todo-list-page.component";

export const routes: Routes = [
    {
        path: 'todolist',
        component: TodoListPageComponent,
    },
    {
        path: '',
        redirectTo: '/todolist',
        pathMatch: 'full',
    },
];
