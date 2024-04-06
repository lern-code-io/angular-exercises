import { Routes } from '@angular/router';
import {ReactiveFormPageComponent} from "./page/reactive-form-page/reactive-form-page.component";

export const routes: Routes = [
    {
        path: 'reactive-form',
        component: ReactiveFormPageComponent,
    },
    // Add additional route object to 'UserOnePageComponent' here
    {
        path: '',
        redirectTo: '/reactive-form',
        pathMatch: 'full',
    },
];
