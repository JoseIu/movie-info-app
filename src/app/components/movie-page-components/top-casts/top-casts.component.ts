import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Cast } from '../../../interfaces/movie-credits.interface';
import { ActorsCardComponent } from '../../actors-card/actors-card.component';

@Component({
  selector: 'top-casts',
  standalone: true,
  imports: [CommonModule, ActorsCardComponent],
  templateUrl: './top-casts.component.html',
  styleUrl: './top-casts.component.scss',
})
export class TopCastsComponent {
  @Input() public creditsMovie?: Cast[];
}
