import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {PrefixComment} from "../../pipe/prefix-comment";
import {CommonModule} from "@angular/common";
import {CommentsService} from "../../service/comments.service";
import {CommentModel} from "../../model/comment.model";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-comments-view',
  standalone: true,
  imports: [CommonModule, PrefixComment],
  template:
      `
        <div class="main-container" >
            <p> {{ comment?.body }}</p>
        </div>
        `,
  styleUrl: './comments-view.component.scss'
})
export class CommentsViewComponent implements OnInit {
  private commentService: CommentsService = inject(CommentsService);
  private destroyRef: DestroyRef = inject(DestroyRef);

  public comment: CommentModel | undefined = undefined;

  ngOnInit(): void {
    this.commentService.getCommentById("1")
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(response => {
          this.comment = response;
        });
  }
}
