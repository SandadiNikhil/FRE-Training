import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common'; 
import { MovieItemComponent } from '../movie-item/movie-item.component';
import { MovieService } from '../services/movie.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  standalone: true,
  imports: [CommonModule, MovieItemComponent],
  //imports: [NgFor, MovieItemComponent]

})
export class MovieListComponent implements OnInit {
  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(
      (data) => {
        this.movies = data.results; 
      },
      (error) => {
        console.error('Error fetching movies:', error);
      }
    );
  }
}