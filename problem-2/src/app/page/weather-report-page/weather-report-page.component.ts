import { Component } from '@angular/core';
import {WeatherReportComponent} from "../../components/weather-report/weather-report.component";

@Component({
  selector: 'app-weather-report-page',
  standalone: true,
  imports: [WeatherReportComponent],
  template: '<app-weather-report/>',
})
export class WeatherReportPageComponent {

}
