# AGENTS.md

## Overview

Fusión Digital marketing agency website. Vite + React 19 + TypeScript SPA with React Router DOM (real multi-page routing, not a one-page scroll site), Tailwind CSS v4, Framer Motion, Lucide React. Deployed on Netlify; all site copy is in Spanish.

## Structure

- `src/App.tsx` — route table. Every route renders inside `components/layout/Layout.tsx`.
- `src/components/layout/` — `Layout` (AnimatePresence route transitions keyed by pathname, scroll-to-top on exit complete), `Header` (sticky nav, dropdowns, mobile drawer), `Footer`, `CustomCursor`.
- `src/components/ui/` — `BrandLogo` (SVG replica of the official logo; `variant`, `theme`, optional `imageSrc`), `Button`/`ButtonLink`, `Section` (Container, Reveal, PageHero, SectionHeading, Breadcrumbs, CtaBanner), `PandaSlot`/`ImageSlot` (mascot and photo placeholders), `Form` controls, `SocialLinks`.
- `src/components/cards.tsx`, `sliders.tsx`, `ApplicationForm.tsx` — shared composite components.
- `src/pages/` — one component per page. `ServiceDetail`, `CaseStudy` and `BlogPost` are data-driven by `:slug` and fall back to `NotFound`.
- `src/data/` — **all editable content** (services, projects, blog, talent/testimonials, site contact + social URLs + nav).
- `src/lib/forms.ts` — form submission (Netlify Forms by default, `VITE_FORM_ENDPOINT` override).
- `public/__forms.html` — static skeleton so Netlify detects the `contacto` and `postulacion` forms. Keep its fields in sync with the React forms.
- `public/img/` — official panda render and AI-generated abstract imagery (hero + blog covers). Always reference through `cdn()` in `data/site.ts` (Netlify Image CDN).
- `src/assets/logo-fusion-digital.jpeg` — official logo file, usable via `<BrandLogo imageSrc={...} />`.

## Conventions

- Brand colors are Tailwind theme tokens in `src/index.css` (`night`, `panel`, `lavender`, `mist`, `ink`, `icon`, `strategy`, `data`, plus `bg-creative` gradient). Do not hardcode new hex values for brand colors.
- Typography: Plus Jakarta Sans via `@fontsource-variable`; h1/h2/h3 sizes use `clamp()` in the base layer.
- Internal navigation must use React Router `Link`/`NavLink`. Social links must keep the exact URLs in `data/site.ts`, open in a new tab with `rel="noopener noreferrer"`.
- Never present invented metrics, testimonials or studies as facts. Unverified content is flagged (`pending`, `demo`) and rendered as clearly marked placeholders.
- Forms must never fake success: only show confirmation after a successful response.
- `MotionConfig reducedMotion="user"` is set in `main.tsx`; the marquee and testimonial autoplay also honor reduced motion.
- SPA fallback redirect lives in `netlify.toml`.
