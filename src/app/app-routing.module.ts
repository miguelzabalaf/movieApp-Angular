import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'movie/:id',
    component: MovieComponent
  },
  {
    path: 'search/:term',
    component: SearchComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes), //Porque son rutas principales
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
