"use client";

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

const SeparatorIcon = () => (
  <span
    className="mx-3 inline-flex h-5 w-5 shrink-0 items-center justify-center text-brand/80 sm:mx-5"
    aria-hidden="true"
  >
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <path
        d="M10 2.5v15M2.5 10h15M4.7 4.7l10.6 10.6M15.3 4.7 4.7 15.3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="10" cy="10" r="1.3" fill="currentColor" />
    </svg>
  </span>
);

export default function BrandTicker({ inverted = false }: { inverted?: boolean }) {
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
        className="brand-ticker-track flex w-max items-center"
        style={{ animation: "brand-ticker 28s linear infinite" }}
      >
        {[0, 1].map((group) => (
          <div key={group} className="flex items-center" aria-hidden={group === 1}>
            {phrases.map((phrase, i) => (
              <span key={`${group}-${i}`} className="flex items-center">
                <span
                  className={`cursor-default select-none font-heading text-[13px] font-bold uppercase tracking-[0.16em] transition-colors duration-200 sm:text-[15px] ${textClass}`}
                >
                  {phrase}
                </span>
                <SeparatorIcon />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
