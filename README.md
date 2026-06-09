# KOPP Feinmechanik – Website (selbst-enthaltend, flach)

Statische, mobil optimierte One-Page-Website. **CSS und JavaScript sind direkt in die
HTML-Dateien eingebaut** – keine externen `style.css`/`main.js`, die beim Hochladen
verloren gehen können. Einfach hochladen, fertig.

## Dateien (alle auf einer Ebene)

```
index.html          ← Startseite (CSS + JS inline)
impressum.html      ← Impressum (CSS inline)
datenschutz.html    ← Datenschutzerklärung (CSS inline)
favicon.svg         ← optional (Favicon ist zusätzlich in den HTMLs eingebettet)
robots.txt
sitemap.xml
```

> Für eine funktionierende, gestylte Seite genügt schon allein die `index.html`.

## Deployen / Hochladen

GitHub Pages, Vercel, Netlify, IONOS, Cloudflare Pages: die Dateien ins Root legen.
Kein Build-Command. Bei GitHub: ZIP entpacken → die Dateien (nicht die .zip) ins Repo
hochladen → Commit. Danach ggf. Hard-Reload (⌘⇧R) gegen den Browser-Cache.

## Farben & Fonts

- Primär-Blau `#1f86cc` · Dunkles Navy `#0c1b2e` · Text `#16222e`
- Fonts: **Sora** (Headlines) · **Inter** (Fließtext) – via Google Fonts

## Vor dem Live-Gang – 3 schnelle Schritte

1. **Logo:** aktuell als sauberer Platzhalter nachgebaut. Echtes Logo als `logo.png`
   daneben legen und in `index.html` den `<a class="brand">…</a>`-Block ersetzen durch
   `<a class="brand" href="#top"><img src="logo.png" alt="KOPP Feinmechanik" class="brand__img"></a>`.
2. **Bilder:** Fotos unter diesen Dateinamen daneben legen, dann erscheinen sie automatisch:
   `team.jpg`, `historie.jpg`, `fertigung.jpg`, `laser.jpg`, `reinigung.jpg`,
   `oberflaeche.jpg`, `qualitaet-1.jpg`, `qualitaet-2.jpg`.
   (Ohne Fotos werden ruhige, korrekt dimensionierte Platzhalter angezeigt.)
3. **Kontaktformular:** in `index.html` im `<script>`-Block die Konstante
   `WEB3FORMS_ACCESS_KEY` setzen (kostenloser Key über web3forms.com mit
   `kontakt@kopp-feinmechanik.de`). Ohne Key öffnet der Button ersatzweise das E-Mail-Programm.
