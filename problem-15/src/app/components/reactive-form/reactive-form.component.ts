import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  imports: [ReactiveFormsModule, NgIf],
  selector: 'app-reactive-form',
  standalone: true,
  styleUrl: './reactive-form.component.scss',
  template: `
    <form *ngIf="nameForm" [formGroup]="nameForm"  (ngSubmit)="onSubmit()" class="main-container">
      <label for="name">Name: </label>
      <input id="name" type="text" formControlName="name">
      <button type="submit">Submit!</button>
      <p *ngIf="formIsInvalid"> This form is Invalid!</p>
      <p *ngIf="validSubmission"> This form is Valid!</p>
    </form>
  `
})
export class ReactiveFormComponent implements OnInit {


  nameForm: FormGroup | undefined = undefined;
  formIsInvalid: boolean = false;
  validSubmission: boolean = false;

  ngOnInit(): void {
    this.nameForm = new FormGroup({
      name: new FormControl('',
          [
              // insert validators inside here
          ])
    })
  }

  onSubmit() {
    console.log('called')
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
