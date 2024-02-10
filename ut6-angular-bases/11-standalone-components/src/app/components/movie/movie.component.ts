import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../interfaces/movieInterface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
  standalone: true,
})
export class MovieComponent {
  @Input()
  public movie!: Movie;

  @Output()
  public movieInfoEventEmitter: EventEmitter<string> =
    new EventEmitter<string>();

  @Output()
  public movieIdEventEmitter: EventEmitter<string> = new EventEmitter<string>();

  public emitMovieTitle(title: string): void {
    this.movieInfoEventEmitter.emit(title);
  }

  public emitRemoveMovie(idMovie: string): void {
    this.movieIdEventEmitter.emit(idMovie);
  }
}
