/* ============================================================
   KUNST-LERNPFAD – App-Logik (Vanilla JS, läuft offline)
   Fortschritt wird im localStorage gespeichert.
   ============================================================ */
(function(){
"use strict";

var LS_KEY = "kunst-lernpfad-v2";
var MODULES = DATA.modules, CARDS = DATA.cards, EX = DATA.exercises, GLOSS = DATA.glossary;
var DAY = 86400000;
var BOX_DAYS = [1, 2, 4, 9, 9]; // Abstand bis zur nächsten Wiederholung, je Kasten 1..5
var app = document.getElementById("app");

/* ---------- Zustand ---------- */
var state = loadState();
function loadState(){
  try{
    var s = JSON.parse(localStorage.getItem(LS_KEY) || "{}");
    return {cards: s.cards||{}, ex: s.ex||{}, exam: s.exam||{best:null, runs:0}, free: !!s.free};
  }catch(e){ return {cards:{}, ex:{}, exam:{best:null, runs:0}, free:false}; }
}
function save(){ localStorage.setItem(LS_KEY, JSON.stringify(state)); }

/* ---------- Helfer ---------- */
function cardsOf(m){ return CARDS.filter(function(c){return c.m===m;}); }
function exOf(m){ return EX.filter(function(e){return e.m===m;}); }
function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
function modById(id){ return MODULES.filter(function(m){return m.id===id;})[0]; }
function modStats(m){
  var cs = cardsOf(m), seen=0, safe=0;
  cs.forEach(function(c){ var s=state.cards[c.id]; if(s){ if(s.box>=1) seen++; if(s.box>=3) safe++; } });
  var total = cs.length;
  return {total:total, seen:seen, safe:safe, pctSeen: total? Math.round(seen/total*100):0, pctSafe: total? Math.round(safe/total*100):0};
}
function isUnlocked(m, i){
  if(i===0 || state.free) return true;
  return modStats(MODULES[i-1].id).pctSeen >= 50;
}
function overall(){
  var t=0,s=0,safe=0;
  MODULES.forEach(function(m){ var st=modStats(m.id); t+=st.total; s+=st.seen; safe+=st.safe; });
  return {total:t, seen:s, safe:safe, pct: t? Math.round(safe/t*100):0, pctSeen: t? Math.round(s/t*100):0};
}
function levelName(p){
  if(p < 5)  return "Rohling – die Leinwand noch weiß";
  if(p < 20) return "Entdeckender Blick";
  if(p < 40) return "Gestalter/in";
  if(p < 60) return "Analytiker/in";
  if(p < 80) return "Kenner/in der Moderne";
  if(p < 100) return "Kurator/in";
  return "Chef-Kurator/in – das Wissen sitzt";
}
function dueList(m){
  var now = Date.now();
  return (m?cardsOf(m):CARDS).filter(function(c){ var s=state.cards[c.id]; return !s || s.due<=now; });
}
function dueCount(m){ return dueList(m).length; }
function fmtDue(ts){
  var d = ts - Date.now();
  if(d <= 0) return "jetzt fällig";
  if(d < 3600000) return "Wiederholung in " + Math.max(1, Math.round(d/60000)) + " Min.";
  if(d < DAY) return "Wiederholung heute später";
  return "Wiederholung in " + Math.round(d/DAY) + " Tagen";
}
function shuffle(a){ a = a.slice(); for(var i=a.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)); var t=a[i]; a[i]=a[j]; a[j]=t; } return a; }
function pickN(arr, n){ return shuffle(arr).slice(0, Math.min(n, arr.length)); }
function glossaryLink(term){ return GLOSS.filter(function(x){return x.t===term;})[0] || null; }
function modChip(m){
  var mod = modById(m);
  return '<span class="gmod" style="background:'+mod.color+'">Modul '+mod.n+"</span>";
}

/* ---------- Sitzungen ---------- */
var learn = null, quiz = null, examFlow = null;

/* ============================================================
   ROUTER
   ============================================================ */
function route(){
  var seg = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  document.querySelectorAll("#nav a").forEach(function(a){
    var r = a.getAttribute("data-route");
    var want = (r==="home" && seg.length===0) || (r==="glossar" && seg[0]==="glossar") || (r==="pruefung" && seg[0]==="pruefung");
    a.classList.toggle("active", want);
  });
  if(seg.length===0){ learn=null; quiz=null; examFlow=null; return renderHome(); }
  if(seg[0]==="glossar"){ learn=null; quiz=null; examFlow=null; return renderGlossary(); }
  if(seg[0]==="pruefung"){ learn=null; quiz=null; examFlow=null; return renderExamEntry(); }
  if(seg[0]==="modul") return renderModule(seg[1], seg[2]||"lernen");
  renderHome();
}
window.addEventListener("hashchange", route);

/* ============================================================
   HOME / LERNPFAD
   ============================================================ */
