import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Clear, fixed pricing for websites, marketing, and design. Starter from $300, Growth from $800, Enterprise custom.",
};

const tiers = [
  {
    name: "Starter",
    price: "$300",
    priceNote: "starting from",
    description:
      "For founders and creators who need a clean, professional online presence fast.",
    features: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "Contact form",
      "Basic SEO setup",
      "2 rounds of revisions",
      "Delivered in 7–10 days",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$800",
    priceNote: "starting from",
    description:
      "For businesses ready to invest in a site that actively generates leads and sales.",
    features: [
      "Up to 10 pages",
      "Custom design & animations",
      "Blog or portfolio setup",
      "On-page SEO",
      "Google Analytics setup",
      "3 rounds of revisions",
      "Delivered in 14–21 days",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceNote: "tailored to your project",
    description:
      "For larger builds — web apps, e-commerce, multi-language sites, or ongoing retainers.",
    features: [
      "Unlimited pages",
      "Custom functionality",
      "CMS integration",
      "Performance optimization",
      "Ongoing support available",
      "Dedicated project manager",
      "Timeline by scope",
    ],
    cta: "Let's Talk",
    highlighted: false,
  },
];

const faqs = [
  {
    q: "Do you charge extra for revisions?",
    a: "Each package includes a set number of revision rounds. Additional rounds are billed at a flat rate agreed upfront — never a surprise.",
  },
  {
    q: "What do I need to provide to get started?",
    a: "Brand assets (logo, colors), copy if you have it, and examples of sites you like. We guide you through everything else on the discovery call.",
  },
  {
    q: "How does payment work?",
    a: "50% deposit to start, 50% on delivery. We accept bank transfer, Payoneer, and Wise for international clients.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes. We offer monthly maintenance packages starting at $100/month covering updates, backups, and minor changes.",
  },
  {
    q: "Can I upgrade my package later?",
    a: "Absolutely. Many clients start on Starter and move to Growth once they see results.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface-dark py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Pricing</SectionLabel>
          <h1 className="font-heading font-extrabold text-[40px] md:text-[64px] leading-[1.05] text-white mt-2">
            Honest prices. No hidden fees.
          </h1>
          <p className="mt-6 text-base md:text-lg font-body text-white/60 leading-relaxed">
            Every project starts with a free discovery call. You get a fixed
            quote before anything begins.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="bg-surface-light py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-card p-8 flex flex-col ${
                  tier.highlighted
                    ? "bg-surface-dark border-2 border-brand"
                    : "bg-surface-warm border border-surface-dark/10"
                }`}
              >
                {tier.highlighted && (
                  <span className="inline-block text-xs font-heading font-semibold uppercase tracking-widest text-brand mb-4">
                    Most Popular
                  </span>
                )}
                <h2
                  className={`font-heading font-bold text-2xl mb-1 ${
                    tier.highlighted ? "text-white" : "text-surface-dark"
                  }`}
                >
                  {tier.name}
                </h2>
                <div className="mb-2">
                  <span
                    className={`font-heading font-extrabold text-4xl ${
                      tier.highlighted ? "text-white" : "text-surface-dark"
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`text-sm font-body ml-2 ${
                      tier.highlighted ? "text-white/50" : "text-surface-dark/50"
                    }`}
                  >
                    {tier.priceNote}
                  </span>
                </div>
                <p
                  className={`text-sm font-body leading-relaxed mb-6 ${
                    tier.highlighted ? "text-white/60" : "text-surface-dark/60"
                  }`}
                >
                  {tier.description}
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="text-brand mt-0.5 shrink-0">✓</span>
                      <span
                        className={`text-sm font-body ${
                          tier.highlighted ? "text-white/80" : "text-surface-dark/70"
                        }`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  variant={tier.highlighted ? "primary" : "secondary"}
                  className={
                    !tier.highlighted
                      ? "border-surface-dark/20 text-surface-dark hover:border-brand hover:text-brand"
                      : ""
                  }
                >
                  {tier.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface-warm py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="font-heading font-bold text-[30px] md:text-[44px] leading-[1.15] text-surface-dark mt-2">
              Common questions
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-surface-light rounded-card p-6"
              >
                <h3 className="font-heading font-bold text-lg text-surface-dark mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm font-body text-surface-dark/60 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-dark py-24 md:py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-bold text-[30px] md:text-[44px] leading-[1.15] text-white">
            Not sure which plan fits?
          </h2>
          <p className="mt-4 text-base font-body text-white/60 leading-relaxed">
            Book a free call. We&apos;ll scope your project honestly and
            recommend the right package — or tell you if you don&apos;t need us
            yet.
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
