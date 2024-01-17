import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { IMG_URL_500 } from '../../helpers/imageUrl';
import { MovieInfo } from '../../interfaces/movie.interface';
import { MoviesServicesService } from '../../services/movies-services.service';

@Component({
  selector: 'app-movie-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.scss',
})
export class MoviePageComponent implements OnInit {
  private activateRoute = inject(ActivatedRoute);
  private moviesService = inject(MoviesServicesService);

  public movie?: MovieInfo;
  public img_500: string = IMG_URL_500;
  ngOnInit(): void {
    this.activateRoute.params
      .pipe(switchMap(({ id }) => this.moviesService.getMovieById(id)))
      .subscribe((movie) => {
        console.log(movie);

        this.movie = movie;
        return;
      });
  }
}
