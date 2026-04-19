import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import HeroSection from "@/components/ui/HeroSection";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: {
    absolute: "Digital Marketing Services - SEO, Social Media & PPC | Devzoo",
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
            that show up - consistently, strategically, and in the right
            places. We build marketing strategies that cut through the noise,
            connect with your audience, and turn clicks into real customers. No
            guesswork. No vanity metrics. Just growth.
          </p>
        </div>
      </HeroSection>

      <section className="bg-surface-light px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>What&apos;s Included</SectionLabel>
            <h2 className="mt-2 font-heading text-[30px] font-bold leading-[1.15] text-surface-dark md:text-[44px]">
              Strategy, execution, and reporting that all connect.
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
            Grow Your Business Online.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            Book a free call and we&apos;ll show you where better visibility can
            turn into better leads.
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
