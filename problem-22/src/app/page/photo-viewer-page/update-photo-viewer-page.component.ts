import { Component } from '@angular/core';
import {UpdatePhotoViewerComponent} from "../../component/photo-viewer/update-photo-viewer.component";

@Component({
  selector: 'app-update-photo-viewer-page',
  standalone: true,
  imports: [UpdatePhotoViewerComponent],
  template: `<app-update-photo-viewer />`,
})
export class UpdatePhotoViewerPageComponent {

}
