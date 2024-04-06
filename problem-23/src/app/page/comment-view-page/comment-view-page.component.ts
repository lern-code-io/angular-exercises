import { Component } from '@angular/core';
import {CommentViewComponent} from "../../component/comment-viewer/comment-view.component";

@Component({
  selector: 'app-comment-view-page',
  standalone: true,
  imports: [CommentViewComponent],
  template: `<app-comment-viewer />`,
})
export class CommentViewPageComponent {


}
