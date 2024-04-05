import { Routes } from '@angular/router';
import {ViewPostPageComponent} from "./page/view-post-page/view-post-page.component";

export const routes: Routes = [
    {
        path: 'posts',
        component: ViewPostPageComponent,
    },
    // Add additional route object to 'UserOnePageComponent' here
    {
        path: '',
        redirectTo: '/posts',
        pathMatch: 'full',
    },
];
