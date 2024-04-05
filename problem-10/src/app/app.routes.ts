import { Routes } from '@angular/router';
import {TemplateDrivenFormPageComponent} from "./page/template-driven-form-page/template-driven-form-page.component";

export const routes: Routes = [
    {
        path: 'template-driven-form',
        component: TemplateDrivenFormPageComponent,
    },
    // Add additional route object to 'UserOnePageComponent' here
    {
        path: '',
        redirectTo: '/template-driven-form',
        pathMatch: 'full',
    },
];
