import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";
import { CALENDLY_URL, isExternalHref } from "@/libs/site-links";

interface PageCTAProps {
  badge?: string;
  heading: string;
  subtext: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function PageCTA({
  badge = "Ready to Grow Online?",
  heading,
  subtext,
  primaryLabel = "Book a Free Call",
  primaryHref = CALENDLY_URL,
  secondaryLabel,
  secondaryHref,
}: PageCTAProps) {
  return (
    <section className="bg-surface-warm px-4 py-14 sm:px-6 sm:py-20 md:py-32">
      <AnimateIn className="mx-auto max-w-5xl">
        <div className="final-cta-shell relative overflow-hidden rounded-2xl border border-white/8 bg-surface-dark px-5 py-10 text-center shadow-[0_35px_90px_-52px_rgba(7,9,12,0.82)] sm:rounded-[28px] sm:px-10 sm:py-14 md:rounded-4xl md:px-14 md:py-20">
          <div className="final-cta-texture" aria-hidden="true" />
          <div className="final-cta-glow" aria-hidden="true" />

          {/* Top shimmer line */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent 0%, rgba(232,71,10,0.7) 35%, rgba(255,255,255,0.5) 50%, rgba(232,71,10,0.7) 65%, transparent 100%)" }}
            aria-hidden="true"
          />

          {/* Top-left corner bracket */}
          <div className="pointer-events-none absolute left-4 top-4 sm:left-6 sm:top-6" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M28 1H3a2 2 0 0 0-2 2v25" stroke="rgba(232,71,10,0.45)" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Bottom-right corner bracket */}
          <div className="pointer-events-none absolute bottom-4 right-4 sm:bottom-6 sm:right-6" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M0 27h25a2 2 0 0 0 2-2V0" stroke="rgba(232,71,10,0.45)" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Floating brand orb */}
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl sm:h-64 sm:w-64"
            style={{ background: "radial-gradient(circle, rgba(232,71,10,0.18) 0%, transparent 70%)" }}
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-[min(100%,44rem)] sm:max-w-2xl md:max-w-3xl">
            {/* Badge */}
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
              <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-brand" aria-hidden="true" />
              <span className="truncate text-[10px] font-medium uppercase tracking-[0.12em] text-white/72 sm:text-[11px]">
                {badge}
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-4 font-heading text-[20px] font-bold leading-[1.18] text-white sm:mt-6 sm:text-[30px] sm:leading-[1.1] md:text-[48px] md:leading-[1.04]">
              {heading}
            </h2>

            {/* Subtext */}
            <p className="mx-auto mt-3 max-w-sm text-[13px] leading-[1.75] text-white/60 sm:mt-4 sm:max-w-none sm:text-[15px] sm:leading-relaxed md:text-lg">
              {subtext}
            </p>

            {/* Actions */}
            <div className="mt-7 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:justify-center sm:gap-4">
              {isExternalHref(primaryHref) ? (
                <a
                  href={primaryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full max-w-65 cursor-pointer items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgb(232_71_10/0.7)] transition-all duration-200 hover:bg-brand-hover hover:shadow-[0_20px_48px_-16px_rgb(232_71_10/0.85)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 sm:w-auto sm:max-w-none sm:min-w-45 sm:px-7 sm:py-3.5 sm:text-base"
                >
                  {primaryLabel}
                </a>
              ) : (
                <Link
                  href={primaryHref}
                  className="inline-flex w-full max-w-65 cursor-pointer items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgb(232_71_10/0.7)] transition-all duration-200 hover:bg-brand-hover hover:shadow-[0_20px_48px_-16px_rgb(232_71_10/0.85)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 sm:w-auto sm:max-w-none sm:min-w-45 sm:px-7 sm:py-3.5 sm:text-base"
                >
                  {primaryLabel}
                </Link>
              )}

              {secondaryLabel && secondaryHref && (
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white/75 transition-all duration-200 hover:gap-3 hover:text-white"
                >
                  {secondaryLabel}
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.28 4.22a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H4.75a.75.75 0 0 1 0-1.5h9.75l-3.22-3.22a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
