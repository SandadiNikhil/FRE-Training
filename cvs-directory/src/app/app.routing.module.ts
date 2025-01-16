import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectoryComponent } from './directory/directory.component';
import { ContactUsComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/directory', pathMatch: 'full' },
  { path: '**', redirectTo: '/directory' },
  { path: 'directory', component: DirectoryComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'about', component: AboutComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }