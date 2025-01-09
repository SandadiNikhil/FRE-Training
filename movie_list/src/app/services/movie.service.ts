import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://api.themoviedb.org/3/movie/popular';
  private apiKey = '09ede2b2422b2a4d970701cac92ebd60';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<{ results: Movie[] }> {
    return this.http.get<{ results: any[] }>(`${this.apiUrl}?api_key=${this.apiKey}`);
  }
}
