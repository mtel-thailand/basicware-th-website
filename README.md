# Basicware Thailand — Landing Page

Marketing site for Basicware Thailand, built from the Figma design
(_Basicware Thailand 🇹🇭 → "revise version"_). Next.js App Router + TypeScript,
plain CSS (design tokens + CSS Modules), Framer Motion + Lenis for interaction.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint
```

Full-page screenshot utility (system Chrome required):

```bash
node scripts/screenshot.mjs 1440 900 out.png
```

## Where things live

| | |
|---|---|
| **All site text** (i18n-ready) | [content/en.ts](content/en.ts) — see [CONTENT.md](CONTENT.md) |
| Design tokens (color/type/spacing) | [styles/tokens.css](styles/tokens.css) |
| Design system docs | [DESIGN.md](DESIGN.md) |
| Page composition | [app/page.tsx](app/page.tsx) |
| Sections | [components/sections/](components/sections/) |
| Nav + footer | [components/layout/](components/layout/) |
| Motion primitives | [components/motion/](components/motion/) — `Reveal`, `CountUp`, `Tilt`, `DandelionSeeds`, `CursorTrail`, `SmoothScroll`, `ScrollProgress` |
| Small UI atoms | [components/ui/](components/ui/) |
| Images (grouped per section) | [public/images/](public/images/) `hero/ aigc/ loop/ workers/ models/ partners/ map/ cta/ brand/` |

## Interaction inventory

- **Lenis** inertial scrolling (desktop, disabled for reduced-motion/touch)
- **Cursor seed trail** — dandelion seeds shed from the pointer, site-wide
- Hero: word-by-word headline, breathing dandelion glyph, ambient drifting
  seeds, Ken Burns + scroll parallax + **mouse parallax**
- AIGC: self-typing prompt, self-drawing connector lines, **3D tilt cards**
- Growth loop: arc entrance, then an **auto-cycling active step** (click to
  select, hover to pause) with a timer bar
- AI workers: **stacked scroll deck** — panels pin and pile over each other,
  stats count up, candidate cards shuffle in
- Model gateway: idle-floating logo chips, tilting BasicRouter card
- Map pins spring-drop with ripples; scroll-progress **stem** grows down the
  right edge with a spinning seed head

Every effect degrades to a simple fade under `prefers-reduced-motion`.
