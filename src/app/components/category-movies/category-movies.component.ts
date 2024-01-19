import { Component, Input } from '@angular/core';

@Component({
  selector: 'category-movies',
  standalone: true,
  imports: [],
  templateUrl: './category-movies.component.html',
  styleUrl: './category-movies.component.scss',
})
export class CategoryMoviesComponent {
  @Input() public genres?: any[];
}
