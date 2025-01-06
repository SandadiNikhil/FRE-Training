import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../services/interfaces/book.interface';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
  standalone: true,
  imports: [CommonModule]
})

export class BookItemComponent {
  @Input() book!: Book;
  @Output() addToWishlist = new EventEmitter<Book>();

  onAddToWishlist(): void {
    this.addToWishlist.emit(this.book);
  }
}
