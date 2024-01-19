import { Component, Input } from '@angular/core';
import { ProductionCompany } from '../../interfaces/movie.interface';
import { CompaniesLogoComponent } from '../companies-logo/companies-logo.component';

@Component({
  selector: 'app-companies-logos',
  standalone: true,
  imports: [CompaniesLogoComponent],
  templateUrl: './companies-logos.component.html',
  styleUrl: './companies-logos.component.scss',
})
export class CompaniesLogosComponent {
  @Input() public production_companies?: ProductionCompany[];
}
