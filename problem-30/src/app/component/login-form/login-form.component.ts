import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  template:
    `
      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" *ngIf="loginForm"  class="main-container">
        <label for="Title" >Comment Title: </label>
        <input id="Title" type="text" formControlName="username">
        <label for="Body">Comment Body: </label>
        <input id="Body" type="password" formControlName="password">
        <button type="submit">Log In!</button>
        <p *ngIf="wrongCredentials">Invalid Credentials.</p>
      </form>
  `,
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

  wrongCredentials: boolean = false;
  loginForm: FormGroup | undefined = undefined;


  constructor(private formBuilder: FormBuilder, private router: Router) {
  }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      //TODO: Add Validators
      username: [''],
      password: ['']
    })
  }

  onSubmit() {
    //TODO: Check form inputs. If correct route user to '/welcome'. Else set wrongCredentials to True

  }
}
