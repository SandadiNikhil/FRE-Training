import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component'; 
import { DirectoryComponent } from './directory/directory.component';
import { ContactUsComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';


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



// const routes: Routes = [
//   { path: '', redirectTo: '/directory', pathMatch: 'full' },
//   { path: 'directory', component: DirectoryComponent },
//   { path: 'contact-us', component: ContactUsComponent },
// ];

// @NgModule({
//   declarations: [
//     AppComponent,
//     NavbarComponent,
//     DirectoryComponent,
//     ContactUsComponent,
//     AboutComponent,
//   ],
//   imports: [
//     BrowserModule,
//     RouterModule.forRoot(routes),
//     AppRoutingModule,
//     HttpClientModule,
//     ReactiveFormsModule,
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

