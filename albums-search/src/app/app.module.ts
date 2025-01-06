import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchBarModule } from './features/search-bar/search-bar.module';
import { AlbumsListModule } from './features/albums-list/albums-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule, 
    SearchBarModule,
    AlbumsListModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
