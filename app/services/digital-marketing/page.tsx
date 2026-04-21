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
    absolute: "Digital Marketing Services | SEO, Social Media & PPC | Devzoo",
  },
  description:
    "Devzoo's digital marketing services include SEO, social media management, PPC advertising, and content strategy for startups and small businesses. Real leads. Real growth.",
  alternates: { canonical: "https://thedevzoo.com/services/digital-marketing" },
  keywords: [
    "digital marketing agency", "SEO services", "social media management",
    "PPC advertising", "Google Ads agency", "content marketing", "local SEO",
  ],
  openGraph: {
    title: "Digital Marketing Services | Devzoo",
    description: "SEO, social media, and PPC that turn strangers into loyal customers. No vanity metrics — just growth.",
    url: "https://thedevzoo.com/services/digital-marketing",
  },
  twitter: {
    title: "Digital Marketing Services | Devzoo",
    description: "SEO, social media, and PPC that turn strangers into loyal customers. No vanity metrics — just growth.",
  },
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
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://thedevzoo.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://thedevzoo.com/services" },
          { "@type": "ListItem", "position": 3, "name": "Digital Marketing", "item": "https://thedevzoo.com/services/digital-marketing" },
        ],
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Digital Marketing",
        "provider": { "@id": "https://thedevzoo.com/#organization" },
        "url": "https://thedevzoo.com/services/digital-marketing",
        "description": "Full-stack digital marketing: SEO (on-page, technical, local), social media management, PPC advertising on Google and Meta, content strategy, and monthly reporting.",
        "serviceType": "Digital Marketing",
        "areaServed": ["US", "GB", "AE", "PK"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Digital Marketing Services",
          "itemListElement": included.map((item, i) => ({
            "@type": "Offer",
            "position": i + 1,
            "itemOffered": { "@type": "Service", "name": item },
          })),
        },
      }} />
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
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <AnimateIn className="max-w-xl">
              <SectionLabel>What&apos;s Included</SectionLabel>
              <h2 className="mt-3 font-heading text-[28px] font-bold leading-[1.1] text-surface-dark sm:text-[34px] md:text-[44px]">
                Strategy, execution,<br className="hidden sm:block" /> and reporting that connect.
              </h2>
            </AnimateIn>
            <AnimateIn delay={80} className="max-w-xs shrink-0 md:pb-1">
              <p className="text-sm leading-relaxed text-surface-dark/50 md:text-base">
                Everything runs together — no siloed tactics, no wasted budget.
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
        badge="Ready to Grow?"
        heading="Grow Your Business Online."
        subtext="Book a free call and we'll show you where better visibility can turn into better leads."
        primaryLabel="Book a Free Call"
        primaryHref={CALENDLY_URL}
        secondaryLabel="See All Services"
        secondaryHref="/services"
      />
    </>
  );
}
