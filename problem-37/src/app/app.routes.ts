import { Routes } from '@angular/router';
import {DisplayViewComponent} from "./component/display-view/display-view.component";

export const routes: Routes = [
  {
    path: 'display-view',
    component: DisplayViewComponent,
  },
  {
    path: '',
    redirectTo: '/display-view',
    pathMatch: 'full',
  },
];
