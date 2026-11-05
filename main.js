/* Site engine. You shouldn't need to edit this file: edit data.js instead. */
(function(){
document.documentElement.className='js';
var esc=function(x){return String(x==null?'':x).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;')};
var D={
 home:typeof HOME!=='undefined'?HOME:{}, history:typeof HISTORY!=='undefined'?HISTORY:{},
 founders:typeof FOUNDERS!=='undefined'?FOUNDERS:{}, industries:typeof INDUSTRIES!=='undefined'?INDUSTRIES:{},
 vision:typeof VISION!=='undefined'?VISION:{}, join:typeof JOIN!=='undefined'?JOIN:{}
};
var roman=['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII'];
function head(d,label,title,intro){
 return '<div class="lbl rv">'+esc(label)+'</div><div class="rule"></div><h2 class="rv">'+esc(title)+'</h2>'+(intro?'<p class="intro rv">'+esc(intro)+'</p>':'');
}
function btn(b,cls){return '<a class="btn '+cls+'" href="#" data-go="'+esc(b.go)+'">'+esc(b.label)+'</a>'}
function profile(P){
 var h=P.portrait?'<div class="portrait"><img alt="Portrait of '+esc(P.name)+'" src="'+esc(P.portrait)+'"></div>':'<div class="portrait" style="opacity:.6">?</div>';
 h+='<h3>'+esc(P.name)+'</h3><div class="facts">'+esc(P.facts)+'</div>';
 (P.about||[]).forEach(function(t){if(t)h+='<p>'+esc(t)+'</p>'});
 if(P.appearance)h+='<p><b>Appearance</b><br>'+esc(P.appearance)+'</p>';
 if(P.temperament)h+='<p><b>Temperament</b><br>'+esc(P.temperament)+'</p>';
 if(P.note)h+='<p><b>'+esc(P.note)+'</b></p>';
 return '<div class="fc rv'+(P.note?' pend':'')+'">'+h+'</div>';
}
function dept(x){
 var l=x.link||'',ext=/^https?:/.test(l);
 return '<a class="dept rv" href="'+esc(l||'#')+'"'+(ext?' target="_blank" rel="noopener"':'')+'><h4>'+esc(x.title)+'</h4><span>'+esc(x.text)+'</span><i>Apply →</i></a>';
}
var R={
 home:function(d){
  var art=document.getElementById('hero-art');
  return '<header class="hero">'+(art?art.innerHTML:'')+'<div class="in"><div class="lbl">'+esc(d.eyebrow)+'</div><h1>Lustria <span>Corporation</span></h1><p class="tag">'+esc(d.tagline)+'</p><p class="i">'+esc(d.intro)+'</p><div class="btns">'+(d.buttons||[]).map(function(b,i){return btn(b,i?'o':'f')}).join('')+'</div></div></header>'
  +'<section class="dark"><div class="wrap">'+head(d,d.label,d.title)+'<div class="grid">'+(d.tiles||[]).map(function(t,i){return '<a class="card rv" href="#" data-go="'+esc(t.go)+'"><div class="n">'+roman[i]+'</div><h3>'+esc(t.title)+'</h3><p>'+esc(t.text)+'</p></a>'}).join('')+'</div></div></section>';
 },
 history:function(d){
  return '<section><div class="wrap about"><div class="rv"><div class="lbl">'+esc(d.label)+'</div><div class="rule"></div><h2>'+esc(d.title)+'</h2>'+(d.paragraphs||[]).map(function(p){return '<p>'+esc(p)+'</p>'}).join('')+'</div><div class="stats rv">'+(d.stats||[]).map(function(s){return '<div class="stat"><b>'+esc(s.num)+'</b><span>'+esc(s.text)+'</span></div>'}).join('')+'</div></div></section>'
  +'<section class="dark"><div class="wrap">'+head(d,d.timelineLabel,d.timelineTitle)+'<div class="tl">'+(d.timeline||[]).map(function(t){return '<div class="ti rv"><b>'+esc(t.date)+'</b><h4>'+esc(t.title)+'</h4><p>'+esc(t.text)+'</p></div>'}).join('')+'</div></div></section>';
 },
 founders:function(d){
  return '<section class="alt"><div class="wrap">'+head(d,d.label,d.title,d.intro)+'<div class="fgrid pair">'+(d.people||[]).map(profile).join('')+'</div></div></section>';
 },
 industries:function(d){
  return '<section class="dark"><div class="wrap">'+head(d,d.label,d.title,d.intro)+'<div class="grid">'+(d.cards||[]).map(function(c,i){return '<div class="card rv"><div class="n">'+roman[i]+'</div><h3>'+esc(c.title)+'</h3><p>'+esc(c.text)+'</p></div>'}).join('')+'</div></div></section>';
 },
 vision:function(d){
  return '<section class="alt"><div class="wrap">'+head(d,d.label,d.title,d.intro)+'<div class="fgrid goals">'+(d.goals||[]).map(function(g){return '<div class="fc rv"><h3>'+esc(g.title)+'</h3><p>'+esc(g.text)+'</p></div>'}).join('')+'</div></div></section>';
 },
 join:function(d){
  var s=d.staff||{},a=d.apply||{},sl=s.link||'',sx=/^https?:/.test(sl);
  var staff=sl?'<a class="pane n" href="'+esc(sl)+'"'+(sx?' target="_blank" rel="noopener"':'')+'>':'<a class="pane n" href="#" data-go="'+esc(s.go||'founders')+'">';
  return '<section class="rec"><div class="wrap">'+head(d,d.label,d.title)+'<p class="rv">'+esc(d.intro)+'</p><div class="big rv">'
  +staff+'<div class="lbl">'+esc(s.label)+'</div><h3>'+esc(s.title)+'</h3><p>'+esc(s.text)+'</p><span class="btn">'+esc(s.button)+'</span></a>'
  +'<a class="pane" href="#" data-scroll="positions"><div class="lbl">'+esc(a.label)+'</div><h3>'+esc(a.title)+'</h3><p>'+esc(a.text)+'</p><span class="btn">'+esc(a.button)+'</span></a></div>'
  +'<div id="positions" class="lbl rv" style="margin:50px 0 20px">'+esc(d.deptLabel)+'</div><div class="depts">'+(d.departments||[]).map(dept).join('')+'</div></div></section>';
 }
};
var app=document.getElementById('app'),views={};
Object.keys(R).forEach(function(k){
 var v=document.createElement('div');v.className='view';v.id='v-'+k;
 try{v.innerHTML=R[k](D[k])}catch(e){v.innerHTML='<section><div class="wrap"><p>This page could not load. Check data.js for a typo.</p></div></section>';console.error(k,e)}
 app.appendChild(v);views[k]=v;
});
var foot=document.getElementById('foot');
if(foot)foot.innerHTML='<b>LUSTRIA CORPORATION</b><br>'+esc((typeof SITE!=='undefined'&&SITE.footer)||'')+'<small>© Lustria Corporation. All rights reserved.</small>';

function show(n,push){
 if(!views[n])n='home';
 Object.keys(views).forEach(function(k){views[k].classList.toggle('on',k===n)});
 document.querySelectorAll('nav a[data-go]').forEach(function(a){var on=a.dataset.go===n;a.classList.toggle('active',on&&n!=='home')});
 window.scrollTo(0,0);
 var els=views[n].querySelectorAll('.rv');
 els.forEach(function(el){el.classList.remove('on')});void views[n].offsetWidth;
 els.forEach(function(el,i){setTimeout(function(){el.classList.add('on')},Math.min(i,12)*70)});
 if(push){try{history.pushState({v:n},'',location.pathname+location.search)}catch(e){}}
}
document.addEventListener('click',function(e){
 var g=e.target.closest&&e.target.closest('[data-go]');
 if(g){e.preventDefault();show(g.dataset.go,true);return}
 var s=e.target.closest&&e.target.closest('[data-scroll]');
 if(s){e.preventDefault();var t=document.getElementById(s.dataset.scroll);if(t)t.scrollIntoView({behavior:'smooth',block:'start'})}
});
window.addEventListener('popstate',function(e){show((e.state&&e.state.v)||'home',false)});
window.addEventListener('error',function(){document.documentElement.className=''});
try{history.replaceState({v:'home'},'',location.pathname+location.search)}catch(e){}
show('home',false);
})();
