/* Site engine. You shouldn't need to edit this file: edit data.js instead. */
(function(){
var all=function(){return document.querySelectorAll('.rv')};
function reveal(){all().forEach(function(el){el.classList.add('on')})}

/* Fade-in on scroll, with fail-safes so content can never stay hidden */
try{
 if('IntersectionObserver' in window){
  var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('on');io.unobserve(x.target)}})},{threshold:.15});
  all().forEach(function(el){io.observe(el)});
 }else reveal();
}catch(err){reveal()}
window.addEventListener('error',reveal);

var esc=function(x){return String(x).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;')};
function renderProfile(id,P){
 var c=document.getElementById(id);if(!c||!P)return;
 var h='';
 if(P.portrait)h+='<div class="portrait"><img alt="Portrait of '+esc(P.name)+'" src="'+esc(P.portrait)+'" referrerpolicy="no-referrer"></div>';
 else h+='<div class="portrait" style="opacity:.6">?</div>';
 h+='<h3>'+esc(P.name)+'</h3><div class="facts">'+esc(P.facts)+'</div>';
 (P.about||[]).forEach(function(t){if(t)h+='<p>'+esc(t)+'</p>'});
 if(P.appearance)h+='<p><b>Appearance</b><br>'+esc(P.appearance)+'</p>';
 if(P.temperament)h+='<p><b>Temperament</b><br>'+esc(P.temperament)+'</p>';
 if(P.note){h+='<p><b>'+esc(P.note)+'</b></p>';c.classList.add('pend')}else c.classList.remove('pend');
 c.innerHTML=h;
 var img=c.querySelector('img');
 if(img&&P.fallback)img.onerror=function(){img.onerror=null;img.src=P.fallback};
}

function init(){
 try{
  if(typeof LINKS!=='undefined')document.querySelectorAll('[data-link]').forEach(function(a){
   var u=LINKS[a.dataset.link];
   if(u){a.href=u;if(/^https?:/.test(u)){a.target='_blank';a.rel='noopener'}}
  });
 }catch(err){console.error(err)}
 try{
  if(typeof MIKHAIL!=='undefined')renderProfile('mikhail-card',MIKHAIL);
  if(typeof TUG!=='undefined')renderProfile('tug-card',TUG);
 }catch(err){console.error(err)}
}

/* Load the editable data file, then fill in links and cards */
var s=document.createElement('script');
s.src='data.js';s.onload=init;s.onerror=init;
document.head.appendChild(s);
})();
