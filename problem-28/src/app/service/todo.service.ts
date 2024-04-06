import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, exhaustMap, Observable, of} from "rxjs";
import {Todo} from "../model/todo.modal";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private http: HttpClient = inject(HttpClient);

  getTodo(todoId: string): Observable<Todo | undefined> {
    return this.http.get<Todo>(`https://ERROR.ERROR.ERROR/todos/${todoId}`);
  }

}
