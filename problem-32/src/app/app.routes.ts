import { Routes } from '@angular/router';
import {CommentViewPageComponent} from "./page/comment-view-page/comment-view-page.component";

export const routes: Routes = [

  {
    path: 'comment-view',
    component: CommentViewPageComponent,
  },
  // Add additional route object to 'UserOnePageComponent' here
  {
    path: '',
    redirectTo: '/comment-view',
    pathMatch: 'full',
  },

];
