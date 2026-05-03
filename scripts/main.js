// ── Translations ─────────────────────────────────────────────────────────────
const T = {
  es: {
    'nav.about':      'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.projects':   'Proyectos',
    'nav.education':  'Educación',
    'nav.contact':    'Contacto',

    'hero.download':          'Descargar CV',
    'hero.role_primary':      'Arquitecto de Software',
    'hero.role_secondary':    'Amante del código limpio, los equipos que crecen y el software que deja huella',
    'hero.badge':             '5+ años · Banca · Liderazgo Ágil · Transformación Digital',
    'hero.typewriter':        'Arquitecto de Software & Desarrollador Full-Stack',
    'hero.typewriter_mobile': 'Arquitecto de Software &\nDesarrollador Full-Stack',

    'about.title':    'Sobre Mí',
    'about.who':      'Quién Soy',
    'about.bio':      'Soy un Arquitecto de Software y Desarrollador Full-Stack con más de 5 años de experiencia, la mayoría en el sector bancario. He liderado equipos ágiles, diseñado arquitecturas escalables y participado activamente en la transformación tecnológica de la organización. Me apasiona construir software de calidad que genere impacto real en el negocio.',
    'about.info':     'Información Básica',
    'about.fn_l':     'Nombre',
    'about.co_l':     'País',
    'about.co_v':     'Colombia',
    'about.em_l':     'Email',
    'about.ph_l':     'Teléfono',
    'about.la_l':     'Idiomas',
    'about.la_v':     'Español, Inglés (nivel intermedio)',
    'about.st1':      'Años de exp.',
    'about.st2':      'Proyectos',
    'about.st3':      'Empresas',
    'about.hl1':      'Arquitectura de microservicios en AWS',
    'about.hl2':      'Liderazgo de equipos ágiles multidisciplinarios',
    'about.hl3':      'Transformación digital en sector bancario',

    'skills.title': 'Habilidades Profesionales',
    'skills.fe':    'Frontend',
    'skills.be':    'Backend',
    'skills.db':    'Bases de Datos',
    'skills.cloud': 'Cloud',
    'skills.tools': 'Herramientas',
    'skills.arch':  'Arquitectura',

    'portfolio.title':    'Proyectos Destacados',
    'proj.sisinpos.sub':  'Sistema Web',
    'proj.contratos.sub': 'Generador de Contratos',
    'proj.inmob.sub':     'Página Web',
    'proj.chalo.sub':     'App de Delivery',
    'proj.emp.sub':       'Universidad Autónoma de Manizales',
    'proj.fuel.sub':      'Alcaldía de Aguadas, Caldas',
    'proj.visit':         'Ver sitio',

    'exp.title':  'Experiencia Laboral',
    'exp.1.date': 'Mayo 2021 – Presente',
    'exp.1.role': 'Arquitecto & Desarrollador Full-Stack',
    'exp.1.desc': 'Desarrollo Backend y Frontend, Microservicios y Microfrontends (Node, Spring, Quarkus, NestJS, Express, Angular, Dialogflow, Google Apps Script). Diseño de arquitecturas (AWS), contenerización.',
    'exp.2.date': 'Junio 2020 – Noviembre 2020',
    'exp.2.role': 'Desarrollador Full-Stack',
    'exp.2.desc': 'Desarrollo Backend y Frontend (Ionic, Firebase, HTML, CSS3, JS, WordPress).',
    'exp.3.date': 'Febrero 2020 – Mayo 2020',
    'exp.3.role': 'Desarrollador Full-Stack',
    'exp.3.desc': 'Desarrollo del Sistema PQRS (Laravel, MySQL, Angular).',

    'edu.title':      'Educación',
    'edu.1.degree':   'Ingeniero de Sistemas',
    'edu.1.duration': '5 Años',
    'edu.2.degree':   'Técnico Profesional en Soporte y Operación de Sistemas Informáticos',
    'edu.2.duration': '2 Años',
    'edu.3.degree':   'Bachiller Técnico',
    'edu.3.duration': '6 Años',

    'contact.title':    'Contáctame',
    'contact.subtitle': 'No dudes en escribirme.',
    'contact.name_ph':  'Tu nombre',
    'contact.sub_ph':   'Asunto',
    'contact.email_ph': 'Tu correo',
    'contact.msg_ph':   'Tu mensaje',
    'contact.send':     'Enviar mensaje',
    'contact.ph_l':     'Teléfono',
    'contact.em_l':     'Email',

    'footer.rights': '© 2024 Alejandro Gómez. Todos los derechos reservados.',
    'meta.title':    'Alejandro Gómez | Arquitecto de Software',
  },

  en: {
    'nav.about':      'About',
    'nav.experience': 'Experience',
    'nav.projects':   'Projects',
    'nav.education':  'Education',
    'nav.contact':    'Contact',

    'hero.download':          'Download CV',
    'hero.role_primary':      'Software Architect',
    'hero.role_secondary':    'Passionate about clean code, growing teams, and software that leaves a mark',
    'hero.badge':             '5+ years · Banking · Agile Leadership · Digital Transformation',
    'hero.typewriter':        'Software Architect & Full-Stack Developer',
    'hero.typewriter_mobile': 'Software Architect &\nFull-Stack Developer',

    'about.title':    'About Me',
    'about.who':      'Who I Am',
    'about.bio':      'I am a Software Architect and Full-Stack Developer with over 5 years of experience, most of them in the banking sector. I have led agile teams, designed scalable architectures, and actively contributed to the technological transformation of the organization. I am passionate about building quality software that drives real business impact.',
    'about.info':     'Basic Information',
    'about.fn_l':     'Full Name',
    'about.co_l':     'Country',
    'about.co_v':     'Colombia',
    'about.em_l':     'Email',
    'about.ph_l':     'Phone',
    'about.la_l':     'Languages',
    'about.la_v':     'Spanish, English (intermediate)',
    'about.st1':      'Years of exp.',
    'about.st2':      'Projects',
    'about.st3':      'Companies',
    'about.hl1':      'Microservices architecture on AWS',
    'about.hl2':      'Leadership of multidisciplinary agile teams',
    'about.hl3':      'Digital transformation in the banking sector',

    'skills.title': 'Professional Skills',
    'skills.fe':    'Frontend',
    'skills.be':    'Backend',
    'skills.db':    'Databases',
    'skills.cloud': 'Cloud',
    'skills.tools': 'Tools',
    'skills.arch':  'Architecture',

    'portfolio.title':    'Featured Projects',
    'proj.sisinpos.sub':  'Web System',
    'proj.contratos.sub': 'Contract Generator',
    'proj.inmob.sub':     'Web Page',
    'proj.chalo.sub':     'Delivery App',
    'proj.emp.sub':       'Autonomous University of Manizales',
    'proj.fuel.sub':      'Mayoralty of Aguadas, Caldas',
    'proj.visit':         'Visit site',

    'exp.title':  'Work Experience',
    'exp.1.date': 'May 2021 – Present',
    'exp.1.role': 'Architect & Full-Stack Developer',
    'exp.1.desc': 'Backend and Frontend, Microservices and Microfrontends development (Node, Spring, Quarkus, NestJS, Express, Angular, Dialogflow, Google Apps Script). Architecture design (AWS), containerization.',
    'exp.2.date': 'June 2020 – November 2020',
    'exp.2.role': 'Full-Stack Developer',
    'exp.2.desc': 'Backend and Frontend development (Ionic, Firebase, HTML, CSS3, JS, WordPress).',
    'exp.3.date': 'February 2020 – May 2020',
    'exp.3.role': 'Full-Stack Developer',
    'exp.3.desc': 'PQRS System development (Laravel, MySQL, Angular).',

    'edu.title':      'Education',
    'edu.1.degree':   'Systems Engineer',
    'edu.1.duration': '5 Years',
    'edu.2.degree':   'Professional Technician in Support and Operation of Computer Systems',
    'edu.2.duration': '2 Years',
    'edu.3.degree':   'Technical Graduate',
    'edu.3.duration': '6 Years',

    'contact.title':    'Contact Me',
    'contact.subtitle': 'Feel free to get in touch with me.',
    'contact.name_ph':  'Your name',
    'contact.sub_ph':   'Subject',
    'contact.email_ph': 'Your email',
    'contact.msg_ph':   'Your message',
    'contact.send':     'Send Message',
    'contact.ph_l':     'Phone',
    'contact.em_l':     'Email',

    'footer.rights': '© 2024 Alejandro Gómez. All rights reserved.',
    'meta.title':    'Alejandro Gómez | Software Architect',
  },
};

