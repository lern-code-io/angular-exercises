import {inject, Injectable} from '@angular/core';
import { Comment} from "../model/comment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private http: HttpClient = inject(HttpClient);
  getCommentById(idToGet: string): Observable<Comment> {
    return this.http.get<Comment>(`https://jsonplaceholder.typicode.com/comments/${idToGet}`);
  }
}
