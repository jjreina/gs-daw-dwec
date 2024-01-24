import { Component, Input } from '@angular/core';
import { Movie } from '../interfaces/movieInterface';
import { moviesMock } from '../mocks/moviesDataMovies';

@Component({
  selector: 'app-movies-main-pages',
  templateUrl: './main-pages.component.html',
})
export class MainPageComponent {
  public movies: Movie[] = moviesMock;
}
