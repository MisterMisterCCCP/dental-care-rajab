import { ChangeDetectionStrategy, Component } from '@angular/core';

interface NewsItem {
  category: string;
  date: string;
  title: string;
  excerpt: string;
}

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    id: 'aktuelles',
    class: 'page-section',
  },
})
export class NewsComponent {
  readonly doctolibUrl =
    'https://www.doctolib.de/zahnmedizin/mannheim/abdullah-rajab';

  readonly newsItems: NewsItem[] = [
    {
      category: 'Praxis',
      date: 'Frühjahr 2026',
      title: 'Online‑Terminbuchung jetzt rund um die Uhr',
      excerpt:
        'Über Doctolib können Sie Ihren Termin bequem zu jeder Tages‑ und Nachtzeit selbst auswählen – inklusive Erinnerung per E‑Mail oder SMS.',
    },
    {
      category: 'Sprechzeiten',
      date: 'Hinweis',
      title: 'Sprechstunden auf Deutsch und Arabisch',
      excerpt:
        'Sie möchten sich auf Arabisch über Ihre Behandlung austauschen? In unserer Praxis sprechen wir beide Sprachen und nehmen uns gerne Zeit.',
    },
    {
      category: 'Vorsorge',
      date: 'Tipp',
      title: 'Zwei Mal im Jahr zur professionellen Zahnreinigung',
      excerpt:
        'Eine regelmäßige PZR ist die wirksamste Vorsorge gegen Karies und Parodontitis. Wir beraten Sie gerne zu Ihrem persönlichen Intervall.',
    },
  ];
}
