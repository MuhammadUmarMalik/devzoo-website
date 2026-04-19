import type { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimateIn from "@/components/ui/AnimateIn";
import PageCTA from "@/components/ui/PageCTA";

export const metadata: Metadata = {
  title: {
    absolute: "Digital Marketing Services | SEO, Social Media & PPC | Devzoo",
  },
  description:
    "Devzoo's digital marketing services include SEO, social media management, PPC advertising, and content strategy for startups and small businesses. Real leads. Real growth.",
};

const included = [
  "SEO (on-page + technical + local)",
  "Social Media Management",
  "PPC Advertising (Google + Meta)",
  "Content Strategy",
  "Monthly Performance Reports",
  "Competitor Analysis",
];

export default function DigitalMarketingPage() {
  return (
    <>
      <HeroSection>
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel>Digital Marketing</SectionLabel>
          <h1 className="mt-2 font-heading text-[40px] font-extrabold leading-[1.05] text-white md:text-[64px]">
            Stop Being Invisible Online.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/65 md:text-lg">
            In a crowded digital world, the businesses that win are the ones
            that show up, consistently, strategically, and in the right
            places. We build marketing strategies that cut through the noise,
            connect with your audience, and turn clicks into real customers. No
            guesswork. No vanity metrics. Just growth.
          </p>
        </div>
      </HeroSection>

      <section className="bg-surface-light px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <AnimateIn className="mx-auto max-w-3xl text-center">
            <SectionLabel>What&apos;s Included</SectionLabel>
            <h2 className="mt-2 font-heading text-[30px] font-bold leading-[1.15] text-surface-dark md:text-[44px]">
              Strategy, execution, and reporting that all connect.
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
        </div>
      </section>

      <PageCTA
        badge="Ready to Grow?"
        heading="Grow Your Business Online."
        subtext="Book a free call and we'll show you where better visibility can turn into better leads."
        primaryLabel="Book a Free Call"
        primaryHref="/contact"
        secondaryLabel="See All Services"
        secondaryHref="/services"
      />
    </>
  );
}
