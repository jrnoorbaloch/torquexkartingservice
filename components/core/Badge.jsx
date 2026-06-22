import React from "react";

/**
 * Small uppercase badge pill. The ONLY place pill geometry is used.
 */
export function Badge({ children, tone = "default", style, ...rest }) {
  const tones = {
    default: { background: "var(--color-canvas-elevated)", color: "var(--color-ink)" },
    primary: { background: "var(--color-primary)", color: "var(--color-on-primary)" },
    info: { background: "var(--color-info)", color: "#ffffff" },
    success: { background: "var(--color-success)", color: "#ffffff" },
    warning: { background: "var(--color-warning)", color: "#ffffff" },
    light: { background: "var(--color-surface-strong-light)", color: "var(--color-body-on-light)" },
  };
  return (
    <span
      style={{
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
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
