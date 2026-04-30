import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    id: 'start',
    class: 'page-section',
  },
})
export class HomeComponent {
  readonly doctolibUrl =
    'https://www.doctolib.de/zahnmedizin/mannheim/abdullah-rajab';

  readonly trustPoints = [
    { number: '12+', label: 'Jahre Erfahrung' },
    { number: 'DGI', label: 'Mitglied' },
    { number: '2', label: 'Sprachen' },
    { number: '★ 4.9', label: 'Patientenbewertung' },
  ];
}
