import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import HeroSection from "@/components/ui/HeroSection";
import SectionLabel from "@/components/ui/SectionLabel";
import ClientLogoLoop from "@/components/ui/ClientLogoLoop";
import AnimateIn from "@/components/ui/AnimateIn";
import StatsShowcase from "@/components/home/StatsShowcase";
import PageCTA from "@/components/ui/PageCTA";

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
      <section className="grain-overlay bg-surface-dark px-6 py-24 md:py-32">
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

          <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {processSteps.map((step, i) => (
              <AnimateIn key={step.number} delay={i * 120} className="relative">
                <div className="group relative h-full overflow-hidden rounded-card border border-surface-dark/8 bg-surface-warm p-8 transition-all duration-300 hover:border-brand/20 hover:shadow-[0_8px_32px_-12px_rgba(232,71,10,0.14)]">
                  {/* Ghost step number */}
                  <span className="pointer-events-none absolute right-5 top-2 select-none font-heading text-[88px] font-extrabold leading-none text-surface-dark/[0.045]">
                    {step.number}
                  </span>
                  {/* Step badge */}
                  <div className="relative z-10 mb-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand/30 bg-white font-heading text-sm font-bold text-brand shadow-sm">
                    {step.number}
                  </div>
                  <h3 className="relative z-10 font-heading text-xl font-bold text-surface-dark">
                    {step.title}
                  </h3>
                  <p className="relative z-10 mt-3 text-sm leading-relaxed text-surface-dark/60">
                    {step.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
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
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-surface-dark/62">
              Honest feedback from businesses that wanted sharp work, clear
              communication, and a smoother launch.
            </p>
          </AnimateIn>
        </div>

        <AnimateIn delay={120} className="mt-16">
          <div className="testimonial-marquee-shell mx-auto max-w-350">
            <div className="testimonial-marquee-track">
              {Array.from({ length: 2 }).map((_, groupIndex) => (
                <div
                  key={groupIndex}
                  className="testimonial-marquee-group"
                  aria-hidden={groupIndex === 1}
                >
                  {testimonials.map((testimonial, index) => (
                    <article
                      key={`${testimonial.client}-${groupIndex}-${index}`}
                      className="testimonial-card group relative flex min-h-72.5 w-[320px] shrink-0 flex-col justify-between overflow-hidden rounded-card border border-white/10 bg-surface-dark text-white shadow-[0_30px_80px_-45px_rgba(7,9,12,0.8)] hover:border-brand/35 hover:bg-surface-dark-3 hover:shadow-[0_34px_90px_-42px_rgba(232,71,10,0.34)] p-6 md:w-90 md:p-7"
                    >
                      <div
                        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,71,10,0.2),transparent_42%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        aria-hidden="true"
                      />
                      <div
                        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-white/18 transition-colors duration-300 group-hover:bg-brand/40"
                        aria-hidden="true"
                      />

                      <div className="relative z-10">
                        <div className="flex items-center gap-1 text-brand" aria-label="5 star review">
                          {Array.from({ length: 5 }).map((_, starIndex) => (
                            <svg
                              key={starIndex}
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="h-4 w-4"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ))}
                        </div>

                        <blockquote
                          className="mt-6 text-base leading-8 text-white/74 transition-colors duration-300 group-hover:text-white/84 md:text-[17px]"
                        >
                          &ldquo;{testimonial.quote}&rdquo;
                        </blockquote>
                      </div>

                      <div className="relative z-10 mt-7 border-t border-white/8 pt-5 transition-colors duration-300 group-hover:border-brand/20">
                        <p
                          className="font-heading text-base font-bold text-white transition-colors duration-300"
                        >
                          {testimonial.client}
                        </p>
                        <p
                          className="text-sm text-white/42 transition-colors duration-300 group-hover:text-white/54"
                        >
                          {testimonial.role}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────────── */}
      <PageCTA
        badge="Ready to Grow Online?"
        heading="Don't let your business get left behind."
        subtext="Clean websites, sharper branding, and smarter marketing built to move your business forward."
        primaryLabel="Book a Free Call"
        primaryHref="/contact"
        secondaryLabel="Learn more"
        secondaryHref="/services"
      />
    </>
  );
}
