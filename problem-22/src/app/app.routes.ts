import { Routes } from '@angular/router';
import {UpdatePhotoViewerPageComponent} from "./page/photo-viewer-page/update-photo-viewer-page.component";

export const routes: Routes = [
  {
    path: 'photo',
    component: UpdatePhotoViewerPageComponent,
  },
  {
    path: '',
    redirectTo: '/photo',
    pathMatch: 'full',
  },
];
