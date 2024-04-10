import { Routes } from '@angular/router';
import {DashboardPageComponent} from "./page/dashboard-page/dashboard-page.component";
import {AdminComponent} from "./components/admin/admin.component";
import {canDeactivateGuard} from "./guards/can-deactivate.guard";

export const routes: Routes = [
  // Add can deactivate guard to this route
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    canDeactivate: [canDeactivateGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
];
