import { Routes } from '@angular/router';
import {ButtonViewPageComponent} from "./page/button-view-page/button-view-page.component";

export const routes: Routes = [
  {
    path: 'button-viewer',
    component: ButtonViewPageComponent,
  },
  {
    path: '',
    redirectTo: '/button-viewer',
    pathMatch: 'full',
  },
];
