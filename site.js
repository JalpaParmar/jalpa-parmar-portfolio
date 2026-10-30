// Progressive enhancement: all links stay available if JavaScript is disabled.
(() => {
  const nav = document.querySelector('.nav-shell');
  const button = document.querySelector('.menu-toggle');
  const links = document.querySelector('#nav-links');
  if (!nav || !button || !links) return;
  const mobile = window.matchMedia('(max-width: 850px)');
  const close = () => {
    links.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
  };
  nav.classList.add('enhanced');
  button.hidden = false;
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    links.classList.toggle('is-open', open);
  });
  links.addEventListener('click', event => {
    if (!event.target.closest('a')) return;
    close();
    // Move focus to the destination instead of leaving it inside a closed menu.
    const url = new URL(event.target.closest('a').href);
    if (mobile.matches && url.pathname === location.pathname && url.hash) {
      const section = document.getElementById(url.hash.slice(1));
      if (section) {
        section.setAttribute('tabindex', '-1');
        section.focus({ preventScroll: true });
      }
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      close();
      button.focus();
    }
  });
  mobile.addEventListener('change', () => {
    const focusWasInside = links.contains(document.activeElement);
    close();
    if (mobile.matches && focusWasInside) button.focus();
    if (!mobile.matches && document.activeElement === button) links.querySelector('a').focus();
  });
})();
