import { Routes } from '@angular/router';
import {PhotoViewerPageComponent} from "./page/photo-viewer-page/photo-viewer-page.component";

export const routes: Routes = [
  {
    path: 'photo',
    component: PhotoViewerPageComponent,
  },
  {
    path: '',
    redirectTo: '/photo',
    pathMatch: 'full',
  },
];
