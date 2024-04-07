import {Component, DestroyRef, inject} from '@angular/core';
import {CommentService} from "../../service/comment.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {Comment} from "../../model/comment";

@Component({
  selector: 'app-comment-view',
  standalone: true,
  imports: [],
  template:
      `
        <div class="main-container" >
            <p> {{ comment?.body }}</p>
        </div>
        `,
  styleUrl: './comment-view.component.scss'
})
export class CommentViewComponent {
  private commentService: CommentService = inject(CommentService);
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
