import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import HeroSection from "@/components/ui/HeroSection";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimateIn from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: {
    absolute: "Pricing - Flexible Digital Solutions for Every Budget | Devzoo",
  },
  description:
    "Devzoo offers flexible pricing for website development, digital marketing, graphic design, and video editing. Book a free call and get a custom quote for your project.",
};

const tiers = [
  {
    name: "Starter",
    price: "Starting from $300",
    bestFor: "New businesses, solopreneurs, and creators just starting out",
    includes: [
      "5-page website",
      "OR brand identity package",
      "OR 4 edited videos",
      "OR 1-month social media management",
    ],
  },
  {
    name: "Growth",
    price: "Starting from $800",
    bestFor: "Growing businesses ready to invest in a complete digital presence",
    includes: [
      "Website + Brand Identity",
      "1-month Digital Marketing",
      "OR Website + Video Package",
      "SEO setup included",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom Quote",
    bestFor: "Established businesses needing comprehensive ongoing digital support",
    includes: [
      "Full digital presence management",
      "Website, marketing & design",
      "Video, SEO & paid ads",
      "Monthly performance reporting",
    ],
  },
];

const faqs = [
  {
    question: "Do you require full payment upfront?",
    answer:
      "No. We require 50% at the start and the remaining 50% upon delivery. For larger projects, we can arrange milestone-based payments.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A standard 5-page website takes 14 days. Brand identity packages take 7-10 days. Digital marketing and video editing are ongoing monthly services. Timelines are confirmed before work begins.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. We work with clients in the USA, UK, UAE, and across Pakistan. We accept international payments via Payoneer and Wise.",
  },
  {
    question: "What if I need revisions?",
    answer:
      "Every project includes 2 rounds of revisions. Additional revisions beyond that are available at a small fee, agreed upon upfront.",
  },
  {
    question: "Will I be able to update my website myself after delivery?",
    answer:
      "Yes. We build on platforms that are easy to manage - WordPress or Webflow. We also provide a short walkthrough video so you can update content confidently.",
  },
  {
    question: "Do you offer ongoing support after project delivery?",
    answer:
      "Yes. We offer monthly maintenance and support retainers. We'll discuss options at the end of your project.",
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" />
    </svg>
  );
}

export default function PricingPage() {
  return (
    <>
      <HeroSection>
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel>Pricing</SectionLabel>
          <h1 className="mt-2 font-heading text-[40px] font-extrabold leading-[1.05] text-white md:text-[64px]">
            Fair Pricing. Zero Surprises.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/65 md:text-lg">
            We don&apos;t believe in one-size-fits-all pricing. Every business is
            different. Book a free 30-minute call and we&apos;ll give you a clear,
            honest quote - no pressure, no hidden fees.
          </p>
        </div>
      </HeroSection>

      {/* ── Pricing tiers ───────────────────────────────────────── */}
      <section className="bg-surface-light px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {tiers.map((tier, i) => (
              <AnimateIn key={tier.name} delay={i * 100} variant="scale-up">
                <article
                  className={`relative h-full overflow-hidden rounded-card p-8 transition-all duration-300 ${
                    tier.highlighted
                      ? "border-2 border-brand bg-surface-dark shadow-[0_16px_48px_-16px_rgb(232_71_10_/_0.35)]"
                      : "border border-surface-dark/10 bg-surface-warm hover:border-brand/25 hover:shadow-[0_8px_32px_-12px_rgba(232,71,10,0.1)]"
                  }`}
                >
                  {tier.highlighted && (
                    <>
                      {/* Glow layer */}
                      <div
                        className="pointer-events-none absolute inset-0 opacity-40"
                        style={{ background: "radial-gradient(circle at top right, rgba(232,71,10,0.22), transparent 55%)" }}
                        aria-hidden="true"
                      />
                      {/* Top shimmer */}
                      <div
                        className="pointer-events-none absolute inset-x-0 top-0 h-px"
                        style={{ background: "linear-gradient(90deg, transparent, rgba(232,71,10,0.7) 50%, transparent)" }}
                        aria-hidden="true"
                      />
                    </>
                  )}

                  <div className="relative z-10">
                    {tier.highlighted && (
                      <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
                        Most Popular
                      </span>
                    )}

                    <h2
                      className={`font-heading text-3xl font-bold ${
                        tier.highlighted ? "text-white" : "text-surface-dark"
                      }`}
                    >
                      {tier.name}
                    </h2>

                    <p
                      className={`mt-3 font-heading text-2xl font-extrabold ${
                        tier.highlighted ? "text-white" : "text-surface-dark"
                      }`}
                    >
                      {tier.price}
                    </p>

                    <p
                      className={`mt-4 text-sm leading-relaxed ${
                        tier.highlighted ? "text-white/60" : "text-surface-dark/62"
                      }`}
                    >
                      <span className="font-semibold">Best for:</span> {tier.bestFor}
                    </p>

                    {/* Feature list */}
                    <ul className="mt-6 space-y-2.5">
                      {tier.includes.map((item) => (
                        <li
                          key={item}
                          className={`flex items-start gap-2.5 text-sm ${
                            tier.highlighted ? "text-white/72" : "text-surface-dark/70"
                          }`}
                        >
                          <span
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                              tier.highlighted
                                ? "border border-brand/30 bg-brand/15 text-brand"
                                : "border border-brand/20 bg-brand/8 text-brand"
                            }`}
                          >
                            <CheckIcon />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8">
                      <Button
                        href="/contact"
                        variant={tier.highlighted ? "primary" : "secondary"}
                        className={
                          tier.highlighted
                            ? "w-full justify-center"
                            : "w-full justify-center border-surface-dark/20 text-surface-dark hover:border-brand hover:text-brand"
                        }
                      >
                        {tier.name === "Enterprise"
                          ? "Get a Custom Quote"
                          : "Book a Free Call"}
                      </Button>
                    </div>
                  </div>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Referral ─────────────────────────────────────────────── */}
      <section className="grain-overlay bg-surface-dark px-6 py-24 md:py-28">
        <AnimateIn>
          <div className="mx-auto max-w-4xl rounded-section border border-brand/20 bg-surface-dark-2 p-10 text-center">
            <SectionLabel>Referral Program</SectionLabel>
            <h2 className="mt-2 font-heading text-[30px] font-bold leading-[1.15] text-white md:text-[44px]">
              Know Someone Who Needs Us? Earn 10%.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/62">
              Refer a friend or colleague to Devzoo and earn 10% commission when
              they sign up for any service. No cap. No expiry. It&apos;s our way of
              saying thank you for spreading the word.
            </p>
            <p className="mt-8 text-sm text-white/60">
              Start Referring Today — Email us at{" "}
              <a
                href="mailto:info@thedevzoo.com"
                className="text-brand transition-colors duration-200 hover:text-brand-hover"
              >
                info@thedevzoo.com
              </a>
            </p>
          </div>
        </AnimateIn>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="bg-surface-warm px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl">
          <AnimateIn className="mx-auto max-w-3xl text-center">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="mt-2 font-heading text-[30px] font-bold leading-[1.15] text-surface-dark md:text-[44px]">
              Common questions, clear answers.
            </h2>
          </AnimateIn>
          <div className="mt-14 space-y-3">
            {faqs.map((faq, i) => (
              <AnimateIn key={faq.question} delay={i * 60}>
                <article className="group relative overflow-hidden rounded-card border border-surface-dark/8 bg-white px-7 py-6 transition-all duration-200 hover:border-brand/20 hover:shadow-sm">
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full bg-brand/0 transition-colors duration-200 group-hover:bg-brand/60" aria-hidden="true" />
                  <h3 className="font-heading text-lg font-bold text-surface-dark">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-surface-dark/65">
                    {faq.answer}
                  </p>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
