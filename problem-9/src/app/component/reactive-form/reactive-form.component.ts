import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template:`
    <div class="main-container">
<!--      Todo: Add a form control element on the input tag and in the code body-->
<!--      When set up, comment in line 14 to print out the value typed.-->
      <label for="name">Name: </label>
      <input id="name" type="text" >
<!--      <p>Value: {{ name.value }}</p>-->
    </div>
  `,
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {

  // create form control here

}
