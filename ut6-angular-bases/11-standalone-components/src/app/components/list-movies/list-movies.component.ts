import { Component, OnInit } from '@angular/core';
import { Movie, MovieRespose } from '../../interfaces/movieInterface';
import { MoviesService } from '../../services/movies.service';
import { MovieComponent } from '../movie/movie.component';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.css',
  standalone: true,
  imports: [MovieComponent],
})
export class MoviesComponent implements OnInit {
  public movies: Movie[] = [];

  constructor(public moviesService: MoviesService) {}

  ngOnInit() {
    this.loadMovies();
  }

  public loadMovies() {
    this.moviesService.getDataMovie().subscribe((response: MovieRespose) => {
      this.movies = response.data;
    });
  }

  public removeMovieById(idMovie: string) {
    this.movies = this.moviesService.removeMovie(idMovie, this.movies);
  }
}
