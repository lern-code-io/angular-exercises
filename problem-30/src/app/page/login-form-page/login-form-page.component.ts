import { Component } from '@angular/core';
import {LoginFormComponent} from "../../component/login-form/login-form.component";

@Component({
  selector: 'app-login-form-page',
  standalone: true,
  imports: [LoginFormComponent],
  template: `<app-login-form/>`,
  styleUrl: './login-form-page.component.scss'
})
export class LoginFormPageComponent {

}
