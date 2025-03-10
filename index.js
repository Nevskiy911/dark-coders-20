import{S as u,N as m,K as p,a as v,i as h,b}from"./assets/vendor-znorpUcV.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const E=new u(".swiper-about",{modules:[m,p],spaceBetween:0,loop:!0,observer:!0,observeParents:!0,navigation:{nextEl:".swiper-button-next-about"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},on:{init:w,slideChangeTransitionEnd:w}});function w(){document.querySelectorAll(".swiper-slide-about").forEach(t=>{t.style.backgroundColor=""});const e=document.querySelector(".swiper-slide-active");e&&(e.style.backgroundColor="#c6e327")}E.init();document.querySelectorAll(".accordion-item-about").forEach((e,t)=>{const r=e.querySelector(".accordion-header-about"),o=e.querySelector(".accordion-content-about"),s=r.querySelector(".about-icon-accordion");t===0?(e.classList.add("active"),o.style.maxHeight=o.scrollHeight+"px",s.style.transform="rotate(180deg)"):o.style.maxHeight="0",r.addEventListener("click",()=>{const i=e.classList.toggle("active");o.style.maxHeight=i?o.scrollHeight+"px":"0",s.style.transform=i?"rotate(180deg)":"rotate(0deg)"})});new u(".projects-swiper",{modules:[m,p],loop:!1,spaceBetween:20,slidesPerView:1,navigation:{nextEl:".projects-swiper-button-next",prevEl:".projects-swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0}});function S(e){for(let t=e.length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return e}const x=document.querySelectorAll(".marquee__inner");x.forEach(e=>{const t=Array.from(e.children),r=S(t);e.innerHTML="",r.forEach(o=>{e.appendChild(o)})});const c={sliderContainer:document.querySelector(".swiper-wrapper-reviews"),slider:document.querySelector(".swiper-reviews"),reviewsSection:document.querySelector("#reviews"),btnBlock:document.querySelector(".btn-wrapper-reviews")},L="https://portfolio-js.b.goit.study/api",q="/reviews",C=async()=>{try{return(await v.get(L+q)).data}catch{return V(),null}},P=()=>{c.sliderContainer.innerHTML='<li class="swiper-placeholder">Not found</li>',c.slider.classList.remove("swiper-reviews"),c.btnBlock.classList.add("hidden-btn"),c.reviewsSection.style.paddingBottom="64px"},k=()=>{h.error({title:"Error",message:"Failed to fetch reviews. Please try again later.",position:"bottomRight",timeout:3e3})},V=()=>{const e=new IntersectionObserver(t=>{t.forEach(r=>{r.isIntersecting&&(k(),e.disconnect())})},{threshold:.5});e.observe(c.reviewsSection)},B=e=>e.map(({author:t,avatar_url:r,review:o})=>`
    <li class="reviews-card swiper-slide">
        <img class="reviews-img" src="${r}" alt="${t}" />
        <h3 class="reviews-title">${t}</h3>
        <p class="reviews-text">${o}</p>
      </li>
  `).join(""),y=()=>{const e=document.querySelectorAll(".reviews-card");e.forEach(r=>r.style.height="auto");const t=Math.max(...Array.from(e,r=>r.offsetHeight));e.forEach(r=>r.style.height=`${t}px`)},I=async()=>{const e=await C();if(!e||e.length===0){P();return}c.sliderContainer.innerHTML=B(e),new u(".swiper-reviews",{modules:[m,p],slidesPerView:1,spaceBetween:16,speed:500,grabCursor:!0,navigation:{nextEl:".swiper-button-reviews-next",prevEl:".swiper-button-reviews-prev"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},on:{init:y,slideChange:y}})};I();const H={form:document.querySelector(".contact-form"),email:document.querySelector(".email"),message:document.querySelector(".message")},{form:l,email:n,message:a}=H,N=v.create({baseURL:"https://portfolio-js.b.goit.study/api"});l.addEventListener("submit",async e=>{e.preventDefault();const t=l.elements.email.value.trim(),r=l.elements.comments.value.trim();(await A(t,r)).status===201?(l.reset(),g()):b.fire({title:"Sorry, an error occurred",text:"Please, correct the data and try again!",color:"#fafafa",background:"#c6e327",width:"300px",timer:4e3,timerProgressBar:!0,customClass:{confirmButton:"custom-ok-button"}})});async function A(e,t){let r;try{r=await N.post("/requests",{email:e,comment:t})}catch(o){console.log(o),r=o}return r}n.addEventListener("input",function(){n.value.length>0?n.validity.valid?(n.classList.remove("error"),n.classList.add("success"),a.textContent="Success!",a.className="message success-text"):(n.classList.remove("success"),n.classList.add("error"),a.textContent="Invalid email, try again",a.className="message error-text"):g()});function g(){n.value="",n.classList.remove("success","error"),a.textContent="",a.className="message"}document.querySelector(".title-modal");document.querySelector(".text-modal");function f(){const e=document.getElementById("footer-modal");e&&(e.style.display="none",document.body.style.overflow="",document.removeEventListener("keydown",M),document.removeEventListener("click",O))}function M(e){e.key==="Escape"&&f()}function O(e){e.target.id==="footer-modal"&&f()}document.getElementById("close-btn").addEventListener("click",f);
//# sourceMappingURL=index.js.map
