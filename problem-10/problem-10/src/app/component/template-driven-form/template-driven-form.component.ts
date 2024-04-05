import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  template:
  `
    <div class="main-container">
      <form  class="form-container">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" class="form-control" id="name" name="name" [(ngModel)]="formData.name" required>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      <p *ngIf="formWasSubmittedSuccessfully">Form submitted successfully</p>
    </div>
  `,
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent {

  formWasSubmittedSuccessfully: boolean = false;

  formData = {
    name: ''
  };

  submitForm(form: any) {
    if (form.valid) {
      this.formWasSubmittedSuccessfully = true
    }
  }
}
