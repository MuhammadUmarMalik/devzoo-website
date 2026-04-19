import type { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimateIn from "@/components/ui/AnimateIn";
import PageCTA from "@/components/ui/PageCTA";

export const metadata: Metadata = {
  title: {
    absolute: "Video Editing Services - Reels, Ads & YouTube Content | Devzoo",
  },
  description:
    "Devzoo edits reels, explainer videos, YouTube content, and ads for creators, coaches, and businesses. Content that gets watched, shared, and remembered.",
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
          <AnimateIn className="mx-auto max-w-3xl text-center">
            <SectionLabel>What&apos;s Included</SectionLabel>
            <h2 className="mt-2 font-heading text-[30px] font-bold leading-[1.15] text-surface-dark md:text-[44px]">
              Content built to be watched, shared, and remembered.
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
        badge="Ready to Publish?"
        heading="Get Your Videos Edited."
        subtext="Book a free call and we'll turn raw clips into content your audience actually wants to watch."
        primaryLabel="Book a Free Call"
        primaryHref="/contact"
        secondaryLabel="See All Services"
        secondaryHref="/services"
      />
    </>
  );
}
