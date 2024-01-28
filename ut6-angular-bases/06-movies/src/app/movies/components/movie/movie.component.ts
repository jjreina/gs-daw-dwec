import { Component, Input } from '@angular/core';
import { Movie } from '../../interfaces/movieInterface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent {
  @Input()
  public movie!: Movie;
}
