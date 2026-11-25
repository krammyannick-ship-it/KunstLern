/* ============================================================
   ANWENDUNGS- UND TRANSFERÜBUNGEN
   Typen: mc (Multiple Choice) | order (Reihenfolge) | sort (Zuordnung)
          | cloze (Lückentext) | build (Satz bauen)
   m:"exam" = gemischte Transfer-Prüfung
   ============================================================ */
window.DATA = window.DATA || {};

DATA.exercises = [

/* ================= Modul 1: Bildmittel ================= */
{id:"e1", m:"m1", type:"sort",
 q:"Ordne jede Wirkung der richtigen Linienrichtung zu.",
 buckets:["senkrecht","waagerecht","schräg","gebogen"],
 items:[
  {t:"statisch, fest, standhaft", b:0},
  {t:"ruhig und weit – wie der Horizont", b:1},
  {t:"dynamisch, blickführend, tiefenwirksam", b:2},
  {t:"bewegt und lebendig", b:3},
  {t:"so wirken Fluchtlinien", b:2},
  {t:"so wirken Horizontlinien", b:1}
 ],
 why:"Merksatz: senkrecht = stehend, waagerecht = ruhig, schräg = in Bewegung, gebogen = lebendig."},

{id:"e2", m:"m1", type:"mc",
 q:"Bäume stehen hintereinander, der hintere wird teilweise verdeckt. Der Wald wirkt tiefer. Welches Mittel wirkt hier?",
 opts:["Die Überdeckung als raumschaffendes Mittel.","Der Simultankontrast zwischen den Farben.","Die Symmetrie der Bildachse.","Das Querformat als Bildformat."],
 c:0, why:"Überdeckung ist eines der einfachsten raumschaffenden Mittel – ohne jede Perspektivkonstruktion."},

{id:"e3", m:"m1", type:"cloze",
 q:"Berge am Horizont wirken blass, unscharf und leicht blau. Der Maler nutzt hier die ___ und die ___. Beide Mittel arbeiten ohne ___ .",
 answers:["Luftperspektive","Farbperspektive","Perspektivkonstruktion"],
 pool:["Luftperspektive","Farbperspektive","Perspektivkonstruktion","Fluchtpunktperspektive","Parallelprojektion","Überdeckung"],
 why:"Luft- und Farbperspektive sind die malerischen Raummittel; die konstruierten arbeiten mit Fluchtpunkten."},

{id:"e4", m:"m1", type:"build",
 q:"Setze die Bausteine zum Mittel-Wirkungs-Satz in die richtige Reihenfolge.",
 chips:["Die Diagonale","führt den Blick","und wirkt","dynamisch"],
 why:"Immer dieselbe Struktur: Mittel nennen, Vorgang beschreiben, Wirkung benennen."},

{id:"e5", m:"m1", type:"mc",
 q:"Eine Figur wird von unten gemalt und ragt in den Himmel. Welche Wirkung hat dieser Standpunkt?",
 opts:["Sie wirkt mächtig, groß und erhaben.","Sie wirkt klein, hilflos und schwach.","Sie wirkt neutral und sachlich.","Sie wirkt flach und gegenstandslos."],
 c:0, why:"Die Froschperspektive (Untersicht) überhöht das Motiv; die Vogelperspektive verkleinert es."},

/* ================= Modul 2: Farbe ================= */
{id:"e6", m:"m2", type:"sort",
 q:"Welcher Itten-Kontrast steckt in der Beschreibung?",
 buckets:["Farbe an sich","Hell-Dunkel","Komplementär","Quantität"],
 items:[
  {t:"reine, kräftige Farben nebeneinander", b:0},
  {t:"ein helles Tuch vor dunklem Grund", b:1},
  {t:"Violett direkt neben Gelb", b:2},
  {t:"eine kleine rote Fläche neben großer grauer", b:3},
  {t:"große Unterschiede der Tonwerte", b:1},
  {t:"Mengenverhältnis der Farbflächen", b:3}
 ],
 why:"Die sieben Itten-Kontraste sind das Rückgrat der Farbanalyse – hier vier davon."},

{id:"e7", m:"m2", type:"mc",
 q:"Ein Maler malt den Himmel so, wie er in diesem Moment im Licht wirkt. Welche Farbgebung ist das?",
 opts:["Erscheinungsfarbe","Lokalfarbe","Symbolfarbe","Autonome Farbe"],
 c:0, why:"Erscheinungsfarbe malt den Lichteindruck, Lokalfarbe die vermeintliche Eigenfarbe des Gegenstands."},

{id:"e8", m:"m2", type:"mc",
 q:"Eine graue Fläche auf rotem Grund wirkt leicht grünlich. Was passiert da?",
 opts:["Das Auge ergänzt die Gegenfarbe: Simultankontrast.","Die Flächen bilden einen Quantitätskontrast.","Es liegt eine getrübte Lasurschicht vor.","Die Malerei ist valeuristisch aufgebaut."],
 c:0, why:"Beim Simultankontrast ergänzt das Auge selbstständig den Komplementärpartner der gesehenen Farbe."},

{id:"e9", m:"m2", type:"cloze",
 q:"Eine Farbe hat drei Dimensionen: den ___, die Helligkeit und die ___. Malerei in nur einer Farbe nennt man ___ .",
 answers:["Farbton","Sättigung","monochrom"],
 pool:["Farbton","Sättigung","monochrom","Kontrast","Format","Anschnitt"],
 why:"Farbton, Helligkeit, Sättigung – mit diesen drei Angaben wird eine Farbbeschreibung präzise."},

{id:"e10", m:"m2", type:"mc",
 q:"Wie schreibst du die Farbangabe in diesem Satz richtig? „Der See ist …“",
 opts:["tiefgrün","tief-grün","Tiefgrün","grün-tief"],
 c:0, why:"Tonangaben werden zusammengeschrieben, das Adjektiv bleibt klein: Der See ist tiefgrün."},

/* ================= Modul 3: Bildanalyse ================= */
{id:"e11", m:"m3", type:"order",
 q:"Bringe die Phasen der Bildanalyse in die richtige Reihenfolge.",
 items:["Rahmendaten und Einleitungssatz","Erster Eindruck und sachliche Beschreibung","Analyse der Mittel mit Wirkung","Interpretation und Fazit"],
 why:"Immer derselbe Trichter: Fakten, dann Was-sehe-ich, dann Wie-ist-gemacht, zuletzt die Deutung."},

{id:"e12", m:"m3", type:"mc",
 q:"Welcher Satz gehört NICHT in die sachliche Beschreibung?",
 opts:["Die Frau im Vordergrund wirkt einsam und verlassen.","Im Vordergrund steht eine Frau mit Regenschirm.","Der Hintergrund ist in grauen Tönen gehalten.","Das Bild ist in Vorder-, Mittel- und Hintergrund gegliedert."],
 c:0, why:"„wirkt einsam“ ist eine Deutung. Die Beschreibung nennt nur, was zu sehen ist – ohne Wertung."},

{id:"e13", m:"m3", type:"build",
 q:"Baue den Einleitungssatz aus den Bausteinen zusammen.",
 chips:["Das Gemälde „Der Sonnenschirm“","von Francisco de Goya","entstand 1777","als Öl auf Leinwand."],
 why:"Titel, Künstler, Jahr, Technik – so beginnt jede Analyse. Maße und Ort folgen im zweiten Satz."},

{id:"e14", m:"m3", type:"sort",
 q:"In welche Analysephase gehört diese Aussage?",
 buckets:["Rahmendaten","Beschreibung","Analyse","Deutung"],
 items:[
  {t:"Das Bild misst 104 × 152 cm.", b:0},
  {t:"Im Mittelgrund steht ein Paar.", b:1},
  {t:"Die Diagonale führt den Blick nach rechts.", b:2},
  {t:"Das Werk zeigt die Muße des Bürgertums.", b:3},
  {t:"Es hängt heute im Museo del Prado.", b:0},
  {t:"Grün und Rot stehen als Gegenpaar nebeneinander.", b:2}
 ],
 why:"Fakten sind Rahmendaten, Sehen ist Beschreibung, Mittel plus Wirkung ist Analyse, Sinn ist Deutung."},

{id:"e15", m:"m3", type:"cloze",
 q:"Die wichtigste Regel lautet: Jedes Mittel wird mit seiner ___ verknüpft. Ein Befund ohne diese ___ ist am Ende nur eine ___ .",
 answers:["Wirkung","Wirkung","Aufzählung"],
 pool:["Wirkung","Aufzählung","Beweis","Farbe","Ordnung","Größe"],
 why:"Ein Mittel zu benennen ist nur die Hälfte. Punkte gibt es erst für die begründete Wirkung."},

/* ================= Modul 4: Impressionismus ================= */
{id:"e16", m:"m4", type:"mc",
 q:"Wer machte den Bildtitel „Impression“ zum Namen einer ganzen Epoche?",
 opts:["Der Kritiker Louis Leroy","Der Fotograf Nadar","Der Maler Edgar Degas","Der Sammler Georges Rivière"],
 c:0, why:"Leroy spottete 1874 über Monets Bild – und prägte damit ungewollt den Begriff."},

{id:"e17", m:"m4", type:"order",
 q:"Bringe die Meilensteine in die richtige zeitliche Reihenfolge.",
 items:["Die Epoche beginnt um 1860","Monet malt „Impression, soleil levant“","Die Künstler stellen im Atelier Nadar aus","Die Epoche klingt um 1905 aus"],
 why:"Rahmung um 1860 bis 1905; das namengebende Bild entsteht 1872, der Name fällt 1874."},

{id:"e18", m:"m4", type:"sort",
 q:"Typisch für den Impressionismus oder nicht?",
 buckets:["typisch","atypisch"],
 items:[
  {t:"helle, lichtige Palette", b:0},
  {t:"sichtbarer, kurzer Pinselstrich", b:0},
  {t:"Raumtiefe über Farbe und Licht", b:0},
  {t:"glatt verwischte Oberfläche ohne Strich", b:1},
  {t:"dunkle Historienmalerei im Studio", b:1},
  {t:"streng symmetrische Anlage in der Bildmitte", b:1}
 ],
 why:"Merkhilfe: hell, sichtbar gemalt, modernes Motiv, im Freien gemalt – alles andere ist untypisch."},

{id:"e19", m:"m4", type:"mc",
 q:"Was machte das Malen im Freien praktisch erst möglich?",
 opts:["Fertige Farben in Tuben und tragbare Staffeleien","Die Erfindung der Fotografie","Größere Bildformate aus Metall","Neue Kurse an den Akademien"],
 c:0, why:"Farben in Tuben, transportable Staffeleien und fertige Keilrahmen waren die technische Voraussetzung."},

{id:"e20", m:"m4", type:"cloze",
 q:"Die sichtbare Handschrift des Pinsels heißt ___ . Schneidet der Bildrand eine Figur an, spricht man von einem ___ . Beides erzeugt den Charakter des ___ .",
 answers:["Pinselduktus","Anschnitt","Flüchtigen"],
 pool:["Pinselduktus","Anschnitt","Flüchtigen","Ikonizitätsgrad","Goldenen Schnitt","Quadratischen"],
 why:"Sichtbarer Strich und Anschnitt sind die Kennzeichen des Momenthaften: zufällig, eben erst gesehen."},

{id:"e21", m:"m4", type:"mc",
 q:"Warum malten Künstlerinnen wie Berthe Morisot vor allem Familie und Interieur?",
 opts:["Ihnen blieb der Zugang zu Cafés und Atelierkreisen verwehrt.","Sie durften nach Vorschrift keine Landschaften malen.","Das Format ihrer Leinwände war dafür zu klein.","Sie folgten einem Verbot der Akademie für Großformate."],
 c:0, why:"Der soziale Raum war begrenzt: Cafés und Salonleben blieben ihnen weitgehend verschlossen."},

/* ================= Modul 5: Epochen erkennen ================= */
{id:"e22", m:"m5", type:"sort",
 q:"Zu welcher Epoche gehört das Merkmal?",
 buckets:["Realismus und Naturalismus","Impressionismus","Expressionismus","Abstrakte Kunst"],
 items:[
  {t:"glatt und fast fotogenau gemalt", b:0},
  {t:"lichte Farbe und sichtbarer Strich", b:1},
  {t:"wilde, unnatürliche Farben, verzerrte Formen", b:2},
  {t:"gar kein Gegenstand mehr zu sehen", b:3},
  {t:"Arbeitsleben nüchtern und ohne Schönfärberei", b:0},
  {t:"ein flüchtiger Lichtmoment als Thema", b:1}
 ],
 why:"Der Vergleich der Machart entscheidet – nicht das Motiv."},

{id:"e23", m:"m5", type:"mc",
 q:"Ein Bild zeigt eine Fabrik, nüchtern und detailgenau, ohne Lichtstimmung. Welche Epoche ist das?",
 opts:["Realismus – sachliche Gegenwart, glatte Malweise","Impressionismus – modernes Motiv, lichte Palette","Expressionismus – grelle Farbe, harte Konturen","Abstrakte Kunst – Form und Fläche statt Gegenstand"],
 c:0, why:"Ein modernes Motiv allein macht noch keinen Impressionismus: entscheidend ist die Malweise."},

{id:"e24", m:"m5", type:"mc",
 q:"Caillebotte malt eine moderne Boulevardszene glatt, detailliert und ohne sichtbaren Pinselstrich. Wie ordnest du ihn ein?",
 opts:["Zwischen Naturalismus und Impressionismus","Rein dem Naturalismus – das Motiv ist gleichgültig","Rein dem Impressionismus – die Malweise ist gleichgültig","Dem Expressionismus – wegen der kräftigen Farben"],
 c:0, why:"Motiv und Farbigkeit sind impressionistisch, die glatte Ausführung naturalistisch. Beides darf man benennen."},

{id:"e25", m:"m5", type:"order",
 q:"In dieser Reihenfolge bestimmst du die Epoche eines unbekannten Bildes.",
 items:["Bildmittel notieren","Abbildtreue prüfen","Farbwert und Pinselstrich prüfen","Motiv und Epochennetz abgleichen"],
 why:"Erst die Beschreibung der Machart, dann das Abgleichen – sonst rät man nur."},

{id:"e26", m:"m5", type:"cloze",
 q:"Sind die Farben wild und die Konturen hart, ordnest du das Werk dem ___ zu. Fehlt dagegen jeder Gegenstand, ist die Kunst ___ . Malen sie möglichst objektive Wirklichkeit, heißt die Richtung ___ .",
 answers:["Expressionismus","abstrakt","Naturalismus"],
 pool:["Expressionismus","abstrakt","Naturalismus","Realismus","Kubismus","Symbolismus"],
 why:"Farbwert, Gegenstandslosigkeit und Abbildtreue sind die drei schnellsten Trennmerkmale."},

/* ================= Modul 6: Wortschatz ================= */
{id:"e27", m:"m6", type:"sort",
 q:"In welches Regal räumst du dieses Wort ein?",
 buckets:["Licht","Pinselstrich","Wirkung","Deutung"],
 items:[
  {t:"flimmernd", b:0},
  {t:"getupft", b:1},
  {t:"luftig", b:2},
  {t:"deutet darauf hin", b:3},
  {t:"lichtdurchflutet", b:0},
  {t:"skizzenhaft", b:1}
 ],
 why:"Vier Regale reichen: Licht, Strich, Wirkung, Deutung. In jedes passt ein gutes Wort."},

{id:"e28", m:"m6", type:"mc",
 q:"Welcher Satz ist eine gelungene Analyse-Aussage?",
 opts:["Die Diagonale führt den Blick nach rechts und lässt das Bild dynamisch wirken.","Das Bild ist wunderschön und zeigt, dass der Maler sehr gut malen konnte.","Man sieht einen Fluss mit Bäumen, einem Boot und viel Grün im Hintergrund.","Das Bild gefällt mir sehr, weil es einfach gut gemacht ist."],
 c:0, why:"Nur der erste Satz nennt Mittel, Vorgang und Wirkung – das ist die Formel jeder Analyse."},

{id:"e29", m:"m6", type:"build",
 q:"Baue aus den Bausteinen einen sauberen Wirkungssatz.",
 chips:["Die kühlen Grautöne","lassen die Straße","verlassen und weit","wirken"],
 why:"Immer dieselbe Formel: Mittel nennen, Vorgang sagen, Wirkung benennen."},

{id:"e30", m:"m6", type:"cloze",
 q:"Das Bild wirkt ___, weil der Maler das Licht ___ behandelt. Der Strich bleibt kurz und ___, die Konturen lösen sich auf.",
 answers:["luftig","flimmernd","sichtbar"],
 pool:["luftig","flimmernd","sichtbar","glatt","symmetrisch","dunkel"],
 why:"Wirkung, Grund und Machart in einem Satz – so liest sich eine echte Analyse."},

{id:"e31", m:"m6", type:"mc",
 q:"Welches Wort passt zum impressionistischen Pinselstrich?",
 opts:["getupft","lasiert","symmetrisch","standhaft"],
 c:0, why:"Getupfte, kurze Striche sind typisch. Lasur legt Farbe dagegen glatt und unsichtbar übereinander."},

{id:"e32", m:"m6", type:"sort",
 q:"Vage Wertung oder belastbare Formulierung?",
 buckets:["vage","begründet"],
 items:[
  {t:"Das Bild ist beeindruckend und sehr modern.", b:0},
  {t:"Die angeschnittenen Figuren wirken zufällig wie ein Schnappschuss.", b:1},
  {t:"Die Farben sind wunderschön.", b:0},
  {t:"Die Schatten sind blau und violett gemalt, nicht grau.", b:1},
  {t:"Der Maler war ausgesprochen begabt.", b:0},
  {t:"Die helle Palette nimmt der Szene jede Schwere.", b:1}
 ],
 why:"Der Unterschied ist immer derselbe: Die gute Formulierung nennt ein Mittel und seine Wirkung."},

/* ================= Transfer-Prüfung ================= */
{id:"x1", m:"exam", type:"mc",
 q:"Ein Bild zeigt eine Person winzig am Fuß einer steilen Treppe, die nach oben führt. Welche Mittel erzeugen die Wirkung?",
 opts:["Vogelperspektive und Diagonale","Komplementärkontrast und Raster","Lasurtechnik und Format","Serienmalerei und Anschnitt"],
 c:0, why:"Die Aufsicht verkleinert die Figur, die Diagonale führt den Blick – Mittel und Wirkung zusammen denken."},

{id:"x2", m:"exam", type:"mc",
 q:"Warum setzt ein Maler Violett und Gelb unmittelbar nebeneinander?",
 opts:["Weil die beiden eine Komplementärspannung erzeugen","Weil sie zusammen eine Mischfarbe ergeben","Weil das ein monochromes Konzept verlangt","Weil es den einzigen Weg zur Luftperspektive zeigt"],
 c:0, why:"Violett und Gelb liegen sich im Farbkreis gegenüber: maximale Spannung und Leuchtkraft."},

{id:"x3", m:"exam", type:"order",
 q:"Bringe die Arbeitsschritte in eine fachlich saubere Reihenfolge.",
 items:["Rahmendaten notieren","Ersten Eindruck formulieren","Mittel mit Wirkung analysieren","Deutung mit Epochewnissen schließen"],
 why:"Der Ablauf ist in jeder Klausur gleich – nur das Bild wechselt."},

{id:"x4", m:"exam", type:"sort",
 q:"Ordne die Aussagen der richtigen Analysephase zu.",
 buckets:["Beschreibung","Analyse","Deutung","Rahmendaten"],
 items:[
  {t:"Das Bild ist 80 × 60 cm groß.", b:3},
  {t:"Zwei Kinder sitzen am Ufer.", b:0},
  {t:"Die Wasseroberfläche ist in kurzen Strichen gemalt.", b:1},
  {t:"Das Werk feiert unbeschwerte Kindheit.", b:2},
  {t:"Die helle Palette lässt den Mittag warm wirken.", b:1},
  {t:"Der Maler gehört zur Freilichtmalerei.", b:2}
 ],
 why:"Fakten, Sehen, Mittel mit Wirkung, Sinn – die vier Phasen darf man nicht vermischen."},

{id:"x5", m:"exam", type:"cloze",
 q:"Ein Bild wirkt kalt und einsam, obwohl es hell ist. Das erklärst du mit dem ___ und dem ___ – denn jedes Mittel wird mit seiner ___ verknüpft.",
 answers:["Kalt-Warm-Kontrast","Hell-Dunkel-Kontrast","Wirkung"],
 pool:["Kalt-Warm-Kontrast","Hell-Dunkel-Kontrast","Wirkung","Anschnitt","Format","Serienmalerei"],
 why:"Helligkeit allein ist keine Stimmung: kalte Farbtöne und Tonwerte tragen die Wirkung."},

{id:"x6", m:"exam", type:"build",
 q:"Baue den Fachsatz zur Vogelperspektive zusammen.",
 chips:["Die Vogelperspektive","lässt die Figur","klein und hilflos","wirken"],
 why:"Standpunkt wählen, Wirkung benennen – genau so liest sich eine Analyse."},

{id:"x7", m:"exam", type:"mc",
 q:"Woran unterscheidest du Naturalismus von Impressionismus am sichersten?",
 opts:["Am Pinselstrich: glatt oder sichtbar","Am Format: quer oder hoch","Am Aufbewahrungsort des Werks","An der Zahl der dargestellten Figuren"],
 c:0, why:"Motiv und Format können gleich sein. Die Machart trennt die Epochen voneinander."},

{id:"x8", m:"exam", type:"mc",
 q:"Ein Bild ist in wenigen Graublautönen mit feinen Abstufungen gemalt. Welches Malkonzept und welche Wirkung?",
 opts:["Valeuristisch – ruhig, zurückhaltend, sachlich","Koloristisch – leuchtend, kraftvoll, laut","Monochrom – aggressiv, spannungsvoll, laut","Expressiv – gefühlvoll, verzerrt, grell"],
 c:0, why:"Tonwerte weniger Farbtöne sind valeuristisch; die Wirkung ist ruhig und sachlich."},

{id:"x9", m:"exam", type:"mc",
 q:"Du sollst ein impressionistisches Bild in einem Satz einordnen, ohne zu werten. Welcher Satz gelingt?",
 opts:["Kurze, sichtbare Striche und eine helle Palette lassen den Augenblick flüchtig wirken.","Das Bild ist wunderschön und zeigt, dass der Maler sehr gut malen konnte.","Man sieht einen Fluss mit Bäumen, einem Boot und drei Figuren am Ufer.","Das Bild ist modern, weil es in die Moderne passt."],
 c:0, why:"Mittel, Vorgang, Wirkung – ohne Wertung, ohne bloße Aufzählung und ohne zirkulierende Behauptung."},

{id:"x10", m:"exam", type:"build",
 q:"Baue die Überleitung von der Analyse zur Deutung zusammen.",
 chips:["Die aufgelösten Konturen und die helle Palette","deuten darauf hin,","dass","der flüchtige Seheindruck","das eigentliche Thema ist"],
 why:"„deuten darauf hin, dass …“ ist die Brücke: aus dem Befund wird eine begründete Lesart."}
];