function renderHome(){
  var o = overall();
  var h = "";
  h += '<section class="hero"><div class="hero-copy">';
  h += '<span class="kicker">Auswendig lernen · Verstehen · Anwenden</span>';
  h += "<h1>Dein Kunst-Wissensgebäude</h1>";
  var topics = MODULES.map(function(m){ return "<b>"+esc(m.name.split(":")[0])+"</b>"; });
  var topicText = topics.length > 1 ? topics.slice(0,-1).join(", ") + " und " + topics[topics.length-1] : topics[0];
  h += "<p class=\"lede\">"+MODULES.length+" Module, die aufeinander aufbauen: "+topicText+". Jedes Modul schaltet beim Lernen das nächste frei.</p>";
  h += "</div><div class=\"overall\">";
  h += '<div class="lvl">Stufe: '+esc(levelName(o.pct))+"</div>";
  h += '<div class="bar"><i style="width:'+o.pctSeen+'%"></i></div><div class="bar-label"><span>Gelernt</span><span>'+o.seen+"/"+o.total+" Karten</span></div>";
  h += '<div class="bar"><i class="safe" style="width:'+o.pct+'%"></i></div><div class="bar-label"><span>Fest verankert</span><span>'+o.safe+"/"+o.total+"</span></div>";
  h += '<label style="display:flex;gap:8px;align-items:center;margin-top:10px;font-size:.83rem;color:var(--ink-soft);cursor:pointer"><input type="checkbox" id="freeMode"'+(state.free?" checked":"")+"> Alle Module frei schalten</label>";
  h += "</div></section>";

  var exDone = EX.filter(function(e){return state.ex[e.id];}).length;
  h += '<div class="statgrid">';
  h += '<div class="stat"><b>'+dueCount()+"</b><span>Karten jetzt fällig (Wiederholung)</span></div>";
  h += '<div class="stat"><b>'+o.safe+"</b><span>Karten sicher in Kasten 3+</span></div>";
  h += '<div class="stat"><b>'+exDone+"/"+EX.length+"</b><span>Übungen bestanden</span></div>";
  h += '<div class="stat"><b>'+MODULES.length+"</b><span>Module + Transfer-Prüfung</span></div>";
  h += "</div>";

  h += "<h2>Der Lernpfad</h2>";
  h += '<p class="lede" style="margin-bottom:18px">Lerne erst die <b>Karteikarten</b> (Spaced Repetition: sicher Gelerntes kommt seltener zurück), teste dich im <b>Quiz</b> und wende das Wissen im <b>Training</b> an – dort analysierst du Bildsituationen, sortierst Mittel, baust Analysensätze und füllst Lückentexte.</p>';
  h += '<div class="path">';
  MODULES.forEach(function(m, i){
    var st = modStats(m.id);
    var open = isUnlocked(m.id, i);
    h += '<div class="step">';
    h += '<div class="step-num" style="background:'+m.color+'">'+m.n+"</div>";
    h += '<div class="mod-card'+(open?"":" locked")+'">';
    h += '<div class="mod-head"><h3>'+esc(m.name)+'</h3><span class="mod-src">'+esc(m.src)+"</span></div>";
    h += '<div class="mod-sub">'+esc(m.sub)+"</div>";
    h += '<div class="builds">↳ '+esc(m.builds)+"</div>";
    h += '<div class="mod-foot">';
    h += '<div class="mod-prog"><div class="bar"><i style="width:'+st.pctSeen+'%"></i></div><div class="bar-label"><span>Gelernt '+st.pctSeen+"%</span><span>✓ sicher "+st.pctSafe+"%</span></div></div>";
    if(open){
      h += '<div class="mod-actions">';
      h += '<a class="btn small" href="#/modul/'+m.id+'/lernen">Karteikarten ('+dueCount(m.id)+" fällig)</a>";
      h += '<a class="btn small ghost" href="#/modul/'+m.id+'/quiz">Quiz</a>';
      h += '<a class="btn small ghost" href="#/modul/'+m.id+'/training">Training</a>';
      h += "</div>";
    }else{
      var prev = MODULES[i-1];
      h += '<div class="lock-note">🔒 Wird freigeschaltet bei <b>50&nbsp;% gelernt</b> in Modul '+prev.n+' („'+esc(prev.name)+'“). Oder direkt loslegen:</div>';
      h += '<div class="mod-actions"><button class="btn small alt" data-unlock="'+m.id+'">Trotzdem entdecken</button></div>';
    }
    h += "</div></div></div>";
  });
  h += "</div>";

  h += '<div class="panel" style="margin-top:26px;border-left:5px solid var(--gold)">';
  h += "<h3>🎓 Transfer-Prüfung</h3>";
  h += '<p class="lede">Gemischte Anwendungsaufgaben quer durch alle Module – neue Bildsituationen beschreiben, Mittel zuordnen, Analyse-Phasen unterscheiden. Der Beweis, dass dein Wissen wirklich <i>miteinander verbunden</i> ist.</p>';
  h += '<a class="btn alt" href="#/pruefung">Zur Prüfung</a> ';
  var examN = EX.filter(function(e){return e.m==="exam";}).length;
  if(state.exam && state.exam.best!=null) h += '<span class="chip">Bisher bestes Ergebnis: <b>'+state.exam.best+"/"+examN+"</b></span>";
  h += "</div>";

  app.innerHTML = h;
  var fm = document.getElementById("freeMode");
  if(fm) fm.addEventListener("change", function(){ state.free = fm.checked; save(); route(); });
  app.querySelectorAll("[data-unlock]").forEach(function(b){
    b.addEventListener("click", function(){ state.free = true; save(); location.hash = "#/modul/"+b.getAttribute("data-unlock")+"/lernen"; });
  });
}

