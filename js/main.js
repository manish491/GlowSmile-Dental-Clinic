// ===== EDIT THESE =====
const CFG={phone:"918076486391",clinic:"GlowSmile Dental Clinic"};
// ======================
const $=s=>document.querySelector(s),wa=t=>`https://wa.me/${CFG.phone}?text=${encodeURIComponent(t)}`;
document.querySelectorAll(".wa,.wa2").forEach(a=>{a.href=wa("Hello, I'd like to book an appointment.");a.target="_blank";a.rel="noopener"});
const b=$(".burger"),n=$(".nav");b.onclick=()=>{const o=n.classList.toggle("on");b.setAttribute("aria-expanded",o)};
if(!localStorage.getItem("ck")){$("#ck").hidden=false}$("#ckb").onclick=()=>{localStorage.setItem("ck",1);$("#ck").hidden=true};
const bar=$("#bar");if(bar)bar.oninput=()=>$("#bef").style.clipPath=`inset(0 ${100-bar.value}% 0 0)`;
document.querySelectorAll("#quiz button").forEach(x=>x.onclick=()=>{$("#qr").innerHTML=`Suggested: <a href="services.html">${x.dataset.q}</a>. <a href="booking.html">Book a consult</a>`});
const cs=$("#cs");if(cs){const f=()=>{const v=+cs.value,m=+$("#cm").value;$("#ct").textContent="₹"+v.toLocaleString("en-IN");$("#ce").textContent="₹"+Math.ceil(v/m).toLocaleString("en-IN")};cs.onchange=$("#cm").onchange=f;f()}
const bf=$("#bf");if(bf){bf.d.min=new Date().toISOString().split("T")[0];bf.onsubmit=e=>{e.preventDefault();const d=new FormData(bf);
window.open(wa(`Appointment request\nName: ${d.get("n")}\nPhone: ${d.get("p")}\nEmail: ${d.get("e")||"-"}\nTreatment: ${d.get("t")}\nType: ${d.get("v")}\nDate: ${d.get("d")} (${d.get("h")})`),"_blank");$("#bm").textContent="Opening WhatsApp. Send the message to confirm your request."}}
const T={hi:{Home:"होम",Services:"सेवाएँ",About:"हमारे बारे में",Book:"बुक करें",Contact:"संपर्क","Book appointment":"अपॉइंटमेंट बुक करें",h1:"बेहतरीन देखभाल, आधुनिक मुस्कान।",lead:"नियमित जाँच से लेकर पूर्ण स्माइल मेकओवर तक, हर दंत उपचार एक ही छत के नीचे।"},
kn:{Home:"ಮುಖಪುಟ",Services:"ಸೇವೆಗಳು",About:"ನಮ್ಮ ಬಗ್ಗೆ",Book:"ಬುಕ್ ಮಾಡಿ",Contact:"ಸಂಪರ್ಕ","Book appointment":"ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ",h1:"ಕಾಲಾತೀತ ಆರೈಕೆ, ಆಧುನಿಕ ಮುಗುಳ್ನಗೆ.",lead:"ಸಾಮಾನ್ಯ ತಪಾಸಣೆಯಿಂದ ಸಂಪೂರ್ಣ ಸ್ಮೈಲ್ ಮೇಕ್‌ಓವರ್‌ವರೆಗೆ, ಎಲ್ಲಾ ಚಿಕಿತ್ಸೆ ಒಂದೇ ಸೂರಿನಡಿ."}};
const L=$("#lang"),apply=l=>document.querySelectorAll("[data-i]").forEach(e=>{e.dataset.o=e.dataset.o||e.textContent;e.textContent=(T[l]&&T[l][e.dataset.i])||e.dataset.o});
L.value=localStorage.getItem("lg")||"en";apply(L.value);L.onchange=()=>{localStorage.setItem("lg",L.value);apply(L.value)};
// ===== Motion — made and managed by Manish Pandey =====
const hd=$(".hd"),pb=document.createElement("div");pb.id="pgb";document.body.appendChild(pb);
const par=document.querySelectorAll("[data-par]");
const raf=f=>{let q=0;return(...a)=>{if(q)return;q=requestAnimationFrame(()=>{q=0;f(...a)})}};
let maxS=1,smallHd=false;const calc=()=>{maxS=Math.max(1,document.documentElement.scrollHeight-innerHeight)};
calc();addEventListener("load",calc);addEventListener("resize",raf(calc),{passive:true});
const onScroll=raf(()=>{const y=scrollY;pb.style.transform=`scaleX(${Math.min(1,y/maxS)})`;
const sm=y>40;if(sm!==smallHd){smallHd=sm;hd.classList.toggle("sm",sm);setTimeout(calc,350)}
if(par.length){const t=`translateY(${Math.min(y*.06,30)}px)`;par.forEach(p=>p.style.transform=t)}});
addEventListener("scroll",onScroll,{passive:true});onScroll();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll("h2,.sv,.sp,.tg figure,.quiz,.calc,.ba,details,.note").forEach((e,i)=>{if(!e.classList.contains("rl")&&!e.classList.contains("rr")&&!e.matches("h2"))e.classList.add("rv");e.style.setProperty("--dl",(i%4)*.08+"s")});
document.querySelectorAll(".rv,.rl,.rr,h2").forEach(e=>io.observe(e));
document.querySelectorAll(".sv,.sp").forEach(c=>{c.addEventListener("pointermove",raf(e=>{if(e.pointerType!=="mouse")return;const r=c.getBoundingClientRect();c.style.setProperty("--ry",((e.clientX-r.left)/r.width-.5)*6+"deg");c.style.setProperty("--rx",-((e.clientY-r.top)/r.height-.5)*6+"deg")}));c.addEventListener("pointerleave",()=>{c.style.setProperty("--rx","0deg");c.style.setProperty("--ry","0deg")})});

