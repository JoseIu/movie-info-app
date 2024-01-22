import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Movie } from '../../interfaces/moviesResult';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'list-of-movies',
  standalone: true,
  imports: [CommonModule, RouterModule, MovieCardComponent],
  templateUrl: './list-of-movies.component.html',
  styleUrl: './list-of-movies.component.scss',
})
export class ListOfMoviesComponent {
  @Input() public movies?: Movie[];
}
