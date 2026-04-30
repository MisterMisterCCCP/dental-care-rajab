import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-inhaber',
  standalone: true,
  imports: [],
  templateUrl: './inhaber.component.html',
  styleUrl: './inhaber.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    id: 'inhaber',
    class: 'page-section',
  },
})
export class InhaberComponent {
  readonly milestones = [
    { year: 'DDS', label: 'Doctor of Dental Surgery — Syrian Private University' },
    { year: 'DGI', label: 'Mitglied Deutsche Gesellschaft für Implantologie' },
    { year: 'DGZMK', label: 'Mitglied Deutsche Gesellschaft für Zahn-, Mund- und Kieferheilkunde' },
    { year: 'LZK BW', label: 'Mitglied der Landeszahnärztekammer Baden-Württemberg' },
  ];
}
