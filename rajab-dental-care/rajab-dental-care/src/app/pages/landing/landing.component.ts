import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { InhaberComponent } from '../inhaber/inhaber.component';
import { TeamComponent } from '../team/team.component';
import { PhilosophieComponent } from '../philosophie/philosophie.component';
import { ServicesComponent } from '../services/services.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HomeComponent,
    InhaberComponent,
    TeamComponent,
    PhilosophieComponent,
    ServicesComponent,
    ContactComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent implements AfterViewInit {
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);

  ngAfterViewInit(): void {
    // Smooth-scroll to fragment whenever it changes (also when the
    // fragment is the same one already in the URL — Angular's built-in
    // anchorScrolling only fires on initial navigation, not on repeat
    // clicks of the same hash).
    this.route.fragment
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((fragment) => {
        if (!fragment) return;
        // Defer until next frame so DOM is laid out, then scroll.
        requestAnimationFrame(() => {
          const el = document.getElementById(fragment);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });
  }
}
