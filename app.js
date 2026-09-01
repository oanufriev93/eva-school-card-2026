(()=>{
'use strict';
const $=s=>document.querySelector(s);
const body=document.body;
const opening=$('#opening');
const toast=$('#toast');
function showToast(t){if(!toast)return;toast.textContent=t;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2500)}
function spark(){return}
function openCard(){body.classList.add('opened');body.classList.remove('locked');if(opening){opening.classList.add('leave');setTimeout(()=>opening.hidden=true,900)};startMusic();document.querySelectorAll('.reveal').forEach(x=>x.classList.add('on'))}
const open=$('#openCard');if(open)open.addEventListener('click',openCard);
document.addEventListener('keydown',e=>{if(e.key==='Enter'&&!body.classList.contains('opened'))openCard()});
const sound=$('#sound');let ctx;
async function startMusic(){try{if(ctx)return;const C=window.AudioContext||window.webkitAudioContext;if(!C)return;ctx=new C();await ctx.resume();let o=ctx.createOscillator(),g=ctx.createGain();o.frequency.value=523;g.gain.value=.02;o.connect(g).connect(ctx.destination);o.start();setTimeout(()=>{try{o.stop()}catch(e){}},900)}catch(e){}}
if(sound)sound.addEventListener('click',startMusic);
document.querySelectorAll('[data-scroll]').forEach(b=>b.onclick=()=>document.querySelector(b.dataset.scroll)?.scrollIntoView({behavior:'smooth'}));
const envelope=$('#envelope'),reader=$('#reader'),intro=$('#letterIntro');
function letter(){if(envelope)envelope.classList.add('open');if(intro)intro.style.display='none';if(reader)reader.classList.add('show')}
if(envelope)envelope.onclick=letter;
const openLetter=$('#openLetter');if(openLetter)openLetter.onclick=letter;
})();
