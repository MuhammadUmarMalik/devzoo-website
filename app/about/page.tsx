import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the Devzoo team — a small group of focused builders helping startups and small businesses grow online.",
};

const values = [
  {
    title: "Clarity over complexity",
    description:
      "We strip away the noise. Every decision — design, copy, strategy — has a reason you can understand.",
  },
  {
    title: "Ownership, not excuses",
    description:
      "If something goes wrong, we fix it. No finger-pointing, no ticket queues, no extra invoice.",
  },
  {
    title: "Speed without shortcuts",
    description:
      "Fast delivery doesn't mean sloppy work. We move quickly because we've built efficient systems.",
  },
  {
    title: "Client-first, always",
    description:
      "Your goals come before our preferences. We're advisors, not artists with an agenda.",
  },
];

const team = [
  {
    name: "Ehtasham ul Haq",
    role: "CEO & Founder",
    bio: "Leads strategy and client relationships. Obsessed with helping businesses grow through smart digital work.",
  },
  {
    name: "Muhammad Umar Malik",
    role: "CTO & Co-Founder",
    bio: "Runs product and engineering. Builds the systems that make every project ship on time and on spec.",
  },
  {
    name: "Awais Hassan",
    role: "COO & Co-Founder",
    bio: "Manages operations and creative delivery. Keeps quality high and projects moving.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface-dark py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>About Devzoo</SectionLabel>
          <h1 className="font-heading font-extrabold text-[40px] md:text-[64px] leading-[1.05] text-white mt-2">
            We built the agency we always wished existed
          </h1>
          <p className="mt-6 text-base md:text-lg font-body text-white/60 leading-relaxed">
            No bloated retainers. No mysterious deliverables. No waiting three
            weeks for a reply. Just focused people doing great work.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-surface-light py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>Our Story</SectionLabel>
          <h2 className="font-heading font-bold text-[30px] md:text-[44px] leading-[1.15] text-surface-dark mt-2 mb-8">
            The Kate problem
          </h2>
          <div className="space-y-5 font-body text-base text-surface-dark/70 leading-relaxed">
            <p>
              Imagine Kate. She runs a small shoe store and finally decides to
              take her business online. She approaches three agencies. The first
              ghosts her after the proposal. The second quotes $12,000 for a
              five-page website. The third delivers something, but Kate can't
              update a single product without paying a monthly retainer.
            </p>
            <p>
              Kate's story isn't unusual — it's the default. Most small
              businesses get pushed toward enterprise solutions they don't need,
              at prices they can't afford, with results they can't control.
            </p>
            <p>
              Devzoo exists to fix that. We deliver clean, fast, reliable
              digital work at prices that make sense for businesses that are
              still growing. We explain everything in plain English. We hand
              over everything you own. And we stick around.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-surface-dark py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>What We Stand For</SectionLabel>
            <h2 className="font-heading font-bold text-[30px] md:text-[44px] leading-[1.15] text-white mt-2">
              Four values we actually live by
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-surface-dark-2 rounded-card p-8"
              >
                <h3 className="font-heading font-bold text-xl text-white mb-3">
                  {v.title}
                </h3>
                <p className="text-sm font-body text-white/60 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-surface-warm py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>The Team</SectionLabel>
            <h2 className="font-heading font-bold text-[30px] md:text-[44px] leading-[1.15] text-surface-dark mt-2">
              Three people. Full ownership.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-surface-light rounded-card p-8">
                <div className="w-14 h-14 rounded-section bg-brand/10 flex items-center justify-center mb-6">
                  <span className="text-brand font-heading font-bold text-xl">
                    {member.name[0]}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl text-surface-dark mb-1">
                  {member.name}
                </h3>
                <p className="text-xs font-body font-semibold uppercase tracking-wider text-brand mb-4">
                  {member.role}
                </p>
                <p className="text-sm font-body text-surface-dark/60 leading-relaxed">
                  {member.bio}
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
            Let&apos;s work together
          </h2>
          <p className="mt-4 text-base font-body text-white/60 leading-relaxed">
            Book a free 30-minute call. We&apos;ll listen, ask the right
            questions, and tell you exactly what we think you need.
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
