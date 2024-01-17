import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rating-movie',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './rating.component.scss',
  templateUrl: './rating.component.html',
})
export class RatingComponent implements OnInit {
  @Input() rating?: number;

  public progres: number = 0;

  ngOnInit() {
    if (this.rating !== undefined) {
      this.progres = this.calculateProgressCircle2(this.rating);
    }
  }

  public calculateProgressCircle2(rating: number): number {
    const progressCap = 360;
    return (rating * progressCap) / 10;
  }
}
