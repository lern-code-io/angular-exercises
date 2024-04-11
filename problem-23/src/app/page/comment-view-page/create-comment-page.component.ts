import { Component } from '@angular/core';
import {CreateCommentComponent} from "../../component/comment-viewer/create-comment.component";

@Component({
  selector: 'app-comment-view-page',
  standalone: true,
  imports: [CreateCommentComponent],
  template: `<app-comment-viewer />`,
})
export class CreateCommentPageComponent {


}
