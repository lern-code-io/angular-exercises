import { Component } from '@angular/core';
import {CommentViewComponent} from "../../component/comment-view/comment-view.component";

@Component({
  selector: 'app-comment-view-page',
  standalone: true,
  imports: [CommentViewComponent],
  template: `<app-comment-view/>`,
})
export class CommentViewPageComponent {

}
