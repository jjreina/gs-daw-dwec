import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { MainPageComponent } from './pages/main-pages.component';

@NgModule({
  declarations: [MoviesComponent, MovieComponent, MainPageComponent],
  imports: [CommonModule],
  exports: [MainPageComponent],
})
export class MoviesModule {}
