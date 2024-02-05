import { Injectable } from '@angular/core';
import { Movie, MovieRespose } from '../interfaces/movieInterface';
import { moviesMock } from '../mocks/moviesDataMovies';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'https://imdb188.p.rapidapi.com/api/v1/searchIMDB?query=mission';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '6185a78aa2mshb04ae8991085691p1d093bjsnae8623070f4a',
    'X-RapidAPI-Host': 'imdb188.p.rapidapi.com',
  },
};

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  //public movies: Movie[] = moviesMock;
  public movies: Movie[] = [];

  constructor(private http: HttpClient) {}

  getDataMovie(): Observable<MovieRespose> {
    return this.http.get<MovieRespose>(url, options);
  }
}
