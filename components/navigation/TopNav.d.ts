import * as React from "react";

/**
 * Top navigation bar — 64px, hairline bottom border, brand wordmark left,
 * uppercase 0.65px-tracked menu, utilities right. The active item is Rosso Corsa.
 *
 * @startingPoint section="Navigation" subtitle="Editorial top nav, dark/light" viewport="1280x64"
 *
 * @example
 * <TopNav active="Models" logoSrc="/assets/logo-wordmark.svg"
 *   onSelect={(label) => goTo(label)} />
 */
export interface TopNavProps extends React.HTMLAttributes<HTMLElement> {
  /** Menu labels. Defaults to the five primary destinations. */
  items?: string[];
  /** Currently-active label (rendered in Rosso Corsa). */
  active?: string;
  /** Right-side utilities node (language picker, account, search). */
  utilities?: React.ReactNode;
  /** Logo image URL. Omit to render the built-in TORQUE X wordmark. */
  logoSrc?: string;
  theme?: "dark" | "light";
  onSelect?: (label: string) => void;
  style?: React.CSSProperties;
}

export function TopNav(props: TopNavProps): JSX.Element;
