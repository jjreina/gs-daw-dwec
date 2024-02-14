import { Injectable } from '@angular/core';
import { Movie, MovieRespose } from '../interfaces/movieInterface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'https://imdb188.p.rapidapi.com/api/v1/searchIMDB?query=mission';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'faf1f48168mshd2557257338fbfap11f402jsnc3201c077e9e',
    'X-RapidAPI-Host': 'imdb188.p.rapidapi.com',
  },
};

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  public getDataMovie(): Observable<MovieRespose> {
    return this.http.get<MovieRespose>(url, options);
  }

  public removeMovie(id: string, movies: Movie[]): Movie[] {
    return movies.filter((movie: Movie) => {
      return movie.id != id;
    });
  }
}
