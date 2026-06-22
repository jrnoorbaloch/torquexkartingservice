import React from "react";

/**
 * Preowned listing card — white editorial surface. Car photo on top, then
 * model name, year/mileage meta, and price. Sharp 0px corners, 24px padding.
 */
export function PreownedCard({
  image,
  model,
  year,
  mileage,
  price,
  badge,
  style,
  ...rest
}) {
  return (
    <div
      style={{
        fontFamily: "var(--font-sans)",
        background: "var(--color-canvas-light)",
        color: "var(--color-body-on-light)",
        borderRadius: "var(--radius-none)",
        border: "1px solid var(--color-hairline-on-light)",
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
      {...rest}
    >
      <div style={{ position: "relative" }}>
        <div
          style={{
            aspectRatio: "3 / 2",
            background: image
              ? `center/cover no-repeat url("${image}")`
              : "var(--color-surface-strong-light)",
          }}
        />
        {badge && (
          <span
            style={{
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
              textTransform: "uppercase",
            }}
          >
            {badge}
          </span>
        )}
      </div>
      <div style={{ padding: "var(--space-sm)", display: "flex", flexDirection: "column", gap: "var(--space-xxs)" }}>
        <span style={{ fontSize: "var(--title-md-size)", fontWeight: "var(--weight-bold)" }}>{model}</span>
        <span style={{ fontSize: "var(--body-sm-size)", color: "var(--color-muted)" }}>
          {[year, mileage].filter(Boolean).join("  ·  ")}
        </span>
        <span
          style={{
            marginTop: "var(--space-xxs)",
            fontSize: "var(--display-md-size)",
            fontWeight: "var(--weight-display)",
            letterSpacing: "-0.2px",
          }}
        >
          {price}
        </span>
      </div>
    </div>
  );
}
