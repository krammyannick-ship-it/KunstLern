/* ============================================================
   ANWENDUNGS- UND TRANSFERÜBUNGEN
   Typen: mc (Multiple Choice) | order (Reihenfolge) | sort (Zuordnung)
          | cloze (Lückentext) | build (Satz bauen)
   m:"exam" = gemischte Transfer-Prüfung
   ============================================================ */
window.DATA = window.DATA || {};

DATA.exercises = [

/* ================= Modul 1: Bildmittel ================= */
{id:"e1", m:"m1", type:"mc",
 q:"Viele aneinandergesetzte Punkte nehmen wir als …",
 opts:["… eine große zusammenhängende Fläche.", "… Muster, Struktur oder Licht-Schatten-Modellierung.", "… räumliche Tiefe (Perspektive).", "… Komplementärkontrast."],
 c:1, why:"Der Punkt ist die kleinste wahrgenommene Einheit: In Reihung, Raster, Streuung oder Ballung gesetzt ergibt er Muster, Struktur oder Modellierung."},

{id:"e2", m:"m1", type:"sort",
 q:"Ordne die Wirkungen der richtigen Linienrichtung zu.",
 buckets:["senkrecht","waagerecht","schräg / schief","gebogen"],
 items:[
  {t:"statisch, standhaft, fest", b:0},
  {t:"ruhig, weit – betont den Betrachterstandpunkt", b:1},
  {t:"dynamisch, blickführend, raumtiefeerzeugend", b:2},
  {t:"bewegt, lebendig (z. B. Regenschirme: beschützend)", b:3},
  {t:"Horizont-Linien wirken so", b:1},
  {t:"Fluchtlinien wirken so", b:2}
 ]},

{id:"e3", m:"m1", type:"mc",
 q:"Das Seitenverhältnis des Goldenen Schnitts beträgt …",
 opts:["1 : 1,5 (ca. 1/2 zu 1/2)","1 : 1,618 (ca. 3/8 zu 5/8)","1 : 2 (Drittelung)","2 : 3 (Halbierung)"],
 c:1, why:"Goldener Schnitt = 1 : 1,618, näherungsweise drei Achtel zu fünf Achtel – wirkt harmonisch und ausgewogen."},

{id:"e4", m:"m1", type:"mc",
 q:"Ein Werbeplakat zeigt eine Heldin aus extremer Froschperspektive. Welche Wirkung wird beabsichtigt?",
 opts:["Sie wirkt hilflos und klein.","Sie wirkt mächtig, groß und stark.","Sie wirkt neutral und gleichberechtigt.","Die Szene wirkt wie ein Schnappschuss."],
 c:1, why:"Untersicht (Froschperspektive) lässt den Gegenstand mächtig und erhaben wirken; Aufsicht (Vogelperspektive) würde ihn klein und hilflos machen."},

{id:"e5", m:"m1", type:"sort",
 q:"Sortiere die Mittel in ihre Bereiche.",
 buckets:["Raum / Räumlichkeit","Farbe","Komposition / Ordnung"],
 items:[
  {t:"Überdeckung", b:0},
  {t:"Größenabnahme", b:0},
  {t:"Luftperspektive", b:0},
  {t:"Komplementärkontrast", b:1},
  {t:"Kalt-Warm-Kontrast", b:1},
  {t:"Qualitätskontrast", b:1},
  {t:"Ballung", b:2},
  {t:"Streuung", b:2},
  {t:"Symmetrie", b:2}
 ]},

{id:"e6", m:"m1", type:"cloze",
 q:"Berge am Horizont wirken dunstig, unscharf und leicht blau: Der Maler nutzt die ___ und die ___. Beide gehören zu den ___ Raumdarstellungen der Landschaftsmalerei.",
 answers:["Luftperspektive","Farbperspektive","malerischen"],
 pool:["Luftperspektive","Farbperspektive","malerischen","konstruierten","Zentralperspektive","Parallelprojektion"],
 why:"Luftperspektive (unscharf, heller, kontrastärmer) und Farbperspektive (Verblauung) sind die malerischen Raummittel – im Gegensatz zu den konstruierten (Fluchtpunkt-/Parallelprojektion)."},

{id:"e7", m:"m1", type:"build",
 q:"Baue den Fachsatz zur Fluchtpunktperspektive – klicke die Bausteine in richtiger Reihenfolge.",
 chips:["Die Fluchtpunktperspektive","kommt","der menschlichen Wahrnehmung","am nächsten"],
 why:"Fluchtpunkt, Horizont und Fluchtlinien imitieren das räumliche Sehen – darum ist sie die natürlichste der konstruierten Raumdarstellungen."},

/* ================= Modul 2: Farbwissen ================= */
{id:"e8", m:"m2", type:"mc",
 q:"Eine graue Fläche neben einer großen roten Fläche wirkt leicht grünlich, weil das Auge selbsttätig die Komplementärfarbe ergänzt. Das ist …",
 opts:["der Qualitätskontrast.","der Simultankontrast.","der Kalt-Warm-Kontrast.","die Verblauung."],
 c:1, why:"Simultankontrast = Wechselwirkung: Das Auge bildet zur gesehenen Farbe automatisch deren Komplementär­farbe – eine optische Täuschung (Itten, Kontrast 5/7)."},

{id:"e9", m:"m2", type:"mc",
 q:"Monet malt denselben Heuhaufen im Nebel, in der Mittagssonne und im Abendrot. Welche Farbgebung liegt vor?",
 opts:["Lokalfarbe – die Eigenfarbe des Heus","Ausdrucksfarbe – innere Zustände","Erscheinungsfarbe – momentane Lichtverhältnisse","Symbolfarbe – symbolische Bedeutung"],
 c:2, why:"Bei der Erscheinungsfarbe zählt, wie der Gegenstand unter bestimmten momentanen Lichtverhältnissen erscheint – das Kernprinzip der impressionistischen (Serien-)Malerei."},

{id:"e10", m:"m2", type:"mc",
 q:"Ein Bild ist „Ton in Ton“ in Violettgrautönen gemalt und lebt von feinen Helligkeitsunterschieden. Sein Malkonzept ist …",
 opts:["koloristisch","valeuristisch (tonwertig)","monochrom","expressiv (Ausdrucksfarbe)"],
 c:1, why:"Valeurismus = tonwertiges Malkonzept mit feinen Valeurs in einem eingeschränkten Spektrum. Monochrom wäre streng genommen nur EIN Farbton – valeuristisch beschreibt das Konzept mit feinen Abstufungen."},

{id:"e11", m:"m2", type:"sort",
 q:"Nach Itten: Ordne die Farbtöne den Temperaturgruppen zu.",
 buckets:["warm","kalt"],
 items:[
  {t:"Gelb", b:0},
  {t:"Rotviolett", b:0},
  {t:"Orange", b:0},
  {t:"Gelbgrün", b:1},
  {t:"Violett", b:1},
  {t:"Ultramarinblau", b:1}
 ]},

{id:"e12", m:"m2", type:"sort",
 q:"Rechtschreibung: Kommt hier ein Bindestrich hin – oder nicht?",
 buckets:["ohne Bindestrich (ein Wort)","mit Bindestrich (zwei Farben)"],
 items:[
  {t:"tief___ (See)", b:0},
  {t:"himmel___ (Himmel)", b:0},
  {t:"knall___ (Kirschen)", b:0},
  {t:"blau___rotes T-Shirt: ein Mischfarbton", b:0},
  {t:"Das T-Shirt ist blau___rot gestreift.", b:1},
  {t:"Der Saum ist blau___rot (zwei erkennbare Farben).", b:1}
 ],
 why:"Tönungen (tiefgrün …) und Mischungen (blaurot) schreibt man zusammen; zwei erkennbare Farben trennt der Bindestrich."},

{id:"e13", m:"m2", type:"mc",
 q:"„Mein Hochzeitskleid war ein Traum in ___.“ Welche Schreibung ist richtig?",
 opts:["orange","Orange","orangefarbig","orangefarbenem"],
 c:1, why:"Nach einer Präposition („in“) steht immer ein Nomen – die Farbe wird großgeschrieben: „ein Traum in Orange“. Gleiches gilt z. B. bei „bei Rot über die Straße“."},

{id:"e14", m:"m2", type:"mc",
 q:"Welche Schreibung ist korrekt: „Man sollte nicht immer alles zu …\"",
 opts:["zu schwarzmalen","zu schwarz malen","zu-schwarz-malen","zuschwarzmalen"],
 c:1, why:"Neue (übertragene) Bedeutung wird eigentlich zusammengeschrieben (schwarzmalen) – die Ausnahme: Mit „zu“ wird wieder getrennt: „zu schwarz malen“."},

{id:"e15", m:"m2", type:"cloze",
 q:"Farbe ist eine ___ von Gegenständen, die entsteht, wenn ___ auf Oberflächen trifft und vom ___ aufgenommen wird. Die materiellen Pigmente und Farbstoffe nennt man dagegen ___.",
 answers:["Sinnesempfindung","Licht","Auge","Farbmittel"],
 pool:["Sinnesempfindung","Licht","Auge","Farbmittel","Farbton","Leinwand"],
 why:"Wichtige Begriffstrennung: Farbe = Wahrnehmungseindruck; Farbmittel = physisches Material (Pigmente/Farbstoffe)."},

/* ================= Modul 3: Bildanalyse ================= */
{id:"e16", m:"m3", type:"order",
 q:"Bringe die Phasen einer Bildanalyse in die richtige Reihenfolge.",
 items:["Rahmendaten / Einleitungssatz","Erster Eindruck + sachliche Beschreibung","Analyse der bildnerischen Mittel (mit Wirkung)","Interpretation / Deutung"],
 why:"Immer derselbe Trichter: erst Fakten, dann Was-sehe-ich, dann Wie-ist-gemacht (+Wirkung), zuletzt die Deutung mit Hintergrundwissen."},

{id:"e17", m:"m3", type:"build",
 q:"Baue einen vorbildlichen Einleitungssatz (nach Formulierungshilfe).",
 chips:["Goya malte","das Werk „Der Sonnenschirm“","im Jahre 1777","mit Öl auf Leinwand."],
 why:"Der Einleitungssatz nennt in einem Zug: Künstler – Titel – Jahr – Technik (dazu Maße, Ort, Format, Genre)."},

{id:"e18", m:"m3", type:"sort",
 q:"In welche Phase gehört der Satz – Beschreibung, Analyse oder Interpretation?",
 buckets:["Beschreibung","Analyse","Interpretation"],
 items:[
  {t:"„Im Mittelgrund ist ein Boot zu sehen.“", b:0},
  {t:"„Die Person ist im Anschnitt dargestellt.“", b:0},
  {t:"„Die Senkrechte der Figur dominiert das schmale Hochformat.“", b:1},
  {t:"„Der Hell-Dunkel-Kontrast rückt das helle Tuch in den Vordergrund.“", b:1},
  {t:"„Der Künstler kritisiert die Selbstinszenierung der Oberschicht.“", b:2},
  {t:"„Das Thema zieht sich wie ein roter Faden durch ihr Œuvre.“", b:2}
 ]},

{id:"e19", m:"m3", type:"mc",
 q:"Welche Angabe gehört NICHT in den Einleitungssatz?",
 opts:["die Technik (z. B. Öl auf Leinwand)","der Aufbewahrungsort","die Farbtemperatur der Schatten","das Format (Hoch-/Querformat)"],
 c:2, why:"Die Farbtemperatur gehört in die Analyse – der Einleitungssatz enthält nur die Rahmendaten: Titel, Künstler, Jahr, Ort, Maße, Format, Technik, Genre, Motiv."},

{id:"e20", m:"m3", type:"mc",
 q:"Was misst der „Ikonizitätsgrad“ eines Bildes?",
 opts:["Den Grad der Naturtreue (Drei Illusionen + drei Richtigkeiten).","Die Bekanntheit des Motivs (Ikonografie).","Die Zahl der verwendeten Farben.","Die Qualität der Rahmung / Präsentation."],
 c:0, why:"Ikonizitätsgrad = Naturtreue, geprüft an den Illusionen von Stofflichkeit, Körperlichkeit und Räumlichkeit sowie anatomischer, farbiger und zeichnerischer Richtigkeit."},

{id:"e21", m:"m3", type:"mc",
 q:"„Durch die Diagonale wird der Blick des Betrachters auf den leeren Stuhl gelenkt.“ – Wohin gehört dieser Satz?",
 opts:["Beschreibung","Analyse (Komposition)","Interpretation","Ersten Eindruck"],
 c:1, why:"Analyse = Blick gelenkt durch ein Mittel auf ein Element (Mittel → Wirkung). Beschreibung würde nur sagen, DASS der Stuhl leer ist."},

{id:"e22", m:"m3", type:"cloze",
 q:"Bei der Deutung beachte ich den biografischen Hintergrund des ___, den stilgeschichtlichen der ___ und die Ikonografie des ___.",
 answers:["Künstlers","Epoche","Motivs"],
 pool:["Künstlers","Epoche","Motivs","Museums","Betrachters","Marktwerts"],
 why:"Hintergrundwissen für die Interpretation: Zeit – Künstler – Epoche – Motivtradition."},

/* ================= Modul 4: Impressionismus ================= */
{id:"e23", m:"m4", type:"mc",
 q:"Wer prägte den Begriff „Impressionismus“ – und wie?",
 opts:["Claude Monet, der seine Ausstellung so nannte.","Der Kritiker Louis Leroy, der Monets Bildtitel spöttisch zum Gruppennamen machte.","Der Fotograf Nadar, in dessen Atelier ausgestellt wurde.","Charles Baudelaire in seinem Traktat über das moderne Leben."],
 c:1, why:"Leroy schrieb 1874 die vernichtende Kritik „Eine Tapete im Urzustand ist ausgearbeiteter als dieses Seestück“ und griff Monets Titel „Impression“ als Stilbegriff auf."},

{id:"e24", m:"m4", type:"mc",
 q:"Wo fand 1874 die erste große „impressionistische“ Gruppenausstellung statt – und warum dort?",
 opts:["Im Pariser Salon – auf Einladung der Akademie.","Im Atelier des Fotografen Nadar – weil die Künstler vom Salon abgelehnt wurden.","Im Louvre – als Reaktion auf die Weltausstellung.","In London – wegen der Emigration nach dem Krieg."],
 c:1, why:"Rund 30 unabhängige Künstler (Société anonyme …) organisierten die Ausstellung selbst im Atelier von Nadar."},

{id:"e25", m:"m4", type:"order",
 q:"Chronologie des Impressionismus – bringe die Meilensteine in Ordnung.",
 items:["Die Epoche beginnt (ca. 1860)","Monet malt „Impression, soleil levant“ (1872)","Gruppenausstellung bei Nadar – Leroy prägt den Begriff (1874)","Die Epoche klingt aus (ca. 1905)"],
 why:"Rahmung ca. 1860–1905; das namengebende Bild entsteht 1872, der Name fällt 1874."},

{id:"e26", m:"m4", type:"sort",
 q:"Typisch für den Impressionismus – oder nicht?",
 buckets:["typisch impressionistisch","eher untypisch"],
 items:[
  {t:"Vermeidung der Farbe Schwarz", b:0},
  {t:"Malen im Freien (Pleinair)", b:0},
  {t:"angeschnittene Figuren", b:0},
  {t:"sichtbare kurze Pinselstriche", b:0},
  {t:"historische und religiöse Sujets", b:1},
  {t:"strenge lineare Zentralperspektive", b:1},
  {t:"politische oder soziale Botschaften", b:1},
  {t:"malerische Detailgenauigkeit mit fotografischer Schärfe", b:1}
 ]},

{id:"e27", m:"m4", type:"sort",
 q:"Wer gehört zur MALEREI, wer zur PLASTIK des Impressionismus?",
 buckets:["Malerei","Plastik"],
 items:[
  {t:"Claude Monet", b:0},
  {t:"Berthe Morisot", b:0},
  {t:"Auguste Renoir", b:0},
  {t:"Auguste Rodin", b:1},
  {t:"Camille Claudel", b:1},
  {t:"Medardo Rosso", b:1}
 ]},

{id:"e28", m:"m4", type:"mc",
 q:"Ohne welche Erfindung wäre das schnelle Malen im Freien kaum möglich gewesen?",
 opts:["die Kamera","synthetische Farben in Zinntuben","die Acrylfarbe","der Keilrahmen erst 1920"],
 c:1, why:"Industriell hergestellte Farben in Tuben + transportable Staffeleien + vorgundrierte Leinwände machten die Pleinair-Malerei praktisch."},

{id:"e29", m:"m4", type:"mc",
 q:"Welchen doppelten Zweck hatten die berühmten Sonnenschirme der Freilichtmaler?",
 opts:["Sonnenschutz der Maler UND Schutz des Eigenlichts der Farben.","Schatten für die Modelle UND Signalwirkung für Kollegen.","Regenschutz der Staffeleien UND Transport von Farben.","Sie waren nur modisches Accessoire."],
 c:0, why:"Die Schirme schützten die Künstler vor Sonne – und bewahrten das Eigenlicht der frischen Farben vor zu starker Sonneneinstrahlung."},

{id:"e30", m:"m4", type:"cloze",
 q:"Der Name der Epoche leitet sich von Monets Bild „___“ (1872) ab. Zur Bezeichnung der ganzen Gruppe machte ihn der Kritiker ___ im Jahr ___.",
 answers:["Impression, soleil levant","Louis Leroy","1874"],
 pool:["Impression, soleil levant","Louis Leroy","1874","Waterlilies","Édouard Manet","1882"],
 why:"Titel → Kritik → Stilbegriff: aus einem Bildtitel wurde der Name einer Epoche."},

{id:"e31", m:"m4", type:"mc",
 q:"Was meint Georges Rivière: „Einen Gegenstand um der Farben willen malen und nicht um seiner selbst willen“?",
 opts:["Die Maler interessierten sich nur für bunte Sujets (Papageien, Blumen).","Das Interesse verschiebt sich vom Motiv und seiner Bedeutung auf die malerische Behandlung des Motivs.","Farben waren teurer geworden, also malte man sparsamer.","Die Gegenstandslosigkeit war bereits erreicht – abstrakte Malerei."],
 c:1, why:"Das Motiv wird zum Vorwand für Malerei: Form (Farbe, Pinselstrich, Licht) schlägt Inhalt – noch bleibt der Gegenstand aber erkennbar."},

{id:"e32", m:"m4", type:"mc",
 q:"Welche Sonderrolle nahm Edgar Degas ein?",
 opts:["Er war der eigentliche Namensgeber der Epoche.","Er lehnte als Figurenmaler die Bezeichnung „Impressionismus“ für seine Werke ab.","Er hat nie an den Ausstellungen teilgenommen.","Er malte ausschließlich in Schwarz und Braun."],
 c:1, why:"Degas’ Figurenmaler sahen sich in der Tradition der Akademie und verwahrten sich gegen den Etikett „impressionistisch“."},

/* ================= Modul 5: Caillebotte ================= */
{id:"e33", m:"m5", type:"mc",
 q:"„Öl auf Leinwand, 212,2 × 276 cm, 1877, Art Institute of Chicago“ – um welches Bild geht es?",
 opts:["Caillebotte: Straße in Paris an einem regnerischen Tag","Monet: Impression, soleil levant","Seurat: Ein Sonntagnachmittag auf der Insel La Grande Jatte","Renoir: Bal du moulin de la Galette"],
 c:0, why:"Diese Maße und dieser Ort gehören zu Caillebottes Boulevard-Szene – das Bild ist unsere Musteranalyse."},

{id:"e34", m:"m5", type:"sort",
 q:"Die Bildwirkung ist zwiespältig. Ordne die Adjektive den beiden Polen zu.",
 buckets:["trist, kühl, isoliert","dynamisch, lebendig, alltäglich"],
 items:[
  {t:"einsam", b:0},
  {t:"monoton", b:0},
  {t:"sachlich", b:0},
  {t:"elegant", b:1},
  {t:"bewegt", b:1},
  {t:"beschäftigt", b:1}
 ]},

{id:"e35", m:"m5", type:"sort",
 q:"Beobachtung aus der Analyse – welcher Analysebereich?",
 buckets:["Motiv","Komposition","Raum / Körper","Licht & Farbe"],
 items:[
  {t:"nasses Kopfsteinpflaster wirkt ungemütlich", b:0},
  {t:"Regenschirme wirken beschützend", b:0},
  {t:"Laterne auf der Mittelachse, bildteilend", b:1},
  {t:"Figurenballung in der rechten Bildhälfte", b:1},
  {t:"Fluchtpunktperspektive, Überdeckung, Größenabnahme", b:2},
  {t:"Betrachterstandpunkt auf Augenhöhe", b:2},
  {t:"Komplementärkontrast Violett–Gelb", b:3},
  {t:"diffuses Licht des Regentags", b:3}
 ]},

{id:"e36", m:"m5", type:"mc",
 q:"Welche Wirkung hat die Laterne genau auf der Bildmittelachse?",
 opts:["Sie wirkt wie ein Blitzableiter für den Blick – unruhig und bedrohlich.","Sie hebt hervor, ordnet, teilt das Bild und wirkt ausgewogen.","Sie zerstört die Symmetrie und macht das Bild dynamisch.","Sie zieht den Blick in den Himmel und öffnet den Raum."],
 c:1, why:"Ein zentrales Element auf der Achse: hervorhebend, geordnet, bildteilend, ausgewogen – Statik im ansonsten dynamischen Boulevardsystem."},

{id:"e37", m:"m5", type:"cloze",
 q:"Caillebotte malt ohne sichtbaren ___ – für den Impressionismus untypisch. Sein Malkonzept ist ___, mit feinen Valeurs; der Hintergrund löst in Grauviolett auf: ___.",
 answers:["Pinselduktus","valeuristisch","Luftperspektive"],
 pool:["Pinselduktus","valeuristisch","Luftperspektive","Farbauftrag","koloristisch","Parallelprojektion"],
 why:"Ohne Virgulisme/Duktus und mit Valeurs – die Malweise Caillebottes ist „untypisch impressionistisch“, Motiv und Komposition dafür umso typischer."},

{id:"e38", m:"m5", type:"mc",
 q:"Welcher Epoche ordnest du das Bild zu – und was ist das stärkste Argument?",
 opts:["Realismus – weil detailgenau naturalistisch gemalt ist.","Impressionismus – Alltagsszene des modernen Großstadtlebens, Boulevards, Momenthaftigkeit (Anschnitt), Aufhellung der Palette, Erscheinungsfarbe.","Salonmalerei – weil großformatig und akademisch komponiert.","Expressionismus – weil die Farben die Stimmung übersteigern."],
 c:1, why:"Trotz detailgetreuer Malweise überwiegen die Impressionismus-Merkmale: Gegenwartsbezug, Momenthaftigkeit und helle, atmosphärische Farbigkeit."},

{id:"e39", m:"m5", type:"build",
 q:"Baue den analysenreifen Einleitungssatz.",
 chips:["Das Gemälde „Straße in Paris an einem regnerischen Tag“","von Gustave Caillebotte","entstand","1877","als Öl auf Leinwand."],
 why:"Titel – Künstler – Jahr – Technik: so startet jede Analyse (Maße und Museum folgen im zweiten Satz)."},

/* ================= Transfer-Prüfung (gemischt) ================= */
{id:"x1", m:"exam", type:"mc",
 q:"NEUES BILD: Die Wiese am Horizont wird mit zunehmender Entfernung unschärfer, heller und kontrastärmer. Welches Mittel liegt vor?",
 opts:["Farbperspektive","Luftperspektive","Simultankontrast","Valeurismus"],
 c:1, why:"Unschärfe + Helligkeit + weniger Kontrast = Luftperspektive. (Verblaut es dagegen, ist es Farbperspektive.)"},

{id:"x2", m:"exam", type:"sort",
 q:"Groß oder klein? Ordne die Farbangaben.",
 buckets:["großgeschrieben","kleingeschrieben"],
 items:[
  {t:"„Die Ampel zeigt ___“ (Rot)", b:0},
  {t:"„Der Himmel ist ___“ (blau)", b:1},
  {t:"„ein Traum in ___“ (Orange)", b:0},
  {t:"„das ___ Meer“ (Schwarz)", b:0},
  {t:"„ein ___ Mantel“ (braun)", b:1},
  {t:"„bei ___ über die Straße“ (Rot)", b:0}
 ],
 why:"Was/Wie-Probe, Präpositionen und Artikel machen die Farbe zum Nomen → groß; reine Adjektive → klein."},

{id:"x3", m:"exam", type:"order",
 q:"Kompletter Arbeitsgang einer Klausur-Bildanalyse:",
 items:["Rahmendaten + Bildmotiv im Einleitungssatz","Erster Eindruck und sachliche Beschreibung","Analyse: Bildmittel mit Wirkung begründen","Deutung mit Rückbezug + Hintergrundwissen"],
 why:"Die vier Schritte verbinden Modul 3-Verfahren, Modul 1/2-Begriffe und Modul 4-Wissen."},

{id:"x4", m:"exam", type:"mc",
 q:"„Das Bild kritisiert die Selbstinszenierung der Oberschicht.“ Dieser Satz gehört in die …",
 opts:["Beschreibung","Analyse","Interpretation","Zusammenfassung der Rahmendaten"],
 c:2, why:"Wertende/Aussage-Sätze gehören in die Deutung – Analyse wäre: WELCHES MITTEL diese Kritik trägt."},

{id:"x5", m:"exam", type:"mc",
 q:"NEUES BILD: Ein Paar wird unten vom Bildrand knieabwärts „durchschnitten“, rechts fährt eine Kutsche halb aus dem Bild. Der Fachbegriff dafür …",
 opts:["… ist „Bildanschnitt“ und erzeugt den Eindruck eines flüchtigen Schnappschusses.","… ist „Goldener Schnitt“ und wirkt harmonisch.","… ist „Symmetrie“ und wirkt ruhig.","… ist „Polyvalenz“ und würfelt die Perspektive."],
 c:0, why:"Der Anschnitt betont das Ausschnitthaft-Zufällige – ein Kernmerkmal impressionistischer Komposition."},

{id:"x6", m:"exam", type:"mc",
 q:"Bei Caillebotte stehen vorn sattes Grün und Rotbraun neben getübtem Grauviolett im Hintergrund. Das ist Qualitätskontrast – und zugleich …",
 opts:["Komplementärkontrast","ein Mittel der Luftperspektive","Ausdrucksfarbe","Symbolfarbe"],
 c:1, why:"Reine Farbe vorn, getrübte Farbe hinten = Qualitätskontrast UND Luftperspektive (Entfernung wird über Sättigung lesbar)."},

{id:"x7", m:"exam", type:"cloze",
 q:"„impression“ ist das französische Wort für „___“. Den endgültigen Namen gab der Kritiker ___ der Bewegung – mit einer ___ gemeinten Kritik.",
 answers:["Eindruck","Louis Leroy","spöttisch"],
 pool:["Eindruck","Louis Leroy","spöttisch","Abdruck","Nadar","ernsthaft"],
 why:"Vom Bildtitel zum Stilbegriff – durch einen Kritiker, der die Maler eigentlich lächerlich machen wollte."},

{id:"x8", m:"exam", type:"mc",
 q:"Ein Kunstwerk verwendet nur drei graublaue Töne und variiert allein die Helligkeit. Welches Malkonzept? (Modul 2 trifft Modul 5!)",
 opts:["Monochromes, tonwertiges (valeuristisches) Malkonzept","Koloristisches Malkonzept","Farbe-an-sich-Kontrast als Konzept","Ausdrucksfarbe"],
 c:0, why:"Tonwerte einer Farbe = monochrom/valeuristisch – genau das Konzept, mit dem Caillebotte seine kühle Pariser Regentagsstimmung aufbaut."}
];
