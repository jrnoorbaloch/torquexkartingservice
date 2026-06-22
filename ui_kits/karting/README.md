# Torque X Karting Circuit — Conversion Platform UI Kit

A high-fidelity, **conversion-first** homepage for the Torque X Karting Circuit — a karting business positioned as a premium motorsport sales funnel. Built entirely on the Torque X design system.

## Run
Open `index.html`. It's a single scrollable funnel with sticky nav, a promo bar, and a floating WhatsApp-booking button. Every section carries a CTA.

## Funnel order
1. **Promo bar** — seasonal offer + coupon code.
2. **Hero** — "Pakistan's Ultimate Go-Kart Racing Experience", dual CTA (Book / Become a member), trust row.
3. **Stats strip** — track specs via `SpecCell`.
4. **Why Torque X** — 7-point benefit grid.
5. **Services** — all 8 services as bookable cards; clicking one preloads the booking widget.
6. **Booking widget** — interactive 3-click flow (service → package → date/time) with a live summary rail and confirmation state.
7. **Membership** — Starter / Pro / Elite comparison with a monthly/annual toggle and savings note.
8. **Corporate band** — Rosso Corsa livery band → "Request corporate proposal".
9. **Social proof** — testimonials, star ratings, photo gallery strip.
10. **Lead gen** — multi-type inquiry form (Membership / Corporate / Birthday / School / Partnership) with success state.
11. **Newsletter + Footer**.

## Files
- `index.html` — shell, nav, promo bar, smooth-scroll routing, WhatsApp float.
- `sections-a.jsx` — Hero, StatsStrip, WhyChoose, Services (+ shared `Photo`/`SectionHead` helpers, `K`-prefixed on `window`).
- `sections-b.jsx` — BookingWidget, Membership, CorporateBand, SocialProof, LeadGen, Newsletter, Footer.

## Composition
Reuses DS primitives from `window.TorqueXDesignSystem_1604c3` — `Button`, `Badge`, `SpecCell`, `Input`. New sections add only layout + karting copy; sharp 0px corners, Rosso Corsa scarcity, and the 8px spacing ladder are inherited from the system.

## To productionize
- Swap every gradient `Photo` placeholder for real track/event photography (biggest fidelity gain).
- Wire the booking widget and forms to a real booking/payments + CRM backend.
- Currency is PKR (Rs.); prices are illustrative.
