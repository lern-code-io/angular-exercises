import { Routes } from '@angular/router';
import { UserOneComponent } from './components/user-one/user-one.component';
import { AllUsersPageComponent } from './page/all-users-page/all-users-page.component';

export const routes: Routes = [
    {
        path: 'allusers',
        component: AllUsersPageComponent,
    },
    {
        path: 'userone',
        component: UserOneComponent,
    },
    {
        path: '',
        redirectTo: '/allusers',
        pathMatch: 'full',
    },
];
