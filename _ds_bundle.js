/* @ds-bundle: {"format":3,"namespace":"TorqueXDesignSystem_1604c3","components":[{"name":"DriverCard","sourcePath":"components/cards/DriverCard.jsx"},{"name":"FeatureCard","sourcePath":"components/cards/FeatureCard.jsx"},{"name":"PreownedCard","sourcePath":"components/cards/PreownedCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"SpecCell","sourcePath":"components/core/SpecCell.jsx"},{"name":"TopNav","sourcePath":"components/navigation/TopNav.jsx"}],"sourceHashes":{"components/cards/DriverCard.jsx":"813c4d96cda6","components/cards/FeatureCard.jsx":"c72533e6b375","components/cards/PreownedCard.jsx":"4f5355974533","components/core/Badge.jsx":"30acbbc63f45","components/core/Button.jsx":"39da5b895904","components/core/Input.jsx":"32a2241d3de7","components/core/SpecCell.jsx":"b944dc3f1558","components/navigation/TopNav.jsx":"bdbe26da1cb6","ui_kits/karting/sections-a.jsx":"d6ea040b0f58","ui_kits/karting/sections-b.jsx":"71e92087e015","ui_kits/marketing/parts.jsx":"95f09d7df6b0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TorqueXDesignSystem_1604c3 = window.TorqueXDesignSystem_1604c3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/DriverCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * F1 driver portrait card. Elevated grey plate, portrait + name + race number
 * + team badge. Sharp 0px corners, 24px padding.
 */
function DriverCard({
  portrait,
  name,
  number,
  team,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: "var(--font-sans)",
      background: "var(--color-surface-card)",
      color: "var(--color-ink)",
      borderRadius: "var(--radius-none)",
      padding: "var(--space-sm)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-sm)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "1 / 1",
      background: portrait ? `center/cover no-repeat url("${portrait}")` : "var(--gradient-dark)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "var(--space-xs)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "4px"
    }
  }, team && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--caption-uppercase-size)",
      fontWeight: "var(--weight-label)",
      letterSpacing: "var(--caption-uppercase-track)",
      textTransform: "uppercase",
      color: "var(--color-body)"
    }
  }, team), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--title-md-size)",
      fontWeight: "var(--weight-bold)"
    }
  }, name)), number != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "44px",
      fontWeight: "var(--weight-bold)",
      lineHeight: 1,
      letterSpacing: "-1px",
      color: "var(--color-primary)"
    }
  }, number)));
}
Object.assign(__ds_scope, { DriverCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/DriverCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/FeatureCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Image-first feature card. Photo fills the top edge-to-edge; title + body
 * sit beneath in tight typography. Sharp 0px corners.
 * theme="dark" (default) or "light" (white editorial band).
 */
function FeatureCard({
  image,
  eyebrow,
  title,
  body,
  cta,
  theme = "dark",
  style,
  ...rest
}) {
  const isDark = theme === "dark";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: "var(--font-sans)",
      background: isDark ? "var(--color-canvas)" : "var(--color-canvas-light)",
      color: isDark ? "var(--color-ink)" : "var(--color-body-on-light)",
      borderRadius: "var(--radius-none)",
      border: isDark ? "none" : "1px solid var(--color-hairline-on-light)",
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "3 / 2",
      background: image ? `center/cover no-repeat url("${image}")` : "var(--gradient-dark)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: isDark ? "var(--space-sm) 0 0" : "var(--space-md)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-xxs)"
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--caption-uppercase-size)",
      fontWeight: "var(--weight-label)",
      letterSpacing: "var(--caption-uppercase-track)",
      textTransform: "uppercase",
      color: isDark ? "var(--color-body)" : "var(--color-muted)"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: "var(--display-md-size)",
      fontWeight: "var(--weight-display)",
      lineHeight: "1.2",
      letterSpacing: "-0.2px"
    }
  }, title), body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-xxs) 0 0",
      fontSize: "var(--body-md-size)",
      lineHeight: "var(--body-md-line)",
      color: isDark ? "var(--color-body)" : "var(--color-muted)"
    }
  }, body), cta && /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      marginTop: "var(--space-xs)",
      fontSize: "var(--button-size)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--button-track)",
      textTransform: "uppercase",
      color: "var(--color-primary)",
      textDecoration: "none"
    }
  }, cta, " \u2192")));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/PreownedCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Preowned listing card — white editorial surface. Car photo on top, then
 * model name, year/mileage meta, and price. Sharp 0px corners, 24px padding.
 */
