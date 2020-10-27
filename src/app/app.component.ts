import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';
import { Movie, MoviesResponse } from './interfaces/movies-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movieApp';

  constructor( private peliculasService: PeliculasService ) {

    this.peliculasService.getCartelera().subscribe( resp => {
      console.log('data:', resp)
    });

  }

}
