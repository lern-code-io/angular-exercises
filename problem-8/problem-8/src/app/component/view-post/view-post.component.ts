import {Component, inject} from '@angular/core';
import {PostsService} from "../../service/posts.service";
import {Post} from "../../model/posts.model";
import {PostCardComponent} from "../post-card/post-card.component";

@Component({
  selector: 'app-view-post',
  standalone: true,
  imports: [
    PostCardComponent
  ],
  template:
  `
<!--    wrap the content with post card div-->
      <h3>{{post.title}}</h3>
      <p>{{post.body}}</p>
  `,
  styleUrl: './view-post.component.scss'
})
export class ViewPostComponent {
  private postService: PostsService = inject(PostsService);

  public post: Post = {
    body: "", id: 0, title: "", userId: 0

  }
  ngOnInit(): void {
    this.postService.getPostById("1").subscribe(response => {
      this.post = response;
    });
  }
}
