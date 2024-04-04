import { Routes } from '@angular/router';
import {WeatherReportPageComponent} from "./page/weather-report-page/weather-report-page.component";

export const routes: Routes = [
  {
    path: 'report',
    component: WeatherReportPageComponent,
  },
  {
    path: '',
    redirectTo: '/report',
    pathMatch: 'full',
  },
];
