import { Component } from '@angular/core';
import {BackgroundComponent} from "../../component/background/background.component";

@Component({
  selector: 'app-background-page',
  standalone: true,
  imports: [BackgroundComponent],
  template: `<app-background />`,
})
export class BackgroundPageComponent {

}
