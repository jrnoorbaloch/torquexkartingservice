---
name: torque-x-design
description: Use this skill to generate well-branded interfaces and assets for Torque X, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Fast orientation
- **Tokens** live in `tokens/*.css`, reachable through the root `styles.css` (link that one file). Use the CSS custom properties — never inline hex.
- **The rules that matter most:** near-black `#181818` canvas (never pure black); Rosso Corsa `#da291c` used scarcely (primary CTA, brand mark, F1 race positions only); single sans family; display weight 500 (never bold); sharp `0px` corners on every CTA/card/band (pill only for badges); CTA labels uppercase with 1.4px tracking; full-bleed cinematic photography is the page chrome.
- **Components** are in `components/` and bundle to `window.TorqueXDesignSystem_<hash>` — see each `*.prompt.md` for usage.
- **A full marketing-site recreation** is in `ui_kits/marketing/`.
- **Substitutions to flag:** FerrariSans → Inter (Google Fonts); brand mark is an original Torque X monogram; icons use Lucide (CDN). Replace gradient photo placeholders with real automotive photography.