// ===== Extra micro-interactions =====
document.querySelectorAll(".btn").forEach(btn=>{
  btn.addEventListener("click",e=>{
    const r=btn.getBoundingClientRect();
    const s=document.createElement("span");
    s.className="ripple";
    s.style.left=(e.clientX-r.left)+"px";
    s.style.top=(e.clientY-r.top)+"px";
    btn.appendChild(s);
    setTimeout(()=>s.remove(),650);
  });
});

const motionItems=document.querySelectorAll(".visual-card,.emergency-item,.partner-art,.doctor-card,.booking-pay,.wide-art");
motionItems.forEach((el,i)=>{
  if(!el.classList.contains("rv")&&!el.classList.contains("rl")&&!el.classList.contains("rr")){
    el.classList.add("rv");
  }
  el.style.setProperty("--dl",(i%5)*.07+"s");
});
motionItems.forEach(el=>io.observe(el));

const hero=document.querySelector(".hero");
if(hero){
  hero.addEventListener("pointermove",raf(e=>{
    if(e.pointerType!=="mouse")return;
    const r=hero.getBoundingClientRect();
    hero.style.setProperty("--mx",((e.clientX-r.left)/r.width*100)+"%");
    hero.style.setProperty("--my",((e.clientY-r.top)/r.height*100)+"%");
  }));
}

document.querySelectorAll(".emergency-item,.partner-art,.doctor-card,.visual-card").forEach(el=>{
  el.addEventListener("pointermove",raf(e=>{
    if(e.pointerType!=="mouse")return;
    const r=el.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    el.style.setProperty("--tiltX",(-y*2.2).toFixed(2)+"deg");
    el.style.setProperty("--tiltY",(x*2.2).toFixed(2)+"deg");
  }));
  el.addEventListener("pointerleave",()=>{
    el.style.setProperty("--tiltX","0deg");
    el.style.setProperty("--tiltY","0deg");
  });
});

// ===== Image loading + treatment interactions =====
document.querySelectorAll("img").forEach(img=>{
  const mark=()=>img.classList.add("loaded");
  if(img.complete) mark(); else img.addEventListener("load",mark,{once:true});
});
document.querySelectorAll(".service-card,.treatment-mini").forEach((el,i)=>{
  if(!el.classList.contains("rv")) el.classList.add("rv");
  el.style.setProperty("--dl",(i%6)*.06+"s");
  el.addEventListener("pointermove",raf(e=>{
    if(e.pointerType!=="mouse")return;
    const r=el.getBoundingClientRect(),x=e.clientX/r.width-r.left/r.width,y=e.clientY/r.height-r.top/r.height;
    el.style.setProperty("--tiltX",(-y*2.8).toFixed(2)+"deg");
    el.style.setProperty("--tiltY",(x*2.8).toFixed(2)+"deg");
  }));
  el.addEventListener("pointerleave",()=>{
    el.style.setProperty("--tiltX","0deg");el.style.setProperty("--tiltY","0deg");
  });
});
document.querySelectorAll(".service-card,.treatment-mini").forEach(el=>io.observe(el));

