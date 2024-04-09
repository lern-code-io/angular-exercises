import {Component, DestroyRef, inject} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {NgIf} from "@angular/common";
import {CommentService} from "../../service/comment.service";
import {CommentModel} from "../../model/comment.model";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-comment-view',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, FormsModule],
  template:
    `
      <div class="main-container">
        <p>Use form builder to create the form!</p>
        <form  #myForm="ngForm" (ngSubmit)="onSubmit(myForm)" class="main-container">
          <label for="Title" >Comment Title: </label>
          <input name="title" id="Title" type="text" ngModel required>
          <label for="Body">Comment Body: </label>
          <input name="body" id="Body" type="text" ngModel required>
          <button type="submit">Submit!</button>
          <p *ngIf="formSubmitted">Comment Submitted</p>
        </form>
      </div>

  `,
  styleUrl: './comment-view.component.scss'
})
export class CommentViewComponent {

  formSubmitted: boolean = false;
  nameForm: FormGroup | undefined = undefined;

  private commentService: CommentService = inject(CommentService);
  private destroyRef: DestroyRef = inject(DestroyRef);
  private formBuilder: FormBuilder = inject(FormBuilder)



  ngOnInit(): void {
  }


  onSubmit(form: NgForm) {
    // Todo when converting to Reactive form, check form is valid before sending HTTP request
      const commentToSave: CommentModel = {
        email: "Test@email.com",
        id: 1,
        postId: 1,
        name: form.value.title,
        body: form.value.body,
      };
      console.log(commentToSave)
      this.commentService.saveComment(commentToSave)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(savedComment => {
        this.formSubmitted = true;
        this.nameForm?.reset();
      });
  }

}


