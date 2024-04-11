import { Routes } from '@angular/router';
import {CreateCommentPageComponent} from "./page/comment-view-page/create-comment-page.component";

export const routes: Routes = [
  {
    path: 'comment-view',
    component: CreateCommentPageComponent,
  },
  // Add additional route object to 'UserOnePageComponent' here
  {
    path: '',
    redirectTo: '/comment-view',
    pathMatch: 'full',
  },
];
