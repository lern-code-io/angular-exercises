import { Routes } from '@angular/router';
import {MessagePageComponent} from "./page/message-page/message-page.component";

export const routes: Routes = [
  {
    path: 'message',
    component: MessagePageComponent,
  },
  {
    path: '',
    redirectTo: '/message',
    pathMatch: 'full',
  },
];
