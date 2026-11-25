# Kunst-Lernpfad

Lern-Webapp zu **Bildanalyse, Farbe und Epochen** — erarbeitet aus sieben Unterrichtsmaterialien und ergänzt um allgemeines Epochewnissen: erst die Fachbegriffe lernen, dann verstehen, dann anwenden. Kurz gefasst, in einfacher Sprache, komplett offline im Browser, ohne Build und ohne Abhängigkeiten.

**Module · Quiz · Karteikarten mit Spaced Repetition · fünf Übungsformen · Glossar · Transfer-Prüfung**

---

## Der Lernpfad

| # | Modul | Baut auf | Karten |
|---|-------|----------|--------|
| 1 | **Fundament: Bildmittel** — Linien, Flächen, Farbe, Bildraum, Komposition | Startpunkt | 24 |
| 2 | **Farbe: Kontraste und Malkonzepte** — Farbdimensionen, Ittens sieben Farbkontraste, Farbgebungen, Malkonzepte, Schreibweise von Farbangaben | Modul 1 | 20 |
| 3 | **Bildanalyse: Schema und Formulierungen** — Ablauf von den Rahmendaten bis zur Deutung, plus Satz-Baukasten | Modul 1+2 | 18 |
| 4 | **Epochenwissen: Impressionismus** — Begriff, Merkmale, Themen, technische Voraussetzungen, Vertreter (ca. 1860–1905) | Modul 1–3 | 23 |
| 5 | **Epochen erkennen: vergleichen und anwenden** — Realismus, Naturalismus, Expressionismus, abstrakte Kunst; woran du welche Epoche begründet unterscheidest | Modul 1–4 | 14 |
| 6 | **Wortschatz: gut beschreiben und deuten** — Satzanfänge, Bildmittel-Verben, Wirkungs- und Farbwörter, Deutungs- und Schlusssätze | Modul 1–5 | 20 |

Insgesamt **119 Karteikarten**, **83 Glossarbegriffe** und **42 Anwendungsaufgaben** (davon 10 in der gemischten Transfer-Prüfung).

**Kürzer und allgemeiner:** Jede Antwort umfasst maximal zwei Sätze (im Schnitt 101 Zeichen, keine über 140) und gilt für jedes Bild, nicht nur für ein Einzelwerk. Die Caillebotte-Analyse bleibt erhalten — sie steht jetzt als *Beispiel* im Epochenvergleich, nicht mehr als eigener Themenblock.

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
data.js         Module, 119 Karteikarten, 83 Glossarbegriffe
exercises.js    42 Anwendungs- und Transferaufgaben
app.js          Routing, Leitner-Logik, Quiz, alle fünf Übungsformen, Glossar, Prüfung
```

Reines Vanilla-JavaScript — kein Framework, kein npm, kein Build-Schritt.

## Lokal anschauen

Einfach `index.html` doppelklicken. Für den vollen Fortschrittsspeicher (localStorage) in manchen Browsern besser über einen Mini-Server:

```bash
python -m http.server 8000
# dann http://localhost:8000
```

Dein Fortschritt liegt ausschließlich im Browser (localStorage-Key `kunst-lernpfad-v2`). Es werden **keine** Daten hochgeladen, keine Analysen geladen, keine externen Ressourcen nachgeladen.

Jede Karte hat eine feste Id, die aus ihrer Frage gebildet wird (`m2:ittens-sieben-kontraste`). Inhalt ändern verschiebt deshalb keinen Lernfortschritt mehr — nur umbenennen einer Frage setzt diese eine Karte zurück.

## Auf GitHub

Das Repository liegt auf `https://github.com/krammyannick-ship-it/KunstLern` (Branch `main`).

1. **GitHub Pages ist bereits aktiviert:** *Settings → Pages → Source: „Deploy from a branch“ → Branch: `main` / `/(root)`.*
2. Die App läuft unter `https://krammyannick-ship-it.github.io/KunstLern/`.
3. **Aktualisieren** nach jeder Änderung: `git add -A` → `git commit -m "…"` → `git push`. Der Push auf `main` löst den neuen Build aus; er ist nach etwa einer halben Minute online.

Die App nutzt relative Pfade und Hash-Routing (`#/modul/m1/lernen`) und läuft deshalb auch im Unterpfad einer GitHub-Pages-Site ohne Anpassung.

## Quellen und Rechte

Die Inhalte wurden aus sieben Unterrichtsdokumenten erarbeitet (Analyseschema, Bildsprachliche Mittel, Farben und ihre Schreibweise, Bildanalyse-Formulierungshilfe, zwei Impressionismus-Dokumente, Caillebotte-Analyse) und für Modul 5 um allgemeines Epochewnissen ergänzt — Realismus, Naturalismus, Expressionismus und abstrakte Kunst kommen in den Arbeitsblättern nicht vor. Die Formulierungen in `data.js` und `exercises.js` sind eigene Zusammenfassungen; die Original-Arbeitsblätter sind hier **nicht** enthalten.

Die Inhalte stehen unter **CC BY-NC-SA 4.0** (siehe `LICENSE`): verbreiten und bearbeiten erlaubt, mit Namensnennung, nicht kommerziell, Bearbeitungen unter derselben Lizenz. Für eine abweichende Nutzung des Codes frag nach.
