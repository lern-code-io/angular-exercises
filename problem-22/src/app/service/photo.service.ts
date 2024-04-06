import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Photo} from "../model/photo.modal";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private UPDATE_PHOTO_URL = "https://jsonplaceholder.typicode.com/photos/1"

  private http: HttpClient = inject(HttpClient);

  getPhoto(photoId: string): Observable<Photo> {
    return this.http.get<Photo>(`https://jsonplaceholder.typicode.com/photos/${photoId}`);
  }

  updatePhoto(photoToUpdate: Photo) : Observable<Photo>
  {
    const error = new Error('Failed to fetch data');
    return throwError(error);
  }

}
