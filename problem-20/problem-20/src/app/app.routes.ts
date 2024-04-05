import { Routes } from '@angular/router';
import {BlueBackgroundPageComponent} from "./pages/blue-background-page/blue-background-page.component";

export const routes: Routes = [
    {
        path: 'background',
        component: BlueBackgroundPageComponent,
    },
    {
        path: '',
        redirectTo: '/background',
        pathMatch: 'full',
    },
];
