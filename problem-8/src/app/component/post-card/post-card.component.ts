import { Component } from '@angular/core';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [],
  template:
  `
    <div class="main-container">
      <ng-content></ng-content>
    </div>
  `,
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent {

}
