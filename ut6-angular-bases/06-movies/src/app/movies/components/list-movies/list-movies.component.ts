import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from '../../interfaces/movieInterface';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.css',
})
export class MoviesComponent {
  @Input()
  public movies!: Movie[];

  @Output()
  public removeEventEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor(public moviesService: MoviesService) {}

  public emitIdMovie(idMovie: string) {
    this.removeEventEmitter.emit(idMovie);
  }
}
