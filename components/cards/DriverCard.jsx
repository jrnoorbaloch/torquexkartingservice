import React from "react";

/**
 * F1 driver portrait card. Elevated grey plate, portrait + name + race number
 * + team badge. Sharp 0px corners, 24px padding.
 */
export function DriverCard({ portrait, name, number, team, style, ...rest }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-sans)",
        background: "var(--color-surface-card)",
        color: "var(--color-ink)",
        borderRadius: "var(--radius-none)",
        padding: "var(--space-sm)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-sm)",
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          aspectRatio: "1 / 1",
          background: portrait
            ? `center/cover no-repeat url("${portrait}")`
            : "var(--gradient-dark)",
        }}
      />
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "var(--space-xs)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {team && (
            <span
              style={{
                fontSize: "var(--caption-uppercase-size)",
                fontWeight: "var(--weight-label)",
                letterSpacing: "var(--caption-uppercase-track)",
                textTransform: "uppercase",
                color: "var(--color-body)",
              }}
            >
              {team}
            </span>
          )}
          <span style={{ fontSize: "var(--title-md-size)", fontWeight: "var(--weight-bold)" }}>
            {name}
          </span>
        </div>
        {number != null && (
          <span
            style={{
              fontSize: "44px",
              fontWeight: "var(--weight-bold)",
              lineHeight: 1,
              letterSpacing: "-1px",
              color: "var(--color-primary)",
            }}
          >
            {number}
          </span>
        )}
      </div>
    </div>
  );
}
