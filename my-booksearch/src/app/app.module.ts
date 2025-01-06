import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { BooklistComponent } from './components/booklist/booklist.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';

@NgModule({
  declarations: [
    SearchComponent,
    BooklistComponent,
    WishListComponent,
    BookItemComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
