import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Video Editing",
  description:
    "Reels, ads, YouTube videos, and explainers — edited fast, delivered brand-consistent.",
};

const formats = [
  { title: "Reels & Short-Form", description: "Vertical video optimized for Instagram, TikTok, and YouTube Shorts — hooks in the first three seconds." },
  { title: "YouTube Videos", description: "Long-form editing with intro, transitions, B-roll, captions, and thumbnail design." },
  { title: "Ad Creatives", description: "Punchy video ads for Meta and Google — built around your offer and your audience." },
  { title: "Explainer Videos", description: "Walk prospects through your product or service in under two minutes." },
];

export default function VideoEditingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface-dark py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Video Editing</SectionLabel>
          <h1 className="font-heading font-extrabold text-[40px] md:text-[64px] leading-[1.05] text-white mt-2">
            Video that stops the scroll
          </h1>
          <p className="mt-6 text-base md:text-lg font-body text-white/60 leading-relaxed">
            Fast turnaround, brand-consistent editing for businesses that need
            content without the production headache.
          </p>
          <div className="mt-10">
            <Button href="/contact" size="lg">Get a Video Quote</Button>
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="bg-surface-light py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>Formats We Edit</SectionLabel>
            <h2 className="font-heading font-bold text-[30px] md:text-[44px] leading-[1.15] text-surface-dark mt-2">
              Whatever platform. Whatever length.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formats.map((f) => (
              <div key={f.title} className="bg-surface-warm rounded-card p-8">
                <h3 className="font-heading font-bold text-xl text-surface-dark mb-3">
                  {f.title}
                </h3>
                <p className="text-sm font-body text-surface-dark/60 leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you send us */}
      <section className="bg-surface-dark py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="font-heading font-bold text-[30px] md:text-[44px] leading-[1.15] text-white mt-2 mb-8">
            Send raw footage. Get polished video.
          </h2>
          <div className="space-y-4">
            {["Send us your raw clips, voiceover, or script", "We edit, add music, captions, and B-roll", "You review and request one round of changes", "Final file delivered within 48–72 hours"].map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="font-heading font-extrabold text-brand text-lg w-6 shrink-0">
                  {i + 1}
                </span>
                <p className="text-base font-body text-white/70 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-warm py-24 md:py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-bold text-[30px] md:text-[44px] leading-[1.15] text-surface-dark">
            Ready to start posting?
          </h2>
          <p className="mt-4 text-base font-body text-surface-dark/60 leading-relaxed">
            Tell us your platform, format, and volume — we&apos;ll quote you a
            per-video or monthly rate.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">Get a Quote</Button>
          </div>
        </div>
      </section>
    </>
  );
}
