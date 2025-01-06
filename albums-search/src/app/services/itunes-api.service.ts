import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItunesApiService {
  private apiUrl = 'https://itunes.apple.com/search';

  constructor(private http: HttpClient) {}

  // searchAlbums(artistName: string): Observable<any> {
  //   const url = `${this.apiUrl}?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=200`;
  //   return this.http.get<any>(url);
  // }

  searchAlbums(artistName: string): Observable<any> {
    const url = 'https://itunes.apple.com/search';
    const params = new HttpParams()
      .set('term', artistName)
      .set('entity', 'album');

    // Use JSONP with the 'callback' parameter
    return this.http.jsonp<any>(`${url}?${params.toString()}`, 'callback');
  }
}
