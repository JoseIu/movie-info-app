import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerComponent } from '../../components/banner/banner.component';
import { ListOfMoviesComponent } from '../../components/list-of-movies/list-of-movies.component';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { getNumberRandom } from '../../helpers/getNumberRandom';
import { Movie } from '../../interfaces/moviesResult';
import { MoviesServicesService } from '../../services/movies-services.service';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [
    BannerComponent,
    MovieCardComponent,
    RouterModule,
    ListOfMoviesComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  private moviesService = inject(MoviesServicesService);
  public movies: Movie[] = [];

  public randomNumber = getNumberRandom();
  public banner_random?: Movie;

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((movies) => {
      this.movies = movies;

      this.banner_random = this.movies[this.randomNumber];
    });
  }
}
