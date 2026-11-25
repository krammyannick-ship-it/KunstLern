/* ============================================================
   DATENSATZ – Kunst-Lernpfad
   Module bauen aufeinander auf:
   1 Bildmittel -> 2 Farbe -> 3 Analyse-Schema -> 4 Impressionismus -> 5 Epochen vergleichen
   Quellen: die Kunst-Unterlagen des Ordners „Kunst“, ergänzt um allgemeines Epochewnissen.
   Sprachregel für alle Karten: Antwort max. 2 Sätze und max. 140 Zeichen, einfache Sprache.
   ============================================================ */
window.DATA = {};

DATA.modules = [
  {
    id:"m1", n:1, name:"Fundament: Bildmittel",
    sub:"Linien, Flächen, Farbe, Bildraum, Komposition – die Begriffe, mit denen du über jedes Bild sprechen kannst.",
    builds:"Startpunkt des Pfads: Ohne diese Begriffe kannst du kein Bild analysieren.",
    src:"Bildsprachliche-Mittel.pdf · Analyseschema.pdf",
    color:"#c9971f"
  },
  {
    id:"m2", n:2, name:"Farbe: Kontraste und Malkonzepte",
    sub:"Die drei Farbdimensionen, Ittens sieben Kontraste, Farbgebungen und wie man Farben richtig aufschreibt.",
    builds:"Baut auf Modul 1 auf: Der Bereich Farbe wird systematisch – inklusive Schreibweise für saubere Klausurtexte.",
    src:"Bildsprachliche-Mittel.pdf · Farben-und-ihre-Schreibweise.pdf",
    color:"#d9705b"
  },
  {
    id:"m3", n:3, name:"Bildanalyse: Schema und Formulierungen",
    sub:"Der Ablauf von den Rahmendaten bis zur Deutung – und die Satzmuster, mit denen du jeden Befund formulierst.",
    builds:"Baut auf Modul 1 und 2 auf: Du setzt die Bildmittel jetzt als Verfahren ein.",
    src:"Analyseschema.pdf · Bildanalyse-Formulierungshilfe.pdf",
    color:"#3f6d8e"
  },
  {
    id:"m4", n:4, name:"Epochenwissen: Impressionismus",
    sub:"Entstehung des Begriffs, Merkmale, Themen, technische Voraussetzungen und Köpfe von ca. 1860 bis 1905.",
    builds:"Baut auf Modul 1 bis 3 auf: Die Bildmittel bekommen hier ihren kunsthistorischen Ort.",
    src:"5-Impressio-nismus.pdf · Impressionismus.pdf",
    color:"#7d6b96"
  },
  {
    id:"m5", n:5, name:"Epochen erkennen: vergleichen und anwenden",
    sub:"Realismus, Naturalismus, Impressionismus, Expressionismus, abstrakte Kunst – und wie du ein Bild sicher zuordnest.",
    builds:"Der Belastungstest: Du wendest Bildmittel, Schema und Epochenwissen gleichzeitig an.",
    src:"Analyse-Caillebotte.pdf · ergänztes Epochewnissen",
    color:"#6f9a84"
  }
];

/* ---------- Karteikarten ----------
   m: Modul | f: Frage (Vorderseite) | b: Antwort (Rückseite) | g: Glossar-Begriff (optional) */