/* ============================================================
   MODUL-ANSICHT (Tabs)
   ============================================================ */
function renderModule(id, tab){
  var m = modById(id);
  if(!m) return renderHome();
  var idx = MODULES.indexOf(m);
  if(!isUnlocked(m.id, idx)){ location.hash = "#/"; return; }
  learn=null; quiz=null; examFlow=null;

  var h = '<a class="backlink" href="#/">← Zurück zum Lernpfad</a>';
  h += "<h1>"+m.n+". "+esc(m.name)+"</h1>";
  h += '<p class="lede">'+esc(m.sub)+' <span class="mod-src">'+esc(m.src)+"</span></p>";
  h += '<div class="tabs">';
  [["lernen","🗂 Karteikarten"],["quiz","🎯 Quiz"],["training","🧠 Training"]].forEach(function(t){
    h += '<a class="tab'+(tab===t[0]?" active":"")+'" href="#/modul/'+m.id+"/"+t[0]+'">'+t[1]+"</a>";
  });
  h += "</div>";
  app.innerHTML = h + '<div id="tabcontent"></div>';
  var tc = document.getElementById("tabcontent");
  if(tab==="quiz") renderQuiz(tc, m);
  else if(tab==="training") renderTraining(tc, m);
  else renderLearn(tc, m);
}

/* ---------- Karteikarten (Leitner) ---------- */
function renderLearn(tc, m){
  var all = cardsOf(m.id);
  if(!learn || learn.mid!==m.id){
    var due = dueList(m.id);
    if(due.length===0){
      tc.innerHTML = '<div class="panel center"><h3>✅ Für heute ist alles wiederholt!</h3><p class="lede" style="margin:0 auto 14px">Fällig gewordene Karten tauchen automatisch wieder auf (Abstände: 1 → 2 → 4 → 9 Tage). Fürs intensive Lernen kannst du jederzeit eine Runde über alle Karten starten.</p><button class="btn" id="cramBtn">Alle '+all.length+' Karten durcharbeiten</button></div>';
      document.getElementById("cramBtn").addEventListener("click", function(){
        learn = {mid:m.id, mode:"Wiederholungsrunde (alle Karten)", ids:all.map(function(c){return c.id;}), idx:0, flipped:false, done:0};
        drawLearnCard(tc, m);
      });
      return;
    }
    var mode = due.length===all.length ? "Alle Karten (erste Runde)" : "Fällige Wiederholungen";
    learn = {mid:m.id, mode:mode, ids:due.map(function(c){return c.id;}), idx:0, flipped:false, done:0};
  }
  drawLearnCard(tc, m);
}
function learnCard(id){ return CARDS.filter(function(c){return c.id===id;})[0]; }
function drawLearnCard(tc, m){
  if(!learn){ renderLearn(tc, m); return; }
  if(learn.idx >= learn.ids.length){
    var st = modStats(m.id);
    tc.innerHTML = '<div class="panel center"><h3>🎉 Runde geschafft!</h3><p class="lede" style="margin:0 auto 6px">'+learn.done+" von "+learn.ids.length+' Karten mit „Sicher“ bewertet – Fortschritt gespeichert.</p><div style="margin:10px 0 14px"><span class="chip">Modul: <b>'+st.pctSeen+"% gelernt</b></span> <span class=\"chip\">✓ "+st.pctSafe+'% sicher</span></div><button class="btn" id="moreBtn">Noch eine Runde (alle Karten)</button> <a class="btn ghost" href="#/modul/'+m.id+'/training">Zum Training →</a></div>';
    document.getElementById("moreBtn").addEventListener("click", function(){
      learn = {mid:m.id, mode:"Wiederholungsrunde (alle Karten)", ids:cardsOf(m.id).map(function(c){return c.id;}), idx:0, flipped:false, done:0};
      drawLearnCard(tc, m);
    });
    return;
  }
  var c = learnCard(learn.ids[learn.idx]);
  var s = state.cards[c.id] || {box:0, due:0};
  var g = c.g? glossaryLink(c.g) : null;
  var h = '<div class="cardwrap">';
  h += '<div class="meta-line">'+esc(learn.mode)+" · Karte "+(learn.idx+1)+"/"+learn.ids.length+" · Kasten "+Math.max(1,s.box)+"/5</div>";
  h += '<div class="fc" id="fc" tabindex="0" role="button" aria-label="Karte umdrehen">';
  h += '<span class="tagline">Modul '+m.n+"</span>";
  h += '<div class="q">'+esc(c.f)+"</div>";
  if(learn.flipped){
    h += '<div class="a">'+esc(c.b)+"</div>";
    if(g) h += '<div class="linkchip">🔗 Im Glossar: '+esc(g.t)+"</div>";
    h += '<div class="meta-line" style="margin-top:12px">'+(s.box? esc(fmtDue(s.due)) : "Neue Karte – noch nie gesehen")+"</div>";
  }else{
    h += '<div class="hint">Klicken (oder Leertaste), um die Antwort zu sehen …</div>';
  }
  h += "</div>";
  if(learn.flipped){
    h += '<div class="rate"><button class="btn again" id="btnAgain">✗ Nochmal lernen (Taste 1)</button><button class="btn good" id="btnGood">✓ Kann ich sicher (Taste 2)</button></div>';
    h += '<div class="meta-line">Nochmal → zurück in Kasten 1 · Sicher → eine Kastenstufe höher, kommt später zurück</div>';
  }
  h += "</div>";
  tc.innerHTML = h;
  var fc = document.getElementById("fc");
  fc.addEventListener("click", function(){ learn.flipped=true; drawLearnCard(tc, m); });
  fc.focus({preventScroll:true});
  if(learn.flipped){
    document.getElementById("btnAgain").addEventListener("click", function(){ rateCard(m, c, false, tc); });
    document.getElementById("btnGood").addEventListener("click", function(){ rateCard(m, c, true, tc); });
  }
}
function rateCard(m, c, ok, tc){
  var cur = state.cards[c.id] || {box:0, due:0};
  if(ok){ cur.box = Math.min(5, Math.max(1, cur.box+1)); cur.due = Date.now() + BOX_DAYS[cur.box-1]*DAY; learn.done++; }
  else { cur.box = 1; cur.due = Date.now() + 10*60000; }
  state.cards[c.id] = cur; save();
  learn.idx++; learn.flipped = false;
  drawLearnCard(tc, m);
}
document.addEventListener("keydown", function(e){
  if(!learn || !document.getElementById("fc")) return;
  if(e.target.tagName==="INPUT"||e.target.tagName==="SELECT"||e.target.tagName==="BUTTON") return;
  if(e.code==="Space"){ e.preventDefault(); document.getElementById("fc").click(); return; }
  if(learn.flipped){
    if(e.key==="1"){ var b=document.getElementById("btnAgain"); if(b) b.click(); }
    if(e.key==="2"){ var g=document.getElementById("btnGood"); if(g) g.click(); }
  }
});

