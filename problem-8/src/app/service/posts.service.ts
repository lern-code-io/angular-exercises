import {inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../model/posts.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private http: HttpClient = inject(HttpClient);

  public getPostById(postId: string): Observable<Post> {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }
}
