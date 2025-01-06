import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Book } from './services/interfaces/book.interface';
import { BookService } from './services/book.service';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { SearchComponent } from "./components/search/search.component";
import { BooklistComponent } from './components/booklist/booklist.component';
import { WishListComponent } from './components/wish-list/wish-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule, // Required for *ngIf and *ngFor
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    SearchComponent,
    BooklistComponent,
    WishListComponent,
  ],
})
export class AppComponent {
  constructor(private bookService: BookService) {}

  searchResults: Book[] = [];
  wishlist: Book[] = [];

  handleSearch(keyword: string) {
    console.log('Parent sees keyword:', keyword);
    this.bookService.searchBooks(keyword).subscribe({
      next: (results: Book[]) => {
        console.log('Search results:', results);
        this.searchResults = results;
      },
      error: (err) => console.error(err),
    });
  }

  handleAddToWishlist(book: Book) {
    if (!this.wishlist.find((b: Book) => b.id === book.id)) {
      this.wishlist.push(book);
      console.log('Book added to wishlist:', book);
    }
  }
}

