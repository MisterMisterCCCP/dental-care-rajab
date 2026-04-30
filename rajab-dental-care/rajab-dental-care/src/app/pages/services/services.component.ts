import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Service {
  id: string;
  icon: string;
  title: string;
  short: string;
  description: string;
  highlights: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    id: 'leistungen',
    class: 'page-section',
  },
})
export class ServicesComponent {
  readonly doctolibUrl =
    'https://www.doctolib.de/zahnmedizin/mannheim/abdullah-rajab';

  readonly services: Service[] = [
    {
      id: 'angstpatienten',
      icon: 'heart',
      title: 'Angstpatienten',
      short: 'Behandlung mit Ruhe und Zeit.',
      description:
        'Zahnarztangst ist nichts, wofür man sich schämen muss. Wir nehmen uns Zeit, erklären jeden Schritt vorab und arbeiten in einer ruhigen, vertrauensvollen Atmosphäre — auf Wunsch in Deutsch oder Arabisch.',
      highlights: [
        'Behutsames Vorgehen, keine Eile',
        'Ausführliche Aufklärung',
        'Beratung in Deutsch & Arabisch',
      ],
    },
    {
      id: 'kronen-veneers',
      icon: 'sparkle',
      title: 'Kronen & Veneers',
      short: 'Stabil. Natürlich. Ästhetisch.',
      description:
        'Vollkeramische Kronen und Veneers stellen Form, Funktion und Ästhetik Ihrer Zähne wieder her. Wir arbeiten mit hochwertigen Materialien und planen jeden Zahn individuell — für ein Ergebnis, das aussieht wie gewachsen.',
      highlights: [
        'Hochwertige Vollkeramik',
        'Digitale Abformung möglich',
        'Natürliche Ästhetik',
      ],
    },
    {
      id: 'parodontitis',
      icon: 'shield',
      title: 'Parodontitis (Zahnbettentzündung)',
      short: 'Den Halt der Zähne sichern.',
      description:
        'Eine unbehandelte Parodontitis ist die häufigste Ursache für Zahnverlust im Erwachsenenalter. Wir diagnostizieren früh, behandeln stadiengerecht und begleiten Sie langfristig in der unterstützenden Parodontitis-Therapie (UPT).',
      highlights: [
        'Frühdiagnostik & Befundung',
        'Schonende Therapie',
        'Langfristige Nachsorge',
      ],
    },
    {
      id: 'prophylaxe',
      icon: 'shield',
      title: 'Prophylaxe & PZR',
      short: 'Vorsorge ist die beste Behandlung.',
      description:
        'Die professionelle Zahnreinigung (PZR) entfernt Beläge, die Sie zuhause nicht erreichen, und beugt Karies und Parodontitis vor. Unsere Prophylaxe-Spezialistinnen kümmern sich um Sie — gründlich und mit Gefühl.',
      highlights: [
        'Professionelle Zahnreinigung',
        'Individuelle Putztechnik',
        'Empfehlung für Recall-Intervalle',
      ],
    },
    {
      id: 'aesthetische',
      icon: 'sparkle',
      title: 'Ästhetische Zahnmedizin',
      short: 'Bleaching · Inlays · Veneers.',
      description:
        'Ein helleres, harmonischeres Lächeln — auf schonendem Weg. Wir bieten zahnärztliches Bleaching, hochwertige Inlays sowie vollkeramische Veneers und beraten Sie ehrlich, was zu Ihrem Befund und Ihren Wünschen passt.',
      highlights: [
        'Zahnärztliches Bleaching',
        'Keramik-Inlays statt Amalgam',
        'Veneers ohne unnötigen Substanzverlust',
      ],
    },
    {
      id: 'weisheitszaehne',
      icon: 'tooth',
      title: 'Weisheitszahn-OPs',
      short: 'Routinierte Eingriffe in der Praxis.',
      description:
        'Ob als Vorsorge oder bei akuten Beschwerden: Wir entfernen Weisheitszähne erfahren, schonend und mit klarer Aufklärung über den Verlauf vor und nach dem Eingriff.',
      highlights: [
        'Erfahrene chirurgische Versorgung',
        'Klare Vor- und Nachsorge',
        'Lokale Anästhesie',
      ],
    },
    {
      id: 'gingivitis',
      icon: 'shield',
      title: 'Zahnfleischentzündung',
      short: 'Gingivitis erkennen und behandeln.',
      description:
        'Häufiges Zahnfleischbluten ist kein harmloses Zeichen — es kann der Anfang einer Parodontitis sein. Wir finden die Ursache, beraten zur richtigen Mundhygiene und stoppen die Entzündung gezielt.',
      highlights: [
        'Ursachen-Diagnostik',
        'Sanfte Therapie',
        'Mundhygiene-Coaching',
      ],
    },
    {
      id: 'prothesen',
      icon: 'tooth',
      title: 'Zahnprothesen',
      short: 'Festen Halt zurückgewinnen.',
      description:
        'Ob teilweise oder vollständig — wir fertigen Prothesen, die fest sitzen, gut aussehen und sich beim Sprechen und Essen sicher anfühlen. Auf Wunsch kombiniert mit Implantaten für maximalen Halt.',
      highlights: [
        'Teil- und Vollprothesen',
        'Kombinationen mit Implantaten',
        'Anpassungen & Reparaturen',
      ],
    },
    {
      id: 'implantologie',
      icon: 'implant',
      title: 'Implantologie',
      short: 'Festsitzender Zahnersatz mit System.',
      description:
        'Implantate sind die langlebigste Form des Zahnersatzes. Als Mitglied der Deutschen Gesellschaft für Implantologie (DGI) plane ich Ihre Versorgung digital und setze auf bewährte Implantatsysteme — von der Einzelzahnlücke bis zur komplexen Versorgung.',
      highlights: [
        'Digitale Implantatplanung',
        'DGI-Mitglied',
        'Hochwertige Implantatsysteme',
      ],
    },
  ];
}
