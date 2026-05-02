document.addEventListener('DOMContentLoaded', () => {
  AOS.init({ once: true });

  // Typewriter
  const text = window.innerWidth <= 576
    ? 'Software Architect &\nFull-Stack Developer'
    : 'Software Architect & Full-Stack Developer';
  const target = document.getElementById('animated-text');
  let i = 0;
  (function type() {
    if (i < text.length) { target.textContent += text.charAt(i++); setTimeout(type, 100); }
  })();

  // Navbar scroll: transparent → solid
  const nav = document.getElementById('main-nav');
  const onScroll = () => nav.classList.toggle('nav-scrolled', window.scrollY > 50);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu toggle
  document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('nav-menu').classList.toggle('open');
  });

  document.querySelectorAll('#nav-menu a').forEach(a =>
    a.addEventListener('click', () =>
      document.getElementById('nav-menu').classList.remove('open')
    )
  );
});
