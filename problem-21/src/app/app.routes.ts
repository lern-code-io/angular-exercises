import { Routes } from '@angular/router';
import {DeletePhotoViewerPageComponent} from "./page/photo-viewer-page/delete-photo-viewer-page.component";

export const routes: Routes = [
  {
    path: 'photo',
    component: DeletePhotoViewerPageComponent,
  },
  {
    path: '',
    redirectTo: '/photo',
    pathMatch: 'full',
  },
];
