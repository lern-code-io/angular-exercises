import { Routes } from '@angular/router';
import {CounterViewPageComponent} from "./page/counter-view-page/counter-view-page.component";

export const routes: Routes = [
  {
    path: 'button-viewer',
    component: CounterViewPageComponent,
  },
  {
    path: '',
    redirectTo: '/button-viewer',
    pathMatch: 'full',
  },
];
