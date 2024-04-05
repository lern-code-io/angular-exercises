import { Routes } from '@angular/router';
import {AllUsersPageComponent} from "./page/all-users-page/all-users-page.component";
import {UserOnePageComponent} from "./page/user-one-page/user-one-page.component";
import {UserOneComponent} from "./components/user-one/user-one.component";

export const routes: Routes = [
  {
    path: 'allusers',
    component: AllUsersPageComponent,
  },
  // Add additional route object to 'UserOnePageComponent' here
  {
    path: '',
    redirectTo: '/allusers',
    pathMatch: 'full',
  },
];
