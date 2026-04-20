'use client';

import type { ComponentType } from 'react';
import _LogoLoop from './LogoLoop';

type LogoItem =
  | { src: string; alt?: string; title?: string; href?: string }
  | { node: React.ReactNode; title?: string; ariaLabel?: string; href?: string };

type LogoLoopProps = {
  logos: LogoItem[];
  speed?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  hoverSpeed?: number;
  pauseOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
};

const LogoLoop = _LogoLoop as ComponentType<LogoLoopProps>;

const clientLogos = [
  { src: "/favicon.png", alt: "Devzoo logo", title: "Devzoo" },
  { node: <span className="font-heading text-lg font-semibold tracking-[-0.04em] text-surface-dark/72">Startups</span>, ariaLabel: 'Startups' },
  { src: "/favicon.png", alt: "Devzoo logo", title: "Devzoo" },
  { node: <span className="font-heading text-lg font-semibold tracking-[-0.04em] text-surface-dark/72">Creators</span>, ariaLabel: 'Creators' },
  { src: "/favicon.png", alt: "Devzoo logo", title: "Devzoo" },
  { node: <span className="font-heading text-lg font-semibold tracking-[-0.04em] text-surface-dark/72">Small Businesses</span>, ariaLabel: 'Small Businesses' },
  { src: "/favicon.png", alt: "Devzoo logo", title: "Devzoo" },
  { node: <span className="font-heading text-lg font-semibold tracking-[-0.04em] text-surface-dark/72">Founders</span>, ariaLabel: 'Founders' },
  { src: "/favicon.png", alt: "Devzoo logo", title: "Devzoo" },
  { node: <span className="font-heading text-lg font-semibold tracking-[-0.04em] text-surface-dark/72">Growing Brands</span>, ariaLabel: 'Growing Brands' },
];

export default function ClientLogoLoop() {
  return (
    <LogoLoop
      logos={clientLogos}
      speed={80}
      direction="left"
      logoHeight={28}
      gap={64}
      hoverSpeed={0}
      fadeOut
      fadeOutColor="#F5F4F0"
      ariaLabel="Trusted by startups, creators, and growing brands"
    />
  );
}
