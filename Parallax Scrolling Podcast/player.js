// Minimal lazy-load audio player for episode placeholders
(function(){
  function createAudio(src){
    const audio = document.createElement('audio');
    audio.controls = true;
    audio.src = src;
    audio.preload = 'none';
    audio.style.width = '100%';
    return audio;
  }

  function activatePlaceholder(el){
    const src = el.getAttribute('data-src');
    if(!src) return;
    const audio = createAudio(src);
    // Replace placeholder with audio element
    el.parentNode.replaceChild(audio, el);
    // Try to play (may be blocked unless user interacted)
    audio.play().catch(()=>{});
  }

  function onKey(e){
    if(e.key === 'Enter' || e.key === ' '){
      e.preventDefault();
      activatePlaceholder(e.currentTarget);
    }
  }

  function init(){
    const placeholders = Array.from(document.querySelectorAll('.episode-placeholder'));
    placeholders.forEach(el=>{
      el.addEventListener('click', ()=>activatePlaceholder(el));
      el.addEventListener('keydown', onKey);
    });
  }

  document.addEventListener('DOMContentLoaded', init);
  // expose for debugging
  window.__demoPlayer = { init };
})();
