# Kunst-Lernpfad

Lern-Webapp zu **Bildanalyse & Impressionismus** — aus sieben Unterrichtsmaterialien gebaut: erst die Fachbegriffe lernen, dann verstehen, dann anwenden. Läuft komplett offline im Browser, ohne Build und ohne Abhängigkeiten.

**Module · Quiz · Karteikarten mit Spaced Repetition · fünf Übungsformen · Glossar · Transfer-Prüfung**

---

## Der Lernpfad

| # | Modul | Baut auf | Karten |
|---|-------|----------|--------|
| 1 | **Fundament: Bildmittel** — Linien, Flächen, Farbe, Bildraum, Komposition | Startpunkt | 30 |
| 2 | **Farbwissen & Farbregeln** — Farbdimensionen, Ittens sieben Farbkontraste, Malkonzepte, Schreibweise von Farbangaben | Modul 1 | 30 |
| 3 | **Bildanalyse: Schema & Formulierungen** — Arbeitsgang von den Rahmendaten bis zur Deutung | Modul 1+2 | 21 |
| 4 | **Epochenwissen: Impressionismus** — Begriff, Merkmale, Themen, Vertreter (ca. 1860–1905) | Modul 1–3 | 30 |
| 5 | **Anwendung: Caillebotte-Analyse** — „Straße in Paris an einem regnerischen Tag“ (1877) als Musteranalyse | Modul 1–4 | 17 |

Insgesamt **128 Karteikarten**, **74 Glossarbegriffe** und **47 Anwendungsaufgaben** (davon 8 in der gemischten Transfer-Prüfung).

Jedes Modul schaltet sich frei, wenn das vorige zu **50 % gelernt** ist — oder du schaltet über **„Alle Module frei schalten“** alles auf einmal.

## So funktioniert das Lernen

- **Karteikarten** nach dem Leitner-System mit fünf Kästen: sicher Gelerntes kommt später zurück (Abstände 1 → 2 → 4 → 9 Tage), wackliges kommt sofort wieder.
- **Quiz**: Multiple Choice mit drei Ablenkern aus demselben Modul, mit Antwortkontrolle danach.
- **Training**: fünf Übungsformen — Multiple Choice, Zuordnung (Mittel ↔ Wirkung), Reihenfolge (Analyse-Phasen), Lückentext, Satz bauen.
- **Glossar**: alle Fachbegriffe mit Suche, Modulfilter und Querverweis auf die passenden Karteikarten.
- **Transfer-Prüfung**: gemischte Aufgaben quer durch alle Module, bestanden ab 70 %.

**Tastatur:** `Leertaste` dreht die Karte, `1` = „nochmal lernen“, `2` = „kann ich sicher“.

## Projektstruktur

```
index.html      Einstieg, lädt die drei Skripte
styles.css      Aussehen, responsiv (Mobile bis 390 px ohne Overflow)
data.js         Module, 128 Karteikarten, 74 Glossarbegriffe
exercises.js    47 Anwendungs- und Transferaufgaben
app.js          Routing, Leitner-Logik, Quiz, alle fünf Übungsformen, Glossar, Prüfung
```

Reines Vanilla-JavaScript — kein Framework, kein npm, kein Build-Schritt.

## Lokal anschauen

Einfach `index.html` doppelklicken. Für den vollen Fortschrittsspeicher (localStorage) in manchen Browsern besser über einen Mini-Server:

```bash
python -m http.server 8000
# dann http://localhost:8000
```

Dein Fortschritt liegt ausschließlich im Browser (localStorage-Key `kunst-lernpfad-v1`). Es werden **keine** Daten hochgeladen, keine Analysen geladen, keine externen Ressourcen nachgeladen.

## Auf GitHub veröffentlichen

1. **Repository anlegen** (Name z. B. `kunst-lernpfad`), diese fünf Dateien plus `README.md`, `.gitignore`, `.gitattributes`, `.nojekyll` hochladen — per Drag-and-drop über die GitHub-Weboberfläche oder per `git`.
2. **Pages aktivieren:** *Settings → Pages → Source: „Deploy from a branch“ → Branch: `main` / `/(root)` → Save.*
3. Nach dem Build ist die App unter `https://<dein-name>.github.io/kunst-lernpfad/` erreichbar.

Die App nutzt relative Pfade und Hash-Routing (`#/modul/m1/lernen`) und läuft deshalb auch im Unterpfad einer GitHub-Pages-Site ohne Anpassung.

## Quellen und Rechte

Die Inhalte wurden aus sieben Unterrichtsdokumenten erarbeitet (Analyseschema, Bildsprachliche Mittel, Farben und ihre Schreibweise, Bildanalyse-Formulierungshilfe, zwei Impressionismus-Dokumente, Caillebotte-Analyse). Die Formulierungen in `data.js` und `exercises.js` sind eigene Zusammenfassungen; die Original-Arbeitsblätter sind hier **nicht** enthalten.

Eine Lizenz ist bislang nicht hinterlegt — damit bleibt die Nutzung der Inhalte dir vorbehalten. Falls du sie teilen willst, bietet sich für den Text `CC BY-NC-SA 4.0` und für den Code `MIT` an.
