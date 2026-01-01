const dd=document.querySelector("[data-dropdown]");
if(dd){
  const btn=dd.querySelector("button");
  btn.addEventListener("click",()=>dd.classList.toggle("open"));
  document.addEventListener("click",(e)=>{
    if(!dd.contains(e.target)) dd.classList.remove("open");
  });
}

const hamb=document.querySelector("[data-hamburger]");
const mobile=document.querySelector("[data-mobile]");
if(hamb && mobile){
  hamb.addEventListener("click",()=>mobile.classList.toggle("show"));
}

const msb=document.querySelector("[data-mobile-services]");
const msub=document.querySelector("[data-mobile-sub]");
if(msb && msub){
  msb.addEventListener("click",()=>msub.classList.toggle("show"));
}

const y=document.querySelector("[data-year]");
if(y) y.textContent=new Date().getFullYear();
