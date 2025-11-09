import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

type UploadImageResponse = {
  imageUrl: string;
  path?: string;
}

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  apiUrl: string = 'http://localhost:3000/movies'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(this.apiUrl)
  }

  createOne(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.apiUrl, movie);
  }

  uploadImage(file: File): Observable<UploadImageResponse> {
    const formData = new FormData();
    formData.append("imagem", file);
    return this.http.post<UploadImageResponse>("http://localhost:3000/upload", formData);
  }
}
