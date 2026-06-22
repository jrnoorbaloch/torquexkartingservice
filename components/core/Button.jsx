import React from "react";

/**
 * Torque X primary CTA — the signature Rosso Corsa button.
 * Sharp 0px corners, uppercase label with 1.4px tracking.
 */
export function Button({
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
    transition: "background-color 120ms ease, color 120ms ease",
  };

  const variants = {
    primary: {
      background: "var(--color-primary)",
      color: "var(--color-on-primary)",
    },
    "primary-active": {
      background: "var(--color-primary-active)",
      color: "var(--color-on-primary)",
    },
    "outline-on-dark": {
      background: "transparent",
      color: "var(--color-ink)",
      borderColor: "var(--color-ink)",
    },
    "outline-on-light": {
      background: "transparent",
      color: "var(--color-body-on-light)",
      borderColor: "var(--color-body-on-light)",
    },
  };

  const Tag = href ? "a" : "button";
  const tagProps = href ? { href } : { type, disabled };

  return (
    <Tag
      {...tagProps}
      onClick={onClick}
      style={{ ...base, ...(variants[variant] || variants.primary), ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
