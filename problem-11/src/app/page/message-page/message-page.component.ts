import { Component } from '@angular/core';
import {MessageComponent} from "../../component/message-component/message.component";

@Component({
  selector: 'app-message-page',
  standalone: true,
  imports: [MessageComponent],
  template: `<app-message-component />`,
})
export class MessagePageComponent {

}
