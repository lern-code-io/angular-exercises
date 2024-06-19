import {Component, inject, OnInit} from '@angular/core';
import {CounterService} from "../../service/counter.service";
import {Observable} from "rxjs";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-counter-view',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf
  ],
  template: `
    <div  class="main-container">
        <button (click)="onIncrement()"> Click to increment</button>
      <p >Counter: <span *ngIf="currentCount$ | async as count">{{count}} </span></p>
    </div>`,
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  private counterService: CounterService = inject(CounterService);

  currentCount$: Observable<number> = this.counterService.getCountObservable();

  onIncrement()
  {
    this.counterService.incrementCount();
  }

}