// ===== Advanced GlowSmile transitions + pop-up motion =====
// Page transition overlay for internal navigation.
const pageWipe=document.createElement("div");
pageWipe.className="page-transition";
document.body.appendChild(pageWipe);
document.querySelectorAll('a[href]').forEach(a=>{
  const href=a.getAttribute('href');
  if(!href||href.startsWith('#')||href.startsWith('http')||href.startsWith('mailto:')||href.startsWith('tel:')||a.target==='_blank')return;
  a.addEventListener('click',e=>{
    if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
    const url=new URL(href,location.href);
    if(url.origin!==location.origin)return;
    e.preventDefault();
    pageWipe.classList.add('on');
    setTimeout(()=>location.href=url.href,matchMedia('(prefers-reduced-motion:reduce)').matches?0:260);
  });
});
window.addEventListener('pageshow',()=>setTimeout(()=>pageWipe.classList.remove('on'),40));

// Turn major visual blocks into richer pop-in reveals while preserving existing .rv animations.
const popSelectors='.hero .wrap,.service-card,.treatment-mini,.visual-card,.emergency-item,.partner-art,.doctor-card,.wide-art,.ba-image,.sp,.tg figure,.calc,.quiz,.booking-pay,.fg>div';
document.querySelectorAll(popSelectors).forEach((el,i)=>{
  el.classList.add('pop-reveal');
  el.style.setProperty('--pop-delay',(i%6)*.055+'s');
  io.observe(el);
});

// Add subtle floating particles to major hero/section areas without extra image assets.
document.querySelectorAll('.hero,.band').forEach((section,idx)=>{
  if(section.querySelector('.motion-particles'))return;
  const p=document.createElement('div');p.className='motion-particles';
  for(let i=0;i<4;i++){const dot=document.createElement('i');dot.style.setProperty('--pd',(6+((i+idx)%4))+'s');dot.style.setProperty('--ps',(-i*1.4)+'s');p.appendChild(dot)}
  section.style.position='relative';section.appendChild(p);
});

// Add animated border treatment to selected premium cards.
document.querySelectorAll('.service-card,.doctor-card,.partner-art,.visual-card,.emergency-item,.sp').forEach(el=>el.classList.add('glow-card'));

// ===== Reliable appointment popup =====
// Shows on the homepage after 4 seconds on every fresh page load.
if(location.pathname.endsWith('index.html')||location.pathname.endsWith('/')){
  setTimeout(()=>{
    if(document.querySelector('.appt-pop')) return;
    const pop=document.createElement('aside');
    pop.className='appt-pop';
    pop.innerHTML=`<button class="pop-close" aria-label="Close">×</button><div class="pop-top"><div class="pop-icon">✦</div><div><h3>Ready for your smile?</h3><p>Book a comfortable consultation with GlowSmile Dental Clinic.</p></div></div><div class="pop-actions"><a class="btn" href="booking.html">Book a visit</a><a class="btn o" href="tel:+918076486391">Call clinic</a></div>`;
    document.body.appendChild(pop);
    requestAnimationFrame(()=>requestAnimationFrame(()=>pop.classList.add('show')));
    const close=()=>{pop.classList.remove('show');pop.classList.add('hide');setTimeout(()=>pop.remove(),400)};
    pop.querySelector('.pop-close').onclick=close;
    pop.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
  },4000);
}


// ===== Performance helpers =====
// Prefetch internal pages (idle + on hover/touch) so navigation feels instant.
(()=>{const done=new Set();const pf=h=>{if(done.has(h))return;done.add(h);const l=document.createElement('link');l.rel='prefetch';l.href=h;document.head.appendChild(l)};
const links=[...document.querySelectorAll('a[href$=".html"]')].filter(a=>{try{return new URL(a.href).origin===location.origin&&a.pathname!==location.pathname}catch(e){return false}});
links.forEach(a=>{a.addEventListener('pointerenter',()=>pf(a.href),{once:true,passive:true});a.addEventListener('touchstart',()=>pf(a.href),{once:true,passive:true})});
const idle=window.requestIdleCallback||(f=>setTimeout(f,1500));idle(()=>[...new Set(links.map(a=>a.href))].slice(0,5).forEach(pf))})();

// Pause endless CSS animations while their section is off-screen (saves CPU/GPU, same look).
if('IntersectionObserver' in window){
  const po=new IntersectionObserver(es=>es.forEach(e=>e.target.classList.toggle('off',!e.isIntersecting)),{rootMargin:'120px'});
  document.querySelectorAll('.hero,.mq,.band,.ba,.partner-art,.doctor-card,.credit-wrap,.mk').forEach(el=>po.observe(el));
}
