import { Component } from '@angular/core';
import {UpdatePhotoComponent} from "../../component/photo-viewer/update-photo.component";

@Component({
  selector: 'app-update-photo-page',
  standalone: true,
  imports: [UpdatePhotoComponent],
  template: `<app-update-photo />`,
})
export class UpdatePhotoPageComponent {

}
