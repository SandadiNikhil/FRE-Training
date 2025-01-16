import { Routes } from '@angular/router';
import { DirectoryComponent } from './directory/directory.component';
import { ContactUsComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/directory', pathMatch: 'full' },
  { path: 'directory', component: DirectoryComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '/directory' },
];
