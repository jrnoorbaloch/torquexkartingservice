# Torque X — Design System

Torque X is a high-performance automotive marque whose marketing surfaces read as **cinematic editorial** — closer to a luxury-magazine spread than a typical car-OEM website. The system is built for full-bleed photography, restrained typography, and a single accent voltage of racing red.

> **Note on provenance.** This design system was authored from a written brand specification (tokens, type scale, component inventory, do's & don'ts). No source codebase or Figma file was attached. Where the spec referenced a licensed asset (the FerrariSans typeface, a proprietary brand mark), an original or open-source substitute is used and flagged. See **Caveats** at the end.

---

## 1. Brand at a glance

| | |
|---|---|
| **Canvas** | Near-black `#181818` — never pure black, slight warmth |
| **Accent** | Rosso Corsa `#da291c` — used scarcely |
| **Type** | Single sans family (FerrariSans → Inter substitute), display weight 500 |
| **Corners** | Sharp `0px` by default — luxury-automotive precision |
| **Depth** | Full-bleed cinematic photography + brightness-step, no shadow tiers |
| **Spacing** | Explicit 8px named ladder, `xxxs` (4) → `super` (128) |

The defining gesture is the **full-bleed cinematic hero photograph**: top-of-page imagery (car photography, model detail, trackside livery) fills the viewport with no chrome competing with it. Headlines float over the bottom of the photo or sit in a tight band beneath.

---

## 2. Content fundamentals

**Voice — editorial, confident, restrained.** Copy behaves like a magazine, not a salesperson. Short declarative headlines; the photography carries the emotion, the words stay quiet.

- **Casing.** Display headlines are sentence/title case. CTA labels and nav items are **UPPERCASE** with positive tracking (CTA 1.4px, nav 0.65px). Section labels and badges are uppercase 11px.
- **Person.** Speaks *about* the machine in the third person, *to* the reader sparingly ("Configure yours", "Find a dealer"). Never chatty or first-person plural ("we're so excited…").
- **Emoji.** Never. The brand has zero emoji vocabulary.
- **Numbers as voltage.** Performance numbers (0–100, bhp, top speed) and F1 race positions are rendered huge (80px / 700) — numbers are a display element, not body copy.
- **Restraint.** No exclamation marks, no hype adjectives stacked together. One idea per band.

**Examples of on-brand copy**
- Hero: *"812 Competizione"* / *"The most powerful V12 ever built."*
- CTA labels: `CONFIGURE`, `BOOK A TEST DRIVE`, `FIND A DEALER`, `DISCOVER`
- Section label: `THE RANGE` · `FORMULA 1` · `PREOWNED`
- Spec callout: `0–100 KM/H` → **2.85s**

---

## 3. Visual foundations

**Color.** A monochrome dark stage with one red voltage. The canvas is near-black `#181818` (warm, never `#000`). Cards and panels step up to `#303030`. White editorial bands (`#ffffff`) appear *only* inside specific contexts — preowned listings, pricing tables, dealer surfaces. Rosso Corsa `#da291c` is reserved for primary CTAs, the brand mark, and F1 race-position highlights — nothing else. Hypersail yellow is scoped to the sailing sub-program only. Text on dark runs white `#ffffff` for emphasis and grey `#969696` for running body.

**Type.** A single sans across every role (FerrariSans; Inter substituted here). Display weight stays at **500 — never bold**; the photography does the heavy lifting. Negative letter-spacing (−0.36 to −1.6px) lives on display sizes only; body stays at 0. CTA and nav labels are uppercase with tracking. Component titles, CTA labels, and the giant number-display use 700.

**Spacing.** Strictly the 8px named ladder (`xxxs` 4 → `super` 128). Major bands pad at `xxl` (96px); hero depth uses `super` (128px). No ad-hoc pixel values. Editorial body caps at 1280px; hero photography goes full-bleed.

