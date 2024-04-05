import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appBlueBackground]',
  standalone: true
})
export class BlueBackgroundDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'aqua';
  }
}
