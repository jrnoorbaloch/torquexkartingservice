/* global React */
// Torque X Karting Circuit — sections A (hero, stats, why, services).
// Exported to window for index.html. Built on the DS bundle.
const DS = window.TorqueXDesignSystem_1604c3;
const { Button, Badge, SpecCell } = DS;
const sp = (n) => `var(--space-${n})`;

/* ---- Shared bits ---- */
function Eyebrow({ children, light, color }) {
  return (
    <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: "1.1px", textTransform: "uppercase", color: color || (light ? "var(--color-muted)" : "var(--color-body)"), marginBottom: sp("xs") }}>
      {children}
    </div>
  );
}
function SectionHead({ eyebrow, title, sub, light, center }) {
  return (
    <div style={{ fontFamily: "var(--font-sans)", marginBottom: sp("xl"), textAlign: center ? "center" : "left", maxWidth: center ? 720 : "none", marginLeft: center ? "auto" : 0, marginRight: center ? "auto" : 0 }}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2 style={{ margin: 0, fontSize: 36, fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.36px", color: light ? "var(--color-body-on-light)" : "var(--color-ink)" }}>{title}</h2>
      {sub && <p style={{ margin: `${sp("sm")} 0 0`, fontSize: 16, lineHeight: 1.55, color: light ? "var(--color-muted)" : "var(--color-body)" }}>{sub}</p>}
    </div>
  );
}
const wrap = { maxWidth: 1280, margin: "0 auto", padding: "0 var(--space-md)" };

/* Cinematic placeholder — dark studio light + Rosso Corsa glow. Swap for real photos. */
function Photo({ children, ratio = "16 / 9", glow = "70% 120%", style }) {
  return (
    <div style={{ position: "relative", aspectRatio: ratio, overflow: "hidden",
      background: `radial-gradient(110% 90% at ${glow}, rgba(218,41,28,0.5), rgba(218,41,28,0) 55%), radial-gradient(80% 60% at 20% 0%, rgba(140,140,140,0.28), rgba(0,0,0,0) 60%), linear-gradient(180deg, #2a2a2a, #080808 92%)`, ...style }}>
      {children}
    </div>
  );
}
function PhotoTag({ children }) {
  return <div style={{ position: "absolute", top: sp("sm"), right: sp("sm"), fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: "0.5px", color: "rgba(255,255,255,0.38)", textTransform: "uppercase" }}>{children}</div>;
}

/* ---------- HERO ---------- */
function Hero({ onBook, onJoin }) {
  return (
    <Photo ratio="auto" style={{ minHeight: 640, aspectRatio: "auto" }}>
      <video autoPlay muted loop playsInline
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}>
        <source src="hero.mp4" type="video/mp4" />
      </video>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.65) 100%)" }} />
      <div style={{ position: "relative", ...wrap, minHeight: 640, display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingTop: 120, paddingBottom: sp("xxl"), fontFamily: "var(--font-sans)", color: "var(--color-ink)" }}>
        <div style={{ display: "flex", gap: sp("xs"), marginBottom: sp("md") }}>
          <Badge tone="primary">Now booking · 2026 season</Badge>
          <Badge>Open daily 10am–12am</Badge>
        </div>
        <h1 style={{ margin: 0, fontSize: 80, fontWeight: 500, lineHeight: 1.02, letterSpacing: "-1.8px", maxWidth: 920 }}>
          Pakistan's Ultimate<br />Go-Kart Racing Experience
        </h1>
        <p style={{ margin: `${sp("md")} 0 0`, maxWidth: 560, fontSize: 18, lineHeight: 1.55, color: "var(--color-body)" }}>
          Adrenaline-pumping kart racing, exclusive memberships, professional events, and unforgettable track experiences — all on a championship-grade circuit.
        </p>
        <div style={{ display: "flex", gap: sp("xs"), marginTop: sp("lg"), flexWrap: "wrap" }}>
          <Button onClick={onBook}>Book your race</Button>
          <Button variant="outline-on-dark" onClick={onJoin}>Become a member</Button>
        </div>
        {/* trust row */}
        <div style={{ display: "flex", gap: sp("lg"), marginTop: sp("xl"), flexWrap: "wrap", alignItems: "center" }}>
          {[
            ["FIA-grade", "Safety certified"],
            ["12,000+", "Racers hosted"],
            ["4.9★", "Google · 2,300 reviews"],
            ["38s", "Track record lap"],
          ].map(([a, b]) => (
            <div key={b} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <span style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.4px" }}>{a}</span>
              <span style={{ fontSize: 12, color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.8px" }}>{b}</span>
            </div>
          ))}
        </div>
      </div>
    </Photo>
  );
}

/* ---------- STATS STRIP ---------- */
function StatsStrip() {
  const stats = [
    { value: "1.2km", label: "Floodlit circuit" },
    { value: "60", label: "km/h top speed" },
    { value: "30+", label: "Pro-grade karts" },
    { value: "0.01s", label: "Digital lap timing" },
  ];
  return (
    <div style={{ background: "var(--color-canvas)", borderTop: "1px solid var(--color-hairline)", borderBottom: "1px solid var(--color-hairline)" }}>
      <div style={{ ...wrap, padding: `${sp("xl")} var(--space-md)`, display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: sp("md") }}>
        {stats.map((s) => <SpecCell key={s.label} value={s.value} label={s.label} />)}
      </div>
    </div>
  );
}

/* ---------- WHY CHOOSE ---------- */
function WhyChoose() {
  const items = [
    ["Professional racing circuit", "A championship-grade, FIA-spec track engineered for speed and safety."],
    ["High-performance karts", "Sodi & Rotax fleet maintained to motorsport standards, 60 km/h+."],
    ["Digital timing system", "Live transponder timing, lap-by-lap telemetry, and a public leaderboard."],
    ["Certified safety standards", "Marshalled sessions, full safety gear, and a track-side medical team."],
    ["Membership benefits", "Priority booking, free race credits, and exclusive members-only nights."],
    ["Racing community", "League nights, tournaments, and a ranked ladder for every skill level."],
  ];
  return (
    <div style={{ background: "var(--color-canvas)" }}>
      <div style={{ ...wrap, padding: `${sp("xxl")} var(--space-md)` }}>
        <SectionHead eyebrow="Why Torque X" title="Built for racers, engineered to win" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "var(--color-hairline)", border: "1px solid var(--color-hairline)" }}>
          {items.map(([t, d], i) => (
            <div key={t} style={{ background: "var(--color-canvas)", padding: sp("lg"), fontFamily: "var(--font-sans)" }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: "var(--color-primary)", letterSpacing: "-0.5px", marginBottom: sp("sm") }}>{String(i + 1).padStart(2, "0")}</div>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "var(--color-ink)" }}>{t}</h3>
              <p style={{ margin: `${sp("xs")} 0 0`, fontSize: 14, lineHeight: 1.5, color: "var(--color-body)" }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- SERVICES ---------- */
function ServiceCard({ tag, title, body, price, onBook }) {
  return (
    <div style={{ background: "var(--color-surface-card)", border: "1px solid var(--color-hairline)", display: "flex", flexDirection: "column", fontFamily: "var(--font-sans)" }}>
      <Photo ratio="3 / 2" glow="60% 110%"><PhotoTag>Photo</PhotoTag></Photo>
      <div style={{ padding: sp("sm"), display: "flex", flexDirection: "column", gap: sp("xxs"), flex: 1 }}>
        <Eyebrow>{tag}</Eyebrow>
        <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: "var(--color-ink)" }}>{title}</h3>
        <p style={{ margin: "4px 0 0", fontSize: 13, lineHeight: 1.5, color: "var(--color-body)", flex: 1 }}>{body}</p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: sp("sm"), paddingTop: sp("sm"), borderTop: "1px solid var(--color-hairline)" }}>
          <span style={{ fontSize: 13, color: "var(--color-body)" }}>{price}</span>
          <a href="#" onClick={(e) => { e.preventDefault(); onBook && onBook(title); }} style={{ fontSize: 12, fontWeight: 700, letterSpacing: "1.4px", textTransform: "uppercase", color: "var(--color-primary)", textDecoration: "none" }}>Book →</a>
        </div>
      </div>
    </div>
  );
}
function Services({ onBook }) {
  const services = [
    ["Walk-in", "Arrive & Drive", "Beginner-friendly walk-in sessions. Book online in seconds, race the same day.", "From Rs. 2,500 / 10 laps"],
    ["Competitive", "Professional Kart Racing", "Timed competitive racing with live lap tracking and a ranked leaderboard.", "From Rs. 4,000 / session"],
    ["Recurring", "Membership Programs", "Monthly, annual & VIP plans with credits, discounts and priority booking.", "From Rs. 6,500 / month"],
    ["Business", "Corporate Events", "Team-building races, branded competitions and full corporate packages.", "Custom quote"],
    ["Education", "School & College Events", "Student racing days, educational visits and inter-college tournaments.", "From Rs. 15,000 / group"],
    ["Exclusive", "Private Track Rental", "Hire the full venue for VIP experiences and private events.", "From Rs. 120,000 / day"],
    ["Develop", "Racing Academy", "Driver training, coaching and motorsport development programmes.", "From Rs. 9,000 / course"],
  ];
  return (
    <div style={{ background: "var(--color-canvas)", borderTop: "1px solid var(--color-hairline)" }}>
      <div style={{ ...wrap, padding: `${sp("xxl")} var(--space-md)` }}>
        <SectionHead eyebrow="Services" title="Eight ways to get on track" sub="From a first walk-in lap to a full racing academy — every Torque X experience books online." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: sp("sm") }}>
          {services.map((s) => <ServiceCard key={s[1]} tag={s[0]} title={s[1]} body={s[2]} price={s[3]} onBook={onBook} />)}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  KEyebrow: Eyebrow, KSectionHead: SectionHead, KPhoto: Photo, KPhotoTag: PhotoTag, kWrap: wrap, kSp: sp,
  KHero: Hero, KStatsStrip: StatsStrip, KWhyChoose: WhyChoose, KServices: Services,
});
