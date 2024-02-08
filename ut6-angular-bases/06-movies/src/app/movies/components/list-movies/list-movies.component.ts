import { Component, Input, OnInit } from '@angular/core';
import { Movie, MovieRespose } from '../../interfaces/movieInterface';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.css',
})
export class MoviesComponent implements OnInit {
  // @Input() Comentamos esto porque se está usando un servicio para pasar los datos
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
}
