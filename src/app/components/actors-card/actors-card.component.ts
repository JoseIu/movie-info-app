import { Component, Input } from '@angular/core';
import { IMG_URL_300 } from '../../helpers/imageUrl';
import { Cast } from '../../interfaces/movie-credits.interface';

@Component({
  selector: 'actors-card',
  standalone: true,
  imports: [],
  templateUrl: './actors-card.component.html',
  styleUrl: './actors-card.component.scss',
})
export class ActorsCardComponent {
  @Input() actor?: Cast;

  public img_300: string = IMG_URL_300;
}
