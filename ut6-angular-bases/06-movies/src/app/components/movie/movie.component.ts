import { Component } from '@angular/core';
import { moviesMock } from '../../../mocks/moviesDataMovies';
import { Movie } from '../../../interfaces/movieInterface';

@Component({
  selector: 'app-components-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent {
  public movie: Movie = moviesMock[0];
}
