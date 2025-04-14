import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  map,
} from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { WishlistService } from '../../core/wishlist/wishlist.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  searchControl = new FormControl('');
  books: any[] = [];

  constructor(
    private http: HttpClient,
    private wishlistService: WishlistService
  ) {}

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap((term) =>
          this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${term}`)
        ),
        map((res: any) => res.items || [])
      )
      .subscribe((books) => {
        this.books = books;
      });
  }

  addToWishlist(book: any) {
    this.wishlistService.addBook(book);
  }
}
