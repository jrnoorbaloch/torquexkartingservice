import React from "react";

/**
 * Text input. Sharp-ish 4px corners (the one rounded form element).
 * theme="dark" for dark canvas, "light" for white editorial bands.
 */
export function Input({ theme = "dark", style, label, id, ...rest }) {
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
    border: isDark
      ? "1px solid var(--color-hairline)"
      : "1px solid var(--color-hairline-on-light)",
    outline: "none",
  };
  return (
    <div style={{ fontFamily: "var(--font-sans)" }}>
      {label && (
        <label
          htmlFor={id}
          style={{
            display: "block",
            marginBottom: "var(--space-xxs)",
            fontSize: "var(--caption-uppercase-size)",
            fontWeight: "var(--weight-label)",
            letterSpacing: "var(--caption-uppercase-track)",
            textTransform: "uppercase",
            color: isDark ? "var(--color-body)" : "var(--color-muted)",
          }}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        style={{ ...field, ...style }}
        onFocus={(e) => (e.target.style.borderColor = "var(--focus-ring)")}
        onBlur={(e) =>
          (e.target.style.borderColor = isDark
            ? "var(--color-hairline)"
            : "var(--color-hairline-on-light)")
        }
        {...rest}
      />
    </div>
  );
}