function PreownedCard({
  image,
  model,
  year,
  mileage,
  price,
  badge,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: "var(--font-sans)",
      background: "var(--color-canvas-light)",
      color: "var(--color-body-on-light)",
      borderRadius: "var(--radius-none)",
      border: "1px solid var(--color-hairline-on-light)",
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "3 / 2",
      background: image ? `center/cover no-repeat url("${image}")` : "var(--color-surface-strong-light)"
    }
  }), badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "var(--space-xs)",
      left: "var(--space-xs)",
      padding: "4px 12px",
      borderRadius: "var(--radius-full)",
      background: "var(--color-canvas)",
      color: "var(--color-ink)",
      fontSize: "var(--caption-uppercase-size)",
      fontWeight: "var(--weight-label)",
      letterSpacing: "var(--caption-uppercase-track)",
      textTransform: "uppercase"
    }
  }, badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-sm)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-xxs)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--title-md-size)",
      fontWeight: "var(--weight-bold)"
    }
  }, model), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--body-sm-size)",
      color: "var(--color-muted)"
    }
  }, [year, mileage].filter(Boolean).join("  ·  ")), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: "var(--space-xxs)",
      fontSize: "var(--display-md-size)",
      fontWeight: "var(--weight-display)",
      letterSpacing: "-0.2px"
    }
  }, price)));
}
Object.assign(__ds_scope, { PreownedCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PreownedCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small uppercase badge pill. The ONLY place pill geometry is used.
 */
function Badge({
  children,
  tone = "default",
  style,
  ...rest
}) {
  const tones = {
    default: {
      background: "var(--color-canvas-elevated)",
      color: "var(--color-ink)"
    },
    primary: {
      background: "var(--color-primary)",
      color: "var(--color-on-primary)"
    },
    info: {
      background: "var(--color-info)",
      color: "#ffffff"
    },
    success: {
      background: "var(--color-success)",
      color: "#ffffff"
    },
    warning: {
      background: "var(--color-warning)",
      color: "#ffffff"
    },
    light: {
      background: "var(--color-surface-strong-light)",
      color: "var(--color-body-on-light)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "4px 12px",
      borderRadius: "var(--radius-full)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--caption-uppercase-size)",
      fontWeight: "var(--weight-label)",
      lineHeight: "var(--caption-uppercase-line)",
      letterSpacing: "var(--caption-uppercase-track)",
      textTransform: "uppercase",
      ...(tones[tone] || tones.default),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Torque X primary CTA — the signature Rosso Corsa button.
 * Sharp 0px corners, uppercase label with 1.4px tracking.
 */
function Button({
  children,
  variant = "primary",
  type = "button",
  href,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-xxs)",
    height: "48px",
    padding: "14px 32px",
    border: "1px solid transparent",
    borderRadius: "var(--radius-none)",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--button-size)",
    fontWeight: "var(--weight-bold)",
    lineHeight: "var(--button-line)",
    letterSpacing: "var(--button-track)",
    textTransform: "uppercase",
    textDecoration: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    boxSizing: "border-box",
    transition: "background-color 120ms ease, color 120ms ease"
  };
  const variants = {
    primary: {
      background: "var(--color-primary)",
      color: "var(--color-on-primary)"
    },
    "primary-active": {
      background: "var(--color-primary-active)",
      color: "var(--color-on-primary)"
    },
    "outline-on-dark": {
      background: "transparent",
      color: "var(--color-ink)",
      borderColor: "var(--color-ink)"
    },
    "outline-on-light": {
      background: "transparent",
      color: "var(--color-body-on-light)",
      borderColor: "var(--color-body-on-light)"
    }
  };
  const Tag = href ? "a" : "button";
  const tagProps = href ? {
    href
  } : {
    type,
    disabled
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, tagProps, {
    onClick: onClick,
    style: {
      ...base,
      ...(variants[variant] || variants.primary),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input. Sharp-ish 4px corners (the one rounded form element).
 * theme="dark" for dark canvas, "light" for white editorial bands.
 */
function Input({
  theme = "dark",
  style,
  label,
  id,
  ...rest
}) {
  const isDark = theme === "dark";
  const field = {
    height: "48px",
    width: "100%",
    padding: "14px 16px",
    boxSizing: "border-box",
    borderRadius: "var(--radius-sm)",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--body-md-size)",
    background: isDark ? "var(--color-canvas)" : "var(--color-canvas-light)",
    color: isDark ? "var(--color-ink)" : "var(--color-body-on-light)",
    border: isDark ? "1px solid var(--color-hairline)" : "1px solid var(--color-hairline-on-light)",
    outline: "none"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: "block",
      marginBottom: "var(--space-xxs)",
      fontSize: "var(--caption-uppercase-size)",
      fontWeight: "var(--weight-label)",
      letterSpacing: "var(--caption-uppercase-track)",
      textTransform: "uppercase",
      color: isDark ? "var(--color-body)" : "var(--color-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    style: {
      ...field,
      ...style
    },
    onFocus: e => e.target.style.borderColor = "var(--focus-ring)",
    onBlur: e => e.target.style.borderColor = isDark ? "var(--color-hairline)" : "var(--color-hairline-on-light)"
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/SpecCell.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Technical spec / race-position callout.
 * Giant number-display value (80px / 700) with an uppercase label below.
 * Set tone="race" to render the value in Rosso Corsa (F1 finishing positions).
 */
function SpecCell({
  value,
  label,
  tone = "default",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--number-display-size)",
      fontWeight: "var(--weight-bold)",
      lineHeight: "var(--number-display-line)",
      letterSpacing: "var(--number-display-track)",
      color: tone === "race" ? "var(--color-primary)" : "var(--color-ink)"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-xs)",
      fontSize: "var(--caption-uppercase-size)",
      fontWeight: "var(--weight-label)",
      lineHeight: "var(--caption-uppercase-line)",
      letterSpacing: "var(--caption-uppercase-track)",
      textTransform: "uppercase",
      color: "var(--color-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { SpecCell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SpecCell.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Top navigation bar. 64px tall, hairline bottom border.
 * Brand wordmark left, uppercase menu center/left, utilities right.
 * theme="dark" (on hero pages) or "light" (white editorial bands).
 */
function TopNav({
  items = ["Models", "Formula 1", "Lifestyle", "Owners", "Preowned"],
  active,
  utilities,
  logoSrc,
  theme = "dark",
  onSelect,
  style,
  ...rest
}) {
  const isDark = theme === "dark";
  const fg = isDark ? "var(--color-ink)" : "var(--color-body-on-light)";
  const muted = isDark ? "var(--color-body)" : "var(--color-muted)";
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      fontFamily: "var(--font-sans)",
      height: "64px",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-xl)",
      padding: "0 var(--space-md)",
      boxSizing: "border-box",
      background: isDark ? "var(--color-canvas)" : "var(--color-canvas-light)",
      borderBottom: isDark ? "1px solid var(--color-hairline)" : "1px solid var(--color-hairline-on-light)",
      ...style
    }
  }, rest), logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Torque X",
    style: {
      height: "28px",
      flex: "none"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      fontSize: "20px",
      fontWeight: "var(--weight-display)",
      letterSpacing: "0.5px",
      color: fg
    }
  }, "TORQUE", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-primary)",
      fontWeight: "var(--weight-bold)"
    }
  }, "X")), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-md)",
      listStyle: "none",
      margin: 0,
      padding: 0,
      flex: 1
    }
  }, items.map(label => /*#__PURE__*/React.createElement("li", {
    key: label
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onSelect && onSelect(label);
    },
    style: {
      fontSize: "var(--nav-link-size)",
      fontWeight: "var(--weight-label)",
      letterSpacing: "var(--nav-link-track)",
      textTransform: "uppercase",
      textDecoration: "none",
      padding: "8px 0",
      color: label === active ? "var(--color-primary)" : fg
    }
  }, label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-sm)",
      flex: "none",
      color: muted,
      fontSize: "var(--nav-link-size)",
      letterSpacing: "var(--nav-link-track)",
      textTransform: "uppercase",
      fontWeight: "var(--weight-label)"
    }
  }, utilities || /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      cursor: "pointer"
    }
  }, "EN"), /*#__PURE__*/React.createElement("span", {
    style: {
      cursor: "pointer",
      color: fg
    }
  }, "Account"))));
}
Object.assign(__ds_scope, { TopNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/karting/sections-a.jsx
try { (() => {
/* global React */
// Torque X Karting Circuit — sections A (hero, stats, why, services).
// Exported to window for index.html. Built on the DS bundle.
const DS = window.TorqueXDesignSystem_1604c3;
const {
  Button,
  Badge,
  SpecCell
} = DS;
const sp = n => `var(--space-${n})`;

/* ---- Shared bits ---- */
function Eyebrow({
  children,
  light,
  color
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "1.1px",
      textTransform: "uppercase",
      color: color || (light ? "var(--color-muted)" : "var(--color-body)"),
      marginBottom: sp("xs")
    }
  }, children);
}
function SectionHead({
  eyebrow,
  title,
  sub,
  light,
  center
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      marginBottom: sp("xl"),
      textAlign: center ? "center" : "left",
      maxWidth: center ? 720 : "none",
      marginLeft: center ? "auto" : 0,
      marginRight: center ? "auto" : 0
    }
  }, eyebrow && /*#__PURE__*/React.createElement(Eyebrow, {
    light: light
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 36,
      fontWeight: 500,
      lineHeight: 1.15,
      letterSpacing: "-0.36px",
      color: light ? "var(--color-body-on-light)" : "var(--color-ink)"
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: `${sp("sm")} 0 0`,
      fontSize: 16,
      lineHeight: 1.55,
      color: light ? "var(--color-muted)" : "var(--color-body)"
    }
  }, sub));
}
const wrap = {
  maxWidth: 1280,
  margin: "0 auto",
  padding: "0 var(--space-md)"
};

