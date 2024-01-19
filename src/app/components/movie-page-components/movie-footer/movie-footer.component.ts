import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'movie-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-footer.component.html',
  styleUrl: './movie-footer.component.scss',
})
export class MovieFooterComponent {
  @Input() public status?: string;
  @Input() public release_date?: string;
  @Input() public runtime?: number;
  @Input() public director?: string;
  @Input() public writtenBy?: string;
}
