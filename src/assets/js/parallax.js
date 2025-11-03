// Lightweight, performant parallax for elements with [data-parallax]
// - Respects prefers-reduced-motion
// - Only enables on screens >= 768px by default
// - Uses requestAnimationFrame and transform: translate3d for GPU acceleration

(function () {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mq.matches) return; // user's preference: no motion

  // configuration
  const MIN_WIDTH = 768; // only enable parallax on larger viewports

  let enabled = window.innerWidth >= MIN_WIDTH;
  let ticking = false;
  let sc = window.scrollY;
  let elements = [];

  function init() {
    // collect elements
    elements = Array.from(document.querySelectorAll('[data-parallax]')).map(el => {
      const speed = parseFloat(el.getAttribute('data-parallax-speed')) || 0.15; // default speed
      const rect = el.getBoundingClientRect();
      const base = rect.top + window.scrollY; // base position relative to document
      el.style.willChange = 'transform';
      return { el, speed, base };
    });
    // initial update
    onScroll();
  }

  function onScroll() {
    sc = window.scrollY;
    requestTick();
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }

  function update() {
    ticking = false;
    if (!enabled) return;
    const height = window.innerHeight;

    elements.forEach(item => {
      const { el, speed, base } = item;
      // compute a translation relative to the element's base position
      // smaller speed -> smaller movement. Negative values move opposite.
      const translateY = Math.round((sc - base) * speed);
      // small optimization: only set style when changed
      el.style.transform = `translate3d(0, ${translateY}px, 0)`;
    });
  }

  function onResize() {
    const was = enabled;
    enabled = window.innerWidth >= MIN_WIDTH;
    // if enabling, recalc bases and init
    if (enabled && !was) {
      init();
    }
    if (!enabled) {
      // reset transforms
      elements.forEach(i => { i.el.style.transform = ''; });
    }
  }

  // Setup listeners
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize);

  // Init only if there are matching elements and screen size ok
  function startIfNeeded() {
    if (window.innerWidth >= MIN_WIDTH && document.querySelector('[data-parallax]')) {
      init();
    }
  }

  // run on DOMContentLoaded or immediately if already loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startIfNeeded);
  } else {
    startIfNeeded();
  }
})();
