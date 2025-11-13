import { Routes } from '@angular/router';
import { MovieAdd } from './pages/movie-add/movie-add';
import { MovieList } from './pages/movie-list/movie-list';
import { Login } from './pages/login/login';
import { NotFound } from './pages/not-found/not-found';



export const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies', component: MovieList },
  { path: 'add', component: MovieAdd },
  { path: 'login', component: Login },
  // { path: 'movies/edit/:id', component: MovieRegisterComponent },
  { path: '**', component: NotFound },
  // , canActivate: [authGuard]
];




