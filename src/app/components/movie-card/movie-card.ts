import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Movie } from '../../models/movie';
import { MatIconButton } from '@angular/material/button';
import { RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-movie-card',
  imports: [MatCardModule, MatIconModule, MatIconButton, RouterLinkActive],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css',
})
export class MovieCard {
  @Input() movie!: Movie;

}
