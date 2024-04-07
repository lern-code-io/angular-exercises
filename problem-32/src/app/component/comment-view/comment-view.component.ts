import {Component, DestroyRef, inject} from '@angular/core';
import {CommentService} from "../../service/comment.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {async} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {Comment} from "../../model/comment";

@Component({
  selector: 'app-comment-view',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  template:
  `
    <div class="main-container">
        <button (click)="getComment()"> Get comment </button>
<!--        TODO: Add async pipe operator below-->
        <p> Comment Loading  ... </p>
    </div>
  `,
  styleUrl: './comment-view.component.scss'
})
export class CommentViewComponent {
  private commentService: CommentService = inject(CommentService);
  private destroyRef: DestroyRef = inject(DestroyRef);

  commentBody: Promise<string> | null = null;

  private resolve: Function | null = null;

  // public comment: Comment | undefined = undefined;

  constructor() {
    this.commentBody = new Promise<string>((resolve: Function | null) => {
      this.resolve = resolve;
    });
  }

  getComment(): void {
    this.commentService.getCommentById("1")
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(response => {
        this.resolve!(response.body);
      });
  }


}
