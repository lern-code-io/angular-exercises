import { Component } from '@angular/core';
import {DashboardComponent} from "../../components/dashboard/dashboard.component";

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [DashboardComponent],
  template: `<app-dashboard/>`
})
export class DashboardPageComponent {

}
