import { Component } from '@angular/core';
import {ReactiveFormComponent} from "../../component/reactive-form/reactive-form.component";

@Component({
  selector: 'app-reactive-form-page',
  standalone: true,
  imports: [ReactiveFormComponent],
  template: '<app-reactive-form />',
})
export class ReactiveFormPageComponent {

}
