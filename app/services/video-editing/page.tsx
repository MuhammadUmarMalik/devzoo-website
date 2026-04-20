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
    absolute: "Video Editing Services | Reels, Ads & YouTube Content | Devzoo",
  },
  description:
    "Devzoo edits reels, explainer videos, YouTube content, and ads for creators, coaches, and businesses. Content that gets watched, shared, and remembered.",
  alternates: { canonical: "https://www.thedevzoo.com/services/video-editing" },
  openGraph: {
    title: "Video Editing Services | Devzoo",
    description: "Reels, YouTube content, explainer videos, and ads. Raw footage turned into content that actually gets watched.",
    url: "https://www.thedevzoo.com/services/video-editing",
  },
};

const included = [
  "Instagram & TikTok Reels",
  "YouTube Long-Form Videos",
  "YouTube Shorts",
  "Explainer Videos",
  "Ad Creatives",
  "Captions & Subtitles",
  "Color Grading & Sound Design",
];

export default function VideoEditingPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Video Editing",
        "provider": { "@id": "https://www.thedevzoo.com/#organization" },
        "url": "https://www.thedevzoo.com/services/video-editing",
        "description": "Professional video editing for Instagram Reels, TikTok, YouTube long-form and Shorts, explainer videos, ad creatives, captions, colour grading, and sound design.",
        "serviceType": "Video Editing",
        "areaServed": ["US", "GB", "AE", "PK"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Video Editing Services",
          "itemListElement": included.map((item, i) => ({
            "@type": "Offer",
            "position": i + 1,
            "itemOffered": { "@type": "Service", "name": item },
          })),
        },
      }} />
      <HeroSection>
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel>Video Editing</SectionLabel>
          <h1 className="mt-2 font-heading text-[40px] font-extrabold leading-[1.05] text-white md:text-[64px]">
            Raw Footage Doesn&apos;t Grow Businesses. Great Video Does.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/65 md:text-lg">
            Most businesses have footage sitting on a hard drive going nowhere.
            Video is the highest-performing content format on every platform -
            but only when it&apos;s edited well. We turn your raw footage into
            polished, engaging content that actually gets watched and drives
            action.
          </p>
        </div>
      </HeroSection>

      <section className="bg-surface-light px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <AnimateIn className="max-w-xl">
              <SectionLabel>What&apos;s Included</SectionLabel>
              <h2 className="mt-3 font-heading text-[28px] font-bold leading-[1.1] text-surface-dark sm:text-[34px] md:text-[44px]">
                Content built to be watched,<br className="hidden sm:block" /> shared, and remembered.
              </h2>
            </AnimateIn>
            <AnimateIn delay={80} className="max-w-xs shrink-0 md:pb-1">
              <p className="text-sm leading-relaxed text-surface-dark/50 md:text-base">
                Every video we deliver is cut for attention — designed to work on Reels, YouTube, and ads.
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
        badge="Ready to Publish?"
        heading="Get Your Videos Edited."
        subtext="Book a free call and we'll turn raw clips into content your audience actually wants to watch."
        primaryLabel="Book a Free Call"
        primaryHref={CALENDLY_URL}
        secondaryLabel="See All Services"
        secondaryHref="/services"
      />
    </>
  );
}
