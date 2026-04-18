import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const title = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <>
      {/* Hero */}
      <section className="bg-surface-dark py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-body text-white/40 hover:text-white transition-colors duration-200 mb-8"
          >
            ← Back to Portfolio
          </Link>
          <SectionLabel>Case Study</SectionLabel>
          <h1 className="font-heading font-extrabold text-[40px] md:text-[56px] leading-[1.05] text-white mt-2">
            {title}
          </h1>
        </div>
      </section>

      {/* Content placeholder */}
      <section className="bg-surface-light py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { label: "Client", value: "—" },
                { label: "Service", value: "—" },
                { label: "Timeline", value: "—" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-heading font-semibold uppercase tracking-widest text-surface-dark/40 mb-1">
                    {item.label}
                  </p>
                  <p className="font-heading font-bold text-xl text-surface-dark">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-10">
              {["The Problem", "Our Approach", "The Result"].map((section) => (
                <div key={section}>
                  <h2 className="font-heading font-bold text-[22px] text-surface-dark mb-4">
                    {section}
                  </h2>
                  <p className="text-base font-body text-surface-dark/60 leading-relaxed">
                    Case study content coming soon.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-dark py-24 md:py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-bold text-[30px] md:text-[44px] leading-[1.15] text-white">
            Want results like this?
          </h2>
          <p className="mt-4 text-base font-body text-white/60 leading-relaxed">
            Book a free discovery call and tell us what you&apos;re working on.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">Start a Project</Button>
          </div>
        </div>
      </section>
    </>
  );
}
