import { Component } from '@angular/core';
import {Book} from "../../modal/book.modal";
import {CommonModule, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-viewbook-component',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <div class="mainContainer">
      <h3>Stephen King Books!</h3>
<!--            TODO: Add Angular tag to loop through the "booksToDisplay" array defined below -->
<!--            Add the book source dynamically to the [SRC] tag. -->
<!--            Add the book title dynamically between the <p class="book-title">{{ PLACE DYNAMIC TITLE INBETWEEN THESE BRACKETS }}</p>-->
<!--            tags using String interpolation -->
      <div  id="loopContainer"  class="book-card">
        <img width="200" height="400" ngSrc="replace me" alt="Place the tag that will Loop through the array on the div at line 3! Add dynamic src and book title also!" class="book-image">
        <p class="book-title">replace me</p>
      </div>

    </div>
  `,
  styleUrl: './viewbook.component.scss'
})
export class ViewbookComponent {

  public booksToDisplay: Book[] = [
    {
      id: "1",
      name: "The Stand",
      imgUrl: "https://assets.whsmith.co.uk/product-image/large/9781444720730-10-000_1.jpg"
    },
    {
      id: "2",
      name: "It",
      imgUrl: "https://assets.whsmith.co.uk/product-image/large/9781444707861-10-000_1.jpg"
    },
    {
      id: "3",
      name: "The Shining",
      imgUrl: "https://m.media-amazon.com/images/I/81zqohMOk-L._AC_UF894,1000_QL80_.jpg"
    },
    {
      id: "4",
      name: "Under The Dome",
      imgUrl: "https://target.scene7.com/is/image/Target/GUEST_4bd266a7-e226-4d8c-b94b-b34850ff9910"
    },
    {
      id: "5",
      name: "The Dark Tower",
      imgUrl: "https://pictures.abebooks.com/isbn/9781501143519-uk.jpg"
    },
  ]
}
