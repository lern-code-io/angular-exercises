import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../modal/todo.modal";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private http: HttpClient = inject(HttpClient);
  getTodoList(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
