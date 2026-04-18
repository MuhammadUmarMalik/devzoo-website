import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Graphic Design",
  description:
    "Brand identity, social graphics, and marketing materials that make your business look the part.",
};

const deliverables = [
  { title: "Logo & Brand Identity", description: "Primary logo, color palette, typography, and usage guidelines — everything you need to look consistent everywhere." },
  { title: "Social Media Graphics", description: "Post templates, story formats, and cover images sized right for each platform." },
  { title: "Marketing Materials", description: "Flyers, brochures, pitch decks, and banners built to your spec." },
  { title: "Brand Style Guide", description: "A clear reference doc so your whole team stays on-brand, every time." },
];

export default function GraphicDesignPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface-dark py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Graphic Design</SectionLabel>
          <h1 className="font-heading font-extrabold text-[40px] md:text-[64px] leading-[1.05] text-white mt-2">
            Look like a business people trust
          </h1>
          <p className="mt-6 text-base md:text-lg font-body text-white/60 leading-relaxed">
            Sharp, clean design that reflects what you actually are —
            professional, reliable, and worth hiring.
          </p>
          <div className="mt-10">
            <Button href="/contact" size="lg">Start a Design Project</Button>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-surface-light py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>What We Deliver</SectionLabel>
            <h2 className="font-heading font-bold text-[30px] md:text-[44px] leading-[1.15] text-surface-dark mt-2">
              Assets you&apos;ll actually use
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deliverables.map((d) => (
              <div key={d.title} className="bg-surface-warm rounded-card p-8">
                <h3 className="font-heading font-bold text-xl text-surface-dark mb-3">
                  {d.title}
                </h3>
                <p className="text-sm font-body text-surface-dark/60 leading-relaxed">
                  {d.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-surface-dark py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>Our Approach</SectionLabel>
          <h2 className="font-heading font-bold text-[30px] md:text-[44px] leading-[1.15] text-white mt-2 mb-6">
            Clean, flat, purposeful
          </h2>
          <p className="text-base font-body text-white/60 leading-relaxed">
            We design for clarity, not awards. No gradients, no clutter, no
            trends that age in six months. Every visual decision has a reason —
            usually to make you look more credible, more approachable, or easier
            to choose.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-warm py-24 md:py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-bold text-[30px] md:text-[44px] leading-[1.15] text-surface-dark">
            Ready to level up your visuals?
          </h2>
          <p className="mt-4 text-base font-body text-surface-dark/60 leading-relaxed">
            Share what you have and where you want to go — we&apos;ll scope a
            design package that fits.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">Get a Quote</Button>
          </div>
        </div>
      </section>
    </>
  );
}
