import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators'; 
import { Book } from './interfaces/book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  searchBooks(keyword: string): Observable<Book[]> {
    if (!keyword) {
      return of([]); 
    }
    return this.http
      .get<any>(`https://www.googleapis.com/books/v1/volumes?q=${keyword}`)
      .pipe(
        map((response) => {
          return (
            response.items?.map((item: any) => ({
              id: item.id,
              title: item.volumeInfo?.title || 'Untitled',
              publisher: item.volumeInfo?.publisher,
              publishDate: item.volumeInfo?.publishedDate,
              description: item.volumeInfo?.description,
            })) || []
          );
        }),
        catchError((err) => {
          console.error('Error from Google Books API:', err);
          return of([]); // Return an empty array on error
        })
      );
  }
}
