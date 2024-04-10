import { Routes } from '@angular/router';
import {LoginFormComponent} from "./component/login-form/login-form.component";
import {WelcomePageComponent} from "./component/welcome-page/welcome-page.component";

export const routes: Routes = [
  {
    path: 'login',
    component: LoginFormComponent,
  },
  {
    path: 'welcome',
    component: WelcomePageComponent,
  },  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];
