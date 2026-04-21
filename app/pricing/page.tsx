import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import HeroSection from "@/components/ui/HeroSection";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimateIn from "@/components/ui/AnimateIn";
import FaqAccordion from "@/components/ui/FaqAccordion";
import PageCTA from "@/components/ui/PageCTA";
import BrandTicker from "@/components/ui/BrandTicker";
import PricingStackingCards from "@/components/ui/PricingStackingCards";
import JsonLd from "@/components/seo/JsonLd";
import { CALENDLY_URL } from "@/libs/site-links";

export const metadata: Metadata = {
  title: {
    absolute: "Pricing | Flexible Digital Solutions for Every Budget | Devzoo",
  },
  description:
    "Devzoo offers flexible pricing for website development, digital marketing, graphic design, and video editing. Book a free call and get a custom quote for your project.",
  alternates: { canonical: "https://thedevzoo.com/pricing" },
  keywords: [
    "Devzoo pricing", "web development cost", "digital marketing pricing",
    "website price Pakistan", "affordable digital agency", "agency pricing plans",
  ],
  openGraph: {
    title: "Pricing | Devzoo",
    description:
      "Starter from $300. Growth from $800. Enterprise custom. No hidden fees — get a custom quote on your free call.",
    url: "https://thedevzoo.com/pricing",
  },
  twitter: {
    title: "Pricing | Devzoo",
    description: "Starter from $300. Growth from $800. Enterprise custom. No hidden fees — get a custom quote on your free call.",
  },
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
      "Yes. We build on platforms that are easy to manage. WordPress or Webflow. We also provide a short walkthrough video so you can update content confidently.",
  },
  {
    question: "Do you offer ongoing support after project delivery?",
    answer:
      "Yes. We offer monthly maintenance and support retainers. We'll discuss options at the end of your project.",
  },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://thedevzoo.com" },
          { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://thedevzoo.com/pricing" },
        ],
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Devzoo",
        "url": "https://thedevzoo.com/pricing",
        "priceRange": "$300 – Custom",
        "description": "Flexible pricing for website development, digital marketing, graphic design, and video editing. Starting from $300.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Devzoo Service Packages",
          "itemListElement": tiers.map((tier, i) => ({
            "@type": "Offer",
            "position": i + 1,
            "name": tier.name,
            "description": tier.bestFor,
            "price": tier.price,
            "priceCurrency": "USD",
          })),
        },
      }} />
      <HeroSection>
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel>Pricing</SectionLabel>
          <h1 className="mt-2 font-heading text-[40px] font-extrabold leading-[1.05] text-white md:text-[64px]">
            Fair Pricing. Zero Surprises.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/65 md:text-lg">
            We don&apos;t believe in one-size-fits-all pricing. Every business is
            different. Book a free 30-minute call and we&apos;ll give you a clear,
            honest quote. No pressure, no hidden fees.
          </p>
        </div>
      </HeroSection>

      {/* ── Pricing tiers ───────────────────────────────────────── */}
      <section className="bg-surface-light px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl">
          <PricingStackingCards tiers={tiers} />
        </div>
      </section>

      {/* ── Brand ticker ─────────────────────────────────────────── */}
      <BrandTicker />

      {/* ── Referral ─────────────────────────────────────────────── */}
      <section className="bg-surface-warm px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            {/* Outer card */}
            <div className="relative overflow-hidden rounded-section bg-surface-dark">
              {/* Ambient glow */}
              <div
                className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full opacity-20"
                style={{ background: "radial-gradient(circle, #E8470A 0%, transparent 70%)" }}
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full opacity-10"
                style={{ background: "radial-gradient(circle, #E8470A 0%, transparent 70%)" }}
                aria-hidden="true"
              />

              {/* Top shimmer line */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(232,71,10,0.5) 50%, transparent)" }}
                aria-hidden="true"
              />

              <div className="relative z-10 grid grid-cols-1 gap-0 md:grid-cols-2">

                {/* ── Left: headline + cta ── */}
                <div className="flex flex-col justify-center border-b border-white/8 px-8 py-14 md:border-b-0 md:border-r md:px-14 md:py-16">
                  <SectionLabel>Referral Program</SectionLabel>

                  {/* Big 10% anchor */}
                  <div className="mt-6 flex items-end gap-3">
                    <span
                      className="font-heading text-[72px] font-extrabold leading-none md:text-[88px] lg:text-[96px]"
                      style={{ color: "#E8470A" }}
                    >
                      10%
                    </span>
                    <span className="mb-3 font-heading text-xl font-bold text-white/50">
                      commission
                    </span>
                  </div>

                  <h2 className="mt-4 font-heading text-[26px] font-bold leading-[1.2] text-white md:text-[32px]">
                    Know someone who needs us?{" "}
                    <span className="text-brand">You get paid.</span>
                  </h2>

                  <p className="mt-4 text-sm leading-relaxed text-white/55">
                    Refer any friend or business to Devzoo. When they sign a project,
                    you earn 10% of the invoice. No cap, no expiry, no catch.
                  </p>

                  <a
                    href="mailto:info@thedevzoo.com"
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-btn bg-brand px-6 py-3 font-heading text-sm font-bold text-white transition-all duration-200 hover:bg-brand-hover hover:shadow-[0_0_24px_rgba(232,71,10,0.4)]"
                  >
                    Start Referring
                    <svg viewBox="0 0 16 16" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" />
                    </svg>
                  </a>

                  <p className="mt-4 text-xs text-white/35">
                    Email{" "}
                    <a href="mailto:info@thedevzoo.com" className="text-white/55 underline underline-offset-2 hover:text-brand">
                      info@thedevzoo.com
                    </a>{" "}
                    with your referral details
                  </p>
                </div>

                {/* ── Right: 3-step flow ── */}
                <div className="flex flex-col justify-center gap-0 px-8 py-14 md:px-14 md:py-16">
                  <p className="mb-8 font-heading text-xs font-bold uppercase tracking-[0.12em] text-white/35">
                    How it works
                  </p>

                  {[
                    {
                      step: "01",
                      title: "You refer someone",
                      desc: "Send us their name and email, or have them mention you when they reach out.",
                    },
                    {
                      step: "02",
                      title: "They sign a project",
                      desc: "Once your referral books any Devzoo service, we confirm the commission.",
                    },
                    {
                      step: "03",
                      title: "You get paid",
                      desc: "We send 10% of their invoice to you via Wise, Payoneer, or bank transfer.",
                    },
                  ].map((item, i, arr) => (
                    <div key={item.step} className="relative flex gap-5">
                      {/* Connector line */}
                      {i < arr.length - 1 && (
                        <div
                          className="absolute left-4.25 top-9 h-full w-px"
                          style={{ background: "linear-gradient(to bottom, rgba(232,71,10,0.3), transparent)" }}
                          aria-hidden="true"
                        />
                      )}

                      {/* Step badge */}
                      <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand/30 bg-brand/10 font-mono text-xs font-bold text-brand">
                        {item.step}
                      </div>

                      <div className="pb-8">
                        <p className="font-heading text-base font-bold text-white">
                          {item.title}
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-white/50">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Perks strip */}
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["No cap", "No expiry", "Any service", "Paid fast"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="bg-surface-dark px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">

            {/* ── Left: sticky label + cta ── */}
            <AnimateIn className="lg:sticky lg:top-28 lg:self-start">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="mt-4 font-heading text-[30px] font-bold leading-[1.15] text-white md:text-[40px]">
                Common questions,{" "}
                <span className="text-brand">clear answers.</span>
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-white/55">
                Can&apos;t find what you&apos;re looking for? Reach out and we&apos;ll
                reply within one business day.
              </p>

              {/* Decorative stat strip */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { value: "50%", label: "upfront only" },
                  { value: "24h", label: "reply guarantee" },
                  { value: "2×", label: "free revisions" },
                  { value: "0", label: "hidden fees" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-card border border-white/8 bg-surface-dark-2 px-4 py-3"
                  >
                    <p className="font-heading text-2xl font-extrabold text-brand">
                      {s.value}
                    </p>
                    <p className="mt-0.5 text-xs text-white/50">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button href="/contact" variant="primary">
                  Ask a Question
                </Button>
              </div>
            </AnimateIn>

            {/* ── Right: accordion ── */}
            <AnimateIn delay={100}>
              <FaqAccordion faqs={faqs} />
            </AnimateIn>
          </div>
        </div>
      </section>

      <PageCTA
        badge="Still Have Questions?"
        heading="Let's talk numbers. No pitch, no pressure."
        subtext="Book a free 30-minute call and we'll recommend the right plan for your goals, timeline, and budget."
        primaryLabel="Book a Free Call"
        primaryHref={CALENDLY_URL}
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
