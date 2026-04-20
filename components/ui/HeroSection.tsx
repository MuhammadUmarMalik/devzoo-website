import type { ReactNode } from "react";

type HeroSectionProps = {
  children: ReactNode;
  className?: string;
};

export default function HeroSection({ children, className = "" }: HeroSectionProps) {
  return (
    <section
      className={`hero-section relative flex min-h-svh items-center bg-surface-dark px-6 py-24 md:py-32 ${className}`.trim()}
    >
      <div className="hero-section__veil" aria-hidden="true">
        <div className="hero-section__base" />
        <div className="hero-section__glow" />
        <div className="hero-section__tint" />
      </div>
      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
}
