import { Component } from '@angular/core';
import {CommentsViewComponent} from "../../components/comments-view/comments-view.component";

@Component({
  selector: 'app-comments-view-page',
  standalone: true,
  imports: [CommentsViewComponent],
  template: `<app-comments-view />`,
})
export class CommentsViewPageComponent {

}
