import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistService } from '../../core/wishlist/wishlist.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
  constructor(public wishlistService: WishlistService) {}

  removeBook(id: string) {
    this.wishlistService.removeBook(id);
  }

  get wishlist() {
    return this.wishlistService.wishlist();
  }
}
