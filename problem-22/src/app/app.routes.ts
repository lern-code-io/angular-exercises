import { Routes } from '@angular/router';
import {UpdatePhotoPageComponent} from "./page/photo-viewer-page/update-photo-page.component";

export const routes: Routes = [
  {
    path: 'photo',
    component: UpdatePhotoPageComponent,
  },
  {
    path: '',
    redirectTo: '/photo',
    pathMatch: 'full',
  },
];
