import { Movie } from './../../../interfaces/movieInterface';
import { Component } from '@angular/core';
import { moviesMock } from '../../../mock/moviesDataMovies';

@Component({
  selector: 'app-components-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent {
  public movies: Movie[] = moviesMock;
}
