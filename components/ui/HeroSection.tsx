import type { ReactNode } from "react";
import DarkVeil from "@/components/ui/DarkVeil";

type HeroSectionProps = {
  children: ReactNode;
  className?: string;
};

export default function HeroSection({ children, className = "" }: HeroSectionProps) {
  return (
    <section
      className={`relative overflow-hidden bg-surface-dark px-6 py-24 md:py-32 ${className}`.trim()}
    >
      {/* WebGL canvas — CSS filter pushes CPPN output to brand orange #E8470A */}
      <div
        className="absolute inset-0 [filter:sepia(1)_saturate(4)_hue-rotate(-20deg)]"
        aria-hidden="true"
      >
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

      {/* Dark overlay keeps text legible while letting orange glow through */}
      <div className="absolute inset-0 bg-surface-dark/75" aria-hidden="true" />

      <div className="relative z-10">{children}</div>
    </section>
  );
}
