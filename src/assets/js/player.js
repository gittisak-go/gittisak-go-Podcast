// Shared player and share utilities for the site
(function(){
  // Share helpers
  function shareToFacebook() {
    const url = window.location.href;
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url),'fbshare','width=600,height=400');
  }
  function shareToLine() {
    const url = window.location.href;
    window.open('https://social-plugins.line.me/lineit/share?url=' + encodeURIComponent(url),'lineshare','width=600,height=600');
  }
  function copyLink() {
    const url = window.location.href;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(() => { alert('คัดลอกลิงก์ไปยังคลิปบอร์ดแล้ว'); }).catch(() => { fallbackCopy(url); });
    } else { fallbackCopy(url); }
  }
  function fallbackCopy(text) {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    try { document.execCommand('copy'); alert('คัดลอกลิงก์ไปยังคลิปบอร์ดแล้ว'); } catch (e) { prompt('คัดลอกลิงก์ (กด Ctrl+C แล้ว Enter):', text); }
    document.body.removeChild(input);
  }

  // Expose share functions to global scope (so inline onclicks work)
  window.shareToFacebook = shareToFacebook;
  window.shareToLine = shareToLine;
  window.copyLink = copyLink;

  // Lazy-load episode embeds: replace placeholder with iframe or audio on click or Enter
  function initEpisodePlaceholders() {
    const placeholders = document.querySelectorAll('.episode-media');
    const audioRE = /\.(m4a|mp3|wav|ogg)(\?.*)?$/i;
    placeholders.forEach(ph => {
      const src = ph.getAttribute('data-src');
      if (!src) return;
      const isAudio = audioRE.test(src) || /\/m4a\//i.test(src);
      const activate = async () => {
        if (ph.dataset.loaded) return;
        ph.innerHTML = '';
        if (isAudio) {
          const audio = document.createElement('audio');
          audio.controls = true;
          audio.preload = 'none';
          audio.style.width = '100%';
          audio.style.borderRadius = '12px';
          audio.src = src;
          audio.setAttribute('title', ph.getAttribute('aria-label') || 'Episode audio');
          ph.appendChild(audio);
          try { await audio.play(); } catch (e) { /* autoplay blocked */ }
        } else {
          const iframe = document.createElement('iframe');
          iframe.setAttribute('src', src);
          iframe.setAttribute('loading', 'lazy');
          iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
          iframe.setAttribute('allowfullscreen', '');
          iframe.setAttribute('title', ph.getAttribute('aria-label') || 'Episode player');
          iframe.style.width = '100%';
          iframe.style.borderRadius = '12px';
          iframe.style.aspectRatio = '16/9';
          ph.appendChild(iframe);
        }
        ph.dataset.loaded = 'true';
      };

      ph.addEventListener('click', activate);
      ph.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); } });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEpisodePlaceholders);
  } else {
    initEpisodePlaceholders();
  }
})();
