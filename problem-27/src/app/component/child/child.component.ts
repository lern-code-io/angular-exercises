import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  template: `<p>I am a child component with a hidden value</p>`,
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  hiddenValue = 26

  getHiddenValue()
  {
    return this.hiddenValue;
  }
}
