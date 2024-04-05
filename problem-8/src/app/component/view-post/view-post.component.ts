import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {PostsService} from "../../service/posts.service";
import {Post} from "../../model/posts.model";
import {PostCardComponent} from "../post-card/post-card.component";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-view-post',
  standalone: true,
  imports: [
    PostCardComponent
  ],
  template:
  `
<!--    wrap the content with post card div-->
      <h3>{{post?.title}}</h3>
      <p>{{post?.body}}</p>
  `,
  styleUrl: './view-post.component.scss'
})
export class ViewPostComponent implements OnInit {
  private postService: PostsService = inject(PostsService);
  private destroyRef: DestroyRef = inject(DestroyRef);

  public post: Post | undefined = undefined;

  ngOnInit(): void {
    this.postService.getPostById("1")
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(response => {
      this.post = response;
    });
  }
}
