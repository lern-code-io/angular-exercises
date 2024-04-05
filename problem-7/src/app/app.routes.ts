import { Routes } from '@angular/router';
import {AllUsersPageComponent} from "./pages/all-users-page/all-users-page.component";
import {UserOnePageComponent} from "./pages/user-one-page/user-one-page.component";

export const routes: Routes = [
    {
        path: 'allusers',
        component: AllUsersPageComponent,
    },
    {
        path: 'userone',
        component: UserOnePageComponent,
    },    {
        path: '',
        redirectTo: '/allusers',
        pathMatch: 'full',
    },
];
