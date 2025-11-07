import { Routes } from '@angular/router';
import { MovieAdd } from './pages/movie-add/movie-add';
import { MovieList } from './pages/movie-list/movie-list';

export const routes: Routes = [
  { path: '', component: MovieList },
  { path: 'add', component: MovieAdd },
];
