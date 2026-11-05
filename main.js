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
/* ============ FOUNDER PROFILES: EDIT TEXT HERE ============
   Only change the text between the "quotes". Don't touch the commas, brackets or quotes themselves.
   - Leave a field as "" to hide it.
   - To add a paragraph, add a new line of text in quotes inside "about", with a comma after the previous one.
   - If you need a quote mark inside the text, write \" instead of ".
   - portrait: a picture link or a file name inside the assets folder, e.g. "assets/tug.jpg"
   - note: a bold line at the bottom (e.g. "Full profile to be unveiled soon."). Leave "" to hide it.
     Cards with a note get a dashed border; cards without one get a solid border.
   The two cards always sit side by side, however much you write. */
const MIKHAIL={
 name:"Mikhail Volkov",
 facts:"Age 26 · House Volkov · Science & Engineering",
 portrait:"https://i.pinimg.com/736x/8b/f6/4a/8bf64aea1acbb6ece52faf73cd31da89.jpg",
 fallback:"assets/mikhail.jpg",
 about:[
  "Mikhail is hardly a man of discipline. He is found roaming the Vault’s halls, charming company, chasing romances that never end well, and wading into affairs that are none of his business. Yet beneath the carefree air lies a first-rate education in chemistry, engineering and the workings of machinery.",
  "Heir to a longstanding family mandate, he hopes to turn that knowledge toward rebuilding the enterprise his family once helped to rule. With the Vaults preparing to open, he is eager for a world beyond the walls to explore, experiment with and perhaps make something worthwhile of his life."
 ],
 appearance:"",
 temperament:"",
 note:""
};
const TUG={
 name:"Tug",
 facts:"Heir · Law, Commerce & Industry",
 portrait:"",
 fallback:"",
 about:[
  "Heir to a family of lawyers, merchants and businessmen, the partner house that stood beside the Volkovs when the two allied to build the great corporation.",
  "Where Mikhail brings the science, Tug’s family brought the contracts, the capital and the negotiating skill to turn invention into an empire."
 ],
 appearance:"",
 temperament:"",
 note:"Full profile to be unveiled soon."
};

document.querySelectorAll('[data-link]').forEach(a=>{const u=LINKS[a.dataset.link];if(u){a.href=u;if(/^https?:/.test(u)){a.target='_blank';a.rel='noopener'}}});
const esc=x=>String(x).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
function renderProfile(id,P){const c=document.getElementById(id);if(!c)return;
let h='';
if(P.portrait){h+='<div class="portrait"><img alt="Portrait of '+esc(P.name)+'" src="'+esc(P.portrait)+'" referrerpolicy="no-referrer"></div>'}
else h+='<div class="portrait" style="opacity:.6">?</div>';
h+='<h3>'+esc(P.name)+'</h3><div class="facts">'+esc(P.facts)+'</div>';
(P.about||[]).forEach(t=>{if(t)h+='<p>'+esc(t)+'</p>'});
if(P.appearance)h+='<p><b>Appearance</b><br>'+esc(P.appearance)+'</p>';
if(P.temperament)h+='<p><b>Temperament</b><br>'+esc(P.temperament)+'</p>';
if(P.note){h+='<p><b>'+esc(P.note)+'</b></p>';c.classList.add('pend')}else c.classList.remove('pend');
c.innerHTML=h;
const img=c.querySelector('img');if(img&&P.fallback)img.onerror=()=>{img.onerror=null;img.src=P.fallback};}
renderProfile('mikhail-card',MIKHAIL);renderProfile('tug-card',TUG);
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('on');io.unobserve(x.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