/* ---------- Quiz ---------- */
function renderQuiz(tc, m){
  var all = cardsOf(m.id);
  if(!quiz || quiz.mid!==m.id){
    tc.innerHTML = '<div class="panel"><h3>🎯 Modul-Quiz: '+esc(m.name)+'</h3><p class="lede" style="margin-bottom:16px">Du bekommst eine Fachfrage aus'+ " "+all.length+' Karten und erkennst die passende Antwort zwischen drei Ablenkern aus <b>demselben Modul</b>. Richtige Antworten zählen als „gesehen“ fürs Wiederholsystem.</p><button class="btn" id="startQuiz">Quiz starten (8 Fragen)</button> <button class="btn ghost" id="hardQuiz">Knobelrunde (12)</button></div>';
    document.getElementById("startQuiz").addEventListener("click", function(){ startQuiz(m, 8); drawQuiz(tc, m); });
    document.getElementById("hardQuiz").addEventListener("click", function(){ startQuiz(m, 12); drawQuiz(tc, m); });
    return;
  }
  drawQuiz(tc, m);
}
function startQuiz(m, n){
  var qs = pickN(cardsOf(m.id), n).map(function(c){
    var others = shuffle(cardsOf(m.id).filter(function(x){return x.id!==c.id;})).slice(0,3);
    var opts = shuffle([c].concat(others));
    return {id:c.id, q:c.f, opts:opts.map(function(o){return o.b;}), c:opts.indexOf(c)};
  });
  quiz = {mid:m.id, qs:qs, i:0, score:0, first:true, log:[]};
}
function drawQuiz(tc, m){
  if(quiz.i >= quiz.qs.length){
    var pct = Math.round(quiz.score/quiz.qs.length*100);
    var h = '<div class="panel center"><h3>Ergebnis</h3><div class="score-big">'+quiz.score+"/"+quiz.qs.length+"</div><p>"+(pct>=80?"Stark – die Begriffe sitzen.":pct>=50?"Solide. Die Fehler unten nochmal durch die Karteikarten ziehen.":"Zurück zu den Karteikarten – dann klappt’s auch mit dem Quiz.")+"</p></div>";
    h += '<div class="panel"><h3>Antwortkontrolle</h3>';
    quiz.log.forEach(function(l){
      h += '<div class="review-item"><span class="dot '+(l.ok?"g":"r")+'"></span><b>'+esc(l.q)+"</b><br><span style='color:var(--ink-soft)'>Richtige Antwort: "+esc(l.right)+"</span></div>";
    });
    h += "</div><button class=\"btn\" id=\"reQuiz\">Nochmal quizzen</button> <a class=\"btn ghost\" href=\"#/modul/"+m.id+"/training\">Zum Training →</a>";
    tc.innerHTML = h;
    document.getElementById("reQuiz").addEventListener("click", function(){ quiz=null; renderQuiz(tc,m); });
    return;
  }
  var Q = quiz.qs[quiz.i];
  var dots = "";
  quiz.log.forEach(function(l){ dots += '<span class="dot '+(l.ok?"g":"r")+'"></span>'; });
  for(var k=quiz.log.length;k<quiz.qs.length;k++) dots += '<span class="dot" style="background:#ddd"></span>';
  var h = '<div class="panel">';
  h += '<div class="meta-line">'+dots+"&nbsp; Frage "+(quiz.i+1)+"/"+quiz.qs.length+"</div>";
  h += '<div class="q-head">'+esc(Q.q)+"</div>";
  Q.opts.forEach(function(o, idx){ h += '<button class="opt" data-i="'+idx+'">'+esc(o)+"</button>"; });
  h += '<div class="feedback" id="fb"></div><div class="mt" id="qNext"></div></div>';
  tc.innerHTML = h;
  var opts = tc.querySelectorAll(".opt");
  opts.forEach(function(b){
    b.addEventListener("click", function(){
      if(!quiz.first) return;
      var i = +b.getAttribute("data-i");
      var ok = (i===Q.c);
      if(ok) quiz.score++;
      quiz.log.push({q:Q.q, ok:ok, right:Q.opts[Q.c]});
      opts.forEach(function(x, xi){
        if(xi===Q.c) x.classList.add("correct"); else if(xi===i) x.classList.add("wrong");
        x.style.pointerEvents="none";
      });
      var fb = document.getElementById("fb");
      fb.className = "feedback show "+(ok?"ok":"no");
      fb.innerHTML = (ok?"✅ Genau. ":"❌ Nicht ganz. ")+"Richtige Antwort: <b>"+esc(Q.opts[Q.c])+"</b>";
      if(ok && !state.cards[Q.id]){ state.cards[Q.id]={box:1, due:Date.now()+DAY}; save(); }
      quiz.first = false;
      var nb = document.createElement("button");
      nb.className = "btn";
      nb.textContent = (quiz.i+1<quiz.qs.length)?"Nächste Frage →":"Auswerten";
      nb.addEventListener("click", function(){ quiz.i++; quiz.first=true; drawQuiz(tc,m); });
      document.getElementById("qNext").appendChild(nb);
    });
  });
}

