import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website development, digital marketing, graphic design, and video editing — delivered by one focused team.",
};

const services = [
  {
    title: "Website Development",
    description:
      "From landing pages to full web apps — we build sites that are fast, clean, and built to convert. Every project is mobile-first and handed over to you with full ownership.",
    deliverables: ["Custom design", "Mobile-responsive", "CMS setup", "SEO foundation"],
    href: "/services/web-development",
    from: "$300",
  },
  {
    title: "Digital Marketing",
    description:
      "Reach the right audience and turn traffic into revenue. We run SEO, paid ads, social media, and content campaigns that fit your budget and your goals.",
    deliverables: ["SEO & content", "Google / Meta ads", "Social media", "Monthly reports"],
    href: "/services/digital-marketing",
    from: "$400/mo",
  },
  {
    title: "Graphic Design",
    description:
      "First impressions matter. We create brand identities, social graphics, and marketing materials that look sharp and communicate clearly.",
    deliverables: ["Logo & brand kit", "Social templates", "Print-ready files", "Style guide"],
    href: "/services/graphic-design",
    from: "$150",
  },
  {
    title: "Video Editing",
    description:
      "Video that stops the scroll. We edit reels, ads, YouTube content, and explainer videos — fast turnaround, brand-consistent output.",
    deliverables: ["Reels & shorts", "YouTube videos", "Ad creatives", "Captions & B-roll"],
    href: "/services/video-editing",
    from: "$100/video",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface-dark py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Services</SectionLabel>
          <h1 className="font-heading font-extrabold text-[40px] md:text-[64px] leading-[1.05] text-white mt-2">
            Everything your business needs to grow online
          </h1>
          <p className="mt-6 text-base md:text-lg font-body text-white/60 leading-relaxed">
            One team. Four disciplines. No handoffs to freelancers you&apos;ve
            never met.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-surface-light py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          {services.map((s, i) => (
            <div
              key={s.href}
              className={`rounded-card p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start ${
                i % 2 === 0 ? "bg-surface-warm" : "bg-surface-light border border-surface-dark/8"
              }`}
            >
              <div className="flex-1">
                <h2 className="font-heading font-bold text-[22px] md:text-[28px] text-surface-dark mb-3">
                  {s.title}
                </h2>
                <p className="text-base font-body text-surface-dark/60 leading-relaxed mb-5">
                  {s.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {s.deliverables.map((d) => (
                    <li
                      key={d}
                      className="text-xs font-body font-medium bg-surface-dark/8 text-surface-dark/70 px-3 py-1 rounded-chip"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:text-right shrink-0">
                <p className="text-xs font-body text-surface-dark/40 uppercase tracking-wider mb-1">
                  From
                </p>
                <p className="font-heading font-extrabold text-3xl text-surface-dark mb-4">
                  {s.from}
                </p>
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-2 text-sm font-body font-medium text-brand hover:text-brand-hover transition-colors duration-200"
                >
                  See details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-dark py-24 md:py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-bold text-[30px] md:text-[44px] leading-[1.15] text-white">
            Not sure what you need?
          </h2>
          <p className="mt-4 text-base font-body text-white/60 leading-relaxed">
            Tell us where you are and where you want to go. We&apos;ll recommend
            a realistic path.
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
