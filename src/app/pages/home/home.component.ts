import { Component, HostListener, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movies-response';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public movies: Movie[] = [];
  public moviesSlideShow: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    // console.log('Hola')
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1250;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);
    // console.log(pos);
    if (pos > max ) {
      // console.log('llamar servicio')
      if( this.movieService.loading ) {
        return;
      }
      this.movieService.getMovies().subscribe( movies => {
        this.movies.push(...movies);
      } )
    }
  }

  constructor( private movieService: MoviesService ) { 
  }
  
  ngOnInit(): void {
    this.movieService.getMovies().subscribe( movies => {
      // console.log(movies);
      this.movies = movies;
      this.moviesSlideShow = movies;
    });
  }

}
