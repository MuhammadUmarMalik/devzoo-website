import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

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
    description:
      "Fast, clean, and built to convert. We build websites that work as hard as you do.",
    href: "/services/web-development",
    linkText: "Explore Web Development ->",
  },
  {
    title: "Digital Marketing",
    description:
      "SEO, social media, and paid ads that turn strangers into loyal customers.",
    href: "/services/digital-marketing",
    linkText: "Explore Digital Marketing ->",
  },
  {
    title: "Graphic Design",
    description:
      "Logos, brand identities, and visuals that make your business impossible to ignore.",
    href: "/services/graphic-design",
    linkText: "Explore Graphic Design ->",
  },
  {
    title: "Video Editing",
    description:
      "Reels, ads, and content that actually get watched - and remembered.",
    href: "/services/video-editing",
    linkText: "Explore Video Editing ->",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Research & Plan",
    description:
      "We start by listening. We dig into your business, your audience, and your goals before writing a single line of code or designing a single pixel. Strategy first - always.",
  },
  {
    number: "02",
    title: "Mockup & Approve",
    description:
      "You see exactly what you are getting before we build it. We present detailed mockups, take your feedback, and refine until it is right. No surprises at delivery.",
  },
  {
    number: "03",
    title: "Build & Deliver",
    description:
      "We build with precision, keep you updated every step of the way, and deliver on time. After handover, we make sure you know how everything works.",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "14-Day", label: "Average Turnaround" },
];

const testimonials = [
  {
    quote:
      "Since launching my business in 2020, I've realised that a strong digital presence is essential. When I decided to work with Devzoo for digital marketing, I couldn't be more satisfied. I've seen a significant boost in leads, enhanced brand visibility, and a noticeable increase in my industry credibility. It's truly been a game changer.",
    client: "Digital Marketing Client",
    location: "USA",
  },
  {
    quote:
      "I first tried working with a local freelancer, and although the website looked good initially, it suffered from glitches that led to low traffic and poor customer engagement. After that disappointing experience, I decided to give Devzoo a try. They presented detailed mock-ups, conducted extensive research, and kept me informed every step of the way. I can't recommend them enough.",
    client: "Kate",
    location: "Construction Business Owner, Virginia, USA",
  },
  {
    quote:
      "Before working with Devzoo, I was juggling multiple vendors for web development, mobile app design, social media management, and digital marketing - which left me overwhelmed and the results disjointed. After deciding to collaborate with Devzoo, everything changed. They handled everything seamlessly and my startup now has a cohesive, strong digital identity.",
    client: "Startup Founder",
    location: "Pakistan",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="bg-surface-dark px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel>Digital agency for startups</SectionLabel>
          <h1 className="mt-2 font-heading text-[40px] font-extrabold leading-[1.05] text-white md:text-[64px]">
            Your Business. Digitized. Done Right.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/65 md:text-lg">
            Clean websites. Smart marketing. Sharp design. Devzoo delivers
            everything your business needs to grow online - fast, reliable, and
            without the jargon.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" size="lg">
              Book a Free Call
            </Button>
            <Button href="/portfolio" variant="secondary" size="lg">
              See Our Work
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-surface-warm px-6 py-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.12em] text-surface-dark/45 md:text-sm">
            Trusted by businesses in USA, UK, UAE & Pakistan
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-center text-sm text-surface-dark/60 sm:grid-cols-3 md:grid-cols-5">
            {["Client Logo 1", "Client Logo 2", "Client Logo 3", "Client Logo 4", "Client Logo 5"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-chip border border-surface-dark/10 bg-white px-3 py-3"
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="bg-surface-dark px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="mt-2 font-heading text-[30px] font-bold leading-[1.15] text-white md:text-[44px]">
              Everything Your Business Needs - Under One Roof
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/60">
              From building your website to growing your audience, Devzoo
              handles it all so you can focus on running your business.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-card border border-transparent bg-surface-dark-2 p-7 transition-all duration-200 hover:border-brand"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-section bg-brand/10 text-brand">
                  <span className="text-lg font-bold">+</span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {service.description}
                </p>
                <span className="mt-5 inline-flex text-sm font-medium text-brand transition-transform duration-200 group-hover:translate-x-1">
                  {service.linkText}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-light px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Our Process</SectionLabel>
            <h2 className="mt-2 font-heading text-[30px] font-bold leading-[1.15] text-surface-dark md:text-[44px]">
              Simple Process. Serious Results.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-surface-dark/65">
              No confusion, no surprises. Just a clear path from your idea to a
              finished product that works.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.number} className="rounded-card bg-surface-warm p-8">
                <p className="font-heading text-4xl font-extrabold text-brand">
                  {step.number}
                </p>
                <h3 className="mt-5 font-heading text-2xl font-bold text-surface-dark">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-surface-dark/65">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-dark px-6 py-24 md:py-28">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 text-center md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-card bg-surface-dark-2 p-8">
              <p className="font-heading text-4xl font-extrabold text-brand md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.12em] text-white/55">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-warm px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>What Our Clients Say</SectionLabel>
            <h2 className="mt-2 font-heading text-[30px] font-bold leading-[1.15] text-surface-dark md:text-[44px]">
              Real Results. Real Clients. Real Words.
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.client} className="rounded-card bg-white p-8">
                <p className="text-brand">★★★★★</p>
                <p className="mt-5 text-sm leading-relaxed text-surface-dark/72">
                  {item.quote}
                </p>
                <div className="mt-6 border-t border-surface-dark/10 pt-5">
                  <p className="font-heading text-lg font-bold text-surface-dark">
                    {item.client}
                  </p>
                  <p className="text-sm text-surface-dark/55">{item.location}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-dark px-6 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-[30px] font-bold leading-[1.15] text-white md:text-[44px]">
            Ready to Build Something Great?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            Book a free 30-minute discovery call. No sales pressure. Just a
            real conversation about your business and how we can help it grow.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Book Your Free Call
            </Button>
          </div>
          <p className="mt-5 text-sm text-white/45">
            Or email us at{" "}
            <a
              href="mailto:info@thedevzoo.com"
              className="text-white transition-colors duration-200 hover:text-brand"
            >
              info@thedevzoo.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
