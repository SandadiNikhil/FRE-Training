import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'wishlist',
    loadComponent: () =>
      import('./pages/wishlist/wishlist.component').then(
        (m) => m.WishlistComponent
      ),
  },
];
