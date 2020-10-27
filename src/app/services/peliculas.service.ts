import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoviesResponse } from '../interfaces/movies-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor( private http: HttpClient ) { }

  getCartelera():Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>('https://api.themoviedb.org/3/movie/now_playing?api_key=4b84dfdc42cd3945865882e1beedee43&language=es-CO&page=1')
  }
}
