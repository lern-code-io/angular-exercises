import { Component } from '@angular/core';
import {AdminComponent} from "../../components/admin/admin.component";

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [AdminComponent],
  template: `<app-admin/>`,
})
export class AdminPageComponent {

}
