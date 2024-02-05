import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './components/list-movies/list-movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { MainPageComponent } from './pages/main-pages.component';

@NgModule({
  declarations: [MoviesComponent, MovieComponent, MainPageComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [MainPageComponent],
})
export class MoviesModule {}