/* ---------- Training (Übungen) ---------- */
function renderTraining(tc, m){
  var list = exOf(m.id);
  var done = list.filter(function(e){return state.ex[e.id];}).length;
  var h = '<div class="panel"><h3>🧠 Training: Wissen anwenden</h3><p class="lede" style="margin-bottom:10px">Hier verknüpfst du die Begriffe mit echten Bildsituationen: Mittel und Wirkungen zuordnen, Aussagen den Analyse-Phasen geben, Sätze und Lückentexte bauen. <b>'+done+"/"+list.length+" bestanden.</b></p>";
  h += '<div class="bar"><i style="width:'+(list.length? done/list.length*100:0)+'%"></i></div></div>';
  h += '<div id="runnerArea"></div>';
  list.forEach(function(e){
    var badge = {mc:"Multiple Choice", order:"Reihenfolge", sort:"Zuordnung", cloze:"Lückentext", build:"Satz bauen"}[e.type];
    h += '<div class="panel" style="display:flex;gap:14px;align-items:center;flex-wrap:wrap">';
    h += '<span class="chip">'+badge+"</span>";
    h += '<div style="flex:1;min-width:220px"><b>'+esc(e.q)+"</b></div>";
    if(state.ex[e.id]) h += '<span class="chip" style="color:var(--ok);border-color:var(--ok)">✓ bestanden</span>';
    h += '<button class="btn small ghost" data-run="'+e.id+'">'+(state.ex[e.id]?"Nochmal":"Starten")+"</button>";
    h += "</div>";
  });
  tc.innerHTML = h;
  tc.querySelectorAll("[data-run]").forEach(function(b){
    b.addEventListener("click", function(){
      var e = EX.filter(function(x){return x.id===b.getAttribute("data-run");})[0];
      openRunner(document.getElementById("runnerArea"), e, function(){ renderTraining(tc, m); });
    });
  });
}
function openRunner(area, e, onBack, closeLabel){
  area.scrollIntoView({behavior:"smooth", block:"start"});
  if(e.type==="mc") runMc(area, e, onBack, closeLabel);
  else if(e.type==="order") runOrder(area, e, onBack, closeLabel);
  else if(e.type==="sort") runSort(area, e, onBack, closeLabel);
  else if(e.type==="cloze") runCloze(area, e, onBack, closeLabel);
  else if(e.type==="build") runBuild(area, e, onBack, closeLabel);
}

