import { Component, Input } from '@angular/core';
import { Movie } from '../../interfaces/movieInterface';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.css',
})
export class MoviesComponent {
  // @Input() Comentamos esto porque se está usando un servicio para pasar los datos
  public movies: Movie[] = [];

  constructor(public moviesService: MoviesService) {
    this.movies = this.moviesService.movies;
  }
}
