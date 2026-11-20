(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reducedMotion.matches || !('IntersectionObserver' in window) || !Element.prototype.animate) return;

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      observer.unobserve(entry.target);
      if (reducedMotion.matches || entry.target.contains(document.activeElement)) continue;
      entry.target.animate(
        [
          { opacity: 0.2, transform: 'translateY(12px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ],
        { duration: 550, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }
      );
    }
  }, { threshold: 0, rootMargin: '0px 0px -24px 0px' });

  for (const section of document.querySelectorAll('main .section')) {
    if (section.getBoundingClientRect().top >= window.innerHeight) observer.observe(section);
  }

  reducedMotion.addEventListener('change', () => {
    if (!reducedMotion.matches) return;
    observer.disconnect();
    for (const animation of document.getAnimations()) animation.cancel();
  });
})();
