import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DisplayConnectorService {

  storedCounterValue: number = 0;

  // define a behaviour subject that emits the stored counter value here

  returnIncrementCounterObservable()
  {
    // return the behaviour subject as an observable here
  }

  onIncrementCounter()
  {
    // Increment the 'storedCounterValue' and emit the result here
  }

}
