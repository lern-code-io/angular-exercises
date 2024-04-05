import { Component } from '@angular/core';
import {TemplateDrivenFormComponent} from "../../component/template-driven-form/template-driven-form.component";

@Component({
  selector: 'app-template-driven-form-page',
  standalone: true,
  imports: [TemplateDrivenFormComponent],
  template: `<app-template-driven-form/>`,
})
export class TemplateDrivenFormPageComponent {

}
