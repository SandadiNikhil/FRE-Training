import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { BooklistComponent } from './components/booklist/booklist.component';
import { WishListComponent } from './components/wish-list/wish-list.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'book-list', component: BooklistComponent },
  { path: 'wishlist', component: WishListComponent }, // Wishlist page route
  { path: '', redirectTo: '/search', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
