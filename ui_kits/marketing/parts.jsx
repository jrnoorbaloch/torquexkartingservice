/* global React */
// Torque X marketing kit — section components. Exported to window for index.html.
const { Button, Badge, SpecCell, FeatureCard, DriverCard, PreownedCard, TopNav } =
  window.TorqueXDesignSystem_1604c3;

const V = (n) => `var(--space-${n})`;

/* Cinematic photo placeholder — layered gradients evoke dramatic studio light.
   Replace `src` with real automotive photography in production. */
function Photo({ src, children, ratio = "16 / 9", glow = true, style }) {
  const placeholder = glow
    ? "radial-gradient(120% 90% at 70% 120%, rgba(218,41,28,0.55), rgba(218,41,28,0) 55%), radial-gradient(80% 60% at 25% 0%, rgba(120,120,120,0.35), rgba(0,0,0,0) 60%), linear-gradient(180deg, #2a2a2a, #0a0a0a 90%)"
    : "linear-gradient(180deg, #2a2a2a, #0a0a0a 90%)";
  return (
    <div
      style={{
        position: "relative",
        aspectRatio: ratio,
        background: src ? `center/cover no-repeat url("${src}")` : placeholder,
        overflow: "hidden",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ---------- HERO (full-bleed cinema) ---------- */
function Hero({ eyebrow, title, sub, primary, secondary }) {
  return (
    <Photo ratio="21 / 9" style={{ minHeight: 520 }}>
      {/* bottom protection gradient so type stays legible */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 55%)" }} />
      <div
        style={{
          position: "absolute",
          left: 0, right: 0, bottom: 0,
          padding: `${V("xxl")} var(--space-md) var(--space-xl)`,
          maxWidth: 1280, margin: "0 auto",
          fontFamily: "var(--font-sans)", color: "var(--color-ink)",
        }}
      >
        {eyebrow && (
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "1.1px", textTransform: "uppercase", color: "var(--color-body)", marginBottom: V("xs") }}>
            {eyebrow}
          </div>
        )}
        <h1 style={{ margin: 0, fontSize: 80, fontWeight: 500, lineHeight: 1.05, letterSpacing: "-1.6px" }}>{title}</h1>
        {sub && <p style={{ margin: `${V("sm")} 0 0`, maxWidth: 520, fontSize: 16, lineHeight: 1.5, color: "var(--color-body)" }}>{sub}</p>}
        <div style={{ display: "flex", gap: V("xs"), marginTop: V("lg") }}>
          {primary && <Button>{primary}</Button>}
          {secondary && <Button variant="outline-on-dark">{secondary}</Button>}
        </div>
      </div>
      <PhotoCaption>Photography placeholder — drop in a cinematic hero render</PhotoCaption>
    </Photo>
  );
}

function PhotoCaption({ children }) {
  return (
    <div style={{ position: "absolute", top: V("sm"), right: V("sm"), fontFamily: "var(--font-sans)", fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "0.5px" }}>
      {children}
    </div>
  );
}

/* ---------- SECTION HEADER ---------- */
function SectionHead({ eyebrow, title, theme = "dark" }) {
  const light = theme === "light";
  return (
    <div style={{ fontFamily: "var(--font-sans)", marginBottom: V("lg") }}>
      {eyebrow && (
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "1.1px", textTransform: "uppercase", color: light ? "var(--color-muted)" : "var(--color-body)", marginBottom: V("xs") }}>
          {eyebrow}
        </div>
      )}
      <h2 style={{ margin: 0, fontSize: 36, fontWeight: 500, lineHeight: 1.2, letterSpacing: "-0.36px", color: light ? "var(--color-body-on-light)" : "var(--color-ink)" }}>
        {title}
      </h2>
    </div>
  );
}

/* ---------- SPEC STRIP ---------- */
function SpecStrip() {
  const specs = [
    { value: "830", label: "Horsepower cv" },
    { value: "2.85s", label: "0–100 km/h" },
    { value: "340", label: "Top speed km/h" },
    { value: "6.5", label: "Litre V12" },
  ];
  return (
    <div style={{ background: "var(--color-canvas)", borderTop: "1px solid var(--color-hairline)", borderBottom: "1px solid var(--color-hairline)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: `${V("xl")} var(--space-md)`, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: V("md") }}>
        {specs.map((s) => <SpecCell key={s.label} value={s.value} label={s.label} />)}
      </div>
    </div>
  );
}

/* ---------- RANGE GRID ---------- */
function RangeGrid() {
  const models = [
    { eyebrow: "Berlinetta", title: "812 Competizione", body: "The most powerful V12 ever built." },
    { eyebrow: "Gran Turismo", title: "Roma", body: "La Nuova Dolce Vita." },
    { eyebrow: "Spider", title: "296 GTS", body: "Hybrid V6, open-top thrill." },
    { eyebrow: "Berlinetta", title: "SF90", body: "1,000 cv plug-in hybrid flagship." },
    { eyebrow: "Sport", title: "Purosangue", body: "Four doors, four seats, one V12." },
    { eyebrow: "Icona", title: "Daytona SP3", body: "A limited-series tribute to endurance racing." },
  ];
  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: `${V("xxl")} var(--space-md)` }}>
      <SectionHead eyebrow="The Range" title="Every Torque X, in full" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: V("md") }}>
        {models.map((m) => <FeatureCard key={m.title} {...m} cta="Discover" />)}
      </div>
    </div>
  );
}

