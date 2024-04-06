import { Routes } from '@angular/router';
import {CommentsViewPageComponent} from "./page/comments-view-page/comments-view-page.component";

export const routes: Routes = [
    {
        path: 'comment-view',
        component: CommentsViewPageComponent,
    },
    // Add additional route object to 'UserOnePageComponent' here
    {
        path: '',
        redirectTo: '/comment-view',
        pathMatch: 'full',
    },
];
