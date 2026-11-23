# Speisekarten-Has – App

Eine eigenständige Web-App auf Basis von [speisekartenhas.jimdofree.com](https://speisekartenhas.jimdofree.com/) – alle Speisekarten aus dem Landkreis Haßberge an einem Ort, schnell durchsuchbar und als App installierbar.

## Features

- 🔍 **Live-Suche** nach Restaurant, Ort und Adresse
- 🏷️ **Kategorie-Filter**: Pizza, Döner & Grill, Asiatisch, Griechisch, Burger & Fast Food, Gutbürgerlich, Sonstiges
- ℹ️ **Info-Tab pro Restaurant**: Öffnungszeiten (wo erfasst), Anrufen mit einem Tipp, **Anfahrt** über Google Maps (ansehen + Route starten)
- 🆕 **NEU-Marker** für Restaurants der 2026er-Übergabe (Stadt Döner + Pizza, Pizza Adriano, Bella Pizza, Zam Zam, Roza Imbiss, Diafa, Pizza Sali)
- ⭐ **Favoriten** (lokal gespeichert)
- 🖼️ **Vollbild-Viewer** mit Zoom und mehreren Seiten (Seite 1/2, Mittag/Abend)
- 📲 **Installierbar als PWA** (Android/iOS/Desktop) – „Zum Homescreen hinzufügen"
- Arbeiten offline (App-Shell wird gecacht)

## Öffnungszeiten pflegen

In `js/data.js` haben Restaurants ein optionales Feld `hours` (Liste von Zeilen) und optional `phone`/`addr`. Für Lokale ohne Daten zeigt der Info-Tab automatisch einen Google-Maps-Link mit den aktuellen Zeiten (ohne Gewähr). Neue Lokale einfach als Objekt in `RESTAURANTS` ergänzen.

## Starten

Einfach statisch hosten (GitHub Pages, Netlify, jeder beliebige Webserver) oder lokal:

```bash
cd speisekarten-app
python3 -m http.server 8000
# dann http://localhost:8000 öffnen
```

Für die PWA-Installation wird ein HTTPS-Hosting benötigt (lokal zählt `localhost` auch).

## Struktur

```
index.html          Oberfläche
css/style.css       Styling (Dark Theme, mobilfirst)
js/data.js          Alle Restaurants + Speisekarten-Links (wie auf der Original-Seite)
js/app.js           Logik: Suche, Filter, Favoriten, Viewer
manifest.webmanifest PWA-Manifest
sw.js               Service Worker (App-Shell-Cache)
```

## Datenquellen

- [speisekartenhas.jimdofree.com](https://speisekartenhas.jimdofree.com/) – Start- und Second-Seite (Stand: November 2026)
- [speisekartenhas.weebly.com](https://speisekartenhas.weebly.com/) – Home- und Second-Seite (neu ab 01.2026) · Quelle für Orte, Telefonnummern und die neuen Restaurants
- Öffnungszeiten: nur offizielle bzw. verlässliche Quellen werden direkt angezeigt (z. K. Kokono: Mo–So 11–15 & 17–22:30, Sennhütte: Di–So) – sonst Google-Maps-Link

Die Speisekarten (Bilder/PDFs) liegen wie bei der Original-Sammlung auf `speisekartenhas.111mb.de` bzw. bei den Restaurants selbst und werden verlinkt, nicht kopiert.
