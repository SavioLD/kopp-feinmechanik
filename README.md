# KOPP Feinmechanik – Website

Statische, mobil optimierte One-Page-Website. Kein Build-Tool nötig –
einfach hochladen und deployen.

## Struktur

```
/
├── index.html          ← Startseite (Hero, Über uns, Historie, Leistungen, Qualität, FAQ, Kontakt)
├── impressum.html      ← Impressum
├── datenschutz.html    ← Datenschutzerklärung
├── css/style.css       ← Stylesheet (Design an bestehende OnePage angelehnt)
├── js/main.js          ← Navigation, Reveal, Zähler, FAQ, Kontaktformular
└── assets/
    └── favicon.svg     ← Favicon (Präzisions-Ring)
```

## Farben (wie bestehende OnePage)

- Primär-Blau `#1f86cc` · Dunkles Navy `#0c1b2e` · Text `#16222e`
- Fonts: **Sora** (Headlines) · **Inter** (Fließtext)

## ⚠️ Vor dem Live-Gang – 3 schnelle Schritte

### 1. Logo einsetzen
Aktuell ist das KOPP-Logo als sauberer Platzhalter (Schrift + Präzisions-Ring) nachgebaut.
Original-Logo einsetzen:
1. Logo als `assets/logo.png` (oder `.svg`) ablegen.
2. In `index.html` (und optional in den Rechtstexten) den `<a class="brand">…</a>`-Block ersetzen durch:
   `<a class="brand" href="#top"><img src="assets/logo.png" alt="KOPP Feinmechanik" class="brand__img"></a>`

### 2. Bilder einsetzen
Alle Bildflächen zeigen aktuell einen dezenten Marken-Platzhalter. Sobald die echten
Fotos unter den unten genannten Dateinamen in `assets/` liegen, erscheinen sie automatisch:

| Bereich              | Dateiname                |
|----------------------|--------------------------|
| Team / Geschäftsführer | `assets/team.jpg`      |
| Historische Aufnahme | `assets/historie.jpg`    |
| Fertigung            | `assets/fertigung.jpg`   |
| Laserbeschriftung    | `assets/laser.jpg`       |
| Teilereinigung       | `assets/reinigung.jpg`   |
| Oberflächenbehandlung| `assets/oberflaeche.jpg` |
| Qualität (Mikroskop) | `assets/qualitaet-1.jpg` |
| Qualität (Messung)   | `assets/qualitaet-2.jpg` |

Hero-Hintergrund: optional ein Gebäudefoto in `css/style.css` unter `.hero__bg`
als zusätzliches `background-image` ergänzen.

### 3. Kontaktformular aktivieren
In `js/main.js` die Konstante `WEB3FORMS_ACCESS_KEY` setzen:
1. Auf <https://web3forms.com> mit `kontakt@kopp-feinmechanik.de` einen kostenlosen
   Access-Key per E-Mail anfordern.
2. Key in `js/main.js` eintragen – fertig.

> Solange kein Key gesetzt ist, öffnet das Formular ersatzweise das E-Mail-Programm
> des Besuchers (mailto an `kontakt@kopp-feinmechanik.de`) – es geht also nichts verloren.

## Lokal anschauen

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Deployen

Ordner-Inhalt bei einem Static-Hosting (z. B. Vercel, Netlify, IONOS, Cloudflare Pages)
ins Root legen. Kein Build-Command, kein Output-Directory.
