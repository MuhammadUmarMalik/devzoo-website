import type { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimateIn from "@/components/ui/AnimateIn";
import PageCTA from "@/components/ui/PageCTA";

export const metadata: Metadata = {
  title: {
    absolute:
      "Website Development Services - Fast, Custom & Built to Convert | Devzoo",
  },
  description:
    "Devzoo builds fast, custom websites for startups and small businesses. No templates. Mobile-first. Optimised for speed, SEO, and conversions. Book a free call today.",
};

const included = [
  "Custom design (no templates)",
  "Mobile-first development",
  "Fast load speed optimization",
  "On-page SEO setup",
  "Contact forms & lead capture",
  "CMS integration (easy to update)",
  "2 rounds of revisions",
  "30-day post-launch support",
];

export default function WebDevelopmentPage() {
  return (
    <>
      <HeroSection>
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel>Website Development</SectionLabel>
          <h1 className="mt-2 font-heading text-[40px] font-extrabold leading-[1.05] text-white md:text-[64px]">
            Your Website Should Work as Hard as You Do.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/65 md:text-lg">
            Slow load times and clunky navigation cost you clients every day.
            We build websites that load fast, look clean, and are designed to
            turn visitors into customers — no templates, no shortcuts.
          </p>
        </div>
      </HeroSection>

      <section className="bg-surface-light px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <AnimateIn className="mx-auto max-w-3xl text-center">
            <SectionLabel>What&apos;s Included</SectionLabel>
            <h2 className="mt-2 font-heading text-[30px] font-bold leading-[1.15] text-surface-dark md:text-[44px]">
              Everything you need. Nothing you don&apos;t.
            </h2>
          </AnimateIn>
          <div className="mt-14 grid grid-cols-1 gap-3 md:grid-cols-2">
            {included.map((item, i) => (
              <AnimateIn key={item} delay={i * 50}>
                <div className="group flex items-start gap-3.5 rounded-card border border-surface-dark/8 bg-surface-warm px-5 py-4 transition-all duration-200 hover:border-brand/20 hover:bg-white">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-brand/25 bg-brand/10 text-brand">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" aria-hidden="true">
                      <path d="M3 8l3.5 3.5L13 5" />
                    </svg>
                  </span>
                  <p className="text-sm leading-relaxed text-surface-dark/75">{item}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={120}>
            <aside className="mt-8 rounded-section border border-surface-dark/8 bg-surface-warm px-7 py-5">
              <div className="flex flex-wrap gap-6 text-sm">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-surface-dark/40">Tech Stack: </span>
                  <span className="text-surface-dark/70">WordPress · Webflow · React / Next.js</span>
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-surface-dark/40">Turnaround: </span>
                  <span className="text-surface-dark/70">Standard 5-page website: 14 days</span>
                </div>
              </div>
            </aside>
          </AnimateIn>
        </div>
      </section>

      <PageCTA
        badge="Ready to Build?"
        heading="Get Your Website Built."
        subtext="Book a free call and we'll scope the right website for your business, timeline, and budget."
        primaryLabel="Book a Free Call"
        primaryHref="/contact"
        secondaryLabel="See Pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
