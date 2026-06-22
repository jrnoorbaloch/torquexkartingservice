# Torque X — Marketing Website UI Kit

A high-fidelity, click-through recreation of the Torque X marketing site: a **cinematic editorial** layout where full-bleed photography is the page chrome and a single Rosso Corsa voltage carries every primary action.

## Run
Open `index.html`. The top nav switches between four surfaces:
- **Home / Models** — cinematic hero → spec strip → 3-up range grid → Rosso Corsa livery band → CTA.
- **Formula 1** — driver cards (2-up) + race-position cells.
- **Preowned** — white editorial band with the 4-up Approved listing grid.

## Files
- `index.html` — app shell, nav routing, per-screen composition.
- `parts.jsx` — section components (`Hero`, `SpecStrip`, `RangeGrid`, `LiveryBand`, `F1Section`, `PreownedSection`, `CtaBand`, `Footer`) exported to `window` with a `TX` prefix.

## Composition
Built entirely from the design-system bundle (`window.TorqueXDesignSystem_1604c3`): `TopNav`, `Button`, `Badge`, `SpecCell`, `FeatureCard`, `DriverCard`, `PreownedCard`. Sections add only layout (max-1280px containers, the 8px spacing ladder) — no restyled primitives.

## Photography
`Photo` renders a layered-gradient **placeholder** (dark studio light + Rosso Corsa glow) wherever a cinematic photograph belongs. Pass a real `src` to swap in automotive renders — that is the single biggest fidelity upgrade for this kit.
