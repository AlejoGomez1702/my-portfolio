# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site for Alejandro Gómez (Software Architect & Full-Stack Developer). Static HTML/CSS/JS — no build system, no package manager, no compilation step.

## Development

Open `index.html` directly in a browser. No dev server, no npm, no build commands.

## Architecture

Single-page site (`index.html`) with all sections inline: hero, about, skills, portfolio, experience, education, and contact.

- `styles/main.css` — ~110 lines of custom CSS only (navbar scroll, hero gradient, profile ring, typewriter, progress bar animation, timeline, mobile nav drawer)
- `scripts/main.js` — ~30 lines of vanilla JS: AOS init, typewriter, navbar scroll toggle, mobile menu toggle
- `images/` — profile photo, backgrounds, favicon
- `docs/` — latest CV PDF linked from the page

## Key Dependencies (all via CDN, no npm)

- **Tailwind CSS** — Play CDN (`cdn.tailwindcss.com`); custom config inlined in `<head>` (brand colors, Montserrat font). Custom CSS in `styles/main.css` handles what utilities can't express.
- **AOS.js 2.3.4** — scroll-triggered animations (`unpkg.com/aos`); initialized with `once: true` in `main.js`
- **Font Awesome 6.5** — icon library (`cdnjs`)

## Skill Progress Bars

Progress bars use a CSS `scaleX` trick triggered by AOS: the bar div has class `progress-bar-fill` (starts at `scaleX(0)`), and when AOS adds `aos-animate` to the parent `[data-aos]` wrapper, CSS transitions it to `scaleX(1)`. Do not remove the `data-aos` wrapper or rename `.progress-bar-fill`.

## Updating Content

All visible text lives in `index.html`. CV download link: `docs/Alejandro Gómez C.V (30-09-2024).pdf`.
