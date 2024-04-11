import { Routes } from '@angular/router';
import {DisplayViewPageComponent} from "./page/display-view-page/display-view-page.component";

export const routes: Routes = [
  {
    path: 'display-view',
    component: DisplayViewPageComponent,
  },
  {
    path: '',
    redirectTo: '/display-view',
    pathMatch: 'full',
  },
];
