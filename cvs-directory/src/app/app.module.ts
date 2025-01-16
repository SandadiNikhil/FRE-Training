import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './navbar/navbar.component'; 
import { DirectoryComponent } from './directory/directory.component';
import { ContactUsComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NavbarComponent,          
    DirectoryComponent,
    ContactUsComponent,
    AboutComponent,
  ],
  bootstrap: [NavbarComponent], 
})
export class AppModule {}