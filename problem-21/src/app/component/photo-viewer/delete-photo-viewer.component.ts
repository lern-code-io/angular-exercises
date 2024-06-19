import {Component, DestroyRef, inject} from '@angular/core';
import {AsyncPipe, NgIf, NgOptimizedImage} from "@angular/common";
import {PhotoService} from "../../service/photo.service";
import {Photo} from "../../model/photo.modal";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import { Observable} from 'rxjs';

@Component({
  selector: 'app-delete-photo-viewer',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf,
    AsyncPipe
  ],
  template:
  `
    <div  *ngIf="photo$ | async as photo" class="main-container">
      <h3> {{photo.title}}</h3>
      <img width="125" height="125" ngSrc="{{photo.thumbnailUrl}}" alt="loading..." />
      <button (click)="onDeleteImage(photo.id)">Click to delete!</button>
      <p *ngIf="photoDeleted">Photo deleted!</p>
      <p *ngIf="httpError"> Http call in service layer needs to be fixed! </p>
    </div>
  `,
  styleUrl: './delete-photo-viewer.component.scss'
})
export class DeletePhotoViewerComponent {

  private photoService: PhotoService = inject(PhotoService);
  private destroyRef: DestroyRef = inject(DestroyRef);

  public photo$: Observable<Photo> = this.photoService.getPhoto('1');

  public photoDeleted: boolean = false;
  public httpError: boolean = false;

  onDeleteImage(idToDelete: number )
  {
    this.photoService.deletePhoto(idToDelete.toString())
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(
        {
          complete: () => this.photoDeleted = true,
          error: () =>  this.httpError = true
        });
  };
}

