import { Routes } from '@angular/router';
import {ButtonViewPageComponent} from "./page/button-view/button-view-page.component";

export const routes: Routes = [
  {
    path: 'view-button',
    component: ButtonViewPageComponent,
  },
  {
    path: '',
    redirectTo: '/view-button',
    pathMatch: 'full',
  },
];
