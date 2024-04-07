import { Routes } from '@angular/router';
import {DisplayOneComponent} from "./component/display-one/display-one.component";
import {DisplayTwoComponent} from "./component/display-two/display-two.component";

export const routes: Routes = [
  {
    path: 'display-one',
    component: DisplayOneComponent,
  },
  {
    path: 'display-two',
    component: DisplayTwoComponent,
  },
  {
    path: '',
    redirectTo: '/display-one',
    pathMatch: 'full',
  },
];
