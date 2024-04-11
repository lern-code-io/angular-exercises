import { Component, inject } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
  ],
  template:
    `
      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="main-container">
        <label >Comment Title: </label>
        <input type="text" formControlName="username">
        <label >Comment Body: </label>
        <input type="password" formControlName="password">
        <button type="submit">Log In!</button>
        <p *ngIf="wrongCredentials">Invalid Credentials or form is invalid.</p>
      </form>
  `,
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

  private formBuilder: FormBuilder = inject(FormBuilder)
  private router: Router = inject(Router)

  wrongCredentials: boolean = false;

  loginForm: FormGroup = this.formBuilder.nonNullable.group({
    username: [''],
    password: ['']
  });


  onSubmit() {
    //TODO: Check form inputs. If correct route user to '/welcome'. Else, or if form is invalid, set wrongCredentials to True
  }
}
