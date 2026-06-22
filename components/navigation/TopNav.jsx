import React from "react";

/**
 * Top navigation bar. 64px tall, hairline bottom border.
 * Brand wordmark left, uppercase menu center/left, utilities right.
 * theme="dark" (on hero pages) or "light" (white editorial bands).
 */
export function TopNav({
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

  return (
    <nav
      style={{
        fontFamily: "var(--font-sans)",
        height: "64px",
        display: "flex",
        alignItems: "center",
        gap: "var(--space-xl)",
        padding: "0 var(--space-md)",
        boxSizing: "border-box",
        background: isDark ? "var(--color-canvas)" : "var(--color-canvas-light)",
        borderBottom: isDark
          ? "1px solid var(--color-hairline)"
          : "1px solid var(--color-hairline-on-light)",
        ...style,
      }}
      {...rest}
    >
      {logoSrc ? (
        <img src={logoSrc} alt="Torque X" style={{ height: "28px", flex: "none" }} />
      ) : (
        <span style={{ flex: "none", fontSize: "20px", fontWeight: "var(--weight-display)", letterSpacing: "0.5px", color: fg }}>
          TORQUE<span style={{ color: "var(--color-primary)", fontWeight: "var(--weight-bold)" }}>X</span>
        </span>
      )}

      <ul style={{ display: "flex", alignItems: "center", gap: "var(--space-md)", listStyle: "none", margin: 0, padding: 0, flex: 1 }}>
        {items.map((label) => (
          <li key={label}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onSelect && onSelect(label);
              }}
              style={{
                fontSize: "var(--nav-link-size)",
                fontWeight: "var(--weight-label)",
                letterSpacing: "var(--nav-link-track)",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "8px 0",
                color: label === active ? "var(--color-primary)" : fg,
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)", flex: "none", color: muted, fontSize: "var(--nav-link-size)", letterSpacing: "var(--nav-link-track)", textTransform: "uppercase", fontWeight: "var(--weight-label)" }}>
        {utilities || (
          <>
            <span style={{ cursor: "pointer" }}>EN</span>
            <span style={{ cursor: "pointer", color: fg }}>Account</span>
          </>
        )}
      </div>
    </nav>
  );
}
