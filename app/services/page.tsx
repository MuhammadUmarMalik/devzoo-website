import type { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import SectionLabel from "@/components/ui/SectionLabel";
import StackingCards from "@/components/ui/StackingCards";
import PageCTA from "@/components/ui/PageCTA";
import JsonLd from "@/components/seo/JsonLd";
import { CALENDLY_URL } from "@/libs/site-links";

export const metadata: Metadata = {
  title: {
    absolute:
      "Our Services | Website Development, Digital Marketing, Design & Video | Devzoo",
  },
  description:
    "Devzoo offers website development, digital marketing, graphic design, and video editing for startups, creators, and small businesses. One agency. Everything digital. Done right.",
  alternates: { canonical: "https://thedevzoo.com/services" },
  openGraph: {
    title: "Our Services | Devzoo",
    description:
      "Website development, digital marketing, graphic design, and video editing. One agency. Everything digital. Done right.",
    url: "https://thedevzoo.com/services",
  },
};

const services = [
  {
    title: "Website Development",
    body:
      "Slow load times and clunky navigation cost you clients every day. Your website is your most important sales tool. It needs to perform. We build websites that load fast, look clean, and are designed to turn visitors into customers.",
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
      "In a crowded digital world, the businesses that win are the ones that show up, consistently, strategically, and in the right places. We build marketing strategies that cut through the noise, connect with your audience, and turn clicks into real customers. No guesswork. No vanity metrics. Just growth.",
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
      "Inconsistent visuals damage trust. A poorly designed logo tells clients you don't take your business seriously. At Devzoo, we create visual identities that make people stop, look, and remember. From your logo to your social media graphics to your marketing materials, everything designed with purpose.",
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
      "Most businesses have footage sitting on a hard drive going nowhere. Video is the highest-performing content format on every platform, but only when it's edited well. We turn your raw footage into polished, engaging content that actually gets watched and drives action.",
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

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Devzoo Services",
          url: "https://thedevzoo.com/services",
          description:
            "Website development, digital marketing, graphic design, and video editing services for startups and small businesses.",
          provider: { "@id": "https://thedevzoo.com/#organization" },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://thedevzoo.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: "https://thedevzoo.com/services",
              },
            ],
          },
        }}
      />
      <HeroSection>
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel>Services</SectionLabel>
          <h1 className="mt-2 font-heading text-[40px] font-extrabold leading-[1.05] text-white md:text-[64px]">
            One Agency. Everything Digital.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/65 md:text-lg">
            From building your first website to managing your social media to
            designing your brand identity. Devzoo handles every part of your
            digital presence, so you don&apos;t have to juggle vendors.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white/50 md:text-base">
            Our services are built for everyone, from day-one startups to
            established businesses ready to scale. No matter your size, we take
            your goals seriously and deliver work that makes a real difference.
          </p>
        </div>
      </HeroSection>

      {/* ── Service cards ────────────────────────────────────────── */}
      <section className="px-6 pt-16 pb-16 md:pt-24 lg:pb-48">
        <div className="mx-auto max-w-6xl">
          <StackingCards services={services} />
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────── */}
      <PageCTA
        badge="Not Sure Where to Start?"
        heading="Tell us where you are, and we'll show you the next move."
        subtext="If you're not sure which service fits, book a call and we'll recommend the cleanest path forward."
        primaryLabel="Book a Free Call"
        primaryHref={CALENDLY_URL}
        secondaryLabel="View Pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
