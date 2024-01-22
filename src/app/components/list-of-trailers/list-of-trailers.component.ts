import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Trailer } from '../../interfaces/movie.trailer.interface';

@Component({
  selector: 'list-of-trailers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-of-trailers.component.html',
  styleUrl: './list-of-trailers.component.scss',
})
export class ListOfTrailersComponent {
  private sanitizer = inject(DomSanitizer);

  @Input() public trailersMovie?: Trailer[];

  getYouTubeLink(key: string): SafeResourceUrl {
    const url = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/' + key
    );
    return url;
  }
}
