/* global React */
// Torque X Karting Circuit — sections B (booking, membership, corporate, social, leads, footer).
const DS2 = window.TorqueXDesignSystem_1604c3;
const { Button: KBtn, Badge: KBadge, Input: KInput } = DS2;
const { useState } = React;
const s2 = window.kSp;
const wrap2 = window.kWrap;
const KSectionHead2 = window.KSectionHead;
const KEyebrow2 = window.KEyebrow;
const KPhoto2 = window.KPhoto;

/* ---------- BOOKING WIDGET (3-click) ---------- */
function BookingWidget({ presetService }) {
  const services = ["Arrive & Drive", "Professional Racing", "Corporate Event", "Private Track Rental", "Racing Academy"];
  const packages = {
    default: [["10 Laps", "Rs. 2,500"], ["20 Laps", "Rs. 4,500"], ["Endurance 45min", "Rs. 8,000"]],
  };
  const times = ["12:00", "14:00", "16:00", "18:00", "20:00", "22:00"];
  const dates = ["Fri 26", "Sat 27", "Sun 28", "Mon 29", "Tue 30"];

  const [service, setService] = useState(presetService || services[0]);
  const [pkg, setPkg] = useState(0);
  const [date, setDate] = useState(1);
  const [time, setTime] = useState(2);
  const [done, setDone] = useState(false);

  React.useEffect(() => { if (presetService) setService(presetService); }, [presetService]);

  const chip = (active) => ({
    padding: "10px 16px", border: `1px solid ${active ? "var(--color-primary)" : "var(--color-hairline)"}`,
    background: active ? "var(--color-primary)" : "transparent", color: active ? "#fff" : "var(--color-ink)",
    fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: active ? 600 : 400, cursor: "pointer",
    letterSpacing: "0.3px", borderRadius: "var(--radius-sm)", whiteSpace: "nowrap",
  });
  const field = { display: "flex", flexDirection: "column", gap: s2("xs") };
  const fieldLabel = { fontSize: 11, fontWeight: 600, letterSpacing: "1.1px", textTransform: "uppercase", color: "var(--color-body)" };

  return (
    <div id="book" style={{ background: "var(--gradient-dark)", borderTop: "1px solid var(--color-hairline)", borderBottom: "1px solid var(--color-hairline)" }}>
      <div style={{ ...wrap2, padding: `${s2("xxl")} var(--space-md)`, display: "grid", gridTemplateColumns: "1fr 380px", gap: s2("xl"), alignItems: "start" }}>
        <div>
          <KSectionHead2 eyebrow="Book in 3 clicks" title="Reserve your race" sub="Pick a service, choose your slot, and pay online. Instant confirmation to your phone." />
          {!done ? (
            <div style={{ display: "flex", flexDirection: "column", gap: s2("lg") }}>
              <div style={field}>
                <span style={fieldLabel}>1 · Service</span>
                <div style={{ display: "flex", gap: s2("xxs"), flexWrap: "wrap" }}>
                  {services.map((sv) => <button key={sv} style={chip(sv === service)} onClick={() => setService(sv)}>{sv}</button>)}
                </div>
              </div>
              <div style={field}>
                <span style={fieldLabel}>2 · Package</span>
                <div style={{ display: "flex", gap: s2("xxs"), flexWrap: "wrap" }}>
                  {packages.default.map((p, i) => <button key={p[0]} style={chip(i === pkg)} onClick={() => setPkg(i)}>{p[0]} · {p[1]}</button>)}
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: s2("lg") }}>
                <div style={field}>
                  <span style={fieldLabel}>3 · Date</span>
                  <div style={{ display: "flex", gap: s2("xxs"), flexWrap: "wrap" }}>
                    {dates.map((d, i) => <button key={d} style={chip(i === date)} onClick={() => setDate(i)}>{d}</button>)}
                  </div>
                </div>
                <div style={field}>
                  <span style={fieldLabel}>Time</span>
                  <div style={{ display: "flex", gap: s2("xxs"), flexWrap: "wrap" }}>
                    {times.map((t, i) => <button key={t} style={chip(i === time)} onClick={() => setTime(i)}>{t}</button>)}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ border: "1px solid var(--color-success)", padding: s2("lg"), fontFamily: "var(--font-sans)" }}>
              <KBadge tone="success">Confirmed</KBadge>
              <h3 style={{ margin: `${s2("sm")} 0 0`, fontSize: 22, fontWeight: 500, color: "var(--color-ink)" }}>You're on the grid.</h3>
              <p style={{ margin: `${s2("xs")} 0 0`, fontSize: 14, color: "var(--color-body)" }}>A confirmation and QR pass have been sent to your phone. See you trackside.</p>
              <div style={{ marginTop: s2("md") }}><KBtn variant="outline-on-dark" onClick={() => setDone(false)}>Book another</KBtn></div>
            </div>
          )}
        </div>

        {/* Summary rail */}
        <div style={{ background: "var(--color-canvas)", border: "1px solid var(--color-hairline)", padding: s2("lg"), fontFamily: "var(--font-sans)", position: "sticky", top: 88 }}>
          <KEyebrow2>Your booking</KEyebrow2>
          <div style={{ display: "flex", flexDirection: "column", gap: s2("sm"), margin: `${s2("sm")} 0` }}>
            {[["Service", service], ["Package", packages.default[pkg][0]], ["Date", dates[date]], ["Time", times[time]]].map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", fontSize: 14, paddingBottom: s2("sm"), borderBottom: "1px solid var(--color-hairline)" }}>
                <span style={{ color: "var(--color-muted)" }}>{k}</span>
                <span style={{ color: "var(--color-ink)", fontWeight: 500 }}>{v}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", margin: `${s2("md")} 0` }}>
            <span style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "1px", color: "var(--color-body)" }}>Total</span>
            <span style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-1px", color: "var(--color-ink)" }}>{packages.default[pkg][1]}</span>
          </div>
          <KBtn style={{ width: "100%" }} onClick={() => setDone(true)}>Pay & confirm</KBtn>
          <p style={{ margin: `${s2("sm")} 0 0`, fontSize: 11, color: "var(--color-muted)", textAlign: "center" }}>Members get up to 20% off this rate.</p>
        </div>
      </div>
    </div>
  );
}

