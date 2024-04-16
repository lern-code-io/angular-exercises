import { Routes } from '@angular/router';
import { TodoListPageComponent } from './page/todolist-page/todo-list-page.component';

export const routes: Routes = [
    {
        path: 'todo-list',
        component: TodoListPageComponent,
    },
    {
        path: '',
        redirectTo: '/todo-list',
        pathMatch: 'full',
    },
];
