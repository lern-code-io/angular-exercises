import {Component, inject, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {DisplayConnectorService} from "../../service/display-connector.service";

@Component({
  selector: 'app-display-two',
  standalone: true,
  imports: [
    RouterLink
  ],
  template:
  `
    <div class="main-container">
      <p> Display 2 </p>
      <p>Counter Value: {{counter}}</p>
      <a routerLink="/display-one"> Go to display 1</a>
    </div>
  `,
  styleUrl: './display-two.component.scss'
})
export class DisplayTwoComponent implements OnInit{

  private displayConnectorService: DisplayConnectorService = inject(DisplayConnectorService);

  counter = 0;

  ngOnInit(): void {
    // subscribe to observable in service here
  }
}
