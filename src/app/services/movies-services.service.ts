import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { enviroment } from '../../environments/environments';
import { Credits } from '../interfaces/movie-credits.interface';
import { MovieInfo } from '../interfaces/movie.interface';
import { Movie, MoviesResult } from '../interfaces/moviesResult';

@Injectable({
  providedIn: 'root',
})
export class MoviesServicesService {
  public http = inject(HttpClient);

  private baseUrl = 'https://api.themoviedb.org/3';
  private token = enviroment.moeviedb_token;

  public getMovies(): Observable<Movie[]> {
    const headers = {
      Authorization: 'bearer ' + this.token,
    };
    return this.http
      .get<MoviesResult>(
        `${this.baseUrl}/movie/popular?api_key=${this.token}`,
        { headers }
      )
      .pipe(map((response) => response.results));
  }
  public getMovieById(id: number): Observable<MovieInfo> {
    const headers = {
      Authorization: 'bearer ' + this.token,
    };

    return this.http.get<MovieInfo>(
      `${this.baseUrl}/movie/${id}?api_key=${this.token}`,
      {
        headers,
      }
    );
  }

  public getCreditsMovie(movie_id: number): Observable<Credits> {
    const headers = {
      Authorization: 'bearer ' + this.token,
    };
    return this.http.get<Credits>(`${this.baseUrl}/movie/${movie_id}/credits`, {
      headers,
    });
  }
}
