import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import HeroSection from "@/components/ui/HeroSection";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: {
    absolute:
      "Website Development Services - Fast, Clean & Built to Convert | Devzoo",
  },
  description:
    "Devzoo builds fast, clean, and conversion-focused websites for startups and small businesses. WordPress, Webflow, and custom development. 14-day turnaround.",
};

const included = [
  "Custom design (no templates)",
  "Mobile-first development",
  "Fast load speed optimization",
  "On-page SEO setup",
  "Contact forms & lead capture",
  "CMS integration (easy for you to update)",
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
            Websites That Work as Hard as You Do.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/65 md:text-lg">
            Slow load times and clunky navigation cost you clients every day.
            Your website is your most important sales tool - and it needs to
            perform. We build websites that load fast, look clean, and are
            designed to turn visitors into customers.
          </p>
        </div>
      </HeroSection>

      <section className="bg-surface-light px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionLabel>What&apos;s Included</SectionLabel>
            <h2 className="mt-2 font-heading text-[30px] font-bold leading-[1.15] text-surface-dark md:text-[44px]">
              Everything you need to launch properly.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {included.map((item) => (
                <div
                  key={item}
                  className="rounded-card border border-surface-dark/10 bg-surface-warm p-5 text-sm leading-relaxed text-surface-dark/75"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <aside className="rounded-section bg-surface-dark p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">
              Tech Stack
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/62">
              WordPress (Elementor / Bricks Builder) · Webflow · React / Next.js
              for complex apps
            </p>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.12em] text-brand">
              Turnaround
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/62">
              Standard 5-page website: 14 days
            </p>
          </aside>
        </div>
      </section>

      <section className="bg-surface-dark px-6 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-[30px] font-bold leading-[1.15] text-white md:text-[44px]">
            Get Your Website Built.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            Book a free call and we&apos;ll scope the right website for your
            business, timeline, and budget.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Book a Free Call
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