**Backgrounds.** Full-bleed cinematic photography *is* the page chrome at the top. Beneath, flat dark bands alternate with occasional white editorial bands. Two decorative gradients exist: a **Rosso Corsa gradient** (`linear-gradient(180deg,#a00c01,#da291c 64%)`) inside accent/livery bands, and a **dark atmospheric gradient** (`linear-gradient(180deg,#3c3c3c,#030303 64%)`) at section transitions. No noise, no texture, no pattern fills.

**Corners.** Sharp `0px` is the dominant radius — every CTA, card, and band. Form inputs use 4px. Pill geometry (`9999px`) is reserved for **badges and avatar plates only** — CTAs are never pills.

**Elevation.** Photographic depth + brightness-step. Flat canvas → elevated card (`#303030`) → white light band. Borders are 1px hairlines (`#303030` on dark, `#d2d2d2` on light). There is exactly **one** drop-shadow tier — a soft `0 4px 8px rgba(0,0,0,0.1)` on hovered cards. No shadow scale.

**Borders.** Hairlines everywhere — 1px dividers separate rows, cards, and bands. They are the primary structural device on dark surfaces where shadows are absent.

**Animation & state.** Hover states are **not documented** by the brand (no-hover policy in preview HTML). Press state on the primary CTA darkens to `#b01e0a`. The single shadow tier appears on hovered cards. Hero parallax / counter timings are out of scope. Keep motion minimal and editorial — fades over bounces, never playful.

**Imagery vibe.** Cinematic, high-contrast automotive photography — warm-to-neutral, never desaturated or hand-illustrated. Cars shot in motion or in dramatic studio light. Imagery is always the hero, never decoration.

---

## 4. Iconography

The captured surfaces are **icon-light** — the brand leans on photography and type, not an icon system. Where utility icons are needed (search, language/globe, account, hamburger, chevrons, arrows, social), use a **thin single-stroke line set** at ~1.5px stroke to match the precise, hairline aesthetic.

- **Substitute set (flagged):** [Lucide](https://lucide.dev) via CDN — thin, consistent 1.5px strokes that suit the hairline vocabulary. No brand-native icon font was provided.
- Icons render in `--color-ink` (white) on dark, `--color-body-on-light` on light, and `--color-muted` when secondary.
- **No emoji. No unicode glyph icons.** Arrows in CTAs may use a Lucide `arrow-right` or a typographic `→` at most.
- The brand mark (`assets/logo-mark.svg`, `logo-wordmark.svg`) is an **original Torque X monogram** — the spec's "Cavallino" mark is a Ferrari trademark and is deliberately not reproduced.

---

## 5. Index / manifest

**Root**
- `styles.css` — global entry point (consumers link this; `@import` lines only)
- `readme.md` — this document
- `SKILL.md` — Agent-Skill front-matter for portable use

**Tokens** (`tokens/`)
- `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `radius.css`

**Assets** (`assets/`)
- `logo-wordmark.svg` (on dark) · `logo-wordmark-dark.svg` (on light) · `logo-mark.svg` (monogram)

**Foundation cards** (`guidelines/`) — specimen cards rendered in the Design System tab (Type, Colors, Spacing, Brand).

**Components** (`components/`)
- `core/` — Button, OutlineButton, TextButton, Badge, SpecCell, Input
- `cards/` — FeatureCard, DriverCard, PreownedCard
- `navigation/` — TopNav

**UI kits** (`ui_kits/`)
- `marketing/` — Torque X marketing website: model landing, the range, F1, preowned.

---

## 6. Caveats

- **FerrariSans is licensed** and not bundled. Inter (weight 500, −1% display tracking) is the documented substitute, loaded from Google Fonts. Drop the real `.woff2` files into `assets/fonts` and swap the `@import` in `tokens/fonts.css` to restore fidelity.
- **Brand mark** is an original Torque X monogram, not the trademarked Cavallino.
- **Photography** could not be generated; UI kits and cards use tasteful gradient/placeholder stand-ins where a full-bleed cinematic photograph belongs. Replace with real automotive photography.
- **Icons** use Lucide (CDN) as a flagged substitute — no brand-native icon set was provided.
