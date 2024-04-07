import { Component } from '@angular/core';
import {DisplayTwoComponent} from "../../component/display-two/display-two.component";

@Component({
  selector: 'app-display-two-page',
  standalone: true,
  imports: [DisplayTwoComponent],
  template: `<app-display-two />`,
  styleUrl: './display-two-page.component.scss'
})
export class DisplayTwoPageComponent {

}