DATA.cards = [
/* ===== Modul 1: Bildmittel ===== */
{m:"m1", g:"Bildmittel", f:"Welche vier Bereiche der Bildmittel gibt es?", b:"Linien und Flächen, Farbe, Bildraum, Komposition. Du prüfst jeden Bereich und verknüpfst ihn mit einer Wirkung."},
{m:"m1", g:"Punkt", f:"Welche Rolle spielt der Punkt?", b:"Er ist die kleinste Bildstelle. Gereiht, gestreut oder geballt ergibt er Muster, Strukturen oder Modellierung."},
{m:"m1", g:"Linie", f:"Wie wirkt eine senkrechte Linie?", b:"Senkrecht wirkt statisch, fest und standhaft. Waagerecht wirkt dagegen ruhig und weit, wie der Horizont."},
{m:"m1", g:"Linie", f:"Wie wirken schräge und gebogene Linien?", b:"Schräge Linien sind dynamisch, führen den Blick und erzeugen Tiefe. Gebogene Linien wirken bewegt und lebendig."},
{m:"m1", g:"Fläche", f:"Was ist eine Fläche und welche Formen kennt man?", b:"Eine Fläche wird von Linien oder Farben begrenzt. Sie kann geometrisch, organisch oder frei erfunden sein."},
{m:"m1", g:"Plastizität", f:"Woran erkennst du eine plastisch gestaltete Fläche?", b:"Helle und dunkle Zonen modellieren Licht und Schatten, wodurch die Fläche Körperhaftigkeit bekommt."},
{m:"m1", g:"Komposition", f:"Was bedeutet Komposition?", b:"Der Bildaufbau: wie Format, Linien, Positionen und Proportionen geordnet sind. Er bestimmt die Wirkung mit."},
{m:"m1", g:"Komposition", f:"Woran unterscheidest du eine statische und eine dynamische Komposition?", b:"Senkrechte, waagerechte Linien und Symmetrie wirken ruhig. Diagonalen, Asymmetrie und Fluchtlinien wirken bewegt."},
{m:"m1", g:"Ordnungsprinzipien", f:"Welche Ordnungsprinzipien der Komposition kennst du?", b:"Reihung, Ballung, Streuung, Rhythmus sowie Symmetrie und Asymmetrie."},
{m:"m1", g:"Goldener Schnitt", f:"Was ist der Goldene Schnitt und wie wirkt er?", b:"Ein Teilungsverhältnis von etwa 1 zu 1,618. Elemente darauf wirken harmonisch und ausgewogen."},
{m:"m1", g:"Kompositionsfigur", f:"Was sind Kompositionsfiguren?", b:"Geometrische Grundformen des Aufbaus wie Dreieck, Kreis oder Oval. Ein Dreieck wirkt fest, ein Kreis geschlossen."},
{m:"m1", g:"Kompositionsskizze", f:"Was ist eine Kompositionsskizze?", b:"Du zeichnest die wichtigsten Linien des Bildes ein, auch gedachte wie Blickrichtungen. So wird der Aufbau sichtbar."},
{m:"m1", g:"Bildraum", f:"Was ist der Bildraum?", b:"Der Raum, den eine flache Bildfläche vorgaukelt, gegliedert in Vorder-, Mittel- und Hintergrund."},
{m:"m1", g:"Raumschaffende Mittel", f:"Nenne drei einfache Mittel, die Raumtiefe erzeugen.", b:"Überdeckung, Größenabnahme und Höhenunterschied, oft auch Staffelung und Helligkeitsunterschied."},
{m:"m1", g:"Fluchtpunktperspektive", f:"Wie funktioniert die Fluchtpunktperspektive?", b:"Die Fluchtlinien treffen sich auf dem Horizont in einem Fluchtpunkt. Sie kommt unserem Sehen am nächsten."},
{m:"m1", g:"Fluchtpunktperspektive", f:"Was unterscheidet Zentral- von Übereckperspektive?", b:"Die Zentralperspektive hat einen Fluchtpunkt, die Übereckperspektive zwei."},
{m:"m1", g:"Parallelprojektion", f:"Was ist eine Parallelprojektion?", b:"Eine technische Raumdarstellung, bei der parallele Linien parallel bleiben. Sie wirkt nicht natürlich."},
{m:"m1", g:"Betrachterstandpunkt", f:"Wie wirken die drei Betrachterstandpunkte?", b:"Von unten wirkt die Figur mächtig, auf Augenhöhe neutral und nahbar, von oben klein und hilflos."},
{m:"m1", g:"Luftperspektive", f:"Was ist die Luftperspektive?", b:"Entferntes wird unschärfer, heller und kontrastärmer. Diesen dunstigen Look nannte man Sfumato."},
{m:"m1", g:"Farbperspektive", f:"Wie funktioniert die Farbperspektive?", b:"Entfernte Farben verblauen. Warme Farben wirken nah, kalte Farben wirken fern."},
{m:"m1", g:"Plastizität", f:"Wodurch entsteht Plastizität im Bild?", b:"Durch Körperschatten mit Kern- und Halbschatten sowie durch den Schlagschatten auf dem Untergrund."},
{m:"m1", g:"Bildformat", f:"Welche Bildformate gibt es und was leistet das Querformat?", b:"Hochformat, Querformat, Quadrat und Rondo. Das Querformat zeigt ein weites Sichtfeld wie beim normalen Hinsehen."},
{m:"m1", f:"Wonach fragst du im Bereich Licht?", b:"Kommt das Licht aus einer klaren Quelle oder ist es diffus? Wirft es Schatten und was bewirkt das?"},
{m:"m1", g:"Bildraum", f:"Was heißt flächig statt räumlich gemalt?", b:"Das Bild verzichtet auf Tiefenillusion: keine Perspektive, kein Schatten, keine Stafflung in Raumschichten."},

/* ===== Modul 2: Farbe ===== */
{m:"m2", g:"Farbdimensionen", f:"Welche drei Dimensionen hat jede Farbe?", b:"Farbton, Helligkeit und Sättigung. Mit diesen drei Angaben beschreibst du eine Farbe präzise."},
{m:"m2", g:"Farbe-an-sich-Kontrast", f:"Was ist der Farbe-an-sich-Kontrast?", b:"Reinbunte, kräftige Farben stehen nebeneinander. Das leuchtet und wirkt kraftvoll."},
{m:"m2", g:"Hell-Dunkel-Kontrast", f:"Was ist der Hell-Dunkel-Kontrast?", b:"Große Unterschiede der Tonwerte. Helles vor dunklem Grund springt ins Auge und wird betont."},
{m:"m2", g:"Kalt-Warm-Kontrast", f:"Was ist der Kalt-Warm-Kontrast?", b:"Warme Farbtöne stehen kalten gegenüber. Das erzeugt Spannung und wirkt belebend."},
{m:"m2", g:"Komplementärkontrast", f:"Was ist der Komplementärkontrast?", b:"Zwei Farben, die im Farbkreis gegenüberliegen, etwa Violett und Gelb. Maximale Spannung und Leuchtkraft."},
{m:"m2", g:"Simultankontrast", f:"Was ist der Simultankontrast?", b:"Das Auge ergänzt zu jeder Farbe automatisch deren Gegenfarbe. Benachbarte Flächen färben dadurch um."},
{m:"m2", g:"Qualitätskontrast", f:"Was ist der Qualitätskontrast?", b:"Satte Farben stehen getrübten gegenüber. Vorn satt und hinten trüb betont den Vordergrund."},
{m:"m2", g:"Quantitätskontrast", f:"Was ist der Quantitätskontrast?", b:"Unterschiedlich große Farbflächen stehen im Mengenverhältnis zueinander. Ohne Dominanz wirkt es harmonisch."},
{m:"m2", g:"Itten", f:"Welche sieben Farbkontraste gehen auf Itten zurück?", b:"Farbe an sich, Hell-Dunkel, Kalt-Warm, Komplementär, Simultan, Qualität und Quantität."},
{m:"m2", g:"Lokalfarbe", f:"Was ist Lokalfarbe?", b:"Die Eigenfarbe eines Gegenstands: Gras grün, Himmel blau. Das wirkt naturgetreu und sachlich."},
{m:"m2", g:"Erscheinungsfarbe", f:"Was ist Erscheinungsfarbe?", b:"Gemalt wird, wie ein Gegenstand gerade im Licht erscheint, nicht wie er eigentlich ist. Das wirkt stimmungsvoll."},
{m:"m2", g:"Ausdrucksfarbe", f:"Was ist Ausdrucksfarbe?", b:"Farbe, die sich vom Gegenstand löst und eine Stimmung trägt. Zentral später im Expressionismus."},
{m:"m2", g:"Autonome Farbe", f:"Was ist autonome Farbe?", b:"Die Farbe ist selbst das Bildthema, ganz ohne Gegenstand. Typisch für abstrakte Kunst."},
{m:"m2", g:"Symbolfarbe", f:"Was ist eine Symbolfarbe?", b:"Eine Farbe mit fester Bedeutung, zum Beispiel Gold für das Göttliche."},
{m:"m2", g:"Kolorismus", f:"Was ist ein koloristisches Malkonzept?", b:"Die kräftige Farbe selbst ist das Gestaltungsmittel des Bildes."},
{m:"m2", g:"Valeurismus", f:"Was ist ein valeuristisches Malkonzept?", b:"Ton-in-Ton in wenigen Farbtönen mit feinen Helligkeitsabstufungen. Das wirkt ruhig und sachlich."},
{m:"m2", g:"Lasurtechnik", f:"Was ist die Lasurtechnik?", b:"Viele dünne, durchscheinende Farbschichten übereinander. Die Oberfläche wird ruhig, ohne Pinselspuren."},
{m:"m2", g:"Primamalerei", f:"Was ist Primamalerei?", b:"Die Farbe wird in einem Gang aufgetragen, meist deckend. Der Pinselstrich bleibt sichtbar."},
{m:"m2", g:"Pinselduktus", f:"Was prüfst du beim Pinselduktus?", b:"Ob man den Pinselstrich sieht, und ob lasierend, deckend oder pastos gemalt ist."},
{m:"m2", g:"Farbnamen schreiben", f:"Wie schreibst du Farbangaben richtig?", b:"Als Adjektiv klein: das Hemd ist rot. Als Nomen groß: die Farbe Rot. Zwei Farbtöne: blau-rot mit Bindestrich."},

/* ===== Modul 3: Bildanalyse ===== */
{m:"m3", g:"Bildanalyse-Schema", f:"In welchen vier Schritten analysierst du ein Bild?", b:"Rahmendaten, Beschreibung, Analyse der Mittel mit Wirkung und schließlich Interpretation."},
{m:"m3", g:"Rahmendaten", f:"Welche Rahmendaten gehören in den Einleitungssatz?", b:"Titel, Künstler, Jahr, Ort, Maße, Format, Technik, Genre und das Bildmotiv."},
{m:"m3", g:"Formulierungsbaukasten", f:"Wie baust du den Einleitungssatz?", b:"Ein Satz mit Titel, Künstler, Jahr, Technik und Motiv. Reihenfolge: was, von wem, wann, womit, was genau."},
{m:"m3", g:"Beschreibung", f:"Was gehört in die Beschreibung?", b:"Nur was man sieht, ohne Wertung: Figuren, Gegenstände, Handlung und Raum, gegliedert nach Bildbereichen."},
{m:"m3", g:"Erster Eindruck", f:"Wohin gehört dein erster Eindruck?", b:"An den Anfang der Beschreibung. Erst wirken, später begründen: Erklärt wird er erst in der Analyse."},
{m:"m3", g:"Mittel-Wirkungs-Regel", f:"Was ist die wichtigste Regel jeder Analyse?", b:"Jedes Mittel bekommt eine Wirkung. Ein Satz ohne Wirkung ist keine Analyse, sondern eine Aufzählung."},
{m:"m3", g:"Analyse", f:"Welche fünf Abschnitte hat der Analyseteil?", b:"Farbe, Bildmotiv, Komposition, Punkt-Linie-Fläche sowie Körper, Raum und Licht."},
{m:"m3", g:"Bildmotiv", f:"Was untersuchst du am Bildmotiv?", b:"Welche Gegenstände und Figuren gewählt sind und welche Stimmung sie auslösen, auch über Haltung und Kleidung."},
{m:"m3", g:"Interpretation", f:"Was passiert im Schritt Interpretation?", b:"Du fügst die Ergebnisse zu einer Deutung zusammen und nutzt Hintergrundwissen: Epoche, Biografie, Symbolik."},
{m:"m3", g:"Ikonizitätsgrad", f:"Was ist der Ikonizitätsgrad?", b:"Wie naturgetreu ein Bild malt, gemessen an der Illusion von Körper, Raum und Stofflichkeit."},
{m:"m3", g:"Ikonografie", f:"Aus welchen vier Blickwinkeln deutest du ein Werk?", b:"Zeitgeschichte, Biografie, Stilgeschichte und Ikonografie, also die Symboltradition."},
{m:"m3", g:"Bildgenre", f:"Was ist ein Bildgenre?", b:"Die Gattung des Motivs: Bildnis, Landschaft, Stillleben, Historienbild oder Akt."},
{m:"m3", g:"Bildanalyse-Schema", f:"Warum darfst du Beschreibung und Deutung nicht mischen?", b:"Die Analyse muss die Mittel erst objektiv belegen. Danach erst baut die Deutung auf diesen Fakten auf."},
{m:"m3", g:"Mittel-Wirkungs-Regel", f:"Woran erkennst du ein analysierenswertes Mittel?", b:"Nur Mittel mit nachweisbarer Wirkung gehören in den Text. Was nichts verändert, lässt du weg."},
{m:"m3", g:"Formulierungsbaukasten", f:"Wie baust du einen Mittel-Wirkungs-Satz?", b:"Mittel nennen, Wirkung benennen, beides verbinden: „Die Diagonale führt den Blick und wirkt dadurch dynamisch.“"},
{m:"m3", g:"Formulierungsbaukasten", f:"Wie formulierst du deinen ersten Eindruck?", b:"„Auf mich wirkt das Bild …“ oder „Trotz der hellen Farben wirkt es düster.“ Wirken, nicht bewerten."},
{m:"m3", g:"Formulierungsbaukasten", f:"Wie formulierst du einen Farbbefund?", b:"„Grüner Schirm und rote Blumen bilden einen Komplementärkontrast, der spannt.“ Befund plus Wirkung."},
{m:"m3", g:"Formulierungsbaukasten", f:"Welche Wendungen passen zur Deutung?", b:"„Der Künstler setzt … ein, um … auszudrücken“ oder „Das steht typisch für …“. So bindest du Wissen ein."},

/* ===== Modul 4: Impressionismus ===== */
{m:"m4", g:"Impressionismus", f:"Wann blühte der Impressionismus?", b:"Etwa von 1860 bis 1905."},
{m:"m4", g:"Impressionismus", f:"Was heißt Impressionismus wörtlich?", b:"Eindruck. Gemeint ist das unmittelbare Sehen, bevor der Verstand die Eindrücke einordnet."},
{m:"m4", g:"Namensgebung", f:"Woher hat die Epoche ihren Namen?", b:"Von Monets Bild „Impression, soleil levant“ von 1872. Der Kritiker Leroy machte den Titel 1874 zum Spottnamen."},
{m:"m4", g:"Salonsystem", f:"Was geschah 1874 in Paris?", b:"Rund 30 abgelehnte Künstler zeigten ihre Bilder selbst, im Atelier des Fotografen Nadar. Dort fiel der Name."},
{m:"m4", g:"Salonsystem", f:"Warum stellten die Künstler überhaupt selbst aus?", b:"Der offizielle Salon lehnte sie ab, weil ihre Bilder zu skizzenhaft wirkten. Also organisierten sie eigene Ausstellungen."},
{m:"m4", g:"Momentanheit", f:"Was ist das zentrale Ziel dieser Malerei?", b:"Den flüchtigen Augenblick festhalten: Licht, Atmosphäre und Stimmung des Moments."},
{m:"m4", g:"Impressionismus", f:"Nenne vier typische Merkmale.", b:"Helle Palette, sichtbarer Pinselstrich, Motive des modernen Lebens und Malerei im Freien."},
{m:"m4", g:"Pleinairmalerei", f:"Was ist Pleinairmalerei?", b:"Malen im Freien direkt vor dem Motiv. Nur so ließ sich eine wechselnde Lichtstimmung sofort festhalten."},
{m:"m4", g:"Palettenaufhellung", f:"Was heißt Aufhellung der Palette?", b:"Helle, reine Farben statt dunkler Mischtöne und fast ohne Schwarz. Das Bild wirkt licht und freundlich."},
{m:"m4", g:"Pinselduktus", f:"Warum blieb der Pinselstrich sichtbar?", b:"Das Bild sollte nicht mehr wie eine fertige Illusion aussehen. Die kurzen Striche mischen sich erst im Auge."},
{m:"m4", g:"Anschnitt", f:"Was ist ein Anschnitt?", b:"Figuren oder Wagen werden vom Bildrand abgeschnitten. Das wirkt wie ein Schnappschuss: zufällig, im Moment."},
{m:"m4", g:"Offene Form", f:"Was heißt offene Form?", b:"Scharfe Konturen lösen sich zugunsten der Farbe auf. Das Auge des Betrachters arbeitet am Bild mit."},
{m:"m4", g:"Bildraum", f:"Wie entsteht im Impressionismus Raumtiefe?", b:"Nicht über Fluchtpunkte und Lineale, sondern malerisch: über Farbe, Licht und Atmosphäre."},
{m:"m4", g:"Gegenwartsbezug", f:"Welche Motive malt der Impressionismus?", b:"Landschaften mit Wasser, das moderne Paris und Vergnügungen wie Ausflüge oder Oper, oft nebensächliche Momente."},
{m:"m4", g:"Gegenwartsbezug", f:"Was lehnten die Impressionisten thematisch ab?", b:"Geschichte, Religion und Moral. Sie malten stattdessen das moderne Leben ihrer eigenen Zeit."},
{m:"m4", g:"Haussmannisierung", f:"Was war die Haussmannisierung?", b:"Der Umbau von Paris zur Großstadt mit breiten Boulevards. Diese neue Stadt wurde zum Topos der Maler."},
{m:"m4", g:"Serienmalerei", f:"Warum malte Monet in Serien?", b:"Weil das eigentliche Thema das Licht ist: Dasselbe Motiv wird im Morgen-, Mittag- und Abendlicht gemalt."},
{m:"m4", g:"Technische Voraussetzungen", f:"Welche Neuerungen ermöglichten den Impressionismus?", b:"Farben in Tuben, transportable Staffeleien und fertige Keilrahmen. Damit konnte man unterwegs malen."},
{m:"m4", g:"Rivière-Formel", f:"Was meint der Satz, man male den Gegenstand um der Farben willen?", b:"Das Interesse gilt nicht dem Motiv, sondern wie es gemalt ist. Die Farbe wird wichtiger als der Gegenstand."},
{m:"m4", g:"Berthe Morisot", f:"Warum malten Künstlerinnen wie Morisot vor allem das Zuhause?", b:"Frauen der gehobenen Gesellschaft traf man nicht in Cafés. Deshalb wurden Familie, Mutterschaft und Porträts ihr Thema."},
{m:"m4", g:"Degas", f:"Welche Sonderrolle hatte Edgar Degas?", b:"Degas (1834–1917) malte Figuren in Akademie-Tradition und lehnte den Namen Impressionismus für sich ab."},
{m:"m4", g:"Hauptvertreter", f:"Nenne vier Maler des Impressionismus mit Lebensdaten.", b:"Manet 1832–1883, Monet 1840–1926, Renoir 1841–1919, Morisot 1841–1895."},
{m:"m4", g:"impressionistische Plastik", f:"Was änderte sich in der Bildhauerei?", b:"Oberflächen wurden skizzenhaft und uneben, sodass Licht und Bewegung mitspielen, bei Rodin, Claudel und Degas."},

/* ===== Modul 5: Epochen erkennen und anwenden ===== */
{m:"m5", g:"Epochenvergleich", f:"Wozu brauchst du Wissen über mehrere Epochen?", b:"In der Klausur ordnest du ein Bild zu und begründest es. Das geht nur, wenn du Epochen vergleichen kannst."},
{m:"m5", g:"Realismus", f:"Woran erkennst du den Realismus?", b:"Er malt die Gegenwart nüchtern und ohne Schönfärberei, auch einfache Leute und harte Arbeit."},
{m:"m5", g:"Naturalismus", f:"Was unterscheidet den Naturalismus vom Realismus?", b:"Der Naturalismus bildet noch genauer und objektiver ab, fast wie eine Fotografie. Er steigert den Realismus."},
{m:"m5", g:"Impressionismus", f:"Woran erkennst du den Impressionismus?", b:"Helle Palette, sichtbarer Pinselstrich, flüchtige Momente und Motive des modernen Lebens."},
{m:"m5", g:"Expressionismus", f:"Woran erkennst du den Expressionismus?", b:"Farben werden wild und unnatürlich, Formen verzerrt. Gemalt wird ein Gefühl, nicht ein Anblick."},
{m:"m5", g:"Abstrakte Kunst", f:"Was ist abstrakte Kunst?", b:"Es ist kein Gegenstand mehr zu sehen. Nur Farben, Formen und Linien tragen das Bild."},
{m:"m5", g:"Epochenvergleich", f:"Wie gehst du vor, wenn du eine Epoche bestimmen sollst?", b:"Erst die Bildmittel festhalten, dann prüfen: Abbildtreue, Farbwert, Pinselstrich, Motiv. Das Muster entscheidet."},
{m:"m5", g:"Epochenvergleich", f:"Woran unterscheidest du Naturalismus und Impressionismus am schnellsten?", b:"Sichtbarer Strich und lichte Farbe sprechen für den Impressionismus, glatte Detailmalerei für den Naturalismus."},
{m:"m5", g:"Epochenvergleich", f:"Warum wirkt Malweise oft stärker als das Motiv?", b:"Das Motiv können Epochen teilen. Entscheidend ist, wie gemalt ist: glatt oder sichtbar, düster oder licht."},
{m:"m5", g:"Caillebotte", f:"Nenne die Rahmendaten von Caillebottes „Straße in Paris an einem regnerischen Tag“.", b:"Gustave Caillebotte, 1877, Öl auf Leinwand, 212 × 276 cm, Querformat, heute Art Institute of Chicago."},
{m:"m5", g:"Caillebotte", f:"Welche zwei gegensätzlichen Wirkungen hat dieses Bild?", b:"Kühl, leer und trist, zugleich aber belebt, elegant und alltäglich. Diesen Widerspruch kannst du gut begründen."},
{m:"m5", g:"Caillebotte", f:"Wie begründest du das Bild als Impressionismus?", b:"Modernes Großstadtmotiv, lichte Palette, Erscheinungsfarbe und angeschnittene Figuren sprechen dafür."},
{m:"m5", g:"Bildanalyse-Schema", f:"Welche drei Schritte gehst du bei einem unbekannten Bild zuerst?", b:"Rahmendaten klären, ersten Eindruck notieren, dann die vier Bildmittelbereiche der Reihe nach prüfen."},
{m:"m5", g:"Interpretation", f:"Wie beendest du eine Analyse?", b:"Mit einem Fazit: Welche Merkmale überwiegen und wohin das Werk deshalb weist, auch wenn es gemischt ist."}
];

