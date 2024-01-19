import { Component, Input } from '@angular/core';
import { IMG_URL_LOGO } from '../../helpers/imageUrl';

@Component({
  selector: 'companies-logo',
  standalone: true,
  imports: [],
  templateUrl: './companies-logo.component.html',
  styleUrl: './companies-logo.component.scss',
})
export class CompaniesLogoComponent {
  @Input() logo_path: string = '';
  @Input() name: string = '';

  public base_imgLogo: string = IMG_URL_LOGO;
}
