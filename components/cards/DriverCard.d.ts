import * as React from "react";

/**
 * F1 driver portrait card — elevated grey plate with portrait, name, team
 * eyebrow and a big Rosso Corsa race number. Sharp 0px corners, 24px padding.
 *
 * @example
 * <DriverCard portrait="/drivers/01.jpg" name="C. Leclerc" number={16} team="Scuderia Torque X" />
 */
export interface DriverCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Portrait image URL. Falls back to gradient placeholder. */
  portrait?: string;
  name: React.ReactNode;
  /** Race number — rendered large in Rosso Corsa. */
  number?: React.ReactNode;
  /** Team / scuderia eyebrow. */
  team?: React.ReactNode;
  style?: React.CSSProperties;
}

export function DriverCard(props: DriverCardProps): JSX.Element;