/* Cinematic placeholder — dark studio light + Rosso Corsa glow. Swap for real photos. */
function Photo({
  children,
  ratio = "16 / 9",
  glow = "70% 120%",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: ratio,
      overflow: "hidden",
      background: `radial-gradient(110% 90% at ${glow}, rgba(218,41,28,0.5), rgba(218,41,28,0) 55%), radial-gradient(80% 60% at 20% 0%, rgba(140,140,140,0.28), rgba(0,0,0,0) 60%), linear-gradient(180deg, #2a2a2a, #080808 92%)`,
      ...style
    }
  }, children);
}
function PhotoTag({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: sp("sm"),
      right: sp("sm"),
      fontFamily: "var(--font-sans)",
      fontSize: 10,
      letterSpacing: "0.5px",
      color: "rgba(255,255,255,0.38)",
      textTransform: "uppercase"
    }
  }, children);
}

/* ---------- HERO ---------- */
function Hero({
  onBook,
  onJoin
}) {
  return /*#__PURE__*/React.createElement(Photo, {
    ratio: "auto",
    style: {
      minHeight: 640,
      aspectRatio: "auto"
    }
  }, /*#__PURE__*/React.createElement("video", {
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }, /*#__PURE__*/React.createElement("source", {
    src: "hero.mp4",
    type: "video/mp4"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(0deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.65) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      ...wrap,
      minHeight: 640,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      paddingTop: 120,
      paddingBottom: sp("xxl"),
      fontFamily: "var(--font-sans)",
      color: "var(--color-ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: sp("xs"),
      marginBottom: sp("md")
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "primary"
  }, "Now booking \xB7 2026 season"), /*#__PURE__*/React.createElement(Badge, null, "Open daily 10am\u201312am")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 80,
      fontWeight: 500,
      lineHeight: 1.02,
      letterSpacing: "-1.8px",
      maxWidth: 920
    }
  }, "Pakistan's Ultimate", /*#__PURE__*/React.createElement("br", null), "Go-Kart Racing Experience"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: `${sp("md")} 0 0`,
      maxWidth: 560,
      fontSize: 18,
      lineHeight: 1.55,
      color: "var(--color-body)"
    }
  }, "Adrenaline-pumping kart racing, exclusive memberships, professional events, and unforgettable track experiences \u2014 all on a championship-grade circuit."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: sp("xs"),
      marginTop: sp("lg"),
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onBook
  }, "Book your race"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-on-dark",
    onClick: onJoin
  }, "Become a member")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: sp("lg"),
      marginTop: sp("xl"),
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, [["FIA-grade", "Safety certified"], ["12,000+", "Racers hosted"], ["4.9★", "Google · 2,300 reviews"], ["38s", "Track record lap"]].map(([a, b]) => /*#__PURE__*/React.createElement("div", {
    key: b,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: "-0.4px"
    }
  }, a), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--color-muted)",
      textTransform: "uppercase",
      letterSpacing: "0.8px"
    }
  }, b))))));
}

/* ---------- STATS STRIP ---------- */
function StatsStrip() {
  const stats = [{
    value: "1.2km",
    label: "Floodlit circuit"
  }, {
    value: "60",
    label: "km/h top speed"
  }, {
    value: "30+",
    label: "Pro-grade karts"
  }, {
    value: "0.01s",
    label: "Digital lap timing"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-canvas)",
      borderTop: "1px solid var(--color-hairline)",
      borderBottom: "1px solid var(--color-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: `${sp("xl")} var(--space-md)`,
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: sp("md")
    }
  }, stats.map(s => /*#__PURE__*/React.createElement(SpecCell, {
    key: s.label,
    value: s.value,
    label: s.label
  }))));
}

/* ---------- WHY CHOOSE ---------- */
function WhyChoose() {
  const items = [["Professional racing circuit", "A championship-grade, FIA-spec track engineered for speed and safety."], ["High-performance karts", "Sodi & Rotax fleet maintained to motorsport standards, 60 km/h+."], ["Digital timing system", "Live transponder timing, lap-by-lap telemetry, and a public leaderboard."], ["Certified safety standards", "Marshalled sessions, full safety gear, and a track-side medical team."], ["Membership benefits", "Priority booking, free race credits, and exclusive members-only nights."], ["Racing community", "League nights, tournaments, and a ranked ladder for every skill level."]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-canvas)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: `${sp("xxl")} var(--space-md)`
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Why Torque X",
    title: "Built for racers, engineered to win"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "1px",
      background: "var(--color-hairline)",
      border: "1px solid var(--color-hairline)"
    }
  }, items.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      background: "var(--color-canvas)",
      padding: sp("lg"),
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 700,
      color: "var(--color-primary)",
      letterSpacing: "-0.5px",
      marginBottom: sp("sm")
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 18,
      fontWeight: 700,
      color: "var(--color-ink)"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: `${sp("xs")} 0 0`,
      fontSize: 14,
      lineHeight: 1.5,
      color: "var(--color-body)"
    }
  }, d))))));
}

