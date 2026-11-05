/* ============ EDIT YOUR LINKS HERE ============
   Replace the text inside the quotes with your real links. */
const LINKS={
 staff:"founders.html",
 legal:"https://forms.example.com/lustria-legal",
 expeditions:"https://forms.example.com/lustria-expeditions",
 engineering:"https://forms.example.com/lustria-engineering",
 logistics:"https://forms.example.com/lustria-logistics",
 security:"https://forms.example.com/lustria-security"
};
/* ============ TUG’S PROFILE: EDIT HERE ============
   Fill these in when his character is ready.
   - Leave a field as "" to hide it.
   - portrait: a picture link or a file name placed next to this file, e.g. "tug.jpg"
     (works on your own hosting; on the Claude link, send the image to Claude to embed). */
const TUG={
 name:"Tug",
 facts:"Heir · Law, Commerce & Industry",
 portrait:"",
 about:[
  "Heir to a family of lawyers, merchants and businessmen, the partner house that stood beside the Volkovs when the two allied to build the great corporation.",
  "Where Mikhail brings the science, Tug’s family brought the contracts, the capital and the negotiating skill to turn invention into an empire."
 ],
 appearance:"",
 temperament:""
};

document.querySelectorAll('[data-link]').forEach(a=>{const u=LINKS[a.dataset.link];if(u){a.href=u;if(/^https?:/.test(u)){a.target='_blank';a.rel='noopener'}}});
(function(){const c=document.getElementById('tug-card');if(!c)return;
const e=x=>String(x).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
let h=TUG.portrait?'<div class="portrait"><img alt="'+e(TUG.name)+'" src="'+e(TUG.portrait)+'"></div>':'<div class="portrait" style="opacity:.6">?</div>';
h+='<h3>'+e(TUG.name)+'</h3><div class="facts">'+e(TUG.facts)+'</div>';
(TUG.about||[]).forEach(t=>{if(t)h+='<p>'+e(t)+'</p>'});
if(TUG.appearance)h+='<p><b>Appearance</b><br>'+e(TUG.appearance)+'</p>';
if(TUG.temperament)h+='<p><b>Temperament</b><br>'+e(TUG.temperament)+'</p>';
if(TUG.appearance||TUG.temperament)c.classList.remove('pend');else h+='<p><b>Full profile to be unveiled soon.</b></p>';
c.innerHTML=h})();
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('on');io.unobserve(x.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
