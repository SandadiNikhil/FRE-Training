import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  // Remove declarations because AppComponent, MovieItemComponent, and MovieListComponent are standalone
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AppComponent, // Import standalone AppComponent
    MovieItemComponent, // Import standalone MovieItemComponent
    MovieListComponent // Import standalone MovieListComponent
  ],
  providers: [],
  bootstrap: [AppComponent] // Bootstrap the standalone AppComponent
})
export class AppModule {}
