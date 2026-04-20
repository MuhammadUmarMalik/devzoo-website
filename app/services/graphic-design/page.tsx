import type { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimateIn from "@/components/ui/AnimateIn";
import PageCTA from "@/components/ui/PageCTA";
import BrandTicker from "@/components/ui/BrandTicker";
import JsonLd from "@/components/seo/JsonLd";
import { CALENDLY_URL } from "@/libs/site-links";

export const metadata: Metadata = {
  title: {
    absolute: "Graphic Design Services | Logo, Brand Identity & Visual Design | Devzoo",
  },
  description:
    "Devzoo creates logos, brand identities, social media graphics, and marketing materials for startups and small businesses. Visuals that make your brand impossible to ignore.",
  alternates: { canonical: "https://www.thedevzoo.com/services/graphic-design" },
  openGraph: {
    title: "Graphic Design Services | Devzoo",
    description: "Logos, brand identities, and visuals that make your business impossible to ignore.",
    url: "https://www.thedevzoo.com/services/graphic-design",
  },
};

const included = [
  "Logo Design",
  "Full Brand Identity (colors, fonts, guidelines)",
  "Social Media Graphic Templates",
  "Marketing Materials (flyers, brochures, presentations)",
  "Packaging Design",
];

export default function GraphicDesignPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Graphic Design",
        "provider": { "@id": "https://www.thedevzoo.com/#organization" },
        "url": "https://www.thedevzoo.com/services/graphic-design",
        "description": "Logo design, full brand identity, social media graphic templates, marketing materials, and packaging design for startups and small businesses.",
        "serviceType": "Graphic Design",
        "areaServed": ["US", "GB", "AE", "PK"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Graphic Design Services",
          "itemListElement": included.map((item, i) => ({
            "@type": "Offer",
            "position": i + 1,
            "itemOffered": { "@type": "Service", "name": item },
          })),
        },
      }} />
      <HeroSection>
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel>Graphic Design</SectionLabel>
          <h1 className="mt-2 font-heading text-[40px] font-extrabold leading-[1.05] text-white md:text-[64px]">
            Make Your Brand Impossible to Ignore.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/65 md:text-lg">
            Inconsistent visuals damage trust. A poorly designed logo tells
            clients you don&apos;t take your business seriously. At Devzoo, we
            create visual identities that make people stop, look, and remember.
            From your logo to your social media graphics to your marketing
            materials, everything designed with purpose.
          </p>
        </div>
      </HeroSection>

      <section className="bg-surface-light px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <AnimateIn className="max-w-xl">
              <SectionLabel>What&apos;s Included</SectionLabel>
              <h2 className="mt-3 font-heading text-[28px] font-bold leading-[1.1] text-surface-dark sm:text-[34px] md:text-[44px]">
                Design systems that make<br className="hidden sm:block" /> your business look serious.
              </h2>
            </AnimateIn>
            <AnimateIn delay={80} className="max-w-xs shrink-0 md:pb-1">
              <p className="text-sm leading-relaxed text-surface-dark/50 md:text-base">
                Every deliverable is built to work across digital, print, and social — not just look good in a PDF.
              </p>
            </AnimateIn>
          </div>
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

      <BrandTicker />
      <PageCTA
        badge="Ready to Brand?"
        heading="Brand Your Business."
        subtext="Book a free call and we'll shape the visual identity your business should have had from day one."
        primaryLabel="Book a Free Call"
        primaryHref={CALENDLY_URL}
        secondaryLabel="See All Services"
        secondaryHref="/services"
      />
    </>
  );
}
