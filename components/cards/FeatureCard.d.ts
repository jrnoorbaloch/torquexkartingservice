import * as React from "react";

/**
 * Image-first feature card — full-bleed photo on top, tight title/body beneath.
 * Sharp 0px corners. The workhorse of the editorial range grids.
 *
 * @startingPoint section="Cards" subtitle="Photo-first editorial card" viewport="380x420"
 *
 * @example
 * <FeatureCard image="/812.jpg" eyebrow="The Range" title="812 Competizione"
 *   body="The most powerful V12 ever built." cta="Discover" />
 */
export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Image URL. Falls back to an atmospheric gradient placeholder. */
  image?: string;
  /** Uppercase eyebrow label. */
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  body?: React.ReactNode;
  /** Inline text CTA label (renders in Rosso Corsa with arrow). */
  cta?: React.ReactNode;
  theme?: "dark" | "light";
  style?: React.CSSProperties;
}

export function FeatureCard(props: FeatureCardProps): JSX.Element;