/* ---------- Runner-Bausteine ---------- */
function runnerShell(area, e, inner, onBack, closeLabel){
  area.innerHTML = '<div class="panel"><div class="meta-line"><a class="backlink" href="#" id="closeRun">'+(closeLabel||"← zurück zur Übersicht")+"</a></div>"
    + '<div class="q-head">'+esc(e.q)+"</div>" + inner
    + '<div class="feedback" id="rFb"></div><div class="mt" id="rAct"></div></div>';
  document.getElementById("closeRun").addEventListener("click", function(ev){ ev.preventDefault(); onBack(); });
}
function finish(area, e, ok, onBack){
  var fb = document.getElementById("rFb");
  fb.className = "feedback show "+(ok?"ok":"no");
  fb.innerHTML = (ok? "✅ Richtig! " : "❌ Noch nicht ganz. ") + (e.why? esc(e.why) : "");
  if(ok){ state.ex[e.id] = true; save(); }
  var act = document.getElementById("rAct");
  act.innerHTML = "";
  var b1 = document.createElement("button");
  if(examFlow){
    b1.className = "btn";
    b1.textContent = (ok?"Weiter →":"Trotzdem weiter →");
    b1.addEventListener("click", function(){ examFlow.next(ok); });
  }else{
    b1.className = "btn"+(ok?" ghost":"");
    b1.textContent = ok? "← Zurück zur Übersicht" : "Erneut versuchen";
    b1.addEventListener("click", function(){ ok? onBack() : openRunner(area, e, onBack); });
  }
  act.appendChild(b1);
}

function runMc(area, e, onBack, closeLabel){
  runnerShell(area, e, e.opts.map(function(o,i){ return '<button class="opt" data-i="'+i+'">'+esc(o)+"</button>"; }).join(""), onBack, closeLabel);
  var first = true;
  area.querySelectorAll(".opt").forEach(function(b){
    b.addEventListener("click", function(){
      if(!first) return; first=false;
      var i = +b.getAttribute("data-i");
      area.querySelectorAll(".opt").forEach(function(x, xi){
        x.style.pointerEvents="none";
        if(xi===e.c) x.classList.add("correct"); else if(xi===i) x.classList.add("wrong");
      });
      finish(area, e, i===e.c, onBack);
    });
  });
}

function runOrder(area, e, onBack, closeLabel){
  var avail = shuffle(e.items);
  var chosen = [];
  function paint(){
    area.querySelector("#line").innerHTML = chosen.map(function(t,i){ return '<span class="pick taken" data-k="'+i+'">'+(i+1)+". "+esc(t)+"</span>"; }).join("") || '<span style="color:var(--ink-soft);font-size:.85rem">Noch leer …</span>';
    area.querySelector("#pool").innerHTML = avail.filter(function(t){ return chosen.indexOf(t)===-1; }).map(function(t){ return '<button class="pick">'+esc(t)+"</button>"; }).join("");
    area.querySelectorAll("#pool .pick").forEach(function(b){
      b.addEventListener("click", function(){ chosen.push(b.textContent); paint(); });
    });
    area.querySelectorAll("#line .pick").forEach(function(b){
      b.addEventListener("click", function(){ chosen.splice(+b.getAttribute("data-k"),1); paint(); });
    });
  }
  runnerShell(area, e, '<div class="meta-line">Klicke die Schritte in der richtigen Reihenfolge (Klick ins Band nimmt sie zurück).</div><div class="slotline" id="line"></div><div class="picker" id="pool"></div><button class="btn small" id="check">Prüfen</button>', onBack, closeLabel);
  paint();
  area.querySelector("#check").addEventListener("click", function(){
    var ok = chosen.length===e.items.length && chosen.every(function(t,i){ return t===e.items[i]; });
    finish(area, e, ok, onBack);
  });
}

function runSort(area, e, onBack, closeLabel){
  var picks = e.items.map(function(){ return null; });
  var inner = '<div class="meta-line">Wähle für jeden Begriff den passenden Kübel.</div>';
  e.items.forEach(function(it, i){
    inner += '<div class="item-row"><span class="t">'+esc(it.t)+'</span><span class="bucketrow">';
    e.buckets.forEach(function(bk, bi){
      inner += '<button class="bbtn" data-i="'+i+'" data-b="'+bi+'">'+esc(bk)+"</button>";
    });
    inner += "</span></div>";
  });
  inner += '<div class="mt"><button class="btn small" id="check">Prüfen</button></div>';
  runnerShell(area, e, inner, onBack, closeLabel);
  area.querySelectorAll(".bbtn").forEach(function(b){
    b.addEventListener("click", function(){
      var i = +b.getAttribute("data-i");
      picks[i] = +b.getAttribute("data-b");
      area.querySelectorAll('.bbtn[data-i="'+i+'"]').forEach(function(x){ x.classList.remove("sel"); });
      b.classList.add("sel");
    });
  });
  area.querySelector("#check").addEventListener("click", function(){
    var fb = document.getElementById("rFb");
    if(picks.some(function(p){ return p===null; })){
      fb.className="feedback show no"; fb.textContent="Es sind noch nicht alle Zuordnungen gesetzt."; return;
    }
    var allOk = true;
    e.items.forEach(function(it, i){
      if(picks[i]!==it.b) allOk=false;
      area.querySelectorAll('.bbtn[data-i="'+i+'"]').forEach(function(x){
        var bi = +x.getAttribute("data-b");
        x.classList.remove("sel");
        if(bi===it.b) x.classList.add("right");
        else if(bi===picks[i]) x.classList.add("false");
      });
    });
    finish(area, e, allOk, onBack);
  });
}

