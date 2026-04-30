import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly year = new Date().getFullYear();

  readonly doctolibUrl =
    'https://www.doctolib.de/zahnmedizin/mannheim/abdullah-rajab';
  readonly facebookUrl = 'https://www.facebook.com/Dr.AbdullahRajab';
  readonly threadsUrl = 'https://www.threads.net/@dr.abdullahrajab';
}
