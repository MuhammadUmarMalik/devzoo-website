import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Devzoo — Digital Magic. Web Wonders. Design Dreams.",
};

const services = [
  {
    title: "Website Development",
    description:
      "Fast, clean websites and web apps built to convert visitors into customers.",
    href: "/services/web-development",
  },
  {
    title: "Digital Marketing",
    description:
      "SEO, PPC, social, and content that brings the right people to your door.",
    href: "/services/digital-marketing",
  },
  {
    title: "Graphic Design",
    description:
      "Brand identity and visual assets that make your business look the part.",
    href: "/services/graphic-design",
  },
  {
    title: "Video Editing",
    description:
      "Reels, ads, and explainer videos that stop the scroll and drive action.",
    href: "/services/video-editing",
  },
];

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We learn your goals, audience, and timeline in a free 30-minute call.",
  },
  {
    number: "02",
    title: "Proposal",
    description:
      "You get a clear scope, timeline, and fixed price — no surprises.",
  },
  {
    number: "03",
    title: "Build",
    description: "We deliver weekly updates so you're always in the loop.",
  },
  {
    number: "04",
    title: "Launch",
    description: "We hand over everything clean, trained, and ready to grow.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface-dark py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel>Digital Agency — Pakistan · USA · UK · UAE</SectionLabel>
          <h1 className="font-heading font-extrabold text-[40px] md:text-[64px] leading-[1.05] text-white mt-2">
            Your business deserves a website that actually works
          </h1>
          <p className="mt-6 text-base md:text-lg font-body text-white/60 leading-relaxed max-w-2xl mx-auto">
            Devzoo builds clean, fast websites and runs sharp digital marketing
            for startups, creators, and small businesses. No jargon, no
            shortcuts.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg">
              Book a Free Call
            </Button>
            <Button href="/portfolio" variant="secondary" size="lg">
              See Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-surface-warm py-6 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-body font-medium text-surface-dark/40 uppercase tracking-widest">
            Trusted by businesses in Pakistan · USA · UK · UAE
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-surface-dark py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="font-heading font-bold text-[30px] md:text-[44px] leading-[1.15] text-white mt-2">
              Four services. One focused team.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-surface-dark-2 rounded-card p-6 border border-transparent hover:border-brand transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-chip bg-brand/10 flex items-center justify-center mb-4">
                  <span className="text-brand text-sm font-bold">◈</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-3">
                  {s.title}
                </h3>
                <p className="text-sm font-body text-white/60 leading-relaxed">
                  {s.description}
                </p>
                <span className="inline-block mt-4 text-sm text-brand font-medium group-hover:translate-x-1 transition-transform duration-200">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-surface-warm py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="font-heading font-bold text-[30px] md:text-[44px] leading-[1.15] text-surface-dark mt-2">
              From first call to live site — in four steps
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number}>
                <div className="font-heading font-extrabold text-4xl text-brand mb-4">
                  {step.number}
                </div>
                <h3 className="font-heading font-bold text-xl text-surface-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-sm font-body text-surface-dark/60 leading-relaxed">
                  {step.description}
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
            Ready to build something great?
          </h2>
          <p className="mt-4 text-base font-body text-white/60 leading-relaxed">
            Book a free discovery call. No commitment, no sales pressure — just
            a conversation about your business.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Get a Free Quote
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
