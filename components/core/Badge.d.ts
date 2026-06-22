import * as React from "react";

/**
 * Small uppercase pill badge — the only place pill geometry appears in Torque X.
 * 11px / 600 / 1.1px tracking, uppercase.
 *
 * @example
 * <Badge>New</Badge>
 * <Badge tone="primary">F1</Badge>
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  /** Color tone. Default "default" (elevated grey). */
  tone?: "default" | "primary" | "info" | "success" | "warning" | "light";
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
