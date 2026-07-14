# Content Guide — what's needed, where it lives, how to edit

This is the working checklist for the Basicware Thailand site. Every user-facing string
lives in **one file per language**: [content/en.ts](content/en.ts). Components never
hardcode copy — change the text there and it appears on the page.

---

## 1. What we still need from you (and exactly where it goes)

| # | Input needed | Status | Where to put it |
|---|---|---|---|
| 1 | **Final marketing copy** — interim text written during build: AIGC prompt example & quote card, growth-loop step captions, AI-worker panel titles/stat labels, education step captions, CTA lede | ⏳ interim copy in place | `content/en.ts` → `aigc.*`, `growthLoop.steps`, `aiWorkers.panels`, `education.steps`, `cta.lede` |
| 2 | **Contact details** — currently `hello@basicware.th.ai` / `(+66) 951 905 163` (taken from Figma; confirm they're real) | ⏳ unconfirmed | `content/en.ts` → `footer.email`, `footer.phone`, `cta.email` |
| 3 | **Nav & solutions link destinations** — currently in-page anchors (`#solutions`, `#about`) | ⏳ anchors only | `content/en.ts` → `nav.links[].href`, `footer.solutions` (add hrefs when pages exist) |
| 4 | **Thai translation** (and future languages) | 🔜 later | create `content/th.ts` — copy `en.ts`, translate **values only**, register in `content/index.ts` (see §3) |
| 5 | **Licensed final photography** — hero landscape, partnership field, CTA field, seeds texture (current ones are AI-generated placeholders from Figma) | ⏳ placeholders | drop into `public/images/` with the same filenames: `hero/bg.png`, `partners/bg.png`, `cta/bg.jpg`, `workers/seeds-texture.jpg` |
| 6 | **Product-UI screenshots** — the four dashboard mockups | ⏳ Figma exports | `public/images/workers/mockup-{marketing,video,finance,content}.png` |
| 7 | **Partner & AI-model logos with usage rights** — BytePlus, mtel, Claude, OpenAI, Gemini, DeepSeek, etc. | ⏳ Figma exports | `public/images/partners/*`, `public/images/models/*`, `public/images/brand/*` |
| 8 | **Candidate names/photos in the hiring mock** — fictional Thai names + AI-generated portraits from Figma | ⏳ fictional | text: `content/en.ts` → `aiWorkers.candidates`; photos: `public/images/workers/avatar-{1..4}.png` |
| 9 | **SEO title & description sign-off** | ⏳ drafted | `content/en.ts` → `meta` |
| 10 | **Contact page** — design/info (you said you'll provide) | 🔜 phase 2 | will become `app/contact/page.tsx` + a `contact` block in `content/en.ts` |

---

## 2. Where to edit what

| You want to change… | Edit this |
|---|---|
| Any text on the site (headlines, captions, buttons, footer) | [content/en.ts](content/en.ts) — keys are grouped by section in page order |
| Colors, fonts, spacing, radii, shadows | [styles/tokens.css](styles/tokens.css) (design tokens) |
| A section's layout or styling | `components/sections/<Section>.tsx` + its `.module.css` |
| Animations | the section component (Framer Motion props) or [components/motion/](components/motion/) primitives (`Reveal`, `CountUp`, `DandelionSeeds`) |
| Nav bar / footer structure | [components/layout/Header.tsx](components/layout/Header.tsx), [components/layout/Footer.tsx](components/layout/Footer.tsx) |
| Images | replace files in [public/images/](public/images/) (keep filenames, or update the path in the section component) |
| Design rationale / system docs | [DESIGN.md](DESIGN.md) |

Page section order is composed in [app/page.tsx](app/page.tsx).

**Run locally:** `npm run dev` → http://localhost:3000 · **Check before shipping:** `npm run build && npm run lint`

---

## 3. Adding a language (Thai example)

1. Copy `content/en.ts` → `content/th.ts`; rename the export `en` → `th`
   and give it the type: `export const th: SiteContent = { ... }`.
   Translate **values only** — never the keys. TypeScript will flag anything missed.
2. In [content/index.ts](content/index.ts): import `th`, add `"th"` to the `Locale` type,
   and add it to `DICTIONARIES`.
3. Wire up locale selection (phase 2 decision): either a `[locale]` route segment
   (`/th/...`) or a client-side switcher on the nav's `EN` label. Until then the site
   renders the `DEFAULT_LOCALE` (`en`).

Notes for Thai:
- Headings use Saira, which has no Thai glyphs — add a Thai-capable font
  (e.g. `Noto Sans Thai` or `IBM Plex Sans Thai`) in [app/layout.tsx](app/layout.tsx)
  and extend `--font-heading`/`--font-body` fallbacks in `styles/tokens.css`.
- Accented headings are stored as `{ pre, accent, post }` segments so the blue accent
  word can sit anywhere in the translated sentence; `\n` inside a value = line break.
- The hero headline animates word-by-word from the `headlineLine1` / `headlineTail`
  arrays — Thai has no spaces, so split the Thai headline into whatever chunks should
  animate together.
