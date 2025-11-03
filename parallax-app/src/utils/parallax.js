// small utility to apply rAF-driven parallax to elements with data-parallax
export function initParallax(selector = '[data-parallax]'){
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if(prefersReduced) return
  let els = Array.from(document.querySelectorAll(selector))
  let ticking = false
  function update(){
    const scroll = window.scrollY || 0
    els.forEach(el=>{
      const speed = parseFloat(el.dataset.parallaxSpeed) || parseFloat(el.getAttribute('data-parallax-speed')) || 0.06
      const rect = el.getBoundingClientRect()
      const translateY = Math.round((scroll + rect.top) * speed * -1)
      el.style.transform = `translate3d(0, ${translateY}px, 0)`
    })
    ticking = false
  }
  function onScroll(){ if(!ticking){ requestAnimationFrame(update); ticking = true } }
  window.addEventListener('scroll', onScroll, {passive:true})
  window.addEventListener('resize', ()=>{ els = Array.from(document.querySelectorAll(selector)) }, {passive:true})
  // init
  update()
  return ()=>{ window.removeEventListener('scroll', onScroll) }
}
