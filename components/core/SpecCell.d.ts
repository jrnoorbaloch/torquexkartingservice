import * as React from "react";

/**
 * Technical spec callout — a giant 80px/700 number-display value over an
 * uppercase caption label. tone="race" renders the value in Rosso Corsa for
 * F1 finishing positions.
 *
 * @startingPoint section="Core" subtitle="Giant spec / race-position number" viewport="280x160"
 *
 * @example
 * <SpecCell value="2.85s" label="0–100 km/h" />
 * <SpecCell value="P1" label="Monza GP" tone="race" />
 */
export interface SpecCellProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The big value (number or short string). */
  value: React.ReactNode;
  /** Uppercase label beneath. */
  label: React.ReactNode;
  /** "default" white, or "race" Rosso Corsa. */
  tone?: "default" | "race";
  style?: React.CSSProperties;
}

export function SpecCell(props: SpecCellProps): JSX.Element;
