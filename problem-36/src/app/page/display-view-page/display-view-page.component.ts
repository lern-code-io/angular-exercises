import { Component } from '@angular/core';
import {DisplayViewComponent} from "../../component/display-view/display-view.component";

@Component({
  selector: 'app-display-view-page',
  standalone: true,
  imports: [DisplayViewComponent],
  template: `<app-display-view />`,
})
export class DisplayViewPageComponent {

}
