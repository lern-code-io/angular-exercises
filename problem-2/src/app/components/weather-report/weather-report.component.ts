import { Component } from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {WeatherReportModal} from "../../modal/WeatherReport.modal";

@Component({
  selector: 'app-weather-report',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf
  ],
  template: `
    <div id="weatherReportContainer" class="weatherReportContainer">
      <h3>Today's Weather Report!</h3>
      <div id="sunnyWeather"  class="informationContainer">
        <p>The weather is sunny today!</p>
        <img height="125" width="125"
             ngSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVD7NxfDs8S6iUrDm5fmyJDxZ3OYHFDhaa1w&s"/>
      </div>
      <div  id="rainyWeather" class="informationContainer">
        <p>The weather is rainy today - bring an umbrella!</p>
        <img height="125" width="125"
             ngSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5RnxR90OpjURE6hGwUnYo6RnWPfh5zSQflQ&s"/>
      </div>

    </div>
  `,
  styleUrl: './weather-report.component.scss'
})
export class WeatherReportComponent {


  public report: WeatherReportModal = {
    isRaining: false
  }

}