/* ---------- MEMBERSHIP ---------- */
function Membership({ onJoin }) {
  const [annual, setAnnual] = useState(true);
  const plans = [
    { name: "Starter Racer", m: 6500, a: 65000, feats: ["10% booking discount", "Loyalty points on every race", "Members-only race nights", "Free helmet & gear hire"], tone: false },
    { name: "Pro Racer", m: 12500, a: 125000, feats: ["Priority weekend booking", "20% event discount", "4 free race credits / month", "Ranked league entry", "Bring-a-friend pass"], tone: true },
    { name: "Elite Racer", m: 24000, a: 240000, feats: ["VIP lounge & paddock access", "Exclusive invite-only tournaments", "10 free race credits / month", "Personal lap coaching", "Premium rewards & merch"], tone: false },
  ];
  const fmt = (n) => "Rs. " + n.toLocaleString("en-PK");
  return (
    <div id="membership" style={{ background: "var(--color-canvas)" }}>
      <div style={{ ...wrap2, padding: `${s2("xxl")} var(--space-md)` }}>
        <KSectionHead2 center eyebrow="Membership" title="Race more. Pay less. Belong." sub="Recurring plans built for racers who keep coming back. Switch or cancel anytime." />
        {/* billing toggle */}
        <div style={{ display: "flex", justifyContent: "center", gap: s2("xs"), marginBottom: s2("xl"), fontFamily: "var(--font-sans)" }}>
          {[["Monthly", false], ["Annual · save 17%", true]].map(([label, val]) => (
            <button key={label} onClick={() => setAnnual(val)} style={{ padding: "8px 18px", border: `1px solid ${annual === val ? "var(--color-primary)" : "var(--color-hairline)"}`, background: annual === val ? "var(--color-primary)" : "transparent", color: annual === val ? "#fff" : "var(--color-ink)", fontSize: 12, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", cursor: "pointer", borderRadius: "var(--radius-sm)" }}>{label}</button>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: s2("sm") }}>
          {plans.map((p) => (
            <div key={p.name} style={{ background: p.tone ? "var(--color-surface-card)" : "var(--color-canvas)", border: p.tone ? "1px solid var(--color-primary)" : "1px solid var(--color-hairline)", padding: s2("lg"), fontFamily: "var(--font-sans)", display: "flex", flexDirection: "column", position: "relative" }}>
              {p.tone && <div style={{ position: "absolute", top: 0, right: 0 }}><KBadge tone="primary">Most popular</KBadge></div>}
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "var(--color-ink)" }}>{p.name}</h3>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6, margin: `${s2("md")} 0 ${s2("xs")}` }}>
                <span style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-1.2px", color: "var(--color-ink)" }}>{fmt(annual ? p.a : p.m)}</span>
                <span style={{ fontSize: 13, color: "var(--color-muted)" }}>/{annual ? "yr" : "mo"}</span>
              </div>
              <ul style={{ listStyle: "none", margin: `${s2("md")} 0 ${s2("lg")}`, padding: 0, display: "flex", flexDirection: "column", gap: s2("sm"), flex: 1 }}>
                {p.feats.map((f) => (
                  <li key={f} style={{ display: "flex", gap: s2("xs"), fontSize: 14, color: "var(--color-body)", lineHeight: 1.4 }}>
                    <span style={{ color: "var(--color-primary)", fontWeight: 700 }}>—</span>{f}
                  </li>
                ))}
              </ul>
              <KBtn variant={p.tone ? "primary" : "outline-on-dark"} style={{ width: "100%" }} onClick={onJoin}>Join {p.name.split(" ")[0]}</KBtn>
            </div>
          ))}
        </div>
        {/* savings note */}
        <div style={{ marginTop: s2("lg"), textAlign: "center", fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--color-muted)" }}>
          A Pro Racer who races weekly saves <span style={{ color: "var(--color-ink)", fontWeight: 600 }}>over Rs. 90,000 a year</span> versus pay-as-you-go.
        </div>
      </div>
    </div>
  );
}

/* ---------- CORPORATE BAND ---------- */
function CorporateBand({ onInquire }) {
  return (
    <div id="corporate" style={{ background: "var(--gradient-red)", color: "var(--color-ink)", fontFamily: "var(--font-sans)" }}>
      <div style={{ ...wrap2, padding: `${s2("xxl")} var(--space-md)`, display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: s2("xl"), alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "1.1px", textTransform: "uppercase", opacity: 0.85, marginBottom: s2("xs") }}>Corporate & Groups</div>
          <h2 style={{ margin: 0, fontSize: 40, fontWeight: 500, lineHeight: 1.12, letterSpacing: "-0.8px", maxWidth: 560 }}>Turn your team into a pit crew.</h2>
          <p style={{ margin: `${s2("md")} 0 0`, fontSize: 16, lineHeight: 1.55, maxWidth: 480, opacity: 0.92 }}>Branded race competitions, leaderboards, catering, and a private paddock. From 10 to 200 guests.</p>
          <div style={{ display: "flex", gap: s2("xl"), marginTop: s2("lg") }}>
            {[["200", "Max guests"], ["3hr", "Avg event"], ["12+", "Brands hosted /mo"]].map(([a, b]) => (
              <div key={b}><div style={{ fontSize: 30, fontWeight: 700, letterSpacing: "-0.6px" }}>{a}</div><div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.8px", opacity: 0.8 }}>{b}</div></div>
            ))}
          </div>
          <div style={{ marginTop: s2("lg") }}><KBtn variant="outline-on-dark" onClick={onInquire}>Request corporate proposal</KBtn></div>
        </div>
        <KPhoto2 ratio="4 / 3" glow="50% 50%" style={{ border: "1px solid rgba(255,255,255,0.25)" }}><window.KPhotoTag>Corporate event gallery</window.KPhotoTag></KPhoto2>
      </div>
    </div>
  );
}

/* ---------- SOCIAL PROOF ---------- */
function SocialProof() {
  const quotes = [
    ["“Fastest karts in the country. The timing system and leaderboard make every visit competitive.”", "Hamza R.", "Elite Racer · 340 races"],
    ["“We booked our company off-site here. Slick from inquiry to invoice — the team loved it.”", "Ayesha K.", "People Lead, Systems Ltd"],
    ["“Joined the Pro membership and basically live here now. The free credits pay for themselves.”", "Bilal A.", "Pro Racer · since 2024"],
  ];
  return (
    <div style={{ background: "var(--color-canvas)", borderTop: "1px solid var(--color-hairline)" }}>
      <div style={{ ...wrap2, padding: `${s2("xxl")} var(--space-md)` }}>
        <KSectionHead2 eyebrow="Social proof" title="Trusted by Pakistan's racing community" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: s2("sm") }}>
          {quotes.map((q) => (
            <div key={q[1]} style={{ border: "1px solid var(--color-hairline)", padding: s2("lg"), fontFamily: "var(--font-sans)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: s2("lg") }}>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.5, color: "var(--color-ink)", fontWeight: 500, letterSpacing: "-0.2px" }}>{q[0]}</p>
              <div>
                <div style={{ color: "var(--color-primary)", fontSize: 14, letterSpacing: "1px", marginBottom: 6 }}>★★★★★</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "var(--color-ink)" }}>{q[1]}</div>
                <div style={{ fontSize: 12, color: "var(--color-muted)" }}>{q[2]}</div>
              </div>
            </div>
          ))}
        </div>
        {/* gallery strip */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: s2("xxs"), marginTop: s2("sm") }}>
          {[0, 1, 2, 3].map((i) => <KPhoto2 key={i} ratio="1 / 1" glow={`${30 + i * 20}% 80%`} />)}
        </div>
      </div>
    </div>
  );
}

