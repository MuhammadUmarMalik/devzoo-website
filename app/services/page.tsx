import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimateIn from "@/components/ui/AnimateIn";
import PageCTA from "@/components/ui/PageCTA";

export const metadata: Metadata = {
  title: {
    absolute:
      "Our Services - Website Development, Digital Marketing, Design & Video | Devzoo",
  },
  description:
    "Devzoo offers website development, digital marketing, graphic design, and video editing for startups, creators, and small businesses. One agency. Everything digital. Done right.",
};

const services = [
  {
    title: "Website Development",
    body:
      "Slow load times and clunky navigation cost you clients every day. Your website is your most important sales tool - and it needs to perform. We build websites that load fast, look clean, and are designed to turn visitors into customers.",
    includes: [
      "Custom design (no templates)",
      "Mobile-first development",
      "Fast load speed optimization",
      "On-page SEO setup",
      "Contact forms & lead capture",
      "CMS integration",
      "2 rounds of revisions",
      "30-day post-launch support",
    ],
    extras: [
      { label: "Tech Stack", value: "WordPress · Webflow · React / Next.js" },
      { label: "Turnaround", value: "Standard 5-page website: 14 days" },
    ],
    href: "/services/web-development",
    cta: "Get Your Website Built — Book a Free Call",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    body:
      "In a crowded digital world, the businesses that win are the ones that show up - consistently, strategically, and in the right places. We build marketing strategies that cut through the noise, connect with your audience, and turn clicks into real customers. No guesswork. No vanity metrics. Just growth.",
    includes: [
      "SEO (on-page + technical + local)",
      "Social Media Management",
      "PPC Advertising (Google + Meta)",
      "Content Strategy",
      "Monthly Performance Reports",
      "Competitor Analysis",
    ],
    href: "/services/digital-marketing",
    cta: "Grow Your Business Online — Book a Free Call",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M2.25 18 9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0-5.94-2.28m5.94 2.28-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: "Graphic Design",
    body:
      "Inconsistent visuals damage trust. A poorly designed logo tells clients you don't take your business seriously. At Devzoo, we create visual identities that make people stop, look, and remember. From your logo to your social media graphics to your marketing materials - everything designed with purpose.",
    includes: [
      "Logo Design",
      "Full Brand Identity (colors, fonts, guidelines)",
      "Social Media Graphic Templates",
      "Marketing Materials (flyers, brochures, presentations)",
      "Packaging Design",
    ],
    href: "/services/graphic-design",
    cta: "Brand Your Business — Book a Free Call",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: "Video Editing",
    body:
      "Most businesses have footage sitting on a hard drive going nowhere. Video is the highest-performing content format on every platform - but only when it's edited well. We turn your raw footage into polished, engaging content that actually gets watched and drives action.",
    includes: [
      "Instagram & TikTok Reels",
      "YouTube Long-Form Videos",
      "YouTube Shorts",
      "Explainer Videos & Ad Creatives",
      "Captions & Subtitles",
      "Color Grading & Sound Design",
    ],
    href: "/services/video-editing",
    cta: "Get Your Videos Edited — Book a Free Call",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
  },
];

function CheckIcon({ dark }: { dark?: boolean }) {
  return (
    <span
      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
        dark
          ? "border-brand/25 bg-brand/12 text-brand"
          : "border-brand/20 bg-brand/8 text-brand"
      }`}
    >
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" aria-hidden="true">
        <path d="M3 8l3.5 3.5L13 5" />
      </svg>
    </span>
  );
}

export default function ServicesPage() {
  return (
    <>
      <HeroSection>
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel>Services</SectionLabel>
          <h1 className="mt-2 font-heading text-[40px] font-extrabold leading-[1.05] text-white md:text-[64px]">
            One Agency. Everything Digital.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/65 md:text-lg">
            From building your first website to managing your social media to
            designing your brand identity - Devzoo handles every part of your
            digital presence, so you don&apos;t have to juggle vendors.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white/50 md:text-base">
            Our services are built for everyone - from day-one startups to
            established businesses ready to scale. No matter your size, we take
            your goals seriously and deliver work that makes a real difference.
          </p>
        </div>
      </HeroSection>

      {/* ── Service cards ────────────────────────────────────────── */}
      <section className="bg-surface-light px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl space-y-6">
          {services.map((service, index) => (
            <AnimateIn key={service.href} delay={index * 80}>
              <article
                className={`overflow-hidden rounded-card border transition-all duration-300 ${
                  index % 2 === 0
                    ? "border-surface-dark/8 bg-surface-warm hover:border-brand/18 hover:shadow-[0_8px_32px_-12px_rgba(232,71,10,0.1)]"
                    : "border-surface-dark/8 bg-white hover:border-brand/18 hover:shadow-[0_8px_32px_-12px_rgba(232,71,10,0.1)]"
                }`}
              >
                <div className="grid gap-0 lg:grid-cols-[1fr_320px]">
                  {/* Main content */}
                  <div className="p-8 md:p-10">
                    {/* Icon + title row */}
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-section border border-brand/20 bg-brand/10 text-brand">
                        {service.icon}
                      </div>
                      <h2 className="font-heading text-[26px] font-bold text-surface-dark">
                        {service.title}
                      </h2>
                    </div>

                    <p className="mt-5 text-base leading-relaxed text-surface-dark/70">
                      {service.body}
                    </p>

                    {/* Includes grid */}
                    <div className="mt-7">
                      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-surface-dark/40">
                        What&apos;s Included
                      </p>
                      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {service.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-surface-dark/70">
                            <CheckIcon />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Extras (tech stack / turnaround) */}
                    {service.extras && (
                      <div className="mt-6 flex flex-wrap gap-4">
                        {service.extras.map((extra) => (
                          <div key={extra.label} className="rounded-btn border border-surface-dark/10 bg-surface-dark/5 px-3 py-1.5">
                            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-surface-dark/40">{extra.label}: </span>
                            <span className="text-xs text-surface-dark/65">{extra.value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Sidebar CTA */}
                  <div className="relative flex flex-col justify-between overflow-hidden border-t border-surface-dark/8 bg-surface-dark p-8 lg:border-l lg:border-t-0">
                    {/* Subtle top line */}
                    <div
                      className="pointer-events-none absolute inset-x-0 top-0 h-px"
                      style={{ background: "linear-gradient(90deg, transparent, rgba(232,71,10,0.4), transparent)" }}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand">
                        Dedicated page
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-white/55">
                        This service has its own focused page with the same core
                        message expanded for clients comparing options.
                      </p>
                    </div>
                    <div className="mt-8">
                      <Link
                        href={service.href}
                        className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-white transition-all duration-200 hover:gap-2.5 hover:text-brand"
                      >
                        {service.cta}
                        <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                          <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────── */}
      <PageCTA
        badge="Not Sure Where to Start?"
        heading="Tell us where you are, and we'll show you the next move."
        subtext="If you're not sure which service fits, book a call and we'll recommend the cleanest path forward."
        primaryLabel="Book a Free Call"
        primaryHref="/contact"
        secondaryLabel="View Pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