/* ---------- SERVICES ---------- */
function ServiceCard({
  tag,
  title,
  body,
  price,
  onBook
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-surface-card)",
      border: "1px solid var(--color-hairline)",
      display: "flex",
      flexDirection: "column",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    ratio: "3 / 2",
    glow: "60% 110%"
  }, /*#__PURE__*/React.createElement(PhotoTag, null, "Photo")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: sp("sm"),
      display: "flex",
      flexDirection: "column",
      gap: sp("xxs"),
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 20,
      fontWeight: 700,
      color: "var(--color-ink)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontSize: 13,
      lineHeight: 1.5,
      color: "var(--color-body)",
      flex: 1
    }
  }, body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: sp("sm"),
      paddingTop: sp("sm"),
      borderTop: "1px solid var(--color-hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--color-body)"
    }
  }, price), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onBook && onBook(title);
    },
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: "1.4px",
      textTransform: "uppercase",
      color: "var(--color-primary)",
      textDecoration: "none"
    }
  }, "Book \u2192"))));
}
function Services({
  onBook
}) {
  const services = [["Walk-in", "Arrive & Drive", "Beginner-friendly walk-in sessions. Book online in seconds, race the same day.", "From Rs. 2,500 / 10 laps"], ["Competitive", "Professional Kart Racing", "Timed competitive racing with live lap tracking and a ranked leaderboard.", "From Rs. 4,000 / session"], ["Recurring", "Membership Programs", "Monthly, annual & VIP plans with credits, discounts and priority booking.", "From Rs. 6,500 / month"], ["Business", "Corporate Events", "Team-building races, branded competitions and full corporate packages.", "Custom quote"], ["Education", "School & College Events", "Student racing days, educational visits and inter-college tournaments.", "From Rs. 15,000 / group"], ["Exclusive", "Private Track Rental", "Hire the full venue for VIP experiences and private events.", "From Rs. 120,000 / day"], ["Develop", "Racing Academy", "Driver training, coaching and motorsport development programmes.", "From Rs. 9,000 / course"]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-canvas)",
      borderTop: "1px solid var(--color-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: `${sp("xxl")} var(--space-md)`
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Services",
    title: "Eight ways to get on track",
    sub: "From a first walk-in lap to a full racing academy \u2014 every Torque X experience books online."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: sp("sm")
    }
  }, services.map(s => /*#__PURE__*/React.createElement(ServiceCard, {
    key: s[1],
    tag: s[0],
    title: s[1],
    body: s[2],
    price: s[3],
    onBook: onBook
  })))));
}
Object.assign(window, {
  KEyebrow: Eyebrow,
  KSectionHead: SectionHead,
  KPhoto: Photo,
  KPhotoTag: PhotoTag,
  kWrap: wrap,
  kSp: sp,
  KHero: Hero,
  KStatsStrip: StatsStrip,
  KWhyChoose: WhyChoose,
  KServices: Services
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/karting/sections-a.jsx", error: String((e && e.message) || e) }); }

// ui_kits/karting/sections-b.jsx
try { (() => {
/* global React */
// Torque X Karting Circuit — sections B (booking, membership, corporate, social, leads, footer).
const DS2 = window.TorqueXDesignSystem_1604c3;
const {
  Button: KBtn,
  Badge: KBadge,
  Input: KInput
} = DS2;
const {
  useState
} = React;
const s2 = window.kSp;
const wrap2 = window.kWrap;
const KSectionHead2 = window.KSectionHead;
const KEyebrow2 = window.KEyebrow;
const KPhoto2 = window.KPhoto;

/* ---------- BOOKING WIDGET (3-click) ---------- */
function BookingWidget({
  presetService
}) {
  const services = ["Arrive & Drive", "Professional Racing", "Corporate Event", "Private Track Rental", "Racing Academy"];
  const packages = {
    default: [["10 Laps", "Rs. 2,500"], ["20 Laps", "Rs. 4,500"], ["Endurance 45min", "Rs. 8,000"]]
  };
  const times = ["12:00", "14:00", "16:00", "18:00", "20:00", "22:00"];
  const dates = ["Fri 26", "Sat 27", "Sun 28", "Mon 29", "Tue 30"];
  const [service, setService] = useState(presetService || services[0]);
  const [pkg, setPkg] = useState(0);
  const [date, setDate] = useState(1);
  const [time, setTime] = useState(2);
  const [done, setDone] = useState(false);
  React.useEffect(() => {
    if (presetService) setService(presetService);
  }, [presetService]);
  const chip = active => ({
    padding: "10px 16px",
    border: `1px solid ${active ? "var(--color-primary)" : "var(--color-hairline)"}`,
    background: active ? "var(--color-primary)" : "transparent",
    color: active ? "#fff" : "var(--color-ink)",
    fontFamily: "var(--font-sans)",
    fontSize: 13,
    fontWeight: active ? 600 : 400,
    cursor: "pointer",
    letterSpacing: "0.3px",
    borderRadius: "var(--radius-sm)",
    whiteSpace: "nowrap"
  });
  const field = {
    display: "flex",
    flexDirection: "column",
    gap: s2("xs")
  };
  const fieldLabel = {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "1.1px",
    textTransform: "uppercase",
    color: "var(--color-body)"
  };
  return /*#__PURE__*/React.createElement("div", {
    id: "book",
    style: {
      background: "var(--gradient-dark)",
      borderTop: "1px solid var(--color-hairline)",
      borderBottom: "1px solid var(--color-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap2,
      padding: `${s2("xxl")} var(--space-md)`,
      display: "grid",
      gridTemplateColumns: "1fr 380px",
      gap: s2("xl"),
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(KSectionHead2, {
    eyebrow: "Book in 3 clicks",
    title: "Reserve your race",
    sub: "Pick a service, choose your slot, and pay online. Instant confirmation to your phone."
  }), !done ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: s2("lg")
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: field
  }, /*#__PURE__*/React.createElement("span", {
    style: fieldLabel
  }, "1 \xB7 Service"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: s2("xxs"),
      flexWrap: "wrap"
    }
  }, services.map(sv => /*#__PURE__*/React.createElement("button", {
    key: sv,
    style: chip(sv === service),
    onClick: () => setService(sv)
  }, sv)))), /*#__PURE__*/React.createElement("div", {
    style: field
  }, /*#__PURE__*/React.createElement("span", {
    style: fieldLabel
  }, "2 \xB7 Package"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: s2("xxs"),
      flexWrap: "wrap"
    }
  }, packages.default.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p[0],
    style: chip(i === pkg),
    onClick: () => setPkg(i)
  }, p[0], " \xB7 ", p[1])))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: s2("lg")
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: field
  }, /*#__PURE__*/React.createElement("span", {
    style: fieldLabel
  }, "3 \xB7 Date"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: s2("xxs"),
      flexWrap: "wrap"
    }
  }, dates.map((d, i) => /*#__PURE__*/React.createElement("button", {
    key: d,
    style: chip(i === date),
    onClick: () => setDate(i)
  }, d)))), /*#__PURE__*/React.createElement("div", {
    style: field
  }, /*#__PURE__*/React.createElement("span", {
    style: fieldLabel
  }, "Time"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: s2("xxs"),
      flexWrap: "wrap"
    }
  }, times.map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: t,
    style: chip(i === time),
    onClick: () => setTime(i)
  }, t)))))) : /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--color-success)",
      padding: s2("lg"),
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement(KBadge, {
    tone: "success"
  }, "Confirmed"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: `${s2("sm")} 0 0`,
      fontSize: 22,
      fontWeight: 500,
      color: "var(--color-ink)"
    }
  }, "You're on the grid."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: `${s2("xs")} 0 0`,
      fontSize: 14,
      color: "var(--color-body)"
    }
  }, "A confirmation and QR pass have been sent to your phone. See you trackside."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: s2("md")
    }
  }, /*#__PURE__*/React.createElement(KBtn, {
    variant: "outline-on-dark",
    onClick: () => setDone(false)
  }, "Book another")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-canvas)",
      border: "1px solid var(--color-hairline)",
      padding: s2("lg"),
      fontFamily: "var(--font-sans)",
      position: "sticky",
      top: 88
    }
  }, /*#__PURE__*/React.createElement(KEyebrow2, null, "Your booking"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: s2("sm"),
      margin: `${s2("sm")} 0`
    }
  }, [["Service", service], ["Package", packages.default[pkg][0]], ["Date", dates[date]], ["Time", times[time]]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 14,
      paddingBottom: s2("sm"),
      borderBottom: "1px solid var(--color-hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-muted)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-ink)",
      fontWeight: 500
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      margin: `${s2("md")} 0`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: "1px",
      color: "var(--color-body)"
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 40,
      fontWeight: 700,
      letterSpacing: "-1px",
      color: "var(--color-ink)"
    }
  }, packages.default[pkg][1])), /*#__PURE__*/React.createElement(KBtn, {
    style: {
      width: "100%"
    },
    onClick: () => setDone(true)
  }, "Pay & confirm"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: `${s2("sm")} 0 0`,
      fontSize: 11,
      color: "var(--color-muted)",
      textAlign: "center"
    }
  }, "Members get up to 20% off this rate."))));
}

