(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reducedMotion.matches || !('IntersectionObserver' in window) || !Element.prototype.animate) return;

  const pending = new Set();
  const animations = new Set();

  function show(section, animate) {
    observer.unobserve(section);
    pending.delete(section);
    section.style.removeProperty('opacity');
    if (!animate || reducedMotion.matches || section.contains(document.activeElement)) return;

    const animation = section.animate(
      [
        { opacity: 0, transform: 'translateY(18px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ],
      { duration: 1200, easing: 'linear' }
    );
    animations.add(animation);
    animation.onfinish = animation.oncancel = () => animations.delete(animation);
  }

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) show(entry.target, true);
    }
  }, { threshold: 0, rootMargin: '0px 0px -50px 0px' });

  for (const section of document.querySelectorAll('main .section')) {
    if (section.getBoundingClientRect().top < window.innerHeight) continue;
    observer.observe(section);
    section.style.opacity = '0';
    pending.add(section);
  }

  document.addEventListener('focusin', (event) => {
    for (const section of pending) {
      if (section.contains(event.target)) show(section, false);
    }
  });

  reducedMotion.addEventListener('change', () => {
    if (!reducedMotion.matches) return;
    for (const section of pending) show(section, false);
    for (const animation of animations) animation.cancel();
    observer.disconnect();
  });
})();
