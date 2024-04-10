import { Component } from '@angular/core';
import {CounterViewComponent} from "../../component/button-view/counter-view.component";

@Component({
  selector: 'app-counter-view-page',
  standalone: true,
  imports: [CounterViewComponent],
  template: `<app-counter-view />`,
})
export class CounterViewPageComponent {

}