/* ---------- MEMBERSHIP ---------- */
function Membership({
  onJoin
}) {
  const [annual, setAnnual] = useState(true);
  const plans = [{
    name: "Starter Racer",
    m: 6500,
    a: 65000,
    feats: ["10% booking discount", "Loyalty points on every race", "Members-only race nights", "Free helmet & gear hire"],
    tone: false
  }, {
    name: "Pro Racer",
    m: 12500,
    a: 125000,
    feats: ["Priority weekend booking", "20% event discount", "4 free race credits / month", "Ranked league entry", "Bring-a-friend pass"],
    tone: true
  }, {
    name: "Elite Racer",
    m: 24000,
    a: 240000,
    feats: ["VIP lounge & paddock access", "Exclusive invite-only tournaments", "10 free race credits / month", "Personal lap coaching", "Premium rewards & merch"],
    tone: false
  }];
  const fmt = n => "Rs. " + n.toLocaleString("en-PK");
  return /*#__PURE__*/React.createElement("div", {
    id: "membership",
    style: {
      background: "var(--color-canvas)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap2,
      padding: `${s2("xxl")} var(--space-md)`
    }
  }, /*#__PURE__*/React.createElement(KSectionHead2, {
    center: true,
    eyebrow: "Membership",
    title: "Race more. Pay less. Belong.",
    sub: "Recurring plans built for racers who keep coming back. Switch or cancel anytime."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: s2("xs"),
      marginBottom: s2("xl"),
      fontFamily: "var(--font-sans)"
    }
  }, [["Monthly", false], ["Annual · save 17%", true]].map(([label, val]) => /*#__PURE__*/React.createElement("button", {
    key: label,
    onClick: () => setAnnual(val),
    style: {
      padding: "8px 18px",
      border: `1px solid ${annual === val ? "var(--color-primary)" : "var(--color-hairline)"}`,
      background: annual === val ? "var(--color-primary)" : "transparent",
      color: annual === val ? "#fff" : "var(--color-ink)",
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: "1px",
      textTransform: "uppercase",
      cursor: "pointer",
      borderRadius: "var(--radius-sm)"
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: s2("sm")
    }
  }, plans.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    style: {
      background: p.tone ? "var(--color-surface-card)" : "var(--color-canvas)",
      border: p.tone ? "1px solid var(--color-primary)" : "1px solid var(--color-hairline)",
      padding: s2("lg"),
      fontFamily: "var(--font-sans)",
      display: "flex",
      flexDirection: "column",
      position: "relative"
    }
  }, p.tone && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      right: 0
    }
  }, /*#__PURE__*/React.createElement(KBadge, {
    tone: "primary"
  }, "Most popular")), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 18,
      fontWeight: 700,
      color: "var(--color-ink)"
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 6,
      margin: `${s2("md")} 0 ${s2("xs")}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 44,
      fontWeight: 700,
      letterSpacing: "-1.2px",
      color: "var(--color-ink)"
    }
  }, fmt(annual ? p.a : p.m)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--color-muted)"
    }
  }, "/", annual ? "yr" : "mo")), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: `${s2("md")} 0 ${s2("lg")}`,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: s2("sm"),
      flex: 1
    }
  }, p.feats.map(f => /*#__PURE__*/React.createElement("li", {
    key: f,
    style: {
      display: "flex",
      gap: s2("xs"),
      fontSize: 14,
      color: "var(--color-body)",
      lineHeight: 1.4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-primary)",
      fontWeight: 700
    }
  }, "\u2014"), f))), /*#__PURE__*/React.createElement(KBtn, {
    variant: p.tone ? "primary" : "outline-on-dark",
    style: {
      width: "100%"
    },
    onClick: onJoin
  }, "Join ", p.name.split(" ")[0])))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: s2("lg"),
      textAlign: "center",
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--color-muted)"
    }
  }, "A Pro Racer who races weekly saves ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-ink)",
      fontWeight: 600
    }
  }, "over Rs. 90,000 a year"), " versus pay-as-you-go.")));
}

/* ---------- CORPORATE BAND ---------- */
function CorporateBand({
  onInquire
}) {
  return /*#__PURE__*/React.createElement("div", {
    id: "corporate",
    style: {
      background: "var(--gradient-red)",
      color: "var(--color-ink)",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap2,
      padding: `${s2("xxl")} var(--space-md)`,
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      gap: s2("xl"),
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "1.1px",
      textTransform: "uppercase",
      opacity: 0.85,
      marginBottom: s2("xs")
    }
  }, "Corporate & Groups"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 40,
      fontWeight: 500,
      lineHeight: 1.12,
      letterSpacing: "-0.8px",
      maxWidth: 560
    }
  }, "Turn your team into a pit crew."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: `${s2("md")} 0 0`,
      fontSize: 16,
      lineHeight: 1.55,
      maxWidth: 480,
      opacity: 0.92
    }
  }, "Branded race competitions, leaderboards, catering, and a private paddock. From 10 to 200 guests."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: s2("xl"),
      marginTop: s2("lg")
    }
  }, [["200", "Max guests"], ["3hr", "Avg event"], ["12+", "Brands hosted /mo"]].map(([a, b]) => /*#__PURE__*/React.createElement("div", {
    key: b
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      fontWeight: 700,
      letterSpacing: "-0.6px"
    }
  }, a), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: "0.8px",
      opacity: 0.8
    }
  }, b)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: s2("lg")
    }
  }, /*#__PURE__*/React.createElement(KBtn, {
    variant: "outline-on-dark",
    onClick: onInquire
  }, "Request corporate proposal"))), /*#__PURE__*/React.createElement(KPhoto2, {
    ratio: "4 / 3",
    glow: "50% 50%",
    style: {
      border: "1px solid rgba(255,255,255,0.25)"
    }
  }, /*#__PURE__*/React.createElement(window.KPhotoTag, null, "Corporate event gallery"))));
}

/* ---------- SOCIAL PROOF ---------- */
function SocialProof() {
  const quotes = [["“Fastest karts in the country. The timing system and leaderboard make every visit competitive.”", "Hamza R.", "Elite Racer · 340 races"], ["“We booked our company off-site here. Slick from inquiry to invoice — the team loved it.”", "Ayesha K.", "People Lead, Systems Ltd"], ["“Joined the Pro membership and basically live here now. The free credits pay for themselves.”", "Bilal A.", "Pro Racer · since 2024"]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-canvas)",
      borderTop: "1px solid var(--color-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap2,
      padding: `${s2("xxl")} var(--space-md)`
    }
  }, /*#__PURE__*/React.createElement(KSectionHead2, {
    eyebrow: "Social proof",
    title: "Trusted by Pakistan's racing community"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: s2("sm")
    }
  }, quotes.map(q => /*#__PURE__*/React.createElement("div", {
    key: q[1],
    style: {
      border: "1px solid var(--color-hairline)",
      padding: s2("lg"),
      fontFamily: "var(--font-sans)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: s2("lg")
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17,
      lineHeight: 1.5,
      color: "var(--color-ink)",
      fontWeight: 500,
      letterSpacing: "-0.2px"
    }
  }, q[0]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--color-primary)",
      fontSize: 14,
      letterSpacing: "1px",
      marginBottom: 6
    }
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "var(--color-ink)"
    }
  }, q[1]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--color-muted)"
    }
  }, q[2]))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: s2("xxs"),
      marginTop: s2("sm")
    }
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement(KPhoto2, {
    key: i,
    ratio: "1 / 1",
    glow: `${30 + i * 20}% 80%`
  })))));
}

/* ---------- LEAD GEN ---------- */
function LeadGen() {
  const [type, setType] = useState("Membership");
  const [sent, setSent] = useState(false);
  const types = ["Membership", "Corporate", "School / College", "Partnership"];
  return /*#__PURE__*/React.createElement("div", {
    id: "contact",
    style: {
      background: "var(--gradient-dark)",
      borderTop: "1px solid var(--color-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap2,
      padding: `${s2("xxl")} var(--space-md)`,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: s2("xl"),
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement(KSectionHead2, {
    eyebrow: "Get in touch",
    title: "Talk to our racing team",
    sub: "Tell us what you're planning \u2014 memberships, a corporate day, a birthday, or a school event. We reply within one business day."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: s2("sm")
    }
  }, [["WhatsApp", "+92 300 1234567"], ["Call", "+92 21 111 TORQUE"], ["Visit", "Super Highway, Karachi · open daily 10am–12am"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      gap: s2("md"),
      fontSize: 14,
      borderBottom: "1px solid var(--color-hairline)",
      paddingBottom: s2("sm")
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 90,
      color: "var(--color-muted)",
      textTransform: "uppercase",
      letterSpacing: "1px",
      fontSize: 11,
      fontWeight: 600,
      paddingTop: 2
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-ink)"
    }
  }, v))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-canvas)",
      border: "1px solid var(--color-hairline)",
      padding: s2("lg"),
      fontFamily: "var(--font-sans)"
    }
  }, !sent ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "1.1px",
      textTransform: "uppercase",
      color: "var(--color-body)",
      marginBottom: s2("xs")
    }
  }, "I'm interested in"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: s2("xxs"),
      flexWrap: "wrap",
      marginBottom: s2("md")
    }
  }, types.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setType(t),
    style: {
      padding: "8px 14px",
      border: `1px solid ${t === type ? "var(--color-primary)" : "var(--color-hairline)"}`,
      background: t === type ? "var(--color-primary)" : "transparent",
      color: t === type ? "#fff" : "var(--color-ink)",
      fontSize: 12,
      cursor: "pointer",
      borderRadius: "var(--radius-sm)"
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: s2("sm")
    }
  }, /*#__PURE__*/React.createElement(KInput, {
    theme: "dark",
    label: "Full name",
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(KInput, {
    theme: "dark",
    label: "Phone / WhatsApp",
    placeholder: "+92 3xx xxxxxxx"
  }), /*#__PURE__*/React.createElement(KInput, {
    theme: "dark",
    label: "Message",
    placeholder: `Tell us about your ${type.toLowerCase()} plans`
  }), /*#__PURE__*/React.createElement(KBtn, {
    style: {
      width: "100%",
      marginTop: s2("xxs")
    },
    onClick: () => setSent(true)
  }, "Send inquiry"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: `${s2("lg")} 0`
    }
  }, /*#__PURE__*/React.createElement(KBadge, {
    tone: "success"
  }, "Received"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: `${s2("sm")} 0 0`,
      fontSize: 22,
      fontWeight: 500,
      color: "var(--color-ink)"
    }
  }, "Thanks \u2014 we're on it."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: `${s2("xs")} 0 0`,
      fontSize: 14,
      color: "var(--color-body)"
    }
  }, "Our team will reach out about your ", type.toLowerCase(), " inquiry within one business day.")))));
}

/* ---------- NEWSLETTER + FOOTER ---------- */
function Newsletter() {
  const [ok, setOk] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-canvas-elevated)",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap2,
      padding: `${s2("xl")} var(--space-md)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: s2("lg"),
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 22,
      fontWeight: 500,
      color: "var(--color-ink)",
      letterSpacing: "-0.3px"
    }
  }, "Seasonal offers & race-night drops"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "6px 0 0",
      fontSize: 14,
      color: "var(--color-body)"
    }
  }, "Join 18,000 racers getting discount coupons and event invites first.")), !ok ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: s2("xs"),
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 280
    }
  }, /*#__PURE__*/React.createElement(KInput, {
    theme: "dark",
    placeholder: "you@email.com"
  })), /*#__PURE__*/React.createElement(KBtn, {
    onClick: () => setOk(true)
  }, "Subscribe")) : /*#__PURE__*/React.createElement(KBadge, {
    tone: "success"
  }, "Subscribed \u2014 check your inbox")));
}
function Footer() {
  const cols = [{
    h: "Race",
    links: ["Arrive & Drive", "Professional Racing", "Racing Academy", "Private Track Rental"]
  }, {
    h: "Membership",
    links: ["Starter Racer", "Pro Racer", "Elite Racer", "Member benefits"]
  }, {
    h: "Events",
    links: ["Corporate", "Birthdays", "School & College", "Tournaments"]
  }, {
    h: "Visit",
    links: ["Book now", "Track hours", "Find us", "Safety & FAQ"]
  }, {
    h: "Connect",
    links: ["WhatsApp", "Instagram", "YouTube", "Newsletter"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--color-canvas)",
      borderTop: "1px solid var(--color-hairline)",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap2,
      padding: "64px var(--space-md) 48px",
      display: "grid",
      gridTemplateColumns: "repeat(5,1fr)",
      gap: s2("md")
    }
  }, cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "1.1px",
      textTransform: "uppercase",
      color: "var(--color-ink)",
      marginBottom: s2("sm")
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: s2("xs")
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 13,
      color: "var(--color-body)",
      textDecoration: "none"
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap2,
      padding: "24px var(--space-md)",
      borderTop: "1px solid var(--color-hairline)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: s2("sm")
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wordmark.svg",
    alt: "Torque X Karting Circuit",
    style: {
      height: 22
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--color-muted)"
    }
  }, "\xA9 2026 Torque X Karting Circuit \xB7 Karachi, Pakistan")));
}
Object.assign(window, {
  KBookingWidget: BookingWidget,
  KMembership: Membership,
  KCorporateBand: CorporateBand,
  KSocialProof: SocialProof,
  KLeadGen: LeadGen,
  KNewsletter: Newsletter,
  KFooter: Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/karting/sections-b.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/parts.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
// Torque X marketing kit — section components. Exported to window for index.html.
const {
  Button,
  Badge,
  SpecCell,
  FeatureCard,
  DriverCard,
  PreownedCard,
  TopNav
} = window.TorqueXDesignSystem_1604c3;
const V = n => `var(--space-${n})`;

/* Cinematic photo placeholder — layered gradients evoke dramatic studio light.
   Replace `src` with real automotive photography in production. */
function Photo({
  src,
  children,
  ratio = "16 / 9",
  glow = true,
  style
}) {
  const placeholder = glow ? "radial-gradient(120% 90% at 70% 120%, rgba(218,41,28,0.55), rgba(218,41,28,0) 55%), radial-gradient(80% 60% at 25% 0%, rgba(120,120,120,0.35), rgba(0,0,0,0) 60%), linear-gradient(180deg, #2a2a2a, #0a0a0a 90%)" : "linear-gradient(180deg, #2a2a2a, #0a0a0a 90%)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: ratio,
      background: src ? `center/cover no-repeat url("${src}")` : placeholder,
      overflow: "hidden",
      ...style
    }
  }, children);
}

