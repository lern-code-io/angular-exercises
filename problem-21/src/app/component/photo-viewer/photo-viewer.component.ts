import {Component, DestroyRef, inject} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {PhotoService} from "../../service/photo.service";
import {Photo} from "../../model/photo.modal";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-photo-viewer',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf
  ],
  template:
  `
    <div *ngIf="photo" class="main-container">
      <h3> {{photo.title}}</h3>

      <img width="125" height="125" ngSrc="{{photo.thumbnailUrl}}" alt="loading..." priority="" />
      <button (click)="onDeleteImage()">Click to delete!</button>
      <p *ngIf="photoDeleted">Photo deleted!</p>
    </div>
  `,
  styleUrl: './photo-viewer.component.scss'
})
export class PhotoViewerComponent {

  private photoService: PhotoService = inject(PhotoService);
  private destroyRef: DestroyRef = inject(DestroyRef);

  public photo: Photo | undefined = undefined;
  public photoDeleted: boolean = false;

  ngOnInit(): void {
    this.photoService.getPhoto("1")
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(response => {
        this.photo = response;
      });
  }

  onDeleteImage()
  {
    this.photoService.deletePhoto("1")
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(response => {
        this.photoDeleted = true;

      });
  }
}
