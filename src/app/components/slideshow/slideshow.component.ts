import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movies-response';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() movies: Movie[];

  public swiper;

  constructor() { }

  ngOnInit(): void {
    // console.log('movies',this.movies);
  }

  ngAfterViewInit():void {
    this.swiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      pagination: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      speed: 1000,
    });
  }

  slideNext() {
    this.swiper.slideNext();
  }

  slidePrev() {
    this.swiper.slidePrev();
  }

}
