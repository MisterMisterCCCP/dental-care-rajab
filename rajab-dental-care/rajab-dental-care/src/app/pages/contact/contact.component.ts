import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    id: 'kontakt',
    class: 'page-section',
  },
})
export class ContactComponent {
  readonly doctolibUrl =
    'https://www.doctolib.de/zahnmedizin/mannheim/abdullah-rajab';

  readonly submitted = signal(false);

  // OpenStreetMap embed URL for K4 20, 68159 Mannheim
  readonly mapUrl: SafeResourceUrl;

  readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    privacy: [false, [Validators.requiredTrue]],
  });

  constructor(
    private readonly fb: FormBuilder,
    sanitizer: DomSanitizer,
  ) {
    this.mapUrl = sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.openstreetmap.org/export/embed.html?bbox=8.4665%2C49.4930%2C8.4670%2C49.4934&layer=mapnik&marker=49.493190%2C8.466776',
    );
  }

  hasError(field: 'name' | 'email' | 'message' | 'privacy'): boolean {
    const c = this.form.get(field);
    return !!(c && c.invalid && (c.dirty || c.touched));
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // In Produktion: HTTP-Endpoint anbinden (z. B. eigener Server, Formspree o. ä.)
    // Aus DSGVO-Gründen NICHT direkt an externe Drittanbieter ohne AV-Vertrag.
    // Hier: Demo-Erfolgszustand.
    this.submitted.set(true);
    this.form.reset({ name: '', email: '', message: '', privacy: false });
  }
}