/* ---------- LEAD GEN ---------- */
function LeadGen() {
  const [type, setType] = useState("Membership");
  const [sent, setSent] = useState(false);
  const types = ["Membership", "Corporate", "School / College", "Partnership"];
  return (
    <div id="contact" style={{ background: "var(--gradient-dark)", borderTop: "1px solid var(--color-hairline)" }}>
      <div style={{ ...wrap2, padding: `${s2("xxl")} var(--space-md)`, display: "grid", gridTemplateColumns: "1fr 1fr", gap: s2("xl"), alignItems: "center" }}>
        <div style={{ fontFamily: "var(--font-sans)" }}>
          <KSectionHead2 eyebrow="Get in touch" title="Talk to our racing team" sub="Tell us what you're planning — memberships, a corporate day, a birthday, or a school event. We reply within one business day." />
          <div style={{ display: "flex", flexDirection: "column", gap: s2("sm") }}>
            {[["WhatsApp", "+92 300 1234567"], ["Call", "+92 21 111 TORQUE"], ["Visit", "Super Highway, Karachi · open daily 10am–12am"]].map(([k, v]) => (
              <div key={k} style={{ display: "flex", gap: s2("md"), fontSize: 14, borderBottom: "1px solid var(--color-hairline)", paddingBottom: s2("sm") }}>
                <span style={{ width: 90, color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "1px", fontSize: 11, fontWeight: 600, paddingTop: 2 }}>{k}</span>
                <span style={{ color: "var(--color-ink)" }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: "var(--color-canvas)", border: "1px solid var(--color-hairline)", padding: s2("lg"), fontFamily: "var(--font-sans)" }}>
          {!sent ? (
            <>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "1.1px", textTransform: "uppercase", color: "var(--color-body)", marginBottom: s2("xs") }}>I'm interested in</div>
              <div style={{ display: "flex", gap: s2("xxs"), flexWrap: "wrap", marginBottom: s2("md") }}>
                {types.map((t) => (
                  <button key={t} onClick={() => setType(t)} style={{ padding: "8px 14px", border: `1px solid ${t === type ? "var(--color-primary)" : "var(--color-hairline)"}`, background: t === type ? "var(--color-primary)" : "transparent", color: t === type ? "#fff" : "var(--color-ink)", fontSize: 12, cursor: "pointer", borderRadius: "var(--radius-sm)" }}>{t}</button>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: s2("sm") }}>
                <KInput theme="dark" label="Full name" placeholder="Your name" />
                <KInput theme="dark" label="Phone / WhatsApp" placeholder="+92 3xx xxxxxxx" />
                <KInput theme="dark" label="Message" placeholder={`Tell us about your ${type.toLowerCase()} plans`} />
                <KBtn style={{ width: "100%", marginTop: s2("xxs") }} onClick={() => setSent(true)}>Send inquiry</KBtn>
              </div>
            </>
          ) : (
            <div style={{ textAlign: "center", padding: `${s2("lg")} 0` }}>
              <KBadge tone="success">Received</KBadge>
              <h3 style={{ margin: `${s2("sm")} 0 0`, fontSize: 22, fontWeight: 500, color: "var(--color-ink)" }}>Thanks — we're on it.</h3>
              <p style={{ margin: `${s2("xs")} 0 0`, fontSize: 14, color: "var(--color-body)" }}>Our team will reach out about your {type.toLowerCase()} inquiry within one business day.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- NEWSLETTER + FOOTER ---------- */
function Newsletter() {
  const [ok, setOk] = useState(false);
  return (
    <div style={{ background: "var(--color-canvas-elevated)", fontFamily: "var(--font-sans)" }}>
      <div style={{ ...wrap2, padding: `${s2("xl")} var(--space-md)`, display: "flex", alignItems: "center", justifyContent: "space-between", gap: s2("lg"), flexWrap: "wrap" }}>
        <div>
          <h3 style={{ margin: 0, fontSize: 22, fontWeight: 500, color: "var(--color-ink)", letterSpacing: "-0.3px" }}>Seasonal offers & race-night drops</h3>
          <p style={{ margin: "6px 0 0", fontSize: 14, color: "var(--color-body)" }}>Join 18,000 racers getting discount coupons and event invites first.</p>
        </div>
        {!ok ? (
          <div style={{ display: "flex", gap: s2("xs"), alignItems: "flex-end" }}>
            <div style={{ width: 280 }}><KInput theme="dark" placeholder="you@email.com" /></div>
            <KBtn onClick={() => setOk(true)}>Subscribe</KBtn>
          </div>
        ) : <KBadge tone="success">Subscribed — check your inbox</KBadge>}
      </div>
    </div>
  );
}
function Footer() {
  const cols = [
    { h: "Race", links: ["Arrive & Drive", "Professional Racing", "Racing Academy", "Private Track Rental"] },
    { h: "Membership", links: ["Starter Racer", "Pro Racer", "Elite Racer", "Member benefits"] },
    { h: "Events", links: ["Corporate", "Birthdays", "School & College", "Tournaments"] },
    { h: "Visit", links: ["Book now", "Track hours", "Find us", "Safety & FAQ"] },
    { h: "Connect", links: ["WhatsApp", "Instagram", "YouTube", "Newsletter"] },
  ];
  return (
    <footer style={{ background: "var(--color-canvas)", borderTop: "1px solid var(--color-hairline)", fontFamily: "var(--font-sans)" }}>
      <div style={{ ...wrap2, padding: "64px var(--space-md) 48px", display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: s2("md") }}>
        {cols.map((c) => (
          <div key={c.h}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "1.1px", textTransform: "uppercase", color: "var(--color-ink)", marginBottom: s2("sm") }}>{c.h}</div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: s2("xs") }}>
              {c.links.map((l) => <li key={l}><a href="#" onClick={(e) => e.preventDefault()} style={{ fontSize: 13, color: "var(--color-body)", textDecoration: "none" }}>{l}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ ...wrap2, padding: "24px var(--space-md)", borderTop: "1px solid var(--color-hairline)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: s2("sm") }}>
        <img src="../../assets/logo-wordmark.svg" alt="Torque X Karting Circuit" style={{ height: 22 }} />
        <span style={{ fontSize: 12, color: "var(--color-muted)" }}>© 2026 Torque X Karting Circuit · Karachi, Pakistan</span>
      </div>
    </footer>
  );
}

Object.assign(window, {
  KBookingWidget: BookingWidget, KMembership: Membership, KCorporateBand: CorporateBand,
  KSocialProof: SocialProof, KLeadGen: LeadGen, KNewsletter: Newsletter, KFooter: Footer,
});
