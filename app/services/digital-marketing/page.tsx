import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Digital Marketing",
  description:
    "SEO, paid ads, social media, and content marketing that brings the right people to your business.",
};

const channels = [
  {
    title: "Search Engine Optimization",
    description:
      "Keyword research, on-page fixes, technical SEO, and link building that move you up in Google.",
  },
  {
    title: "Google & Meta Ads",
    description:
      "Paid campaigns set up to hit your cost-per-lead target — not just spend your budget.",
  },
  {
    title: "Social Media Management",
    description:
      "Consistent, brand-right content on the platforms where your audience actually is.",
  },
  {
    title: "Content Marketing",
    description:
      "Blog posts, email sequences, and lead magnets that build trust and drive organic traffic.",
  },
];

export default function DigitalMarketingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface-dark py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Digital Marketing</SectionLabel>
          <h1 className="font-heading font-extrabold text-[40px] md:text-[64px] leading-[1.05] text-white mt-2">
            Get found by the people who want to buy from you
          </h1>
          <p className="mt-6 text-base md:text-lg font-body text-white/60 leading-relaxed">
            We run campaigns that make sense for your budget and your goals —
            no vanity metrics, no fluff reports.
          </p>
          <div className="mt-10">
            <Button href="/contact" size="lg">Get a Marketing Audit</Button>
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="bg-surface-light py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>What We Cover</SectionLabel>
            <h2 className="font-heading font-bold text-[30px] md:text-[44px] leading-[1.15] text-surface-dark mt-2">
              Four channels. All measurable.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {channels.map((c) => (
              <div key={c.title} className="bg-surface-warm rounded-card p-8">
                <h3 className="font-heading font-bold text-xl text-surface-dark mb-3">
                  {c.title}
                </h3>
                <p className="text-sm font-body text-surface-dark/60 leading-relaxed">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we report */}
      <section className="bg-surface-dark py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Reporting</SectionLabel>
          <h2 className="font-heading font-bold text-[30px] md:text-[44px] leading-[1.15] text-white mt-2 mb-6">
            You always know what&apos;s working
          </h2>
          <p className="text-base font-body text-white/60 leading-relaxed">
            Monthly reports in plain English — traffic, leads, cost-per-click,
            conversions. We show you the numbers that matter and what we&apos;re
            doing about the ones that don&apos;t.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-warm py-24 md:py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-bold text-[30px] md:text-[44px] leading-[1.15] text-surface-dark">
            Start with a free audit
          </h2>
          <p className="mt-4 text-base font-body text-surface-dark/60 leading-relaxed">
            We&apos;ll review your current digital presence and tell you exactly
            where the opportunities are — no pitch, just insight.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">Get a Free Audit</Button>
          </div>
        </div>
      </section>
    </>
  );
}
