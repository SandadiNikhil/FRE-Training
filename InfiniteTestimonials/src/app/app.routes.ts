import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./testimonials/testimonials.component').then(
        (m) => m.TestimonialsComponent
      ),
  },
];
