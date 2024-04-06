import { Component } from '@angular/core';
import {BackgroundViewComponent} from "../../component/background-view/background-view.component";

@Component({
  selector: 'app-background-view-page',
  standalone: true,
  imports: [BackgroundViewComponent],
  template: `<app-background-view />`,
})
export class BackgroundViewPageComponent {

}
