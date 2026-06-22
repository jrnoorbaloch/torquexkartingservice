import * as React from "react";

/**
 * The signature Torque X CTA. Rosso Corsa fill, sharp 0px corners,
 * uppercase label with 1.4px tracking. Use scarcely — primary action only.
 *
 * @startingPoint section="Core" subtitle="Rosso Corsa CTA — sharp, uppercase" viewport="320x96"
 *
 * @example
 * <Button>Configure</Button>
 * <Button variant="outline-on-dark">Discover</Button>
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  /** Visual treatment. Default "primary". */
  variant?: "primary" | "primary-active" | "outline-on-dark" | "outline-on-light";
  type?: "button" | "submit" | "reset";
  /** Render as a link. */
  href?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