function runCloze(area, e, onBack, closeLabel){
  var parts = e.q.split("___");
  var inner = '<div class="cloze-text">';
  parts.forEach(function(p, i){
    inner += esc(p);
    if(i < parts.length-1){
      var opts = shuffle(e.pool).map(function(w){ return '<option>'+esc(w)+"</option>"; }).join("");
      inner += '<select class="cloze" data-k="'+i+'"><option value="">? ? ?</option>'+opts+"</select>";
    }
  });
  inner += '</div><div class="mt"><button class="btn small" id="check">Prüfen</button></div>';
  runnerShell(area, e, inner, onBack, closeLabel);
  area.querySelector("#check").addEventListener("click", function(){
    var allOk = true;
    area.querySelectorAll("select.cloze").forEach(function(s, i){
      var ok = s.value === e.answers[i];
      s.style.borderBottomColor = ok? "var(--ok)" : "var(--bad)";
      if(!ok) allOk=false;
    });
    finish(area, e, allOk, onBack);
  });
}

function runBuild(area, e, onBack, closeLabel){
  var pool = shuffle(e.chips);
  var line = [];
  function paint(){
    area.querySelector("#line").innerHTML = line.map(function(t,i){ return '<span class="pick taken" data-k="'+i+'">'+esc(t)+"</span>"; }).join("") || '<span style="color:var(--ink-soft);font-size:.85rem">Noch leer – setze die Bausteine in der richtigen Reihenfolge …</span>';
    area.querySelector("#pool").innerHTML = pool.filter(function(t){ return line.indexOf(t)===-1; }).map(function(t){ return '<button class="pick">'+esc(t)+"</button>"; }).join("");
    area.querySelectorAll("#pool .pick").forEach(function(b){
      b.addEventListener("click", function(){ line.push(b.textContent); paint(); });
    });
    area.querySelectorAll("#line .pick").forEach(function(b){
      b.addEventListener("click", function(){ line.splice(+b.getAttribute("data-k"),1); paint(); });
    });
  }
  runnerShell(area, e, '<div class="meta-line">Wortbausteine in richtiger Reihenfolge anklicken.</div><div class="picker" id="pool"></div><div class="slotline" id="line"></div><button class="btn small" id="check">Prüfen</button>', onBack, closeLabel);
  paint();
  area.querySelector("#check").addEventListener("click", function(){
    var ok = line.length===e.chips.length && line.join(" ")===e.chips.join(" ");
    finish(area, e, ok, onBack);
  });
}

/* ============================================================
   GLOSSAR
   ============================================================ */
function renderGlossary(){
  var cross = GLOSS.slice().sort(function(a,b){ return (b.also||[]).length-(a.also||[]).length; })[0];
  var crossMods = [cross.m].concat((cross.also||[]).filter(function(a){ return a!==cross.m; }))
    .map(function(id){ var x = modById(id); return x? esc(x.name.split(":")[0]) : id; });
  var h = '<h1>Glossar</h1><p class="lede">Alle Fachbegriffe des Lernpfads. Begriffe, die in mehreren Modulen vorkommen (z. B. <i>'+esc(cross.t)+'</i>: '+crossMods.join(" → ")+'), zeigen dir, wie dein Wissen zusammenwächst. Klicken klappt die passenden Karteikarten auf.</p>';
  h += '<div class="tools"><input type="search" id="gq" placeholder="Suchen: Begriff oder Erklärung …" aria-label="Glossar durchsuchen">';
  h += '<button class="chip gfilter" data-f="all" data-color="#28425c">Alle</button>';
  MODULES.forEach(function(m){ h += '<button class="chip gfilter" data-f="'+m.id+'" data-color="'+m.color+'">'+m.n+" · "+esc(m.name.split(":")[0])+"</button>"; });
  h += "</div>";
  h += '<div class="glist" id="glist"></div>';
  app.innerHTML = h;
  var cur = {q:"", f:"all"};
  var glist = document.getElementById("glist");

  function paintChips(){
    app.querySelectorAll(".gfilter").forEach(function(b){
      var on = b.getAttribute("data-f")===cur.f;
      b.style.background = on? b.getAttribute("data-color") : "var(--paper)";
      b.style.color = on? "#fff" : b.getAttribute("data-color");
      b.style.borderColor = b.getAttribute("data-color");
    });
  }
  function paint(){
    var q = cur.q.toLowerCase();
    var list = GLOSS.filter(function(g){
      if(cur.f!=="all" && g.m!==cur.f && (g.also||[]).indexOf(cur.f)===-1) return false;
      if(q && (g.t+" "+g.d).toLowerCase().indexOf(q)===-1) return false;
      return true;
    });
    if(list.length===0){ glist.innerHTML = '<p class="lede">Kein Treffer – probier einen anderen Suchbegriff.</p>'; return; }
    glist.innerHTML = list.map(function(g){
      var also = (g.also||[]).filter(function(a){ return a!==g.m; });
      var hh = '<div class="gitem"><h4>'+esc(g.t)+"</h4><p>"+esc(g.d)+"</p>";
      hh += '<div class="gmeta">'+modChip(g.m);
      also.forEach(function(a){ hh += modChip(a)+'<span style="font-size:.72rem;color:var(--ink-soft)">auch hier</span>'; });
      hh += "</div>";
      var cards = CARDS.filter(function(c){ return c.g===g.t; });
      if(cards.length){
        hh += '<div class="gmore" style="display:none"><div style="color:var(--ink-soft);margin:8px 0 2px">Passende Karteikarten:</div>';
        cards.forEach(function(c){ hh += '<div class="review-item">↳ '+esc(c.f)+' <a href="#/modul/'+c.m+'/lernen" style="font-size:.8rem">→ Modul üben</a></div>'; });
        hh += "</div>";
      }
      return hh+"</div>";
    }).join("");
    glist.querySelectorAll(".gitem").forEach(function(el){
      el.addEventListener("click", function(ev){
        if(ev.target.tagName==="A") return;
        var more = el.querySelector(".gmore");
        if(more){ more.style.display = more.style.display==="none"? "block":"none"; el.classList.toggle("open"); }
      });
    });
  }
  document.getElementById("gq").addEventListener("input", function(e){ cur.q=e.target.value; paint(); });
  app.querySelectorAll(".gfilter").forEach(function(b){
    b.addEventListener("click", function(){ cur.f = b.getAttribute("data-f"); paintChips(); paint(); });
  });
  paintChips(); paint();
}

