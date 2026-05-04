# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site for Alejandro Gómez (Software Architect & Full-Stack Developer). Static HTML/CSS/JS — no build system, no package manager, no compilation step.

## Development

Open `index.html` directly in a browser. No dev server, no npm, no build commands.

## Architecture

Single-page site (`index.html`) with all sections inline. Section IDs (in order): `top` (hero), `about`, `experience`, `projects`, `certs` (certifications carousel), `education`, `contact`.

- `styles/main.css` — Custom CSS only: CSS custom properties for theming, dark-mode Tailwind overrides, navbar scroll, hero gradient, profile ring animation, scroll reveal, progress bars, timeline, certificates carousel + lightbox, contact card glassmorphism, mobile nav drawer, WhatsApp FAB.
- `scripts/main.js` — Contains the full translations object (`T`), i18n engine, theme toggle, typewriter, native scroll reveal (IntersectionObserver), certificates carousel with lightbox, navbar scroll toggle, and mobile menu toggle.
- `images/` — profile photos (`perfil-alejo.png`, `perfil-alejo-light.png`, `profile.jpg` used as og:image), `background.jpg` (hero section background), `fondo-nature.png` (contact section background), `favicon/ag.svg`, `certs/` (certificate JPGs used by the carousel).
- `docs/` — latest CV PDF linked from the page.

## Key Dependencies (all via CDN, no npm)

- **Tailwind CSS** — Play CDN (`cdn.tailwindcss.com`); custom config inlined in `<head>`. Brand palette: `brand.DEFAULT #16a34a`, `brand.dark #15803d`, `brand.light #dcfce7`; font: Montserrat. Custom CSS in `styles/main.css` handles what utilities can't express.
- **Font Awesome 6.5** — icon library (`cdnjs`).
- **Devicon v2.16.0** — technology logo icon font (`jsdelivr`); used for tech stack icons in the Experience section chips and the Tech Stack section. Class pattern: `devicon-<tech>-plain colored`. Express and Nginx icons are dark and need the CSS rule `html[data-theme='dark'] .devicon-express-original, .devicon-nginx-original { filter: invert(0.85) brightness(1.8) }` to be visible in dark mode.
- **Google Fonts** — Montserrat loaded via `fonts.googleapis.com`.
- **No AOS.js** — scroll animations use a custom native `IntersectionObserver` in `initScrollReveal()` that reuses the `data-aos` / `data-aos-delay` HTML attributes and the `aos-animate` class.

## Bilingual i18n System

`main.js` exports a `T` object with `es` and `en` keys containing every user-visible string. Language is stored in `localStorage` under `'portfolio-lang'` (default `'es'`).

- Elements with `data-i18n="key"` have their `textContent` replaced on language switch.
- Elements with `data-i18n-ph="key"` have their `placeholder` replaced.
- The `#lang-toggle` button in the navbar toggles between `ES` / `EN`.
- `applyLang(l)` applies translations, updates `<html lang>`, and updates `document.title`.

To add or change visible text: update both `T.es` and `T.en` in `main.js`, then add the matching `data-i18n` attribute to the HTML element.

## Dark / Light Theme

Theme is persisted in `localStorage` under `'portfolio-theme'` (`'dark'` | `'light'`). A blocking inline `<script>` in `<head>` sets `data-theme` on `<html>` before render to avoid flash of unstyled content.

- CSS custom properties in `:root` / `html[data-theme='dark']` control all themed values (`--page-bg`, `--brand`, `--brand-ring`, etc.).
- `main.css` overrides Tailwind utility classes (e.g. `.bg-white`, `.text-slate-900`) directly with `!important` for dark mode — this is intentional since Tailwind Play CDN doesn't support `darkMode: 'class'` config at runtime.
- During transitions, `html.theme-transitioning` class is added for ~420 ms to enable smooth cross-property animations. Respects `prefers-reduced-motion`.
- `applyTheme(nextTheme, animate)` in `main.js` drives all theme changes.

## Skill Progress Bars

Progress bars use a CSS `scaleX` trick triggered by the scroll reveal observer: the bar div has class `progress-bar-fill` (starts at `scaleX(0)`), and when the observer adds `aos-animate` to the parent `[data-aos]` wrapper, CSS transitions it to `scaleX(1)`. Do not remove the `data-aos` wrapper or rename `.progress-bar-fill`.

## Certificates Carousel

`initCertCarousel()` in `main.js` drives the `#certs` section. Key details:

- Responsive: 1 card on mobile, 2 on tablet (≥640px), 3 on desktop (≥1024px). Card widths set via `.cert-card` flex-basis in CSS.
- Images in `images/certs/` are hidden until their `<img>` fires `load` — JS then adds `.img-loaded` to the `.cert-img-area`; without it a `.cert-img-fallback` placeholder is shown.
- `.cert-card-inner.is-clickable` (set after image loads) enables zoom-in cursor and triggers the lightbox on click.
- **Lightbox** — `openLightbox(startIdx)` appends a `.cert-lightbox` overlay to `<body>`, using two `requestAnimationFrame` calls to trigger the CSS open transition. Supports prev/next buttons, backdrop click, close button, Escape key, and ArrowLeft/ArrowRight keyboard navigation.
- **Dot pagination** — `buildDots()` / `syncDots()` cap visible dots at 7 via a sliding window. Dots outside the window get `data-dot-state='hidden'`; edge dots get `data-dot-state='edge'` (styled smaller in CSS).
- Auto-advance every 8000ms; pauses on `mouseenter`, resumes on `mouseleave`.
- Touch swipe supported (>40px delta on `touchend`).
- `typewriterTimeout` in `startTypewriter()` is an undeclared implicit global (non-strict JS). `startTypewriter` is defined but not called anywhere — it exists for manual or future use.

## Initialisation Order

`DOMContentLoaded` calls in sequence: `initScrollReveal()` → `initCertCarousel()` → `applyTheme(theme, false)` → `applyLang(lang)`. Theme is applied without animation on first load to prevent a transition flash.

## Contact Form

The contact `<form>` posts to Formspree (`https://formspree.io/f/xgeppeer`) via standard HTML `method="POST"`. No JS is involved in form submission.

## Updating Content

All visible text is driven by the i18n `T` object in `main.js` (for dynamic elements) and hardcoded in `index.html` only for structural/static values (e.g. dates, company names). CV download link: `docs/Alejandro Gómez C.V (30-09-2024).pdf`.