/* ---------- Glossar (Begriff → Erklärung, mit Modul-Querlinks) ---------- */
DATA.glossary = [
  /* Modul 1 */
  {t:"Bildmittel", d:"Die gestaltenden Mittel eines Bildes in vier Bereichen: Linien/Flächen, Farbe, Bildraum, Komposition.", m:"m1", also:["m3","m5"]},
  {t:"Punkt", d:"Kleinste Bildstelle; gereiht, gestreut oder geballt ergibt sie Muster, Struktur oder Modellierung.", m:"m1", also:["m3"]},
  {t:"Linie", d:"Richtungen wirken: senkrecht statisch, waagerecht ruhig, schräg dynamisch und blickführend, gebogen bewegt.", m:"m1", also:["m3","m5"]},
  {t:"Fläche", d:"Von Linien oder Farben begrenzte Form: geometrisch, organisch oder frei.", m:"m1", also:["m3"]},
  {t:"Komposition", d:"Der Bildaufbau aus Format, Richtungen, Positionen und Proportionen; statisch oder dynamisch.", m:"m1", also:["m3","m5"]},
  {t:"Kompositionsfigur", d:"Geometrische Grundform des Aufbaus: Dreieck wirkt fest, Kreis geschlossen, Oval verbindend.", m:"m1", also:["m5"]},
  {t:"Kompositionsskizze", d:"Skizze der Bildlinien, auch gedachter wie Blickrichtungen, um den Aufbau sichtbar zu machen.", m:"m1", also:["m3"]},
  {t:"Ordnungsprinzipien", d:"Reihung, Ballung, Streuung, Rhythmus, Symmetrie und Asymmetrie.", m:"m1", also:["m5"]},
  {t:"Goldener Schnitt", d:"Teilungsverhältnis von etwa 1 zu 1,618; wirkt harmonisch und ausgewogen.", m:"m1", also:["m5"]},
  {t:"Bildraum", d:"Der auf der Fläche suggerierte Raum, gegliedert in Vorder-, Mittel- und Hintergrund.", m:"m1", also:["m3","m4","m5"]},
  {t:"Raumschaffende Mittel", d:"Einfache Tiefenmittel: Höhenunterschied, Größenabnahme, Überdeckung, Staffelung, Helligkeit.", m:"m1", also:["m5"]},
  {t:"Parallelprojektion", d:"Konstruierte Raumdarstellung, bei der parallele Linien parallel bleiben – nicht sehsinngetreu.", m:"m1", also:[]},
  {t:"Fluchtpunktperspektive", d:"Fluchtlinien treffen sich auf dem Horizont; Zentralperspektive mit einem, Übereck mit zwei Fluchtpunkten.", m:"m1", also:["m5"]},
  {t:"Betrachterstandpunkt", d:"Froschperspektive macht mächtig, Normalperspektive bindet ein, Vogelperspektive klein und hilflos.", m:"m1", also:["m3","m5"]},
  {t:"Luftperspektive", d:"Malerisches Raummittel: Entferntes wird unschärfer, heller und kontrastärmer; auch Sfumato genannt.", m:"m1", also:["m4","m5"]},
  {t:"Farbperspektive", d:"Malerisches Raummittel: Ferne verblaut; warm wirkt nah, kalt wirkt fern.", m:"m1", also:["m5"]},
  {t:"Plastizität", d:"Erscheinung von Körperlichkeit durch Körperschatten, Schlagschatten oder Farbverlauf.", m:"m1", also:["m5"]},
  {t:"Bildformat", d:"Hoch-, Querformat, Quadrat, Rondo; das Querformat betont ein weites, natürliches Sichtfeld.", m:"m1", also:["m3","m5"]},
  /* Modul 2 */
  {t:"Farbdimensionen", d:"Farbton, Helligkeit und Sättigung – die drei messbaren Eigenschaften einer Farbe.", m:"m2", also:["m1","m5"]},
  {t:"Itten", d:"Johannes Itten beschrieb sieben Farbkontraste; sie sind das Grundwissen der Farbanalyse.", m:"m2", also:["m5"]},
  {t:"Farbe-an-sich-Kontrast", d:"Gegenüberstellung reinbunter, gesättigter Farben; leuchtend und kraftvoll.", m:"m2", also:[]},
  {t:"Hell-Dunkel-Kontrast", d:"Unterschied der Tonwerte; hebt hervor und erzeugt Spannung.", m:"m2", also:["m1","m5"]},
  {t:"Kalt-Warm-Kontrast", d:"Warme gegen kalte Farbtöne; spannungsvoll und belebend.", m:"m2", also:["m5"]},
  {t:"Komplementärkontrast", d:"Zwei im Farbkreis gegenüberliegende Farben, etwa Violett und Gelb.", m:"m2", also:["m5"]},
  {t:"Simultankontrast", d:"Das Auge ergänzt selbstständig die Gegenfarbe; benachbarte Flächen färben um.", m:"m2", also:[]},
  {t:"Qualitätskontrast", d:"Satte gegen getrübte Farbe; betont den Vordergrund und malt Luft.", m:"m2", also:["m1","m5"]},
  {t:"Quantitätskontrast", d:"Mengenverhältnis unterschiedlich großer Farbflächen; harmonisch ohne Dominanz.", m:"m2", also:[]},
  {t:"Symbolfarbe", d:"Farbe mit fester Bedeutung, etwa Gold für das Göttliche.", m:"m2", also:[]},
  {t:"Lokalfarbe", d:"Die Eigenfarbe eines Gegenstands; naturgetreu und sachlich.", m:"m2", also:["m5"]},
  {t:"Erscheinungsfarbe", d:"Farbe unter momentanen Lichtverhältnissen; stimmungsvoll – Schlüsselbegriff des Impressionismus.", m:"m2", also:["m4","m5"]},
  {t:"Ausdrucksfarbe", d:"Vom Gegenstand gelöste Farbe als Träger eines Gefühls; zentral im Expressionismus.", m:"m2", also:["m5"]},
  {t:"Autonome Farbe", d:"Farbe ohne Gegenstandsbezug, die selbst das Bildthema ist.", m:"m2", also:["m5"]},
  {t:"Kolorismus", d:"Malkonzept, in dem die kräftige Farbe selbst das Gestaltungsmittel ist.", m:"m2", also:[]},
  {t:"Valeurismus", d:"Tonwertiges Malkonzept in wenigen Farbtönen; ruhig, zurückhaltend, sachlich.", m:"m2", also:["m5"]},
  {t:"Lasurtechnik", d:"Viele dünne, durchscheinende Schichten; ruhige Oberfläche ohne sichtbaren Duktus.", m:"m2", also:["m5"]},
  {t:"Primamalerei", d:"Ein Auftrag in einem Gang, deckend bis pastos, ohne Vorzeichnung.", m:"m2", also:["m4"]},
  {t:"Pinselduktus", d:"Die sichtbare Handschrift des Pinselstrichs; im Impressionismus bewusst sichtbar.", m:"m2", also:["m4"]},
  {t:"Farbnamen schreiben", d:"Adjektiv klein (ist rot), Nomen groß (die Farbe Rot), zwei Farbtöne mit Bindestrich (blau-rot).", m:"m2", also:[]},
  /* Modul 3 */
  {t:"Bildanalyse-Schema", d:"Rahmendaten, Beschreibung, Analyse der Mittel mit Wirkung, Interpretation.", m:"m3", also:["m5"]},
  {t:"Rahmendaten", d:"Titel, Künstler, Jahr, Ort, Maße, Format, Technik, Genre und Bildmotiv im Einleitungssatz.", m:"m3", also:["m5"]},
  {t:"Beschreibung", d:"Nur das Sichtbare, ohne Wertung, vom Wesentlichen zum Detail, nach Bildbereichen gegliedert.", m:"m3", also:["m5"]},
  {t:"Erster Eindruck", d:"Die subjektive Wirkung am Anfang; sie wird in der Analyse bestätigt oder relativiert.", m:"m3", also:["m5"]},
  {t:"Mittel-Wirkungs-Regel", d:"Kernregel: jedes genannte Mittel wird mit seiner Wirkung verknüpft. Sonst ist es keine Analyse.", m:"m3", also:["m1","m5"]},
  {t:"Analyse", d:"Schritt 2: Mittel benennen und deuten, in den Abschnitten Farbe, Motiv, Komposition, Linie, Körper/Raum/Licht.", m:"m3", also:[]},
  {t:"Interpretation", d:"Schritt 3: Deutung aus den Fakten plus Rückbezug und Hintergrundwissen.", m:"m3", also:["m5"]},
  {t:"Ikonizitätsgrad", d:"Grad der Naturtreue, gemessen an der Illusion von Körper, Raum und Stofflichkeit.", m:"m3", also:["m5"]},
  {t:"Ikonografie", d:"Motiv- und Symboltradition als Deutungshintergrund, neben Zeit, Biografie und Epoche.", m:"m3", also:[]},
  {t:"Bildgenre", d:"Gattung des Motivs: Bildnis, Landschaft, Stillleben, Historienbild, Akt.", m:"m3", also:["m5"]},
  {t:"Bildmotiv", d:"Das Thema der Darstellung; die Wahl löst Assoziationen und Stimmungen aus.", m:"m3", also:["m5"]},
  {t:"Formulierungsbaukasten", d:"Bewährte Satzmuster für Einleitung, Beschreibung, Analyse und Deutung.", m:"m3", also:["m5"]},
  /* Modul 4 */
  {t:"Impressionismus", d:"Stilrichtung ca. 1860–1905: helle Palette, sichtbarer Strich, Freilichtmalerei, flüchtige Momente.", m:"m4", also:["m5"]},
  {t:"Namensgebung", d:"Monets „Impression, soleil levant“ von 1872 wurde 1874 durch Leroys Kritik zum Epochennamen.", m:"m4", also:["m5"]},
  {t:"Salonsystem", d:"Der Pariser Salon entschied über Anerkennung; abgelehnte Künstler stellten ab 1874 selbst aus.", m:"m4", also:["m5"]},
  {t:"Momentanheit", d:"Das Festhalten des flüchtigen Seheindrucks samt Atmosphäre, ohne Detailtreue.", m:"m4", also:["m5"]},
  {t:"Pleinairmalerei", d:"Malen im Freien vor dem Motiv – Grundlage der schnellen impressionistischen Arbeit.", m:"m4", also:["m5"]},
  {t:"Palettenaufhellung", d:"Helle, reine Farben und fast kein Schwarz; Abkehr von der dunklen Hell-Dunkel-Malerei.", m:"m4", also:["m5"]},
  {t:"Anschnitt", d:"Der Bildrand schneidet durch Motive; wirkt zufällig wie ein Schnappschuss.", m:"m4", also:["m5"]},
  {t:"Offene Form", d:"Konturen lösen sich zugunsten der Farbe auf und fordern die Sehleistung des Betrachters.", m:"m4", also:["m5"]},
  {t:"Gegenwartsbezug", d:"Motive des modernen Lebens statt Geschichte und Religion.", m:"m4", also:["m5"]},
  {t:"Haussmannisierung", d:"Der Umbau von Paris zur Großstadt mit Boulevards – Bildthema des Impressionismus.", m:"m4", also:["m5"]},
  {t:"Serienmalerei", d:"Dasselbe Motiv im wechselnden Licht; Thema ist die Lichtstimmung selbst.", m:"m4", also:[]},
  {t:"Technische Voraussetzungen", d:"Farben in Tuben, transportable Staffeleien, fertige Keilrahmen – Basis der Freilichtmalerei.", m:"m4", also:["m5"]},
  {t:"Rivière-Formel", d:"Man male den Gegenstand um der Farben willen: Die Behandlung wird wichtiger als das Motiv.", m:"m4", also:["m5"]},
  {t:"Berthe Morisot", d:"Berthe Morisot (1841–1895), impressionistische Malerin von Familie, Interieur und Porträts.", m:"m4", also:[]},
  {t:"Degas", d:"Edgar Degas (1834–1917), Figurenmaler in Akademie-Tradition; lehnte den Begriff Impressionismus ab.", m:"m4", also:[]},
  {t:"Hauptvertreter", d:"Manet, Monet, Renoir, Morisot, Pissarro, Degas; in Deutschland Liebermann und Corinth.", m:"m4", also:["m5"]},
  {t:"impressionistische Plastik", d:"Skizzenhafte, unebene Oberflächen, die Licht und Bewegung zeigen: Rodin, Claudel, Degas, Rosso.", m:"m4", also:[]},
  /* Modul 5 */
  {t:"Epochenvergleich", d:"Zuordnung immer über die Machart begründen: Abbildtreue, Farbwert, Pinselstrich, Motiv.", m:"m5", also:["m3","m4"]},
  {t:"Realismus", d:"Nüchterne Darstellung der Gegenwart ohne Schönfärberei, ca. 1848–1890.", m:"m5", also:["m4"]},
  {t:"Naturalismus", d:"Steigerung des Realismus: möglichst objektive, fotgenaue Abbildung, ca. 1870–1900.", m:"m5", also:["m4"]},
  {t:"Expressionismus", d:"Farbgewaltige, verzerrte Malerei als Ausdruck von Gefühlen, ca. 1905–1925.", m:"m5", also:["m2"]},
  {t:"Abstrakte Kunst", d:"Malerei ohne Gegenstand; Farbe, Form und Linie sind selbst das Bild.", m:"m5", also:["m2"]},
  {t:"Caillebotte", d:"Gustave Caillebotte (1848–1894) malt moderne Großstadt, aber glatt und detailliert – zwischen den Stilen.", m:"m5", also:["m4"]}
];

/* Stabile Karten-Ids: sie hängen am Fragetext, nicht an der Position in der Liste.
   So verschiebt eine eingefügte oder umsortierte Karte keinen gespeicherten Lernfortschritt. */
DATA.slug = function(s){
  return String(s).toLowerCase()
    .replace(/[„“"'?.!,:;()]/g, " ")
    .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 44);
};
DATA.cards.forEach(function(c){ c.id = c.m + ":" + DATA.slug(c.f); });
