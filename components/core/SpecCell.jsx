import React from "react";

/**
 * Technical spec / race-position callout.
 * Giant number-display value (80px / 700) with an uppercase label below.
 * Set tone="race" to render the value in Rosso Corsa (F1 finishing positions).
 */
export function SpecCell({ value, label, tone = "default", style, ...rest }) {
  return (
    <div style={{ fontFamily: "var(--font-sans)", ...style }} {...rest}>
      <div
        style={{
          fontSize: "var(--number-display-size)",
          fontWeight: "var(--weight-bold)",
          lineHeight: "var(--number-display-line)",
          letterSpacing: "var(--number-display-track)",
          color: tone === "race" ? "var(--color-primary)" : "var(--color-ink)",
        }}
      >
        {value}
      </div>
      <div
        style={{
          marginTop: "var(--space-xs)",
          fontSize: "var(--caption-uppercase-size)",
          fontWeight: "var(--weight-label)",
          lineHeight: "var(--caption-uppercase-line)",
          letterSpacing: "var(--caption-uppercase-track)",
          textTransform: "uppercase",
          color: "var(--color-body)",
        }}
      >
        {label}
      </div>
    </div>
  );
}
