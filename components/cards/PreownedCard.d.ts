import * as React from "react";

/**
 * Preowned listing card on the white editorial surface — car photo, model name,
 * year/mileage meta, and price. Sharp 0px corners, hairline border, 24px padding.
 * Used 4-up at desktop in the certified-preowned grid.
 *
 * @startingPoint section="Cards" subtitle="Preowned listing — light editorial" viewport="320x360"
 *
 * @example
 * <PreownedCard image="/po/01.jpg" model="Roma" year="2022" mileage="8,400 km"
 *   price="€198,000" badge="Approved" />
 */
export interface PreownedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image?: string;
  model: React.ReactNode;
  year?: React.ReactNode;
  mileage?: React.ReactNode;
  price: React.ReactNode;
  /** Optional corner pill (e.g. "Approved"). */
  badge?: React.ReactNode;
  style?: React.CSSProperties;
}

export function PreownedCard(props: PreownedCardProps): JSX.Element;
