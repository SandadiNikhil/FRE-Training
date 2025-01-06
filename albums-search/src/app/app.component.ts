import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { HttpClientModule, HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,  
    SearchBarComponent,
    AlbumsListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  albums: any[] = [];
  
  constructor(private http: HttpClient) {}

  handleSearch(artistName: string): void {
    if (!artistName.trim()) {
      this.albums = [];
      return;
    }

    if (artistName.toLowerCase() === 'local') {
      this.loadLocalJson();
    } else {
      this.loadLiveData(artistName);
    }
  }

  private loadLocalJson(): void {
    this.http.get<any>('assets/chance-rapper.json').subscribe(data => {
      this.albums = data.results || [];
    });
  }

  private loadLiveData(artistName: string): void {
    const url = 'https://itunes.apple.com/search';
    const params = new HttpParams()
      .set('term', artistName)
      .set('entity', 'album');

    this.http.jsonp<any>(`${url}?${params.toString()}`, 'callback')
      .subscribe(response => {
        this.albums = response.results || [];
      }, error => {
        console.error('Error fetching iTunes data:', error);
        this.albums = [];
      });
  }
}
