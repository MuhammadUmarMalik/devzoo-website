import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

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
    includes:
      "Custom design (no templates) · Mobile-first development · Fast load speed optimization · On-page SEO setup · Contact forms & lead capture · CMS integration (easy for you to update) · 2 rounds of revisions · 30-day post-launch support",
    extraLabel: "Tech Stack",
    extraValue:
      "WordPress (Elementor / Bricks Builder) · Webflow · React / Next.js for complex apps",
    footer: "Turnaround: Standard 5-page website: 14 days",
    href: "/services/web-development",
    cta: "Get Your Website Built - Book a Free Call",
  },
  {
    title: "Digital Marketing",
    body:
      "In a crowded digital world, the businesses that win are the ones that show up - consistently, strategically, and in the right places. We build marketing strategies that cut through the noise, connect with your audience, and turn clicks into real customers. No guesswork. No vanity metrics. Just growth.",
    includes:
      "SEO (on-page + technical + local) · Social Media Management · PPC Advertising (Google + Meta) · Content Strategy · Monthly Performance Reports · Competitor Analysis",
    href: "/services/digital-marketing",
    cta: "Grow Your Business Online - Book a Free Call",
  },
  {
    title: "Graphic Design",
    body:
      "Inconsistent visuals damage trust. A poorly designed logo tells clients you don't take your business seriously. At Devzoo, we create visual identities that make people stop, look, and remember. From your logo to your social media graphics to your marketing materials - everything designed with purpose.",
    includes:
      "Logo Design · Full Brand Identity (colors, fonts, guidelines) · Social Media Graphic Templates · Marketing Materials (flyers, brochures, presentations) · Packaging Design",
    href: "/services/graphic-design",
    cta: "Brand Your Business - Book a Free Call",
  },
  {
    title: "Video Editing",
    body:
      "Most businesses have footage sitting on a hard drive going nowhere. Video is the highest-performing content format on every platform - but only when it's edited well. We turn your raw footage into polished, engaging content that actually gets watched and drives action.",
    includes:
      "Instagram & TikTok Reels · YouTube Long-Form Videos · YouTube Shorts · Explainer Videos · Ad Creatives · Captions & Subtitles · Color Grading & Sound Design",
    href: "/services/video-editing",
    cta: "Get Your Videos Edited - Book a Free Call",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-surface-dark px-6 py-24 md:py-32">
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
      </section>

      <section className="bg-surface-light px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl space-y-8">
          {services.map((service, index) => (
            <article
              key={service.href}
              className={`rounded-card p-8 md:p-10 ${
                index % 2 === 0
                  ? "bg-surface-warm"
                  : "border border-surface-dark/10 bg-white"
              }`}
            >
              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <h2 className="font-heading text-[28px] font-bold text-surface-dark">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-surface-dark/70">
                    {service.body}
                  </p>
                  <p className="mt-6 text-sm leading-relaxed text-surface-dark/60">
                    <span className="font-semibold text-surface-dark">
                      What&apos;s Included:
                    </span>{" "}
                    {service.includes}
                  </p>
                  {service.extraLabel ? (
                    <p className="mt-4 text-sm leading-relaxed text-surface-dark/60">
                      <span className="font-semibold text-surface-dark">
                        {service.extraLabel}:
                      </span>{" "}
                      {service.extraValue}
                    </p>
                  ) : null}
                  {service.footer ? (
                    <p className="mt-4 text-sm leading-relaxed text-surface-dark/60">
                      {service.footer}
                    </p>
                  ) : null}
                </div>
                <div className="flex flex-col justify-between rounded-section bg-surface-dark p-8">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">
                      Dedicated page
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-white/62">
                      This service has its own focused page with the same core
                      message expanded for clients comparing options.
                    </p>
                  </div>
                  <div className="mt-8">
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-sm font-medium text-white transition-colors duration-200 hover:text-brand"
                    >
                      {service.cta}
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface-dark px-6 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-[30px] font-bold leading-[1.15] text-white md:text-[44px]">
            Tell us where you are, and we&apos;ll show you the next move.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            If you&apos;re not sure which service fits, book a call and we&apos;ll
            recommend the cleanest path forward.
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
