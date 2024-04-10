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
  styleUrl: './counter-view.component.scss'
})
export class ButtonViewComponent {

  // Todo: Add data binding to disabled property in HTML and bind to to this variable
  disableButton: boolean = true;
}
