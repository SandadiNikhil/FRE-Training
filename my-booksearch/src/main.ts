import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { FormsModule } from '@angular/forms';
import { importProvidersFrom } from '@angular/core';

import { SearchComponent } from './app/components/search/search.component';
import { BooklistComponent } from './app/components/booklist/booklist.component';
import { WishListComponent } from './app/components/wish-list/wish-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'book-list', component: BooklistComponent },
  { path: 'wishlist', component: WishListComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
   importProvidersFrom(HttpClientModule),
   provideHttpClient(),
   provideRouter(routes),
   importProvidersFrom(FormsModule),
   ],

}).catch(err => console.error(err));
