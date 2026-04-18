import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Website Development",
  description:
    "Custom websites and web apps — fast, clean, and built to convert. Starting from $300.",
};

const included = [
  { title: "Custom design", description: "No templates. Built around your brand, your audience, and your goals." },
  { title: "Mobile-first", description: "Every page looks and works perfectly on phones, tablets, and desktops." },
  { title: "Performance optimized", description: "Fast load times from day one — good for users, good for SEO." },
  { title: "CMS setup", description: "Update content yourself without touching code. We train you to use it." },
  { title: "On-page SEO", description: "Proper headings, meta tags, image alt text, and structured data." },
  { title: "Full ownership", description: "You own the code, the domain, and the hosting. We hand over everything." },
];

const stack = ["Next.js", "React", "WordPress", "Webflow", "TypeScript", "Tailwind CSS"];

export default function WebDevelopmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface-dark py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Website Development</SectionLabel>
          <h1 className="font-heading font-extrabold text-[40px] md:text-[64px] leading-[1.05] text-white mt-2">
            A website that works as hard as you do
          </h1>
          <p className="mt-6 text-base md:text-lg font-body text-white/60 leading-relaxed">
            Fast, clean, and built to convert. We don&apos;t just build websites
            — we build tools for your business.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg">Get a Quote</Button>
            <Button href="/portfolio" variant="secondary" size="lg">See Examples</Button>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-surface-light py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>What&apos;s Included</SectionLabel>
            <h2 className="font-heading font-bold text-[30px] md:text-[44px] leading-[1.15] text-surface-dark mt-2">
              Everything to go live, properly
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((item) => (
              <div key={item.title} className="bg-surface-warm rounded-card p-6">
                <div className="w-6 h-6 rounded-chip bg-brand flex items-center justify-center mb-4">
                  <span className="text-white text-xs">✓</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-surface-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm font-body text-surface-dark/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="bg-surface-dark py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-heading font-semibold uppercase tracking-widest text-white/30 mb-6">
            Technologies We Use
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {stack.map((tech) => (
              <span
                key={tech}
                className="text-sm font-body text-white/60 bg-surface-dark-2 px-4 py-2 rounded-chip"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-surface-warm py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="font-heading font-bold text-[30px] md:text-[44px] leading-[1.15] text-surface-dark mt-2 mb-4">
            Starting from $300
          </h2>
          <p className="text-base font-body text-surface-dark/60 leading-relaxed mb-8">
            Every project gets a fixed quote after our discovery call. No
            hourly billing, no scope creep surprises.
          </p>
          <Button href="/pricing">View Full Pricing</Button>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-dark py-24 md:py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-bold text-[30px] md:text-[44px] leading-[1.15] text-white">
            Let&apos;s build it
          </h2>
          <p className="mt-4 text-base font-body text-white/60 leading-relaxed">
            Book a free 30-minute call. Walk away with a clear scope and a
            realistic quote.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">Book a Free Call</Button>
          </div>
        </div>
      </section>
    </>
  );
}
