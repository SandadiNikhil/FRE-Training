import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css'],
  standalone: true
})
export class MovieItemComponent {
  @Input() movie: any;
}
