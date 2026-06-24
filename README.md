# Steuerkanzlei Christoph Leichtle – Karriere-Landingpage

Bewerbungs-Landingpage für Meta-Kampagnen. Zwei ausgeschriebene Stellen (Rottweil):
- **Finanzbuchhaltung & Lohn** – Teilzeit
- **Steuerfachwirt:in / Steuerfachangestellte:r für Jahresabschlüsse & Steuererklärungen** – Vollzeit

Erstellt von **Ländle Digital**.

## Inhalt

| Datei / Ordner | Beschreibung |
|---|---|
| `index.html` | **Die komplette Seite in einer Datei** – CSS **und** Schriften sind eingebettet. Keine weiteren Dateien nötig, deploy-fertig. |
| `assets/og.png` | Social-Preview-Bild (Link-Vorschau) |
| `assets/creatives/` | 3 Anzeigen-Creatives für Meta (4:5, 1080×1350 px, PNG) |

> Diese `index.html` ist bewusst **self-contained**: Sie funktioniert überall –
> lokal per Doppelklick, auf GitHub Pages oder jedem Webspace – ohne einen
> separaten `css/`-Ordner. (Das war die Ursache, falls die Seite mal „unstyled"
> aussah: Es wurde nur die HTML ohne `css/` hochgeladen.)

## Deployment

### GitHub Pages
1. Dateien ins Repo pushen (oder per Web-Upload reinziehen).
2. **Settings → Pages → Branch: `main` / Root** → Save.
3. Nach ~1 Min ist die Seite live. Bei Updates hart neu laden (Cmd+Shift+R).

### Beliebiger Webspace / Static-Host
Einfach `index.html` (für die Link-Vorschau zusätzlich den `assets/`-Ordner)
hochladen. Kein Build nötig.

## Bewerbungsformular

Der Versand läuft über **Web3Forms** (Access-Key + Logik am Ende der `index.html`).
Die Empfänger-Adresse ist im Web3Forms-Dashboard hinterlegt; für eine eigene
Empfänger-Adresse dort einen eigenen Key anlegen und eintragen. Im Formular wählt
die/der Bewerber:in die Stelle aus; die „Auf diese Stelle bewerben"-Buttons setzen
sie automatisch vor.

## Vor dem Livegang bestätigen

- **Impressum-/Datenschutz-Links** im Footer (zeigen aktuell auf
  `steuerberater-leichtle.de/impressum` bzw. `/datenschutz`).
- **Gehalt / Eintritt** je nach finalem Stellenprofil.

## Bearbeiten

Die Seite wird aus einer getrennten Quelle (HTML + CSS) generiert und zu dieser
Einzeldatei gebündelt. Für Änderungen an Texten/Design bitte bei Ländle Digital
melden – wir liefern eine aktualisierte `index.html`.
