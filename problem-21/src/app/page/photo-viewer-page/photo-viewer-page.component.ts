import { Component } from '@angular/core';
import {PhotoViewerComponent} from "../../component/photo-viewer/photo-viewer.component";

@Component({
  selector: 'app-photo-viewer-page',
  standalone: true,
  imports: [PhotoViewerComponent],
  template: `<app-photo-viewer/>`,
})
export class PhotoViewerPageComponent {

}
