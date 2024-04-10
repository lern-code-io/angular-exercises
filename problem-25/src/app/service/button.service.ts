import { Injectable } from '@angular/core';
import {BehaviorSubject, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ButtonService {

  private currentCount = 0;

  private countSubject = new BehaviorSubject<number>(this.currentCount);

  incrementCount()
  {
    this.currentCount +=1;
    // TODO: Emit result below
  }

  getCountObservable() {
    // TODO: Return Behaviour subject as observable
    const error = new Error('Failed to fetch data');
    return throwError(() => error);  }
}
