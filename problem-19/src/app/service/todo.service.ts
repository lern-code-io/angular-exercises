import {inject, Injectable} from '@angular/core';
import {Todo} from "../modal/todo.modal";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // This URL is a GET call and returns a list of TODO models which are defines under the Model package
  private URL_TO_GET_TODO_LIST_FROM:string = "https://jsonplaceholder.typicode.com/todos"

}
