import { Component } from '@angular/core';
import {ButtonViewComponent} from "../../component/button-view/button-view.component";

@Component({
  selector: 'app-button-page-view',
  standalone: true,
  imports: [ButtonViewComponent],
  template: `<app-button-view/>`,
})
export class ButtonViewPageComponent {

}
