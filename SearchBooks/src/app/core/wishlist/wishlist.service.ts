import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WishlistService {
  private wishlistSignal = signal<any[]>([]);

  wishlist = this.wishlistSignal.asReadonly();

  addBook(book: any) {
    const existing = this.wishlistSignal().find((b) => b.id === book.id);
    if (!existing) {
      this.wishlistSignal.update((list) => [...list, book]);
    }
  }

  removeBook(id: string) {
    this.wishlistSignal.update((list) => list.filter((book) => book.id !== id));
  }
}
