import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  inject,
} from '@angular/core';
import { IMG_URL_500, IMG_URL_LOGO } from '../../helpers/imageUrl';
import { MovieInfo } from '../../interfaces/movie.interface';
import { MoviesServicesService } from '../../services/movies-services.service';

@Component({
  selector: 'banner-img',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent implements OnChanges {
  private moviesService = inject(MoviesServicesService);

  @Input() public img?: string;
  @Input() public id?: number;

  public bannerMovie?: MovieInfo;

  public base_imgUrl: string = IMG_URL_500;
  public base_imgLogo: string = IMG_URL_LOGO;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.id) {
      this.moviesService.getMovieById(this.id).subscribe((movie) => {
        this.bannerMovie = movie;
      });
    }
  }
}
