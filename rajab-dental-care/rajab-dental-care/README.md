# Rajab Dental Care – Praxis‑Webseite

Moderne, mehrsprachige Webseite für die Zahnarztpraxis **Abdullah Rajab** in
Mannheim (Quadrat K4), gebaut mit **Angular 18** in einer schlanken,
zukunftssicheren Architektur:

- Standalone Components (kein NgModule)
- Signal‑basierte Reaktivität & `OnPush` Change Detection
- Lazy‑geladene Routen
- Reactive Forms & Router View Transitions
- Editorialer, warmer Design‑Stil mit Fraunces + Manrope
- DSGVO‑konform: keine Tracker, nur OpenStreetMap & Google Fonts (Hinweise im Datenschutz)

---

## Voraussetzungen

| Tool        | Version           |
|-------------|-------------------|
| **Node.js** | **≥ 18.19** (empfohlen 20 LTS) |
| **npm**     | ≥ 9               |

Prüfen mit:

```bash
node --version
npm --version
```

---

## Installation

```bash
# Abhängigkeiten installieren
npm install
```

Beim ersten Lauf werden Angular CLI, alle Bibliotheken und SCSS‑Tools
heruntergeladen (~250 MB).

---

## Entwicklung

```bash
# Lokalen Dev‑Server starten (Hot Reload)
npm start
```

Die Seite läuft anschließend unter **http://localhost:4200/**.

---

## Produktions‑Build

```bash
# Optimierter, gehashter, minifizierter Build
npm run build
```

Das Ergebnis liegt unter `dist/rajab-dental-care/browser/`. Diese Dateien
können auf jedem statischen Webhoster bereitgestellt werden (z. B. Netlify,
Vercel, IONOS, eigener Apache/Nginx).

> Hinweis: Bei einem Server, der kein SPA‑Fallback‑Routing kann, alle
> unbekannten Pfade auf `index.html` umleiten, damit Angular‑Routen wie
> `/leistungen` oder `/kontakt` direkt aufrufbar sind.

---

## Tests & Lint (optional)

```bash
npm test           # Karma + Jasmine Unit‑Tests
npm run watch      # Build im Watch‑Modus
```

---

## Projektstruktur

```
rajab-dental-care/
├── public/
│   └── favicon.svg
├── src/
│   ├── index.html               # SEO, OG‑Tags, schema.org Dentist, Fonts
│   ├── main.ts                  # bootstrapApplication()
│   ├── styles.scss              # Design‑Tokens, Reset, Utilities
│   └── app/
│       ├── app.component.{ts,html,scss}
│       ├── app.config.ts        # Provider (Router, View Transitions, …)
│       ├── app.routes.ts        # Alle 7 Routen, lazy
│       ├── components/
│       │   ├── header/          # Sticky Nav + Mobile Drawer
│       │   └── footer/          # Adresse, Kontakt, Sprechzeiten, Social
│       └── pages/
│           ├── landing/         # One‑Pager: stapelt alle Sektionen
│           ├── home/            # Hero‑Section (Section #start)
│           ├── about/           # Über uns (Section #ueber-uns)
│           ├── services/        # Leistungen (Section #leistungen)
│           ├── news/            # Aktuelles & Jobs (Section #aktuelles)
│           ├── contact/         # Kontakt + Karte + Formular (Section #kontakt)
│           ├── impressum/       # Eigene Route /impressum
│           └── datenschutz/     # Eigene Route /datenschutz
├── angular.json
├── package.json
├── tsconfig.json
└── tsconfig.app.json
```

---

## Routen

| Pfad           | Inhalt                              |
|----------------|-------------------------------------|
| `/`            | **Landing Page** — alles auf einer Seite mit Anker-Navigation |
| `/impressum`   | Impressum                           |
| `/datenschutz` | Datenschutz­erklärung                |

Die Startseite enthält alle Hauptbereiche als Sektionen mit Ankern:

- `#start` – Hero
- `#ueber-uns` – Über uns & Team
- `#leistungen` – Behandlungs­spektrum
- `#aktuelles` – News & Stellenanzeige (ZFA 08/2026)
- `#kontakt` – Kontakt, Karte, Kontaktformular

Die Header‑Navigation nutzt diese Anker — Klicks scrollen sanft zur
jeweiligen Sektion. Bei Direktaufruf einer URL mit Fragment (z. B.
`/#leistungen`) wird automatisch dorthin gescrollt. Alte Pfade wie
`/leistungen`, `/kontakt` etc. leiten auf die Landing Page um.

Impressum und Datenschutz bleiben bewusst eigene Routen — rechtlich
sauber, lange Inhalte, eigener Tab‑Workflow.

---

## Design‑Tokens

Alle Farben, Schatten, Radien und Spacing‑Werte sind in **CSS Custom
Properties** in `src/styles.scss` definiert. Kernpalette:

| Token              | Hex       | Verwendung                  |
|--------------------|-----------|-----------------------------|
| `--color-primary`  | `#0E4D5C` | Tiefes Teal – Markenfarbe   |
| `--color-bg`       | `#FAF6EF` | Warmes Creme – Hintergrund  |
| `--color-accent`   | `#D96F4A` | Korall‑Akzent / CTAs        |
| `--color-mint`     | `#B6D4CD` | Soft Mint – Karten/Sektionen|
| `--color-ink`      | `#1F2A2E` | Fließtext                   |

Schriften: **Fraunces** (Display, Italic für Headlines), **Manrope**
(Body) – via Google Fonts.

---

## Inhaltliche Anpassungen

Praxis‑spezifische Daten (Telefon, Öffnungszeiten, Doctolib‑URL,
Stellenanzeige) sind direkt in den Templates hinterlegt. Häufige
Anlauf­stellen:

- **Sprechzeiten / Adresse / Telefon** → `src/app/components/footer/footer.component.html` und `src/app/pages/contact/contact.component.html`
- **Doctolib‑URL** → konstanter String `doctolibUrl` in `home`, `services`, `contact`, `news`
- **Stellenanzeige** → `src/app/pages/news/news.component.html`
- **Impressum / Datenschutz** → in den jeweiligen Page‑Templates

---

## Browser‑Support

Moderne Evergreen‑Browser (Chrome, Edge, Firefox, Safari der letzten 2
Versionen). View Transitions degradieren auf älteren Browsern still.

---

## Lizenz

© 2026 Praxis Abdullah Rajab. Alle Rechte vorbehalten. Code für die
Praxis‑Webseite – nicht zur Weitergabe an Dritte ohne ausdrückliche
Genehmigung.
