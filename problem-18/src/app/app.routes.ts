import { Routes } from '@angular/router';
import {DashboardPageComponent} from "./page/dashboard-page/dashboard-page.component";
import {AdminComponent} from "./components/admin/admin.component";
import {AccessDeniedComponent} from "./components/access-denied/access-denied.component";
import {adminGuard} from "./guard/admin.guard";

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardPageComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'denied',
    component: AccessDeniedComponent,
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
];
