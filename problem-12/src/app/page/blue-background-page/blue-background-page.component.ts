import { Component } from '@angular/core';
import {BlueBackgroundComponent} from "../../component/blue-background/blue-background.component";

@Component({
  selector: 'app-blue-background-page',
  standalone: true,
  imports: [BlueBackgroundComponent],
  template: `<app-blue-background />`,
})
export class BlueBackgroundPageComponent {

}
