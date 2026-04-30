import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  HostListener,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';

interface NavItem {
  fragment: string;
  label: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);
  /** Currently visible section, used to highlight nav. */
  readonly activeFragment = signal<string>('start');
  /** True when on /impressum or /datenschutz — landing-anchors don't apply there. */
  readonly onLegalPage = signal(false);

  readonly doctolibUrl =
    'https://www.doctolib.de/zahnmedizin/mannheim/abdullah-rajab';

  readonly navItems: NavItem[] = [
    { fragment: 'inhaber', label: 'Inhaber' },
    { fragment: 'team', label: 'Mein Team' },
    { fragment: 'philosophie', label: 'Praxisphilosophie' },
    { fragment: 'leistungen', label: 'Leistungen' },
    { fragment: 'kontakt', label: 'Kontakt' },
  ];

  constructor() {
    // Track whether we're on a legal sub-page so anchor highlights stop.
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((e) => {
        const url = e.urlAfterRedirects.split('#')[0];
        this.onLegalPage.set(
          url.startsWith('/impressum') || url.startsWith('/datenschutz'),
        );
      });
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
    document.body.style.overflow = this.menuOpen() ? 'hidden' : '';
  }

  closeMenu(): void {
    this.menuOpen.set(false);
    document.body.style.overflow = '';
  }

  /** True when the link should appear visually active. */
  isActive(fragment: string): boolean {
    return !this.onLegalPage() && this.activeFragment() === fragment;
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 24);
    if (this.onLegalPage()) return;

    // Lightweight scroll-spy: pick the section whose top is closest to
    // (but not below) the top of the viewport, with a small offset for
    // the sticky header.
    const offset = 120;
    const sections = ['start', ...this.navItems.map((n) => n.fragment)];
    let current = 'start';
    for (const id of sections) {
      const el = document.getElementById(id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top - offset <= 0) {
        current = id;
      }
    }
    if (current !== this.activeFragment()) {
      this.activeFragment.set(current);
    }
  }
}
