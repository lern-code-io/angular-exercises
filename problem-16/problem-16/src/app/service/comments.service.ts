import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommentModel} from "../model/comment.model";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private http: HttpClient = inject(HttpClient);
  getCommentById(idToGet: string): Observable<CommentModel> {
    return this.http.get<CommentModel>(`https://jsonplaceholder.typicode.com/comments/${idToGet}`);
  }
}
