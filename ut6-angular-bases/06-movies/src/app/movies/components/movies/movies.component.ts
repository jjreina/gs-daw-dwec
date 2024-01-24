import { Component, Input } from '@angular/core';
import { Movie } from '../../interfaces/movieInterface';
import { moviesMock } from '../../mocks/moviesDataMovies';

@Component({
  selector: 'app-components-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent {
  @Input()
  public movies: Movie[] = [];
}
