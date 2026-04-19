import type { ReactNode } from "react";
import DarkVeil from "@/components/ui/DarkVeil";

type HeroSectionProps = {
  children: ReactNode;
  className?: string;
};

export default function HeroSection({ children, className = "" }: HeroSectionProps) {
  return (
    <section className={`hero-section bg-surface-dark px-6 py-24 md:py-32 ${className}`.trim()}>
      <div className="hero-section__veil" aria-hidden="true">
        <div className="hero-section__base" />
        <div className="hero-section__glow" />
        <div className="hero-section__canvas">
          <DarkVeil
            hueShift={0}
            noiseIntensity={0.06}
            scanlineIntensity={0.07}
            speed={0.28}
            scanlineFrequency={1.5}
            warpAmount={0.18}
            resolutionScale={1}
          />
        </div>
        <div className="hero-section__tint" />
      </div>
      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
}
