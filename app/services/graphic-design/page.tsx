import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: {
    absolute:
      "Graphic Design Services - Logo, Brand Identity & Visual Design | Devzoo",
  },
  description:
    "Devzoo creates logos, brand identities, social media graphics, and marketing materials for startups and small businesses. Visuals that make your brand impossible to ignore.",
};

const included = [
  "Logo Design",
  "Full Brand Identity (colors, fonts, guidelines)",
  "Social Media Graphic Templates",
  "Marketing Materials (flyers, brochures, presentations)",
  "Packaging Design",
];

export default function GraphicDesignPage() {
  return (
    <>
      <section className="bg-surface-dark px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel>Graphic Design</SectionLabel>
          <h1 className="mt-2 font-heading text-[40px] font-extrabold leading-[1.05] text-white md:text-[64px]">
            Make Your Brand Impossible to Ignore.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/65 md:text-lg">
            Inconsistent visuals damage trust. A poorly designed logo tells
            clients you don&apos;t take your business seriously. At Devzoo, we
            create visual identities that make people stop, look, and remember.
            From your logo to your social media graphics to your marketing
            materials - everything designed with purpose.
          </p>
        </div>
      </section>

      <section className="bg-surface-light px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>What&apos;s Included</SectionLabel>
            <h2 className="mt-2 font-heading text-[30px] font-bold leading-[1.15] text-surface-dark md:text-[44px]">
              Design systems that make your business look serious.
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
            Brand Your Business.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            Book a free call and we&apos;ll shape the visual identity your business
            should have had from day one.
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
