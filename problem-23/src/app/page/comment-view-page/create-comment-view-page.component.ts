import { Component } from '@angular/core';
import {CreateCommentViewComponent} from "../../component/comment-viewer/create-comment-view.component";

@Component({
  selector: 'app-comment-view-page',
  standalone: true,
  imports: [CreateCommentViewComponent],
  template: `<app-comment-viewer />`,
})
export class CreateCommentViewPageComponent {


}
