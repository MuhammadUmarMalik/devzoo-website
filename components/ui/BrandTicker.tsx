"use client";

import { useRef } from "react";

const phrases = [
  "No Templates",
  "Always Original",
  "Built to Last",
  "Zero Jargon",
  "Client-First",
  "On Time. Every Time",
  "No Shortcuts",
  "Sharp Work",
  "Clean Code",
  "Real Results",
  "Fast Delivery",
  "Honest Pricing",
];

const Dot = () => (
  <span className="mx-4 h-1 w-1 shrink-0 rounded-full bg-brand/50 sm:mx-6" aria-hidden="true" />
);

export default function BrandTicker({ inverted = false }: { inverted?: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const textClass = inverted
    ? "text-white/30 hover:text-white/60"
    : "text-surface-dark/35 hover:text-surface-dark/70";

  const borderClass = inverted
    ? "border-white/6"
    : "border-surface-dark/8";

  return (
    <div
      className={`overflow-hidden border-y ${borderClass} py-4`}
      aria-label="Brand values"
    >
      <div
        ref={trackRef}
        className="brand-ticker-track flex w-max items-center"
        style={{ animation: "brand-ticker 28s linear infinite" }}
      >
        {[0, 1].map((group) => (
          <div key={group} className="flex items-center" aria-hidden={group === 1}>
            {phrases.map((phrase, i) => (
              <span key={`${group}-${i}`} className="flex items-center">
                <span
                  className={`cursor-default select-none font-heading text-[11px] font-bold uppercase tracking-[0.18em] transition-colors duration-200 sm:text-xs ${textClass}`}
                >
                  {phrase}
                </span>
                <Dot />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
