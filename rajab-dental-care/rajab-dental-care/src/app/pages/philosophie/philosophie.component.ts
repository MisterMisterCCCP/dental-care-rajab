import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-philosophie',
  standalone: true,
  imports: [],
  templateUrl: './philosophie.component.html',
  styleUrl: './philosophie.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    id: 'philosophie',
    class: 'page-section',
  },
})
export class PhilosophieComponent {
  readonly values = [
    {
      title: 'Zeit nehmen',
      text: 'Eine ehrliche Diagnose braucht Ruhe — und keine Stoppuhr. Wir planen großzügig, damit Sie verstehen, was wir empfehlen und warum.',
    },
    {
      title: 'In Ihrer Sprache',
      text: 'Beratung in Deutsch und Arabisch. Sprache schafft Vertrauen — gerade dann, wenn medizinische Fragen schon kompliziert genug sind.',
    },
    {
      title: 'Moderne Technik',
      text: 'Digitale Diagnostik, präzise Implantatplanung, schonende Verfahren. Was nachweislich besser ist, setzen wir ein.',
    },
    {
      title: 'Klare Aufklärung',
      text: 'Kostenpläne ohne Kleingedrucktes. Behandlungswege ohne Druck. Sie entscheiden — wir beraten ehrlich.',
    },
  ];
}
