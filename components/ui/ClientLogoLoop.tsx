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
  { node: <span className="font-heading text-lg font-semibold tracking-[-0.04em] text-surface-dark/72">Startups</span>, ariaLabel: 'Startups' },
  { node: <span className="font-heading text-lg font-semibold tracking-[-0.04em] text-surface-dark/72">Creators</span>, ariaLabel: 'Creators' },
  { node: <span className="font-heading text-lg font-semibold tracking-[-0.04em] text-surface-dark/72">Small Business</span>, ariaLabel: 'Small Business' },
  { node: <span className="font-heading text-lg font-semibold tracking-[-0.04em] text-surface-dark/72">USA</span>, ariaLabel: 'USA' },
  { node: <span className="font-heading text-lg font-semibold tracking-[-0.04em] text-surface-dark/72">UK</span>, ariaLabel: 'UK' },
  { node: <span className="font-heading text-lg font-semibold tracking-[-0.04em] text-surface-dark/72">UAE</span>, ariaLabel: 'UAE' },
  { node: <span className="font-heading text-lg font-semibold tracking-[-0.04em] text-surface-dark/72">Pakistan</span>, ariaLabel: 'Pakistan' },
];

export default function ClientLogoLoop() {
  return (
    <LogoLoop
      logos={clientLogos}
      speed={80}
      direction="left"
      logoHeight={40}
      gap={64}
      hoverSpeed={0}
      fadeOut
      fadeOutColor="#F5F4F0"
      ariaLabel="Trusted by these businesses"
    />
  );
}
