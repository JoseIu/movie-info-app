import { Component, Input } from '@angular/core';
import { IMG_URL_500 } from '../../helpers/imageUrl';
import { Movie } from '../../interfaces/moviesResult';
import { BannerComponent } from '../banner/banner.component';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'movie-card',
  standalone: true,
  imports: [BannerComponent, RatingComponent],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {
  @Input() public movie?: Movie;

  public img_500: string = IMG_URL_500;
}