/* ============================================================
   TRANSFER-PRÜFUNG
   ============================================================ */
function renderExamEntry(){
  var exs = EX.filter(function(e){return e.m==="exam";});
  var h = '<span class="kicker">Das große Anwenden</span>';
  h += "<h1>🎓 Transfer-Prüfung</h1>";
  h += '<p class="lede">'+exs.length+' gemischte Aufgaben aus allen Modulen: neue Bildsituationen einordnen, Mittel und Wirkungen verknüpfen, Analyse-Phasen unterscheiden, Farb-Regeln anwenden. Bestanden gilt ab '+Math.ceil(exs.length*0.7)+'/'+exs.length+'.</p>';
  if(state.exam && state.exam.best!=null){
    h += '<div class="statgrid"><div class="stat"><b>'+state.exam.best+"/"+exs.length+'</b><span>Bisher bestes Ergebnis</span></div><div class="stat"><b>'+state.exam.runs+"</b><span>Versuche</span></div></div>";
  }
  h += '<div class="panel"><button class="btn alt" id="startExam">Prüfung starten ('+exs.length+' Aufgaben)</button> <span class="chip">Tipp: erst die Module durchlernen – die Prüfung verknüpft alles.</span></div><div id="runnerArea"></div>';
  app.innerHTML = h;
  document.getElementById("startExam").addEventListener("click", function(){
    var order = shuffle(exs);
    var i=0, score=0;
    examFlow = { next: function(ok){ if(ok) score++; i++; step(); } };
    function step(){
      if(i >= order.length){
        state.exam.runs = (state.exam.runs||0)+1;
        if(state.exam.best==null || score>state.exam.best) state.exam.best = score;
        save(); examFlow = null;
        var pass = score >= Math.ceil(order.length*0.7);
        app.innerHTML = '<div class="panel center"><h2>Ergebnis</h2><div class="score-big">'+score+"/"+order.length+"</div><p>"+(pass?"🏆 Bestanden – dein Wissen ist vernetzt und anwendbar!":score>=order.length/2?"Fast – die nächsten Karteikarten-Runden schließen die Lücken.":"Noch Luft nach oben: wiederhole die Module, aus denen die Fehler kamen.")+"</p><button class=\"btn\" id=\"again\">Nochmal versuchen</button> <a class=\"btn ghost\" href=\"#/\">Zum Lernpfad</a></div>";
        document.getElementById("again").addEventListener("click", renderExamEntry);
        return;
      }
      app.innerHTML = '<span class="meta-line">Aufgabe '+(i+1)+"/"+order.length+'</span> <a class="backlink" href="#" id="abortExam" style="margin-left:12px">Abbrechen</a><div id="runnerArea"></div>';
      // Der Hash steht schon auf #/pruefung – ein Link dorthin löst kein hashchange aus, also direkt abbrechen.
      document.getElementById("abortExam").addEventListener("click", function(ev){ ev.preventDefault(); examFlow=null; renderExamEntry(); });
      openRunner(document.getElementById("runnerArea"), order[i], function(){ examFlow=null; renderExamEntry(); }, "← Abbrechen");
    }
    step();
  });
}

/* ---------- Reset ---------- */
document.getElementById("resetBtn").addEventListener("click", function(){
  if(confirm("Wirklich den gesamten Lernfortschritt löschen?")){
    state = {cards:{}, ex:{}, exam:{best:null, runs:0}, free:false};
    save(); route();
  }
});

route();
})();
