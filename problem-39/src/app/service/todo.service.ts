import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../model/todo.modal";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // Inject HTTP and call correct URL which will return one TODO model
}
