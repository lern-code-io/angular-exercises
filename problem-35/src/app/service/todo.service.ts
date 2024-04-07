import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../model/todo.modal";

// Add @Injectable tag here to make service injectable via dependency injection
export class TodoService {

  private http: HttpClient = inject(HttpClient);

  getTodoWithIdOne(): Observable<Todo> {
    return this.http.get<Todo>(`https://jsonplaceholder.typicode.com/todos/1`);
  }
}
