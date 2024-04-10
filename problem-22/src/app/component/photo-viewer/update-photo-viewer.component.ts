import {Component, DestroyRef, inject} from '@angular/core';
import {PhotoService} from "../../service/photo.service";
import {Photo} from "../../model/photo.modal";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-update-photo-viewer',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf,
    NgIf
  ],
  template:
    `
    <div *ngIf="photo" class="main-container">
      <h3> {{photo.title}}</h3>
      <img width="125" height="125" ngSrc="{{photo.thumbnailUrl}}" alt="loading..." priority="" />
      <button (click)="onUpdateImage()">Click to Update photo title!</button>
      <p *ngIf="photoUpdated">Photo deleted!</p>
      <p *ngIf="httpError"> Http call in service layer needs to be fixed! </p>
    </div>
  `,  styleUrl: './update-photo-viewer.component.scss'
})
export class UpdatePhotoViewerComponent {

  private photoService: PhotoService = inject(PhotoService);
  private destroyRef: DestroyRef = inject(DestroyRef);

  public photo: Photo | undefined = undefined;
  public photoUpdated: boolean = false;
  public httpError: boolean = false;

  ngOnInit(): void {
    this.photoService.getPhoto("1")
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(response => {
        this.photo = response;
      });
  }

  onUpdateImage()
  {
    if (!this.photo) return;

    const newTitle = "New Image Title";

    const newPhoto: Photo = {
      albumId: this.photo.albumId,
      id:this.photo.id,
      thumbnailUrl: this.photo.thumbnailUrl,
      title: newTitle,
      url: this.photo.url
    }

    this.photoService.updatePhoto(newPhoto)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(response => {
        this.photoUpdated = true;
      }, (error) => {
        this.httpError = true;
      });
  }
}
