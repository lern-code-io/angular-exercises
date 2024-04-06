import {Component, inject, OnInit} from '@angular/core';
import {ButtonService} from "../../service/button.service";

@Component({
  selector: 'app-button-view',
  standalone: true,
  imports: [],
  template: `
    <div class="main-container">
        <button (click)="onIncrement()">Click to increment</button>
        <p>Counter: {{currentCount}}</p>
    </div>`,
  styleUrl: './button-view.component.scss'
})
export class ButtonViewComponent implements OnInit {
  private buttonService: ButtonService = inject(ButtonService);

  currentCount: number = 0

  ngOnInit(): void {
    this.buttonService.getCountObservable().subscribe( newCount => this.currentCount = newCount);
  }

  onIncrement()
  {
    this.buttonService.incrementCount();
  }
}