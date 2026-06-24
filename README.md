# KOPP Feinmechanik – Website (selbst-enthaltend, flach)

Statische, mobil optimierte One-Page-Website. **CSS und JavaScript sind direkt in die
HTML-Dateien eingebaut** – keine externen `style.css`/`main.js`, die beim Hochladen
verloren gehen können. Einfach hochladen, fertig.

## Dateien (alle auf einer Ebene)

```
index.html          ← Startseite (CSS + JS inline)
impressum.html      ← Impressum (CSS inline)
datenschutz.html    ← Datenschutzerklärung (CSS inline)
logo.png            ← Original-Logo (bitte daneben legen, siehe unten)
favicon.svg         ← optional (Favicon ist zusätzlich in den HTMLs eingebettet)
robots.txt
sitemap.xml
```

> Für eine funktionierende, gestylte Seite genügt schon allein die `index.html`.

## Logo

Der Header bindet das Original-Logo automatisch als **`logo.png`** ein (neben den
HTML-Dateien ablegen). Erkannt werden auch `logo.webp`, `logo.jpg`, `logo.svg`.
Fehlt die Datei, erscheint ein dezenter Schriftzug-Fallback – nie ein kaputtes Bild.

## Deployen / Hochladen

GitHub Pages, Vercel, Netlify, IONOS, Cloudflare Pages: die Dateien ins Root legen.
Kein Build-Command. Bei GitHub: ZIP entpacken → die Dateien (nicht die .zip) ins Repo
hochladen → Commit. Danach ggf. Hard-Reload (⌘⇧R) gegen den Browser-Cache.

## Farben & Fonts

- Primär-Blau `#1f86cc` · Dunkles Navy `#0c1b2e` · Text `#16222e`
- Fonts: **Sora** (Headlines) · **Inter** (Fließtext) – via Google Fonts

## Noch offen

- **Fotos:** Dateien daneben legen, dann erscheinen sie automatisch:
  `team.jpg`, `historie.jpg`, `fertigung.jpg`, `laser.jpg`, `reinigung.jpg`,
  `oberflaeche.jpg`, `qualitaet-1.jpg`, `qualitaet-2.jpg`.
- **Kontaktformular:** in `index.html` im `<script>`-Block die Konstante
  `WEB3FORMS_ACCESS_KEY` setzen (kostenloser Key über web3forms.com mit
  `kontakt@kopp-feinmechanik.de`). Ohne Key öffnet der Button ersatzweise das E-Mail-Programm.
