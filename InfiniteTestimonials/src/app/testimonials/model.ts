export interface Testimonial {
    id: string;
    message: string;
  }
  
  export interface TestimonialsResponse {
    hasNext: boolean;
    testimonials: Testimonial[];
  }
  