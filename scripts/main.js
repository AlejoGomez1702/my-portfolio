// ── Translations ─────────────────────────────────────────────────────────────
const T = {
  es: {
    'nav.about':      'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.projects':   'Proyectos',
    'nav.education':  'Educación',
    'nav.contact':    'Contacto',

    'theme.label':     'Tema',
    'theme.mode.auto': 'Automático',
    'theme.mode.light':'Claro',
    'theme.mode.dark': 'Oscuro',

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

    'stack.title':  'Stack Tecnológico',
    'stack.sub':    'Herramientas y tecnologías que aplico en proyectos reales',
    'stack.fe':     'Frontend',
    'stack.be':     'Backend',
    'stack.data':   'Datos & Cloud',
    'stack.devops': 'DevOps & Herramientas',

    'portfolio.title':    'Proyectos Destacados',
    'portfolio.sub':      'Una selección de proyectos propios y académicos',
    'proj.sisinpos.sub':  'Sistema Web',
    'proj.sisinpos.desc': 'Sistema POS para gestión de ventas, inventario y clientes en pequeñas y medianas empresas.',
    'proj.contratos.sub': 'Generador de Contratos',
    'proj.contratos.desc':'Generador de contratos en PDF con plantillas personalizables y almacenamiento en la nube.',
    'proj.inmob.sub':     'Página Web',
    'proj.inmob.desc':    'Sitio web corporativo para inmobiliaria con catálogo de propiedades y formulario de contacto.',
    'proj.chalo.sub':     'App de Delivery',
    'proj.chalo.desc':    'App móvil de delivery para restaurante con gestión de pedidos y geolocalización de direcciones.',
    'proj.emp.sub':       'Universidad Autónoma de Manizales',
    'proj.emp.desc':      'Plataforma para la Unidad de Emprendimiento universitaria: gestión de proyectos, mentorías y seguimiento.',
    'proj.fuel.sub':      'Alcaldía de Aguadas, Caldas',
    'proj.fuel.desc':     'Sistema de escritorio para control y registro del consumo de combustible en la flota municipal.',
    'proj.visit':         'Ver sitio',
    'proj.code':          'Ver código',

    'exp.title':    'Experiencia Laboral',
    'exp.dv.total': '5 años 1 mes',
    'exp.dv1.role': 'Especialista I – Arquitecturas Ágiles',
    'exp.dv1.date': 'Abr 2025 – Presente · 1 año',
    'exp.dv1.desc': 'Liderazgo técnico de equipos ágiles para soluciones distribuidas en AWS. Administración de building blocks reutilizables: APIs REST, GraphQL y caché en Redis. Buenas prácticas de testing y escalabilidad con Angular, Quarkus y NestJS. Gestión con Jira / SCRUM.',
    'exp.dv2.role': 'Profesional III – Arquitecturas Ágiles',
    'exp.dv2.date': 'May 2023 – Abr 2025 · 2 años',
    'exp.dv2.desc': 'Liderazgo de equipos ágiles para implementación de software concurrente sobre AWS. Arquitecturas de microservicios y microfrontends con Angular, Quarkus y NestJS. Gestión de proyectos con Jira bajo SCRUM.',
    'exp.dv3.role': 'Profesional II – Proyectos TI CRM',
    'exp.dv3.date': 'Ene 2022 – May 2023 · 1 año 5 meses',
    'exp.dv3.desc': 'Mantenimiento e implementación de funcionalidades en el CRM del banco. Desarrollo Frontend y Backend con Angular, Spring, CI/CD, Weblogic, Jenkins, Gulp y Oracle.',
    'exp.dv4.role': 'Profesional I – Auditoría TI y Ciberseguridad',
    'exp.dv4.date': 'May 2021 – Ene 2022 · 9 meses',
    'exp.dv4.desc': 'Desarrollo de proyectos web y chatbot (Day2Day, AuditBot) para automatización de procesos. Stack: NodeJS, ExpressJS, MongoDB, Dialogflow, Angular, Firebase y Heroku.',
    'exp.2.date':   'Jun 2020 – Nov 2020 · 6 meses',
    'exp.2.role':   'Desarrollador Web',
    'exp.2.desc':   'Desarrollo Frontend y Backend con Ionic, Firebase, HTML, CSS3, JS y WordPress para clientes internacionales (EE.UU.).',
    'exp.3.date':   'Feb 2020 – May 2020 · 4 meses',
    'exp.3.role':   'Desarrollador Web',
    'exp.3.desc':   'Desarrollo v1.0 del sistema PQRS con Laravel, MySQL y Angular. Centralización de información, mejora de tiempos de respuesta y digitalización de solicitudes ciudadanas.',

    'edu.title':      'Educación',
    'edu.1.degree':   'Ingeniero de Sistemas',
    'edu.1.duration': '5 Años',
    'edu.4.degree':   'Técnico en Contabilización de Operaciones Comerciales y Financieras',
    'edu.4.duration': '2 Años',
    'edu.4.desc':     'Formación en procesos contables, análisis financiero y gestión de operaciones comerciales, con un enfoque en el registro, control y evaluación de transacciones empresariales.',
    'edu.4.skill1':   'Contabilidad',
    'edu.4.skill2':   'Contabilidad financiera',
    'edu.4.skill3':   'Análisis financiero',
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

    'theme.label':     'Theme',
    'theme.mode.auto': 'Auto',
    'theme.mode.light':'Light',
    'theme.mode.dark': 'Dark',

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

    'stack.title':  'Tech Stack',
    'stack.sub':    'Tools and technologies I apply in real-world projects',
    'stack.fe':     'Frontend',
    'stack.be':     'Backend',
    'stack.data':   'Data & Cloud',
    'stack.devops': 'DevOps & Tools',

    'portfolio.title':    'Featured Projects',
    'portfolio.sub':      'A selection of personal and academic projects',
    'proj.sisinpos.sub':  'Web System',
    'proj.sisinpos.desc': 'POS system for sales, inventory and customer management in small and medium businesses.',
    'proj.contratos.sub': 'Contract Generator',
    'proj.contratos.desc':'PDF contract generator with customizable templates and cloud storage.',
    'proj.inmob.sub':     'Web Page',
    'proj.inmob.desc':    'Corporate website for a real estate agency with property catalogue and contact form.',
    'proj.chalo.sub':     'Delivery App',
    'proj.chalo.desc':    'Mobile delivery app for a restaurant with order management and address geolocation.',
    'proj.emp.sub':       'Autonomous University of Manizales',
    'proj.emp.desc':      'Platform for the university entrepreneurship unit: project management, mentoring and tracking.',
    'proj.fuel.sub':      'Mayoralty of Aguadas, Caldas',
    'proj.fuel.desc':     'Desktop system for controlling and recording fuel consumption across the municipal fleet.',
    'proj.visit':         'Visit site',
    'proj.code':          'View code',

    'exp.title':    'Work Experience',
    'exp.dv.total': '5 years 1 month',
    'exp.dv1.role': 'Specialist I – Agile Architectures',
    'exp.dv1.date': 'Apr 2025 – Present · 1 year',
    'exp.dv1.desc': 'Technical leadership of agile teams for distributed solutions on AWS. Management of reusable building blocks: REST APIs, GraphQL and Redis cache. Testing and scalability best practices with Angular, Quarkus and NestJS. Project management with Jira / SCRUM.',
    'exp.dv2.role': 'Professional III – Agile Architectures',
    'exp.dv2.date': 'May 2023 – Apr 2025 · 2 years',
    'exp.dv2.desc': 'Agile team leadership for concurrent software implementation on AWS. Microservices and microfrontend architectures with Angular, Quarkus and NestJS. Project management with Jira under SCRUM.',
    'exp.dv3.role': 'Professional II – IT CRM Projects',
    'exp.dv3.date': 'Jan 2022 – May 2023 · 1 year 5 months',
    'exp.dv3.desc': "Maintenance and feature implementation for the bank's CRM system. Frontend and Backend development with Angular, Spring, CI/CD, Weblogic, Jenkins, Gulp and Oracle.",
    'exp.dv4.role': 'Professional I – IT Audit & Cybersecurity',
    'exp.dv4.date': 'May 2021 – Jan 2022 · 9 months',
    'exp.dv4.desc': 'Development of web and chatbot projects (Day2Day, AuditBot) for process automation. Stack: NodeJS, ExpressJS, MongoDB, Dialogflow, Angular, Firebase and Heroku.',
    'exp.2.date':   'Jun 2020 – Nov 2020 · 6 months',
    'exp.2.role':   'Web Developer',
    'exp.2.desc':   'Frontend and Backend development with Ionic, Firebase, HTML, CSS3, JS and WordPress for international clients (USA).',
    'exp.3.date':   'Feb 2020 – May 2020 · 4 months',
    'exp.3.role':   'Web Developer',
    'exp.3.desc':   'Developed v1.0 of the PQRS system using Laravel, MySQL and Angular. Centralized information, improved response times and digitized citizen requests for the municipality.',

    'edu.title':      'Education',
    'edu.1.degree':   'Systems Engineer',
    'edu.1.duration': '5 Years',
    'edu.4.degree':   'Technician in Accounting of Commercial and Financial Operations',
    'edu.4.duration': '2 Years',
    'edu.4.desc':     'Training in accounting processes, financial analysis and commercial operations management, with a focus on recording, controlling and evaluating business transactions.',
    'edu.4.skill1':   'Accounting',
    'edu.4.skill2':   'Financial accounting',
    'edu.4.skill3':   'Financial analysis',
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
const savedTheme = localStorage.getItem('portfolio-theme');
let theme = (savedTheme === 'dark' || savedTheme === 'light')
  ? savedTheme
  : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
const THEME_TRANSITION_FALLBACK_MS = 420;

function getThemeTransitionMs() {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue('--theme-transition-ms')
    .trim();
  if (!raw) return THEME_TRANSITION_FALLBACK_MS;

  if (raw.endsWith('ms')) {
    const value = Number.parseFloat(raw);
    return Number.isFinite(value) ? value : THEME_TRANSITION_FALLBACK_MS;
  }

  if (raw.endsWith('s')) {
    const value = Number.parseFloat(raw);
    return Number.isFinite(value) ? value * 1000 : THEME_TRANSITION_FALLBACK_MS;
  }

  const value = Number.parseFloat(raw);
  return Number.isFinite(value) ? value : THEME_TRANSITION_FALLBACK_MS;
}

function runThemeTransition(updateFn) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    updateFn();
    return;
  }

  const root = document.documentElement;
  const transitionMs = getThemeTransitionMs();
  root.classList.add('theme-transitioning');
  updateFn();
  window.setTimeout(() => root.classList.remove('theme-transitioning'), transitionMs + 40);
}

