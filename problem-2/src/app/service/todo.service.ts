import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../modal/todo.modal';

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    private http: HttpClient = inject(HttpClient);

    getTodo(todoId: string): Observable<Todo> {
        return this.http.get<Todo>(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    }
}
