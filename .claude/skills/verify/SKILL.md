---
name: verify
description: How to build, run, and visually verify changes to this Next.js marketing site.
---

# Verifying changes in basicware-thailand

- Dev server: `npm run dev` (Next.js 16, port 3000). Check first — it is often already running: `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000`.
- Typecheck: `npx tsc --noEmit` (no test suite exists).
- Visual verification: use `puppeteer-core` (already a devDependency) with the system Chrome at `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`, headless, viewport 1440x1000.
- Sections animate on scroll (framer-motion `useInView`): after `page.goto`, find the section (e.g. by its eyebrow text) and `scrollIntoView`, then wait ~2.5s for entrance staggers before screenshotting. GrowthLoop starts its cycle 1.4s after entering view.
- Worth probing: `prefers-reduced-motion: reduce` (animations must be gated off) and a 390px mobile viewport (some decorations like the GrowthLoop arc are display:none under 900px).
- Note: scripts run from the scratchpad must require puppeteer-core by absolute path into this project's node_modules.
