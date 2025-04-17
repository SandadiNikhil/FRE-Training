import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialsService } from './testimonials.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent {
  private service = inject(TestimonialsService);

  testimonials = this.service.testimonials;
  loading = this.service.loading;
  error = this.service.error;

  ngOnInit() {
    this.service.fetchTestimonials();
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    const reachedBottom =
      element.scrollTop + element.clientHeight >= element.scrollHeight - 10;

    if (reachedBottom) {
      this.service.fetchTestimonials();
    }
  }
}
