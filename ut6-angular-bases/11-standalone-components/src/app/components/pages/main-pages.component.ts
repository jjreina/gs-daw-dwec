import { Component } from '@angular/core';
import { Movie } from '../../interfaces/movieInterface';
import { MoviesComponent } from '../list-movies/list-movies.component';

@Component({
  selector: 'app-movies-main-pages',
  templateUrl: './main-pages.component.html',
  imports: [MoviesComponent],
  standalone: true,
})
export class MainPageComponent {
  // public movies: Movie[] = moviesMock;
}
