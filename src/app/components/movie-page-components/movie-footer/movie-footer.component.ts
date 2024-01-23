import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Cast } from '../../../interfaces/movie-credits.interface';

@Component({
  selector: 'movie-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-footer.component.html',
  styleUrl: './movie-footer.component.scss',
})
export class MovieFooterComponent implements OnChanges {
  @Input() public status?: string;
  @Input() public release_date?: string;
  @Input() public runtime?: number;

  @Input() public crew?: Cast[];
  public director?: Cast[];
  public writer?: Cast[];

  ngOnChanges(changes: SimpleChanges): void {
    const director = this.crew?.filter((member) => member.job === 'Director');
    const writer = this.crew?.filter((member) => member.job === 'Writer');

    this.director = director;
    this.writer = writer;

    console.log(director, writer);
  }
}