function updateThemeToggleUI() {
  const toggle = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-icon');
  if (!toggle || !icon) return;

  const title = lang === 'es'
    ? (theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro')
    : (theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');

  toggle.setAttribute('aria-label', title);
  toggle.setAttribute('title', title);

  icon.textContent = theme === 'dark' ? '☾' : '☀';
  toggle.classList.remove('theme-state-dark', 'theme-state-light');
  toggle.classList.add(theme === 'dark' ? 'theme-state-dark' : 'theme-state-light');
}

function applyTheme(nextTheme, animate = true) {
  theme = nextTheme === 'dark' ? 'dark' : 'light';

  if (animate) {
    runThemeTransition(() => {
      document.documentElement.setAttribute('data-theme', theme);
    });
  } else {
    document.documentElement.setAttribute('data-theme', theme);
  }

  localStorage.setItem('portfolio-theme', theme);
  localStorage.removeItem('portfolio-theme-mode');

  const metaTheme = document.querySelector('meta[name="theme-color"]');
  const isDark = theme === 'dark';

  if (metaTheme) {
    metaTheme.setAttribute('content', isDark ? '#0b1220' : '#15803d');
  }

  updateThemeToggleUI();
}

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
  updateThemeToggleUI();
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
  applyTheme(theme, false);
  applyLang(lang);

  document.getElementById('lang-toggle').addEventListener('click', () => {
    applyLang(lang === 'es' ? 'en' : 'es');
  });

  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      applyTheme(theme === 'dark' ? 'light' : 'dark');
    });
  }

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

  const setMenuOpenState = (open) => {
    navMenu.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    iconHam.classList.toggle('opacity-0', open);
    iconHam.classList.toggle('scale-75', open);
    iconHam.classList.toggle('-rotate-90', open);
    iconX.classList.toggle('opacity-0', !open);
    iconX.classList.toggle('scale-75', !open);
    iconX.classList.toggle('rotate-90', !open);
  };

  menuToggle.addEventListener('click', () => {
    const open = !navMenu.classList.contains('open');
    setMenuOpenState(open);
  });

  navMenu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      setMenuOpenState(false);
    })
  );
});
