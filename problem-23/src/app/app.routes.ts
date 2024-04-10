import { Routes } from '@angular/router';
import {CreateCommentViewPageComponent} from "./page/comment-view-page/create-comment-view-page.component";

export const routes: Routes = [
  {
    path: 'comment-view',
    component: CreateCommentViewPageComponent,
  },
  // Add additional route object to 'UserOnePageComponent' here
  {
    path: '',
    redirectTo: '/comment-view',
    pathMatch: 'full',
  },
];
