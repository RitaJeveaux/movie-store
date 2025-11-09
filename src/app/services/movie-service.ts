import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  apiUrl: string = 'http://localhost:3000/movies'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(this.apiUrl)
  }
}
