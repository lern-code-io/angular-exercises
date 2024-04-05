import { Routes } from '@angular/router';
import {TodoListPageComponent} from "./pages/todo-list-page/todo-list-page.component";

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