/* ---------- HERO (full-bleed cinema) ---------- */
function Hero({
  eyebrow,
  title,
  sub,
  primary,
  secondary
}) {
  return /*#__PURE__*/React.createElement(Photo, {
    ratio: "21 / 9",
    style: {
      minHeight: 520
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(0deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 55%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      padding: `${V("xxl")} var(--space-md) var(--space-xl)`,
      maxWidth: 1280,
      margin: "0 auto",
      fontFamily: "var(--font-sans)",
      color: "var(--color-ink)"
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "1.1px",
      textTransform: "uppercase",
      color: "var(--color-body)",
      marginBottom: V("xs")
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 80,
      fontWeight: 500,
      lineHeight: 1.05,
      letterSpacing: "-1.6px"
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: `${V("sm")} 0 0`,
      maxWidth: 520,
      fontSize: 16,
      lineHeight: 1.5,
      color: "var(--color-body)"
    }
  }, sub), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: V("xs"),
      marginTop: V("lg")
    }
  }, primary && /*#__PURE__*/React.createElement(Button, null, primary), secondary && /*#__PURE__*/React.createElement(Button, {
    variant: "outline-on-dark"
  }, secondary))), /*#__PURE__*/React.createElement(PhotoCaption, null, "Photography placeholder \u2014 drop in a cinematic hero render"));
}
function PhotoCaption({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: V("sm"),
      right: V("sm"),
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      color: "rgba(255,255,255,0.4)",
      letterSpacing: "0.5px"
    }
  }, children);
}

