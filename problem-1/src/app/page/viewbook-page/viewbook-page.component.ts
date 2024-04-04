import { Component } from '@angular/core';
import {ViewbookComponent} from "../../components/viewbook-component/viewbook.component";

@Component({
  selector: 'app-viewbook-page',
  standalone: true,
  imports: [ViewbookComponent],
  template: `<app-viewbook-component/>`,
})
export class ViewbookPageComponent {

}
