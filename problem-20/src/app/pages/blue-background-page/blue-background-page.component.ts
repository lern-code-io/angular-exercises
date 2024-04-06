import {Component, ElementRef} from '@angular/core';
import {BlueBackgroundComponent} from "../../components/blue-background/blue-background.component";

@Component({
  selector: 'app-blue-background-page',
  standalone: true,
  imports: [BlueBackgroundComponent],
  template: `<app-blue-background/>`,
})
export class BlueBackgroundPageComponent {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'blue';
  }
}