/* ---------- SECTION HEADER ---------- */
function SectionHead({
  eyebrow,
  title,
  theme = "dark"
}) {
  const light = theme === "light";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      marginBottom: V("lg")
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "1.1px",
      textTransform: "uppercase",
      color: light ? "var(--color-muted)" : "var(--color-body)",
      marginBottom: V("xs")
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 36,
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: "-0.36px",
      color: light ? "var(--color-body-on-light)" : "var(--color-ink)"
    }
  }, title));
}

/* ---------- SPEC STRIP ---------- */
function SpecStrip() {
  const specs = [{
    value: "830",
    label: "Horsepower cv"
  }, {
    value: "2.85s",
    label: "0–100 km/h"
  }, {
    value: "340",
    label: "Top speed km/h"
  }, {
    value: "6.5",
    label: "Litre V12"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-canvas)",
      borderTop: "1px solid var(--color-hairline)",
      borderBottom: "1px solid var(--color-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: `${V("xl")} var(--space-md)`,
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: V("md")
    }
  }, specs.map(s => /*#__PURE__*/React.createElement(SpecCell, {
    key: s.label,
    value: s.value,
    label: s.label
  }))));
}

/* ---------- RANGE GRID ---------- */
function RangeGrid() {
  const models = [{
    eyebrow: "Berlinetta",
    title: "812 Competizione",
    body: "The most powerful V12 ever built."
  }, {
    eyebrow: "Gran Turismo",
    title: "Roma",
    body: "La Nuova Dolce Vita."
  }, {
    eyebrow: "Spider",
    title: "296 GTS",
    body: "Hybrid V6, open-top thrill."
  }, {
    eyebrow: "Berlinetta",
    title: "SF90",
    body: "1,000 cv plug-in hybrid flagship."
  }, {
    eyebrow: "Sport",
    title: "Purosangue",
    body: "Four doors, four seats, one V12."
  }, {
    eyebrow: "Icona",
    title: "Daytona SP3",
    body: "A limited-series tribute to endurance racing."
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: `${V("xxl")} var(--space-md)`
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "The Range",
    title: "Every Torque X, in full"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: V("md")
    }
  }, models.map(m => /*#__PURE__*/React.createElement(FeatureCard, _extends({
    key: m.title
  }, m, {
    cta: "Discover"
  })))));
}

