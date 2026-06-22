import React from "react";

/**
 * Image-first feature card. Photo fills the top edge-to-edge; title + body
 * sit beneath in tight typography. Sharp 0px corners.
 * theme="dark" (default) or "light" (white editorial band).
 */
export function FeatureCard({
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
  return (
    <div
      style={{
        fontFamily: "var(--font-sans)",
        background: isDark ? "var(--color-canvas)" : "var(--color-canvas-light)",
        color: isDark ? "var(--color-ink)" : "var(--color-body-on-light)",
        borderRadius: "var(--radius-none)",
        border: isDark ? "none" : "1px solid var(--color-hairline-on-light)",
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          aspectRatio: "3 / 2",
          background: image
            ? `center/cover no-repeat url("${image}")`
            : "var(--gradient-dark)",
        }}
      />
      <div
        style={{
          padding: isDark ? "var(--space-sm) 0 0" : "var(--space-md)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-xxs)",
        }}
      >
        {eyebrow && (
          <span
            style={{
              fontSize: "var(--caption-uppercase-size)",
              fontWeight: "var(--weight-label)",
              letterSpacing: "var(--caption-uppercase-track)",
              textTransform: "uppercase",
              color: isDark ? "var(--color-body)" : "var(--color-muted)",
            }}
          >
            {eyebrow}
          </span>
        )}
        <h3
          style={{
            margin: 0,
            fontSize: "var(--display-md-size)",
            fontWeight: "var(--weight-display)",
            lineHeight: "1.2",
            letterSpacing: "-0.2px",
          }}
        >
          {title}
        </h3>
        {body && (
          <p
            style={{
              margin: "var(--space-xxs) 0 0",
              fontSize: "var(--body-md-size)",
              lineHeight: "var(--body-md-line)",
              color: isDark ? "var(--color-body)" : "var(--color-muted)",
            }}
          >
            {body}
          </p>
        )}
        {cta && (
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            style={{
              marginTop: "var(--space-xs)",
              fontSize: "var(--button-size)",
              fontWeight: "var(--weight-bold)",
              letterSpacing: "var(--button-track)",
              textTransform: "uppercase",
              color: "var(--color-primary)",
              textDecoration: "none",
            }}
          >
            {cta} →
          </a>
        )}
      </div>
    </div>
  );
}
