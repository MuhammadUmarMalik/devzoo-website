import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import HeroSection from "@/components/ui/HeroSection";
import SectionLabel from "@/components/ui/SectionLabel";
import ClientLogoLoop from "@/components/ui/ClientLogoLoop";
import AnimateIn from "@/components/ui/AnimateIn";
import StatsShowcase from "@/components/home/StatsShowcase";

export const metadata: Metadata = {
  title: {
    absolute: "Devzoo - Website Development, Digital Marketing & Design Agency",
  },
  description:
    "Devzoo is a modern digital agency delivering clean websites, digital marketing, graphic design, and video editing for startups and small businesses. No shortcuts. No jargon. Just results.",
};

const services = [
  {
    title: "Website Development",
    description: "Fast, clean, and built to convert. We build websites that work as hard as you do — no templates, no shortcuts.",
    href: "/services/web-development",
    linkText: "Explore Web Development",
    span: "lg:col-span-2",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    description: "SEO, social media, and paid ads that turn strangers into loyal customers.",
    href: "/services/digital-marketing",
    linkText: "Explore Digital Marketing",
    span: "lg:col-span-1",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0-5.94-2.28m5.94 2.28-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: "Graphic Design",
    description: "Logos, brand identities, and visuals that make your business impossible to ignore.",
    href: "/services/graphic-design",
    linkText: "Explore Graphic Design",
    span: "lg:col-span-1",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: "Video Editing",
    description: "Reels, ads, and content that actually gets watched — and remembered.",
    href: "/services/video-editing",
    linkText: "Explore Video Editing",
    span: "lg:col-span-2",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    number: "01",
    title: "Research & Plan",
    description: "We start by listening. We dig into your business, your audience, and your goals before writing a single line of code.",
  },
  {
    number: "02",
    title: "Mockup & Approve",
    description: "You see exactly what you're getting before we build it. Detailed mockups, your feedback, refined until right.",
  },
  {
    number: "03",
    title: "Build & Deliver",
    description: "We build with precision, keep you updated every step, and deliver on time. After handover you know how everything works.",
  },
];

const stats = [
  {
    value: "50+",
    label: "Projects Delivered",
    detail: "Web builds, campaigns, design systems, and content shipped with clear handoff.",
  },
  {
    value: "100%",
    label: "Client Satisfaction",
    detail: "We keep communication simple, timelines clear, and revisions focused on what matters.",
  },
  {
    value: "14-Day",
    label: "Average Turnaround",
    detail: "Fast enough to keep momentum, careful enough to avoid the usual agency mess.",
  },
];

