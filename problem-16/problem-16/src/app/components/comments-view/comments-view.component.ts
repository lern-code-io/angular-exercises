import {Component, DestroyRef, inject} from '@angular/core';
import {ModifyComment} from "../../pipe/ModifyComment";
import {CommentsService} from "../../service/comments.service";
import {Comment} from "../../model/comment";

@Component({
  selector: 'app-comments-view',
  standalone: true,
  imports: [ModifyComment],
  template:
      `
        <div class="main-container" >
            <p> {{ comment?.body }}</p>
        </div>
        `,
  styleUrl: './comments-view.component.scss'
})
export class CommentsViewComponent {
  private commentService: CommentsService = inject(CommentsService);
  private destroyRef: DestroyRef = inject(DestroyRef);

  public comment: Comment | undefined = undefined;

  ngOnInit(): void {
    this.commentService.getCommentById("1")
        // unsubscribe from this observable using takeUntilDestroyed

        .subscribe(response => {
          this.comment = response;
        });
  }
}
