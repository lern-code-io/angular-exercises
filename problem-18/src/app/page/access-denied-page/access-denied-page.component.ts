import { Component } from '@angular/core';
import {AccessDeniedComponent} from "../../components/access-denied/access-denied.component";

@Component({
  selector: 'app-access-denied-page',
  standalone: true,
  imports: [AccessDeniedComponent],
  template: `<app-access-denied/>`,
})
export class AccessDeniedPageComponent {

}
