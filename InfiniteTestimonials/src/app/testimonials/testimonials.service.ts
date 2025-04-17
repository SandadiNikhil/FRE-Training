import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Testimonial, TestimonialsResponse } from './model';

@Injectable({
  providedIn: 'root',
})
export class TestimonialsService {
  private API_URL = '/api/testimonials';
  // used proxy.conf.json for CORS issues
  // "proxy.conf.json": {
  testimonials = signal<Testimonial[]>([]);
  loading = signal(false);
  error = signal(false);
  hasNext = signal(true);
  lastId: string | null = null;

  constructor(private http: HttpClient) {}

  fetchTestimonials(limit = 5) {
    console.log('Fetching triggered');
    if (this.loading() || !this.hasNext()) return;

    this.loading.set(true);
    this.error.set(false);

    let url = `${this.API_URL}?limit=${limit}`;
    if (this.lastId) url += `&after=${this.lastId}`;

    this.http.get<TestimonialsResponse>(url).subscribe({
      next: (res) => {
        console.log('API success:', res);

        this.testimonials.update((current) => [
          ...current,
          ...res.testimonials,
        ]);
        this.hasNext.set(res.hasNext);
        this.lastId = res.testimonials.at(-1)?.id ?? null;
        this.loading.set(false);
      },
      error: (err) => {
        console.error('API error:', err);

        this.error.set(true);
        this.loading.set(false);
      },
    });
  }
}
