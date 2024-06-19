import { Component } from '@angular/core';
import {DeletePhotoViewerComponent} from "../../component/photo-viewer/delete-photo-viewer.component";

@Component({
  selector: 'app-delete-photo-viewer-page',
  standalone: true,
  imports: [DeletePhotoViewerComponent],
  template: `<app-delete-photo-viewer/>`,
})
export class DeletePhotoViewerPageComponent {

}
