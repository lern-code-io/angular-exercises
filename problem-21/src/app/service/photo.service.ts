import {inject, Injectable} from '@angular/core';
import {Observable, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Photo} from "../model/photo.modal";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  // TODO: This is the URL to call the DELETE HTTP call with
  private DELETE_PHOTO_URL = "https://jsonplaceholder.typicode.com/photos/${REPLACE WITH PHOTO ID}"

  private http: HttpClient = inject(HttpClient);

  getPhoto(photoId: string): Observable<Photo> {
    return this.http.get<Photo>(`https://jsonplaceholder.typicode.com/photos/${photoId}`);
  }
  deletePhoto(photoId: string): Observable<null> {
    // todo: replace with HTTP delete call using URL on line 12
    const error = new Error('Failed to fetch data');
    return throwError(() => error);
  }


}
