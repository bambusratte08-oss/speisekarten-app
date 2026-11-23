# Speisekarten-Has – App

Eine eigenständige Web-App auf Basis von [speisekartenhas.jimdofree.com](https://speisekartenhas.jimdofree.com/) – alle Speisekarten aus dem Landkreis Haßberge an einem Ort, schnell durchsuchbar und als App installierbar.

## Features

- 🔍 **Live-Suche** nach Restaurant und Ort
- 🏷️ **Kategorie-Filter**: Pizza, Döner & Grill, Asiatisch, Griechisch, Burger & Fast Food, Sonstiges
- ⭐ **Favoriten** (lokal gespeichert)
- 🖼️ **Vollbild-Viewer** mit Zoom und mehreren Seiten (Seite 1/2, Mittag/Abend)
- 📲 **Installierbar als PWA** (Android/iOS/Desktop) – „Zum Homescreen hinzufügen"
- Arbeiten offline (App-Shell wird gecacht)

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

## Hinweis

Die Speisekarten (Bilder/PDFs) liegen wie auf der Original-Website auf `speisekartenhas.111mb.de` bzw. bei den Restaurants selbst und werden verlinkt, nicht kopiert. Bei Fehlern oder fehlenden Karten wendet man sich an die Kontaktseite der Original-Website.
