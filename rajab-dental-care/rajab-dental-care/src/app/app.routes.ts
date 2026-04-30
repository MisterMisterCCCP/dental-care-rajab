import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/landing/landing.component').then((m) => m.LandingComponent),
    title: 'Rajab Dental Care – Zahnarzt Abdullah Rajab in Mannheim',
  },
  {
    path: 'impressum',
    loadComponent: () =>
      import('./pages/impressum/impressum.component').then(
        (m) => m.ImpressumComponent,
      ),
    title: 'Impressum – Rajab Dental Care',
  },
  {
    path: 'datenschutz',
    loadComponent: () =>
      import('./pages/datenschutz/datenschutz.component').then(
        (m) => m.DatenschutzComponent,
      ),
    title: 'Datenschutz – Rajab Dental Care',
  },
  // Legacy multi-page paths -> redirect to landing (the user lands at the
  // top; the in-page nav lets them jump where they want).
  // Note: Angular's redirectTo strips fragments, so we redirect to '/' and
  // the user-facing navigation handles fragments via routerLink.
  { path: 'ueber-uns', redirectTo: '', pathMatch: 'full' },
  { path: 'inhaber', redirectTo: '', pathMatch: 'full' },
  { path: 'team', redirectTo: '', pathMatch: 'full' },
  { path: 'philosophie', redirectTo: '', pathMatch: 'full' },
  { path: 'leistungen', redirectTo: '', pathMatch: 'full' },
  { path: 'kontakt', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
