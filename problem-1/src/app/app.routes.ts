import { Routes } from '@angular/router';
import {ViewbookPageComponent} from "./page/viewbook-page/viewbook-page.component";

export const routes: Routes = [
  {
    path: 'books',
    component: ViewbookPageComponent,
  },
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full',
  },
];
