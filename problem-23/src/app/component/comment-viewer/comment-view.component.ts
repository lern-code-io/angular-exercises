import {Component, DestroyRef, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {CommentModel} from "../../model/comment.model";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-comment-viewer',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  template:
    `
      <form [formGroup]="nameForm" (ngSubmit)="onSubmit()" *ngIf="nameForm"  class="main-container">
        <label for="Title" >Comment Title: </label>
        <input id="Title" type="text" formControlName="title">
        <label for="Body">Comment Body: </label>
        <input id="Body" type="text" formControlName="body">
        <button type="submit">Submit!</button>
        <p *ngIf="formSubmitted">Comment Submitted, the form input fields should be reset.</p>
      </form>
  `,  styleUrl: './comment-view.component.scss'
})
export class CommentViewComponent {
  formSubmitted: boolean = false;
  nameForm: FormGroup | undefined = undefined;


  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.nameForm = this.formBuilder.group({
      title: [''],
      body: ['']
    })
  }


  onSubmit() {
    this.formSubmitted = true;
    // TODO: Reset form here
  }
}
