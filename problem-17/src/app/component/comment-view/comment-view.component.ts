import {Component, DestroyRef, inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {CommentService} from "../../service/comment.service";
import {CommentModel} from "../../model/comment.model";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-comment-view',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  template:
    `
    <form *ngIf="nameForm"  class="main-container">
      <label for="Title" >Comment Title: </label>
      <input id="Title" type="text">
      <label for="Body">Comment Body: </label>
      <input id="Body" type="text" >
      <button type="submit">Submit!</button>
      <p *ngIf="formSubmitted">Comment Submitted</p>
    </form>
  `,
  styleUrl: './comment-view.component.scss'
})
export class CommentViewComponent {

  formSubmitted: boolean = false;
  nameForm: FormGroup | undefined = undefined;

  private commentService: CommentService = inject(CommentService);
  private destroyRef: DestroyRef = inject(DestroyRef);


  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }


  onSubmit() {

    if (this.nameForm?.valid) {
      const commentToSave: CommentModel = {
        email: "Test@email.com",
        id: 1,
        postId: 1,
        name: "Replace me with dynamic form title input",
        body: "Replace me with dynamic form body input",
      };

      this.commentService.saveComment(commentToSave)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(savedComment => {
        this.formSubmitted = true;
        this.nameForm?.reset();
      });
    }
  }

}


