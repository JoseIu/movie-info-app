import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { CategoryMoviesComponent } from '../../components/category-movies/category-movies.component';
import { CompaniesLogoComponent } from '../../components/companies-logo/companies-logo.component';
import { CompaniesLogosComponent } from '../../components/companies-logos/companies-logos.component';
import { ListOfMoviesComponent } from '../../components/list-of-movies/list-of-movies.component';
import { ListOfTrailersComponent } from '../../components/list-of-trailers/list-of-trailers.component';
import { HeaderComponent } from '../../components/movie-page-components/header/header.component';
import { MovieFooterComponent } from '../../components/movie-page-components/movie-footer/movie-footer.component';
import { TopCastsComponent } from '../../components/movie-page-components/top-casts/top-casts.component';
import { RatingComponent } from '../../components/rating/rating.component';
import { IMG_URL_500 } from '../../helpers/imageUrl';
import { Cast, Credits } from '../../interfaces/movie-credits.interface';
import { MovieInfo } from '../../interfaces/movie.interface';
import { Trailer } from '../../interfaces/movie.trailer.interface';
import { Movie } from '../../interfaces/moviesResult';
import { MoviesServicesService } from '../../services/movies-services.service';

@Component({
  selector: 'app-movie-page',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    HeaderComponent,
    RatingComponent,
    CompaniesLogoComponent,
    CompaniesLogosComponent,
    MovieFooterComponent,
    TopCastsComponent,
    CategoryMoviesComponent,
    ListOfTrailersComponent,
    ListOfMoviesComponent,
  ],
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.scss',
})
export class MoviePageComponent implements OnInit {
  private activateRoute = inject(ActivatedRoute);
  private moviesService = inject(MoviesServicesService);

  public movie?: MovieInfo;
  public trailersMovie?: Trailer[];
  public creditsMovie?: Cast[];

  public crew?: Cast[];

  public similarMovies?: Movie[];
  public img_500: string = IMG_URL_500;
  ngOnInit(): void {
    this.getMovieById();
    this.getCreditsMovie();
    this.getTrailersMovie();
    this.getSimilarMovies();
  }

  public getMovieById() {
    this.activateRoute.params
      .pipe(switchMap(({ id }) => this.moviesService.getMovieById(id)))
      .subscribe((movie) => {
        this.movie = movie;
        return;
      });
  }

  public getCreditsMovie() {
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.moviesService.getCreditsMovie(id)),
        tap((credits: Credits) => {
          this.creditsMovie = credits.cast;

          this.crew = credits.crew;
        })
      )
      .subscribe();
  }

  public getTrailersMovie() {
    this.activateRoute.params
      .pipe(switchMap(({ id }) => this.moviesService.getTrailersMovie(id)))
      .subscribe((trailers) => {
        this.trailersMovie = trailers;
        return;
      });
  }

  public getSimilarMovies() {
    this.activateRoute.params
      .pipe(switchMap(({ id }) => this.moviesService.getSimilarMovies(id)))
      .subscribe((similarMovies) => {
        this.similarMovies = similarMovies;
        return;
      });
  }
}
