import { Component } from '@angular/core';
import {CounterComponent} from "../../component/counter-view/counter.component";

@Component({
  selector: 'app-counter-view-page',
  standalone: true,
  imports: [CounterComponent],
  template: `<app-counter-view />`,
})
export class CounterViewPageComponent {

}
