import { Component } from '@angular/core';
import {DisplayOneComponent} from "../../component/display-one/display-one.component";

@Component({
  selector: 'app-display-one-page',
  standalone: true,
  imports: [DisplayOneComponent],
  template: `<app-display-one />`,
  styleUrl: './display-one-page.component.scss'
})
export class DisplayOnePageComponent {


}
