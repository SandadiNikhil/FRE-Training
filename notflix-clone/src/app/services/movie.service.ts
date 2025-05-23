import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { movieRes, Result, movieDetails } from './interfaces/movies.interface';

import { Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  baseUrl = 'https://api.themoviedb.org/3/movie/';
  api_key = '09ede2b2422b2a4d970701cac92ebd60';

  movieSubject$ = new Subject<movieRes>();
  movieDetailsSubject$ = new Subject();
  movieVideoSubject$ = new Subject();

  constructor(private http: HttpClient) {}

  getMovies(page: number) {
    return this.http
      .get<movieRes>(
        `${this.baseUrl}popular?api_key=${this.api_key}&page=${page}`
      )
      .pipe(
        tap((res: any) => {
          this.movieSubject$.next(res);
        })
      );
  }
  
  getMovieDetails(id: number) {
    return this.http
      .get<movieDetails>(`${this.baseUrl}${id}?api_key=${this.api_key}`)
      .pipe(
        tap((res: any) => {
          this.movieDetailsSubject$.next(res);
        })
      );
  }

  getVideo(id: number) {
    console.log('Get Video details By id is trigered', id);
    return this.http
      .get(`${this.baseUrl}${id}/videos?api_key=${this.api_key}`)
      .pipe(
        tap((res: any) => {
          this.movieVideoSubject$.next(res);
        })
      );
  }
}
