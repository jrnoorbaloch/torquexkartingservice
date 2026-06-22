import * as React from "react";

/**
 * Text input — 48px tall, 4px corners (the one rounded form element),
 * hairline border, Hypersail-yellow focus ring. Optional uppercase label.
 *
 * @example
 * <Input theme="dark" label="Email" placeholder="you@torquex.com" />
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** "dark" for dark canvas, "light" for white editorial bands. */
  theme?: "dark" | "light";
  /** Optional uppercase field label. */
  label?: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
