import {Component, DestroyRef, inject} from '@angular/core';
import {PhotoService} from "../../service/photo.service";
import {Photo} from "../../model/photo.modal";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {AsyncPipe, NgIf, NgOptimizedImage} from "@angular/common";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-photo',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf,
    NgIf,
    AsyncPipe
  ],
  template:
    `
    <div *ngIf="photo$ | async as photo" class="main-container">
      <h3> {{photo.title}}</h3>
      <img width="125" height="125" ngSrc="{{photo.thumbnailUrl}}" alt="loading..." />
      <button (click)="onUpdateImage(photo)">Click to Update photo title!</button>
      <p *ngIf="photoUpdated">Photo Updated!</p>
      <p *ngIf="httpError"> Http call in service layer needs to be fixed! </p>
    </div>
  `,  styleUrl: './update-photo.component.scss'
})
export class UpdatePhotoComponent {

  private photoService: PhotoService = inject(PhotoService);
  private destroyRef: DestroyRef = inject(DestroyRef);

  public photo$: Observable<Photo> = this.photoService.getPhoto('1');

  public photoUpdated: boolean = false;
  public httpError: boolean = false;

  ngOnInit(): void {
  }

  onUpdateImage(photo: Photo)
  {
    const newTitle = "New Image Title";

    const newPhoto: Photo = {
      albumId: photo.albumId,
      id: photo.id,
      thumbnailUrl: photo.thumbnailUrl,
      title: newTitle,
      url: photo.url
    }

    this.photoService.updatePhoto(newPhoto)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(
        {
          complete: () =>  this.photoUpdated = true,
          error: () =>  this.httpError = true
        });
  }
}
