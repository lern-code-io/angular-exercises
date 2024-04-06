import { Component } from '@angular/core';

@Component({
  selector: 'app-button-view',
  standalone: true,
  imports: [],
  template: `
    <div class="main-container">
<!--      todo use data binding to bind to disableButton variable-->
     <button >Disable Me</button>
    </div>`,
  styleUrl: './button-view.component.scss'
})
export class ButtonViewComponent {

  disableButton: boolean = false;
}
