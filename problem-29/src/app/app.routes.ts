import { Routes } from '@angular/router';
import {BackgroundViewComponent} from "./component/background-view/background-view.component";

export const routes: Routes = [
  {
    path: 'background',
    component: BackgroundViewComponent,
  },
  {
    path: '',
    redirectTo: '/background',
    pathMatch: 'full',
  },
];
