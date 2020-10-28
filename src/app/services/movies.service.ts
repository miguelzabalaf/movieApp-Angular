import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators'
import { Movie, MoviesResponse } from '../interfaces/movies-response';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl: string = 'https://api.themoviedb.org/3';
  carteleraPage: number = 1;
  public loading: boolean = false;


  constructor( private http: HttpClient ) { }

  get params() {
    return {
      api_key: '4b84dfdc42cd3945865882e1beedee43',
      lenguage: 'es-CO',
      page: this.carteleraPage.toString()
    }
  }

  getMovies():Observable<Movie[]> {

    if( this.loading ) {
      return of([]);
    }

    this.loading = true;

    return this.http.get<MoviesResponse>(`${this.baseUrl}/movie/now_playing`, {
      params: this.params
    }).pipe(
      map( (resp) => resp.results ),
      tap( () => {
        this.carteleraPage += 1;
        this.loading = false;
      })
    );

  }
}
