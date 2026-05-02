
(() => {
  const header = document.querySelector('.header');
  const onScroll = () => header && header.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();


(() => {
  const button = document.querySelector('[data-mobile-menu]');
  if (!button) return;

  button.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
    const open = document.body.classList.contains('menu-open');
    button.setAttribute('aria-expanded', String(open));
    button.textContent = open ? '×' : '☰';
  });

  document.querySelectorAll('.mobile-drawer a').forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.remove('menu-open');
      button.setAttribute('aria-expanded', 'false');
      button.textContent = '☰';
    });
  });
})();
