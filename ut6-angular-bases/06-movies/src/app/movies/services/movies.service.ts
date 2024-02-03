import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movieInterface';
import { moviesMock } from '../mocks/moviesDataMovies';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  public movies: Movie[] = moviesMock;
  constructor() {}
}
