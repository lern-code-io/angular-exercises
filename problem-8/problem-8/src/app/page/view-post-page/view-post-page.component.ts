import { Component } from '@angular/core';
import {ViewPostComponent} from "../../component/view-post/view-post.component";

@Component({
  selector: 'app-view-post-page',
  standalone: true,
  imports: [ViewPostComponent],
  template: `<app-view-post/>`,
})
export class ViewPostPageComponent {

}
