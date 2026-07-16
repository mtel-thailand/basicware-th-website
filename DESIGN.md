# Basicware Thailand — Design System

Source of truth: Figma file **Basicware Thailand 🇹🇭** (node `509-18229`, "revise version").
Implemented tokens live in [styles/tokens.css](styles/tokens.css). Only elements actually used
by the landing page are tokenized — this is a working system, not an exhaustive dump.

---

## 1. Brand story

Basicware Thailand helps businesses grow with AI. The visual metaphor is the **dandelion**:
organic growth, seeds carried by the wind, one small input blooming into wide reach.
The design pairs photographic nature imagery (fields, sky, dandelions) with precise,
technical UI elements (mono-spaced eyebrow labels, connector lines, product mockups) —
**human warmth × machine precision**. Design voice: optimistic, calm, confident.

Signature moment: the "o" in "growth" in the hero headline is replaced by a dandelion glyph.

## 2. Color

| Token | Value | Use |
|---|---|---|
| `--color-brand-cta` | `#0165d0` | Primary buttons, links, interactive accents |
| `--color-brand-cta-800` | `#01275b` | Deep brand ink, gradient ends |
| `--color-accent-light` | `#015ac6` | Accent words in headings on light bg |
| `--color-accent-dark` | `#6cb8ff` | Accent words on dark bg |
| `--color-text-primary` | `#111110` | Headings, body on light |
| `--color-text-secondary` | `#6e6e6b` | Supporting copy |
| `--color-text-white` / `-secondary` | `#fff` / 60% | Text on dark/photo |
| `--color-bg-page` | `#fafaf8` | Page background (warm off-white) |
| `--color-bg-surface` | `#ffffff` | Raised cards |
| `--color-bg-brand-subtle` | `#eef5ff` | Tinted panels, chips |
| `--color-bg-black` | `#111110` | Footer, dark sections |
| `--color-border-subtle/default/strong` | `#f5f5f3` / `#0003` / `#8d8d92` | Hairlines → emphasis |

Gradients: `--gradient-brand` (135°, #0165d0 → #01275b) for stat panels;
`--gradient-sky` (#eef5ff → #fafaf8) for soft section transitions.

## 3. Typography

Three families, three jobs:

- **Saira SemiBold** — all headings. Slightly condensed, technical but friendly.
- **Outfit** — all body copy. Geometric, warm, very legible.
- **JetBrains Mono Medium** — eyebrow labels only. UPPERCASE with wide letter-spacing
  (`0.12em`) — the "system label" voice.
- **Plus Jakarta Sans** — navigation/logo wordmark only (per Figma `--bw-font-en-main`).

| Style | Family | Desktop | Mobile | Line | Tracking |
|---|---|---|---|---|---|
| Display | Saira 600 | 84 | 42 | 1.05 | -2px |
| H2 | Saira 600 | 48 | 30 | 1.15 | -1.5px |
| H3 | Saira 600 | 32 | 24 | 1.2 | -1px |
| H4 | Saira 600 | 28 | 22 | 1.3 | -0.5px |
| H5 | Saira 600 | 24 | 20 | 1.3 | 0 |
| Body Large | Outfit 400 | 18 | 18 | 1.6 | -0.5px |
| Body / Bold | Outfit 400/600 | 16 | 16 | 1.6 | 0 |
| Body Small | Outfit 400 | 14 | 14 | 1.45 | 0 |
| Caption | Outfit 400 | 12 | 12 | 1.45 | 0 |
| Eyebrow | JetBrains Mono 500 | 14 | 12 | 1.3 | wide (fluid) |

All heading sizes are fluid via `clamp()` — see `--text-*-size` tokens.

## 4. Layout & spacing

- Container: `1200px` max, fluid `clamp(20px → 48px)` side padding.
- Section rhythm: `--section-pad-y` = `clamp(64px → 120px)` vertical.
- Spacing scale: 4 / 8 / 12 / 16 / 24 / 32 / 40 / 48 / 64 / 80 / 120 px (`--space-1..11`).
- Breakpoints: **1200px** (compact desktop), **900px** (tablet — grids drop to 2-col,
  arc layouts stagger), **600px** (mobile — single column, hamburger nav).

## 5. Radius & elevation

- Radius: 8 / 16 / 24 / 32 / pill (`--radius-sm..pill`). Cards default `--radius-lg`;
  chips and buttons are pills; photo panels `--radius-xl`.
- Shadows are soft and blue-tinted on hover (`--shadow-card`, `--shadow-card-hover`).
  Elevation is used sparingly — most separation comes from bg tint changes.

## 6. Component inventory

| Component | Notes |
|---|---|
| `Eyebrow` | Mono uppercase label, optional bracket/chip framing |
| `Chip` | Pill label (hero "BASICWARE THAILAND") |
| `Button` | Primary (brand blue pill), on-photo variant (white/blur) |
| `SectionTitle` | Eyebrow + H2 + optional lede, center or left aligned |
| `WaveDivider` | Grass/dandelion illustration strip between photo and page sections |
| `Header` | Floating pill nav, blurs/solidifies on scroll |
| Section components | Hero, AigcProduction, GrowthLoop, AiWorkers, ModelGateway, Education, Partnership, GlobalReach, CtaSection, Footer |
| Motion primitives | `Reveal`, `Parallax`, `CountUp`, `DandelionSeeds` |

## 7. Motion principles

1. **Grow, don't slide** — elements bloom (scale + fade + slight rise) like seeds sprouting.
2. **Draw the connections** — SVG connector lines animate `pathLength` on scroll,
   showing flow from input → outputs.
3. **Numbers are alive** — stats count up when they enter the viewport.
4. **Ambient drift** — dandelion seeds float in the hero; logo chips idle-float desynced.
5. **Springs over easings** for entrances (`--ease-spring`); expo-out for exits.
6. **The cursor sows seeds** — a site-wide dandelion seed trail sheds from the pointer
   (`CursorTrail`), and a scroll-progress stem grows down the right edge (`ScrollProgress`).
7. **Scroll is a place, not a scrollbar** — Lenis inertial scrolling; the AI-worker
   panels pin and stack like a deck of cards as you scroll through them.
8. **Depth on touchpoints** — key cards tilt in 3D toward the pointer (`Tilt`);
   the growth loop cycles itself (hover pauses, click selects).
9. **Respect `prefers-reduced-motion`** — all of the above collapse to simple fades;
   Lenis, trail, deck, and tilt disable entirely.

## 8. Imagery

- Photography: real nature (fields, sky, dandelions) — always full-bleed or in
  `--radius-xl` panels, never small inline photos.
- Illustration: dandelion growth stages (5 states: seed → bloom) for the growth loop;
  grass silhouette wave dividers.
- Product UI mockups are shown inside blue gradient panels with white cards.
- All current assets are exported from Figma (`public/images/`) — several are AI-generated
  placeholders pending final licensed versions.

## 9. Content & localization

All user-facing copy lives in [content/en.ts](content/en.ts) — components never hardcode
text. Open items, the full "what we still need" checklist, and the how-to for adding
Thai/other languages are tracked in [CONTENT.md](CONTENT.md).

Test