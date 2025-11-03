// Lightweight rAF-driven parallax for elements with [data-parallax]
(function(){
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let enabled = !prefersReduced && window.innerWidth >= 768;
  const els = () => Array.from(document.querySelectorAll('[data-parallax]'));
  let nodes = els();
  let lastScroll = window.scrollY || 0;
  let ticking = false;

  function onResize(){
    enabled = !prefersReduced && window.innerWidth >= 768;
    nodes = els();
  }

  function update(){
    if(!enabled) return;
    const scrollY = window.scrollY || 0;
    nodes.forEach(el=>{
      const speed = parseFloat(el.getAttribute('data-parallax-speed')) || 0.07;
      const rect = el.getBoundingClientRect();
      const base = scrollY + rect.top;
      const translateY = Math.round((scrollY - base) * speed);
      el.style.transform = `translate3d(0, ${translateY}px, 0)`;
    });
    ticking = false;
  }

  function onScroll(){
    lastScroll = window.scrollY || 0;
    if(!ticking){
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }

  window.addEventListener('resize', onResize, {passive:true});
  window.addEventListener('scroll', onScroll, {passive:true});
  document.addEventListener('DOMContentLoaded', ()=>{ nodes = els(); update(); });
})();