/* ---------- LIVERY BAND (Rosso Corsa accent) ---------- */
function LiveryBand() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--gradient-red)",
      color: "var(--color-ink)",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: `${V("xxl")} var(--space-md)`,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: V("lg"),
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "1.1px",
      textTransform: "uppercase",
      opacity: 0.85,
      marginBottom: V("xs")
    }
  }, "Tailor Made"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 36,
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: "-0.36px",
      maxWidth: 620
    }
  }, "Specify your livery, stitch, and shield. No two cars leave Maranello alike.")), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-on-dark"
  }, "Configure yours")));
}

/* ---------- F1 SECTION ---------- */
function F1Section() {
  const drivers = [{
    name: "C. Leclerc",
    number: 16,
    team: "Scuderia Torque X"
  }, {
    name: "L. Hamilton",
    number: 44,
    team: "Scuderia Torque X"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-canvas)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: `${V("xxl")} var(--space-md)`
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Formula 1",
    title: "The Scuderia"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: V("md"),
      marginBottom: V("xl")
    }
  }, drivers.map(d => /*#__PURE__*/React.createElement(DriverCard, _extends({
    key: d.number
  }, d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--color-hairline)",
      paddingTop: V("lg"),
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: V("md")
    }
  }, /*#__PURE__*/React.createElement(SpecCell, {
    value: "P1",
    label: "Italian GP \u2014 Monza",
    tone: "race"
  }), /*#__PURE__*/React.createElement(SpecCell, {
    value: "P3",
    label: "Singapore GP",
    tone: "race"
  }), /*#__PURE__*/React.createElement(SpecCell, {
    value: "2",
    label: "Constructors' standing"
  }))));
}

/* ---------- PREOWNED (white editorial band) ---------- */
function PreownedSection() {
  const cars = [{
    model: "Torque X Roma",
    year: "2022",
    mileage: "8,400 km",
    price: "€198,000",
    badge: "Approved"
  }, {
    model: "812 GTS",
    year: "2021",
    mileage: "5,100 km",
    price: "€364,000",
    badge: "Approved"
  }, {
    model: "F8 Tributo",
    year: "2020",
    mileage: "12,900 km",
    price: "€259,000"
  }, {
    model: "Portofino M",
    year: "2023",
    mileage: "3,200 km",
    price: "€229,000",
    badge: "Approved"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-canvas-light)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: `${V("xxl")} var(--space-md)`
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Preowned",
    title: "Torque X Approved",
    theme: "light"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: V("sm")
    }
  }, cars.map(c => /*#__PURE__*/React.createElement(PreownedCard, _extends({
    key: c.model + c.price
  }, c))))));
}

/* ---------- CTA + FOOTER ---------- */
function CtaBand() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-canvas)",
      borderTop: "1px solid var(--color-hairline)",
      fontFamily: "var(--font-sans)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: "0 auto",
      padding: `${V("xxl")} var(--space-md)`
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 36,
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: "-0.36px",
      color: "var(--color-ink)"
    }
  }, "Begin your Torque X journey."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: V("lg")
    }
  }, /*#__PURE__*/React.createElement(Button, null, "Book a test drive"))));
}
function Footer() {
  const cols = [{
    h: "Models",
    links: ["The Range", "812 Competizione", "Roma", "SF90", "Purosangue"]
  }, {
    h: "Formula 1",
    links: ["The Scuderia", "Calendar", "Drivers", "Standings"]
  }, {
    h: "Ownership",
    links: ["Preowned", "Tailor Made", "Find a dealer", "Service"]
  }, {
    h: "Company",
    links: ["About", "Careers", "Press", "Sustainability"]
  }, {
    h: "Connect",
    links: ["Newsletter", "Instagram", "YouTube", "Contact"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--color-canvas)",
      borderTop: "1px solid var(--color-hairline)",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "64px var(--space-md) 48px",
      display: "grid",
      gridTemplateColumns: "repeat(5,1fr)",
      gap: V("md")
    }
  }, cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "1.1px",
      textTransform: "uppercase",
      color: "var(--color-ink)",
      marginBottom: V("sm")
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: V("xs")
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 13,
      color: "var(--color-body)",
      textDecoration: "none"
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "24px var(--space-md)",
      borderTop: "1px solid var(--color-hairline)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: V("sm")
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wordmark.svg",
    alt: "Torque X",
    style: {
      height: 22
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--color-muted)"
    }
  }, "\xA9 2026 Torque X S.p.A. \u2014 All rights reserved.")));
}
Object.assign(window, {
  TXPhoto: Photo,
  TXHero: Hero,
  TXSpecStrip: SpecStrip,
  TXRangeGrid: RangeGrid,
  TXLiveryBand: LiveryBand,
  TXF1Section: F1Section,
  TXPreownedSection: PreownedSection,
  TXCtaBand: CtaBand,
  TXFooter: Footer,
  TXTopNav: TopNav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/parts.jsx", error: String((e && e.message) || e) }); }

__ds_ns.DriverCard = __ds_scope.DriverCard;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.PreownedCard = __ds_scope.PreownedCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SpecCell = __ds_scope.SpecCell;

__ds_ns.TopNav = __ds_scope.TopNav;

})();