/* ---------- LIVERY BAND (Rosso Corsa accent) ---------- */
function LiveryBand() {
  return (
    <div style={{ background: "var(--gradient-red)", color: "var(--color-ink)", fontFamily: "var(--font-sans)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: `${V("xxl")} var(--space-md)`, display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: V("lg"), flexWrap: "wrap" }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "1.1px", textTransform: "uppercase", opacity: 0.85, marginBottom: V("xs") }}>Tailor Made</div>
          <h2 style={{ margin: 0, fontSize: 36, fontWeight: 500, lineHeight: 1.2, letterSpacing: "-0.36px", maxWidth: 620 }}>
            Specify your livery, stitch, and shield. No two cars leave Maranello alike.
          </h2>
        </div>
        <Button variant="outline-on-dark">Configure yours</Button>
      </div>
    </div>
  );
}

/* ---------- F1 SECTION ---------- */
function F1Section() {
  const drivers = [
    { name: "C. Leclerc", number: 16, team: "Scuderia Torque X" },
    { name: "L. Hamilton", number: 44, team: "Scuderia Torque X" },
  ];
  return (
    <div style={{ background: "var(--color-canvas)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: `${V("xxl")} var(--space-md)` }}>
        <SectionHead eyebrow="Formula 1" title="The Scuderia" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: V("md"), marginBottom: V("xl") }}>
          {drivers.map((d) => <DriverCard key={d.number} {...d} />)}
        </div>
        <div style={{ borderTop: "1px solid var(--color-hairline)", paddingTop: V("lg"), display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: V("md") }}>
          <SpecCell value="P1" label="Italian GP — Monza" tone="race" />
          <SpecCell value="P3" label="Singapore GP" tone="race" />
          <SpecCell value="2" label="Constructors' standing" />
        </div>
      </div>
    </div>
  );
}

/* ---------- PREOWNED (white editorial band) ---------- */
function PreownedSection() {
  const cars = [
    { model: "Torque X Roma", year: "2022", mileage: "8,400 km", price: "€198,000", badge: "Approved" },
    { model: "812 GTS", year: "2021", mileage: "5,100 km", price: "€364,000", badge: "Approved" },
    { model: "F8 Tributo", year: "2020", mileage: "12,900 km", price: "€259,000" },
    { model: "Portofino M", year: "2023", mileage: "3,200 km", price: "€229,000", badge: "Approved" },
  ];
  return (
    <div style={{ background: "var(--color-canvas-light)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: `${V("xxl")} var(--space-md)` }}>
        <SectionHead eyebrow="Preowned" title="Torque X Approved" theme="light" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: V("sm") }}>
          {cars.map((c) => <PreownedCard key={c.model + c.price} {...c} />)}
        </div>
      </div>
    </div>
  );
}

/* ---------- CTA + FOOTER ---------- */
function CtaBand() {
  return (
    <div style={{ background: "var(--color-canvas)", borderTop: "1px solid var(--color-hairline)", fontFamily: "var(--font-sans)", textAlign: "center" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: `${V("xxl")} var(--space-md)` }}>
        <h2 style={{ margin: 0, fontSize: 36, fontWeight: 500, lineHeight: 1.2, letterSpacing: "-0.36px", color: "var(--color-ink)" }}>
          Begin your Torque X journey.
        </h2>
        <div style={{ display: "flex", justifyContent: "center", marginTop: V("lg") }}>
          <Button>Book a test drive</Button>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  const cols = [
    { h: "Models", links: ["The Range", "812 Competizione", "Roma", "SF90", "Purosangue"] },
    { h: "Formula 1", links: ["The Scuderia", "Calendar", "Drivers", "Standings"] },
    { h: "Ownership", links: ["Preowned", "Tailor Made", "Find a dealer", "Service"] },
    { h: "Company", links: ["About", "Careers", "Press", "Sustainability"] },
    { h: "Connect", links: ["Newsletter", "Instagram", "YouTube", "Contact"] },
  ];
  return (
    <footer style={{ background: "var(--color-canvas)", borderTop: "1px solid var(--color-hairline)", fontFamily: "var(--font-sans)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "64px var(--space-md) 48px", display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: V("md") }}>
        {cols.map((c) => (
          <div key={c.h}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "1.1px", textTransform: "uppercase", color: "var(--color-ink)", marginBottom: V("sm") }}>{c.h}</div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: V("xs") }}>
              {c.links.map((l) => (
                <li key={l}><a href="#" onClick={(e) => e.preventDefault()} style={{ fontSize: 13, color: "var(--color-body)", textDecoration: "none" }}>{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "24px var(--space-md)", borderTop: "1px solid var(--color-hairline)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: V("sm") }}>
        <img src="../../assets/logo-wordmark.svg" alt="Torque X" style={{ height: 22 }} />
        <span style={{ fontSize: 12, color: "var(--color-muted)" }}>© 2026 Torque X S.p.A. — All rights reserved.</span>
      </div>
    </footer>
  );
}

Object.assign(window, {
  TXPhoto: Photo, TXHero: Hero, TXSpecStrip: SpecStrip, TXRangeGrid: RangeGrid,
  TXLiveryBand: LiveryBand, TXF1Section: F1Section, TXPreownedSection: PreownedSection,
  TXCtaBand: CtaBand, TXFooter: Footer, TXTopNav: TopNav,
});
