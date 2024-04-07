import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {pizzaValidator} from "../../validator/pizza-validator.validator";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  template: `
    <form *ngIf="nameForm" [formGroup]="nameForm!"  (ngSubmit)="onSubmit()" class="main-container">
      <p>Welcome to the Pizza shop- what would you like to order?!</p>
      <label for="foodItem">Order: </label>
      <input id="foodItem" type="text" formControlName="foodItem">
      <button type="submit">Submit!</button>
      <p *ngIf="formIsInvalid"> Sorry we only sell Pizza!</p>
      <p *ngIf="validSubmission"> Order Submitted!</p>
    </form>
  `,
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent implements OnInit {


  nameForm: FormGroup | undefined = undefined;
  formIsInvalid: boolean = false;
  validSubmission: boolean = false;

  ngOnInit(): void {
    this.nameForm = new FormGroup({
      foodItem: new FormControl('',
        [
          // insert Pizza validator inside here
        ])
    })
  }

  onSubmit() {
    if (!this.nameForm?.valid)
    {
      this.formIsInvalid = true;
      this.validSubmission = false;
    } else {
      this.formIsInvalid = false;
      this.validSubmission = true;
    }
  }
}
