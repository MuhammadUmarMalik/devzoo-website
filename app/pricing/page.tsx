import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

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
    includes:
      "5-page website OR brand identity OR 4 edited videos OR 1-month social media management",
  },
  {
    name: "Growth",
    price: "Starting from $800",
    bestFor: "Growing businesses ready to invest in a complete digital presence",
    includes:
      "Website + Brand Identity + 1-month Digital Marketing OR Website + Video Package + SEO Setup",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom Quote",
    bestFor:
      "Established businesses and companies needing comprehensive ongoing digital support",
    includes:
      "Full digital presence management - website, marketing, design, video, SEO, paid ads, and monthly reporting",
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

export default function PricingPage() {
  return (
    <>
      <section className="bg-surface-dark px-6 py-24 md:py-32">
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
      </section>

      <section className="bg-surface-light px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {tiers.map((tier) => (
              <article
                key={tier.name}
                className={`rounded-card p-8 ${
                  tier.highlighted
                    ? "border-2 border-brand bg-surface-dark"
                    : "border border-surface-dark/10 bg-surface-warm"
                }`}
              >
                {tier.highlighted ? (
                  <p className="mb-4 text-xs uppercase tracking-[0.12em] text-brand">
                    Most Popular
                  </p>
                ) : null}
                <h2
                  className={`font-heading text-3xl font-bold ${
                    tier.highlighted ? "text-white" : "text-surface-dark"
                  }`}
                >
                  {tier.name}
                </h2>
                <p
                  className={`mt-3 font-heading text-3xl font-extrabold ${
                    tier.highlighted ? "text-white" : "text-surface-dark"
                  }`}
                >
                  {tier.price}
                </p>
                <p
                  className={`mt-5 text-sm leading-relaxed ${
                    tier.highlighted ? "text-white/65" : "text-surface-dark/68"
                  }`}
                >
                  <span className="font-semibold">Best For:</span> {tier.bestFor}
                </p>
                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    tier.highlighted ? "text-white/65" : "text-surface-dark/68"
                  }`}
                >
                  <span className="font-semibold">Includes:</span> {tier.includes}
                </p>
                <div className="mt-8">
                  <Button
                    href="/contact"
                    variant={tier.highlighted ? "primary" : "secondary"}
                    className={
                      tier.highlighted
                        ? ""
                        : "border-surface-dark/20 text-surface-dark hover:border-brand hover:text-brand"
                    }
                  >
                    {tier.name === "Enterprise"
                      ? "Contact Us for a Custom Quote"
                      : "Book a Free Call"}
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-dark px-6 py-24 md:py-28">
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
          <p className="mt-8 text-sm text-white/72">
            Start Referring Today - Email us at{" "}
            <a
              href="mailto:info@thedevzoo.com"
              className="text-brand transition-colors duration-200 hover:text-brand-hover"
            >
              info@thedevzoo.com
            </a>
          </p>
        </div>
      </section>

      <section className="bg-surface-warm px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="mt-2 font-heading text-[30px] font-bold leading-[1.15] text-surface-dark md:text-[44px]">
              Common questions, clear answers.
            </h2>
          </div>
          <div className="mt-16 space-y-5">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-card bg-white p-6">
                <h3 className="font-heading text-xl font-bold text-surface-dark">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-surface-dark/68">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
