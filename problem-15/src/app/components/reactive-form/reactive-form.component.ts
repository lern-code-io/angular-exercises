import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  imports: [ReactiveFormsModule, NgIf],
  selector: 'app-reactive-form',
  standalone: true,
  styleUrl: './reactive-form.component.scss',
  template: `
    <form [formGroup]="nameForm!" (ngSubmit)="onSubmit()" class="main-container">
      <label for="name">Name: </label>
      <input id="name" type="text" formControlName="name">
      <button type="submit">Submit!</button>
      <p *ngIf="nameForm?.valid"> This form is Valid!</p>
      <p *ngIf="nameForm?.invalid"> This form is Invalid!</p>
    </form>
  `
})
export class ReactiveFormComponent implements OnInit {


  nameForm: FormGroup | undefined = undefined;


  ngOnInit(): void {
    this.nameForm = new FormGroup({
      name: new FormControl('',
          [
              // insert validators inside here

          ])
    });
  }

  onSubmit() {
    if (!this.nameForm?.valid)
    {

    }
  }
}
