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

// Replace these src paths with your actual client logo files in /public/logos/
const clientLogos = [
  { src: '/logos/client-1.png', alt: 'Client 1' },
  { src: '/logos/client-2.png', alt: 'Client 2' },
  { src: '/logos/client-3.png', alt: 'Client 3' },
  { src: '/logos/client-4.png', alt: 'Client 4' },
  { src: '/logos/client-5.png', alt: 'Client 5' },
  { src: '/logos/client-6.png', alt: 'Client 6' },
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
