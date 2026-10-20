(function(){
var $=function(s,c){return (c||document).querySelector(s)},$$=function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))};
var NUM=SITE.whatsapp,reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
$("#yr").textContent=new Date().getFullYear();
function toast(t){var e=$("#toast");e.textContent=t;e.classList.add("show");clearTimeout(toast.t);toast.t=setTimeout(function(){e.classList.remove("show")},2600)}
/* header */
var bar=$("#top-bar"),sun=$("#sun");
function onScroll(){bar.classList.toggle("solid",scrollY>40);if(!reduce&&sun&&scrollY<900)sun.style.setProperty("--py",(scrollY*.12)+"px")}
addEventListener("scroll",onScroll,{passive:true});onScroll();
/* menu */
var burger=$("#burger"),menu=$("#menu");
function setMenu(o){burger.setAttribute("aria-expanded",o);burger.setAttribute("aria-label",o?"Fechar menu":"Abrir menu");menu.classList.toggle("open",o)}
burger.addEventListener("click",function(){setMenu(burger.getAttribute("aria-expanded")!=="true")});
menu.addEventListener("click",function(e){if(e.target.closest("a"))setMenu(false)});
addEventListener("keydown",function(e){if(e.key==="Escape"){setMenu(false);burger.focus()}});
/* current section */
if("IntersectionObserver" in window){
var links=$$("#menu a[href^='#']:not(.btn)");
var so=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){links.forEach(function(a){a.toggleAttribute("aria-current",a.getAttribute("href")==="#"+en.target.id);if(a.getAttribute("href")==="#"+en.target.id)a.setAttribute("aria-current","true")})}})},{rootMargin:"-45% 0px -50% 0px"});
$$("main section[id]").forEach(function(s){so.observe(s)});
var ro=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.classList.add("in");ro.unobserve(en.target)}})},{threshold:.15});
$$(".reveal").forEach(function(r,i){r.style.transitionDelay=(i%4)*70+"ms";ro.observe(r)});
}else{$$(".reveal").forEach(function(r){r.classList.add("in")})}
/* tabs */
var tabs=$$(".tab");
function pick(i,focus){tabs.forEach(function(t,k){var on=k===i;t.setAttribute("aria-selected",on);t.tabIndex=on?0:-1;$("#"+t.getAttribute("aria-controls")).hidden=!on});if(focus)tabs[i].focus()}
tabs.forEach(function(t,i){t.addEventListener("click",function(){pick(i)});t.addEventListener("keydown",function(e){var n=tabs.length;if(e.key==="ArrowRight")pick((i+1)%n,1);if(e.key==="ArrowLeft")pick((i+n-1)%n,1)})});
$$("[data-assunto]").forEach(function(a){a.addEventListener("click",function(){$("#assunto").value=a.dataset.assunto})});
/* faq: smooth open, one at a time */
$$("details").forEach(function(d){var s=d.querySelector("summary"),a=d.querySelector(".ans");
s.addEventListener("click",function(e){
if(reduce)return;e.preventDefault();
if(d.open){var h=a.offsetHeight;a.animate([{height:h+"px",opacity:1},{height:"0px",opacity:0}],{duration:250,easing:"ease"}).onfinish=function(){d.open=false}}
else{$$("details[open]").forEach(function(o){if(o!==d)o.open=false});d.open=true;var h2=a.offsetHeight;a.animate([{height:"0px",opacity:0},{height:h2+"px",opacity:1}],{duration:280,easing:"ease"})}})});
/* copy */
$("#copy").addEventListener("click",function(){var t=SITE.phoneDisplay;
(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(function(){toast("Número copiado")}).catch(function(){toast("Copie manualmente: "+t)})});
/* form → WhatsApp */
var f=$("#form");
function bad(el,id,m){el.setAttribute("aria-invalid",!!m);$("#"+id).textContent=m||""}
f.addEventListener("submit",function(e){e.preventDefault();
var n=f.nome.value.trim(),m=f.msg.value.trim(),ok=true;
bad(f.nome,"e-nome",n.length<2?"Informe seu nome.":"");bad(f.msg,"e-msg",m.length<5?"Escreva uma mensagem com pelo menos 5 caracteres.":"");
if(n.length<2||m.length<5){(n.length<2?f.nome:f.msg).focus();return}
var txt="Olá, Jarles! Meu nome é "+n+". Tenho interesse em: "+f.assunto.value+". "+m;
var w=open("https://wa.me/"+NUM+"?text="+encodeURIComponent(txt),"_blank","noopener");
toast(w?"Abrindo o WhatsApp. Envie a mensagem por lá.":"Seu navegador bloqueou a janela. Permita pop-ups e tente de novo.")});
})();