// ── State ─────────────────────────────────────────────────────────────────────
let lang = localStorage.getItem('portfolio-lang') || 'es';

// ── i18n ──────────────────────────────────────────────────────────────────────
function applyLang(l) {
  lang = l;
  localStorage.setItem('portfolio-lang', l);
  document.documentElement.lang = l;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = T[l][el.dataset.i18n];
    if (v !== undefined) el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const v = T[l][el.dataset.i18nPh];
    if (v !== undefined) el.placeholder = v;
  });

  document.getElementById('lang-toggle').textContent = l === 'es' ? 'EN' : 'ES';
  document.title = T[l]['meta.title'];
}

// ── Typewriter ────────────────────────────────────────────────────────────────
function startTypewriter(l) {
  if (typewriterTimeout) clearTimeout(typewriterTimeout);
  const el = document.getElementById('animated-text');
  el.textContent = '';
  const key = window.innerWidth <= 576 ? 'hero.typewriter_mobile' : 'hero.typewriter';
  const text = T[l][key];
  let i = 0;
  function tick() {
    if (i < text.length) {
      el.textContent += text.charAt(i++);
      typewriterTimeout = setTimeout(tick, 100);
    }
  }
  tick();
}

// ── Scroll Reveal (native Intersection Observer, replaces AOS) ───────────────
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el    = entry.target;
      const delay = parseInt(el.dataset.aosDelay) || 0;
      setTimeout(() => el.classList.add('aos-animate'), delay);
      observer.unobserve(el);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));
}

// ── Init ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  applyLang(lang);

  document.getElementById('lang-toggle').addEventListener('click', () => {
    applyLang(lang === 'es' ? 'en' : 'es');
  });

  // Navbar scroll: transparent → solid
  const nav = document.getElementById('main-nav');
  const onScroll = () => nav.classList.toggle('nav-scrolled', window.scrollY > 50);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu — hamburger ↔ ✕
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu    = document.getElementById('nav-menu');
  const iconHam    = document.getElementById('icon-ham');
  const iconX      = document.getElementById('icon-x');

  menuToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    iconHam.classList.toggle('hidden', open);
    iconX.classList.toggle('hidden', !open);
  });

  navMenu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      navMenu.classList.remove('open');
      iconHam.classList.remove('hidden');
      iconX.classList.add('hidden');
    })
  );
});
