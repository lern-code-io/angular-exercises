import {inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "../modal/user.modal";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http: HttpClient = inject(HttpClient);

  public getUsers(userId: string): Observable<User> {
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }
}
