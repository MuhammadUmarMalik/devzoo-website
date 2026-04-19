import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";

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
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: PageCTAProps) {
  return (
    <section className="bg-surface-warm px-6 py-24 md:py-32">
      <AnimateIn className="mx-auto max-w-7xl">
        <div className="final-cta-shell relative overflow-hidden rounded-[32px] border border-white/8 bg-surface-dark px-6 py-16 text-center shadow-[0_35px_90px_-52px_rgba(7,9,12,0.82)] md:px-10 md:py-20">
          <div className="final-cta-texture" aria-hidden="true" />
          <div className="final-cta-glow" aria-hidden="true" />

          <div className="relative z-10 mx-auto max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand" aria-hidden="true" />
              <span className="text-xs font-medium uppercase tracking-[0.14em] text-white/72">
                {badge}
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-6 font-heading text-[34px] font-bold leading-[1.06] text-white md:text-[56px]">
              {heading}
            </h2>

            {/* Subtext */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
              {subtext}
            </p>

            {/* Actions */}
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={primaryHref}
                className="inline-flex min-w-52 cursor-pointer items-center justify-center rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_-18px_rgb(232_71_10/0.7)] transition-all duration-200 hover:bg-brand-hover hover:shadow-[0_20px_48px_-16px_rgb(232_71_10/0.85)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2"
              >
                {primaryLabel}
              </Link>

              {secondaryLabel && secondaryHref && (
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/75 transition-all duration-200 hover:gap-3 hover:text-white"
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
