import { Component } from '@angular/core';
import {CreateCommentComponent} from "../../component/comment-view/create-comment.component";

@Component({
  selector: 'app-comment-view-page',
  standalone: true,
  imports: [CreateCommentComponent],
  template: `<app-comment-view/>`,
})
export class CommentCommentPageComponent {

}
