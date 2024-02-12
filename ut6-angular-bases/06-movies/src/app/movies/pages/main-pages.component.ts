import { Component, Input, OnInit, input } from '@angular/core';
import { Movie, MovieRespose } from '../interfaces/movieInterface';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies-main-pages',
  templateUrl: './main-pages.component.html',
})
export class MainPageComponent implements OnInit {
  @Input()
  public movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

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
