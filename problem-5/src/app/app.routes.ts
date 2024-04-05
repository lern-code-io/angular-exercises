import { Routes } from '@angular/router';
import {BackgroundPageComponent} from "./page/background-page/background-page.component";

export const routes: Routes = [
    {
        path: 'background',
        component: BackgroundPageComponent,
    },
    {
        path: '',
        redirectTo: '/background',
        pathMatch: 'full',
    },
];

