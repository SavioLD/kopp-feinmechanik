# KOPP Feinmechanik – Website (selbst-enthaltend, flach)

Statische, mobil optimierte One-Page-Website. **CSS und JavaScript sind direkt in die
HTML-Dateien eingebaut** – keine externen `style.css`/`main.js`, die beim Hochladen
verloren gehen können. Einfach hochladen, fertig.

## Dateien (alle auf einer Ebene)

```
index.html          ← Startseite (CSS + JS inline)
impressum.html      ← Impressum (CSS inline)
datenschutz.html    ← Datenschutzerklärung (CSS inline)
md2x.png            ← Original-Logo (KOPP) – bitte daneben legen
favicon.svg         ← optional (Favicon ist zusätzlich in den HTMLs eingebettet)
robots.txt
sitemap.xml
```

## Logo

Header **und** Footer binden das Original-Logo als **`md2x.png`** ein (neben die
HTML-Dateien legen). Im dunklen Footer sitzt es auf einer weißen Logo-Platte, damit die
schwarze „Feinmechanik"-Schrift lesbar bleibt. Fehlt die Datei, erscheint ein dezenter
Schriftzug-Fallback – nie ein kaputtes Bild. (Erkannt werden alternativ auch
`logo.png/.webp/.jpg/.svg`.)

## Performance / „kein Flackern"

- Keine Scroll-Einblende-Animationen, keine Zähler-Animation.
- Es werden **keine nicht vorhandenen Bilder** geladen (keine 404-Ladefehler).
  Die Bildflächen zeigen ruhige Platzhalter mit fester Größe (kein Umspringen).
- Einziger externer Bild-Request der Seite ist das Logo (`md2x.png`).

## Deployen / Hochladen

GitHub Pages, Vercel, Netlify, IONOS, Cloudflare Pages: die Dateien ins Root legen.
Kein Build-Command. Bei GitHub: ZIP entpacken → die Dateien (nicht die .zip) ins Repo
hochladen → Commit. Danach ggf. Hard-Reload (⌘⇧R) gegen den Browser-Cache.

## Noch offen

- **Fotos:** Schick sie mir, dann binde ich sie an den passenden Stellen ein
  (Team, Historie, Fertigung, Laser, Reinigung, Oberfläche, 2× Qualität).
- **Kontaktformular:** in `index.html` im `<script>`-Block die Konstante
  `WEB3FORMS_ACCESS_KEY` setzen (kostenloser Key über web3forms.com mit
  `kontakt@kopp-feinmechanik.de`). Ohne Key öffnet der Button ersatzweise das E-Mail-Programm.
