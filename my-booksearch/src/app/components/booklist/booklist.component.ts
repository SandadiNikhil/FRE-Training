import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Subscription } from 'rxjs';
import { Book } from '../../services/interfaces/book.interface';
import { CommonModule } from '@angular/common';
import { BookItemComponent } from '../book-item/book-item.component';

@Component({
  selector: 'app-booklist',
  standalone: true,
  imports: [
    CommonModule,
    BookItemComponent
],
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss'],
})

export class BooklistComponent {
  booksup = new Subscription();
  
  @Input() books: Book[] = [];
  @Output() addToWishlist = new EventEmitter<Book>();

  onAddToWishlist(book: Book) {
    this.addToWishlist.emit(book);
  }
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    // this.booksup = this.bookService.bookSubject$.subscribe(
    //   (val: Book[]) => {
    //     console.log('booklist: ', val);
    //     this.books = val;
    //   }
    // );
  }
  ngOnDestroy(): void {
    this.booksup.unsubscribe();
  }

}
