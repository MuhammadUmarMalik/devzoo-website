import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import HeroSection from "@/components/ui/HeroSection";
import SectionLabel from "@/components/ui/SectionLabel";

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
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>What&apos;s Included</SectionLabel>
            <h2 className="mt-2 font-heading text-[30px] font-bold leading-[1.15] text-surface-dark md:text-[44px]">
              Content built to be watched, shared, and remembered.
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {included.map((item) => (
              <div key={item} className="rounded-card bg-surface-warm p-6">
                <p className="text-sm leading-relaxed text-surface-dark/75">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-dark px-6 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-[30px] font-bold leading-[1.15] text-white md:text-[44px]">
            Get Your Videos Edited.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            Book a free call and we&apos;ll turn raw clips into content your
            audience actually wants to watch.
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
