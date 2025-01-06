import { Component, Input } from '@angular/core';
import { Book } from '../../services/interfaces/book.interface';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule, 
  ],
})
export class WishListComponent {
  @Input() wishlist: Book[] = []; // Ensure wishlist is passed properly

  removeFromWishlist(book: Book) {
    this.wishlist = this.wishlist.filter((b) => b.id !== book.id);

    }
  }
