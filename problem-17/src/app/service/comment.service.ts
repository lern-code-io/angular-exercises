import { HttpClient } from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {CommentModel} from "../model/comment.model";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private http: HttpClient = inject(HttpClient);
  saveComment(commentToSave: CommentModel): Observable<CommentModel> {
    return this.http.post<CommentModel>(`https://jsonplaceholder.typicode.com/comments`, commentToSave);
  }
}
