import { Routes } from '@angular/router';
import {CommentCommentPageComponent} from "./page/comment-view-page/comment-comment-page.component";

export const routes: Routes = [
  {
    path: 'comment-view',
    component: CommentCommentPageComponent,
  },
  // Add additional route object to 'UserOnePageComponent' here
  {
    path: '',
    redirectTo: '/comment-view',
    pathMatch: 'full',
  },
];
