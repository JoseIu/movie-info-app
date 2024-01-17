import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home-page/home-page.component').then(
        (m) => m.HomePageComponent
      ),
  },
  {
    path: 'movie/:id',
    loadComponent: () =>
      import('./pages/movie-page/movie-page.component').then(
        (m) => m.MoviePageComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