const testimonials = [
  {
    quote: "I first tried working with a local freelancer, and although the website looked good initially, it suffered from glitches that led to low traffic and poor customer engagement. After that disappointing experience, I decided to give Devzoo a try. They presented detailed mock-ups, conducted extensive research, and kept me informed every step of the way. I can't recommend them enough.",
    client: "Kate",
    role: "Construction Business Owner, Virginia, USA",
    featured: true,
  },
  {
    quote: "Since launching my business in 2020, I've realised that a strong digital presence is essential. With Devzoo I've seen a significant boost in leads, enhanced brand visibility, and a noticeable increase in my industry credibility.",
    client: "Digital Marketing Client",
    role: "USA",
    featured: false,
  },
  {
    quote: "Before Devzoo I was juggling multiple vendors. After deciding to collaborate with Devzoo, everything changed. My startup now has a cohesive, strong digital identity.",
    client: "Startup Founder",
    role: "Pakistan",
    featured: false,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <HeroSection className="flex min-h-svh items-center py-24">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="reveal-fade-in inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
            <span className="font-body text-xs font-medium uppercase tracking-[0.14em] text-white/65">
              Digital Agency for Startups
            </span>
          </div>

          {/* Headline */}
          <h1 className="reveal-fade-up mt-8 font-heading text-[52px] font-extrabold leading-[1.04] text-white [--reveal-delay:80ms] md:text-[76px] lg:text-[92px]">
            Your Business.{" "}
            <span className="text-white/35">Digitized.</span>{" "}
            Done Right.
          </h1>

          {/* Subline */}
          <p className="reveal-fade-up mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/55 [--reveal-delay:200ms] md:text-xl">
            Clean websites. Smart marketing. Sharp design. Devzoo handles
            everything your business needs to grow online — fast, reliable,
            and without the jargon.
          </p>

          {/* CTAs */}
          <div className="reveal-fade-up mt-10 flex flex-col items-center justify-center gap-4 [--reveal-delay:320ms] sm:flex-row">
            <Button href="/contact" size="lg">
              Book a Free Call
            </Button>
            <Button href="/portfolio" variant="secondary" size="lg">
              See Our Work
            </Button>
          </div>

        </div>
      </HeroSection>

      {/* ── TRUST BAR ──────────────────────────────────────────── */}
      <section className="overflow-hidden bg-surface-warm py-10">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.12em] text-surface-dark/40">
          Trusted by businesses in USA · UK · UAE · Pakistan
        </p>
        <ClientLogoLoop />
      </section>

      {/* ── SERVICES BENTO ─────────────────────────────────────── */}
      <section className="bg-surface-dark px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <AnimateIn className="mx-auto max-w-3xl text-center">
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="mt-2 font-heading text-[30px] font-bold leading-[1.15] text-white md:text-[44px]">
              Everything Your Business Needs — Under One Roof
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/55">
              From building your website to growing your audience, Devzoo
              handles it all so you can focus on running your business.
            </p>
          </AnimateIn>

          <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <AnimateIn key={service.href} delay={i * 80} variant="scale-up" className={service.span}>
                <Link
                  href={service.href}
                  className="bento-card group flex h-full cursor-pointer flex-col rounded-card border border-white/8 bg-surface-dark-2 p-7 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-[0_8px_32px_-8px_rgb(232_71_10/0.2)]"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-section border border-brand/20 bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand/20">
                    {service.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white md:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-brand transition-all duration-300 group-hover:gap-2.5">
                    {service.linkText}
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                    </svg>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ────────────────────────────────────────────── */}
      <section className="bg-surface-light px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <AnimateIn className="mx-auto max-w-3xl text-center">
            <SectionLabel>Our Process</SectionLabel>
            <h2 className="mt-2 font-heading text-[30px] font-bold leading-[1.15] text-surface-dark md:text-[44px]">
              Simple Process. Serious Results.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-surface-dark/60">
              No confusion, no surprises. Just a clear path from your idea to a
              finished product that works.
            </p>
          </AnimateIn>

          <div className="relative mt-20">
            {/* Connector line — desktop only */}
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-surface-dark/10 lg:block" aria-hidden="true" />

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
              {processSteps.map((step, i) => (
                <AnimateIn key={step.number} delay={i * 120} className="relative">
                  {/* Step badge */}
                  <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-brand/25 bg-surface-light">
                    <span className="font-heading text-sm font-bold text-brand">{step.number}</span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-surface-dark">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-surface-dark/62">
                    {step.description}
                  </p>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ──────────────────────────────────────────────── */}
      <StatsShowcase stats={stats} />

      {/* ── TESTIMONIALS ───────────────────────────────────────── */}
      <section className="bg-surface-warm px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <AnimateIn className="mx-auto max-w-3xl text-center">
            <SectionLabel>What Our Clients Say</SectionLabel>
            <h2 className="mt-2 font-heading text-[30px] font-bold leading-[1.15] text-surface-dark md:text-[44px]">
              Real Results. Real Clients. Real Words.
            </h2>
          </AnimateIn>

          <div className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-5">
            {/* Featured testimonial */}
            <AnimateIn delay={0} className="lg:col-span-3">
              <article className="flex h-full flex-col rounded-card bg-surface-dark p-8 md:p-10">
                <div className="mb-6 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-brand">
                      <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <blockquote className="flex-1 font-body text-base leading-relaxed text-white/75 md:text-lg">
                  &ldquo;{testimonials[0].quote}&rdquo;
                </blockquote>
                <div className="mt-8 flex items-center gap-4 border-t border-white/8 pt-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/15 font-heading text-lg font-bold text-brand">
                    {testimonials[0].client[0]}
                  </div>
                  <div>
                    <p className="font-heading text-base font-bold text-white">{testimonials[0].client}</p>
                    <p className="text-sm text-white/45">{testimonials[0].role}</p>
                  </div>
                </div>
              </article>
            </AnimateIn>

            {/* Two smaller testimonials */}
            <div className="flex flex-col gap-4 lg:col-span-2">
              {testimonials.slice(1).map((t, i) => (
                <AnimateIn key={t.client} delay={(i + 1) * 100}>
                  <article className="flex h-full flex-col rounded-card bg-white p-7">
                    <div className="mb-4 flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 text-brand">
                          <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="flex-1 text-sm leading-relaxed text-surface-dark/70">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <div className="mt-5 border-t border-surface-dark/8 pt-4">
                      <p className="font-heading text-sm font-bold text-surface-dark">{t.client}</p>
                      <p className="text-xs text-surface-dark/50">{t.role}</p>
                    </div>
                  </article>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-surface-dark px-6 py-24 md:py-32">
        {/* Orange glow blob */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15"
          style={{ filter: "blur(96px)" }}
          aria-hidden="true"
        />
        <AnimateIn className="relative z-10 mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-[30px] font-bold leading-[1.15] text-white md:text-[44px]">
            Ready to Build Something Great?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/55">
            Book a free 30-minute discovery call. No sales pressure. Just a
            real conversation about your business and how we can help it grow.
          </p>
          <div className="mt-9">
            <Button href="/contact" size="lg">Book Your Free Call</Button>
          </div>
          <p className="mt-5 text-sm text-white/35">
            Or email us at{" "}
            <a href="mailto:info@thedevzoo.com" className="text-white/60 transition-colors duration-200 hover:text-brand">
              info@thedevzoo.com
            </a>
          </p>
        </AnimateIn>
      </section>
    </>
  );
}
