import { Component, Input } from '@angular/core';
import { Movie } from '../../interfaces/movieInterface';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.css',
})
export class MoviesComponent {
  @Input()
  public movies: Movie[] = [];
}
