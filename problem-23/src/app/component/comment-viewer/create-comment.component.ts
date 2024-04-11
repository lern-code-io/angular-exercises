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
      <form [formGroup]="commentForm" (ngSubmit)="onSubmit()"  class="main-container">
        <label>Comment Title: </label>
        <input type="text" formControlName="title">
        <label >Comment Body: </label>
        <input type="text" formControlName="body">
        <button type="submit">Submit!</button>
        <p *ngIf="formSubmitted">Comment Submitted, the form input fields should be reset.</p>
      </form>
  `,  styleUrl: './create-comment.component.scss'
})
export class CreateCommentComponent {

  private formBuilder: FormBuilder = inject(FormBuilder)

  formSubmitted: boolean = false;

  commentForm: FormGroup = this.formBuilder.nonNullable.group({
    title: [''],
    body: ['']
  });

  onSubmit() {
    this.formSubmitted = true;
    // TODO: Reset form here
  }
}
