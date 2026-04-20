import type { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimateIn from "@/components/ui/AnimateIn";
import PageCTA from "@/components/ui/PageCTA";
import BrandTicker from "@/components/ui/BrandTicker";

export const metadata: Metadata = {
  title: {
    absolute:
      "About Devzoo | The Digital Agency Built for Startups & Small Businesses",
  },
  description:
    "Meet the team behind Devzoo. Founded by Ehtasham ul Haq and Muhammad Umar Malik, we're a modern digital agency delivering clean, reliable digital solutions with zero shortcuts.",
};

const pillars = [
  {
    title: "Our Mission",
    body: "To simplify digital product development for businesses while delivering top-notch quality. No complexities, no compromises. Just high-quality digital solutions designed to support your success.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
        <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
        <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </svg>
    ),
  },
  {
    title: "Our Vision",
    body: "To simplify digital solutions, deliver glitch-free products, and build lifelong partnerships with clients built on trust, transparency, and real results.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Our Values",
    body: "Trust: We earn it by delivering on every promise, every time. Passion: We love what we do, and it shows in every project. Adaptability: The digital world moves fast. So do we. Quality: No shortcuts. Only solutions that actually work.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      </svg>
    ),
  },
];

const team = [
  {
    name: "Ehtasham ul Haq",
    role: "Founder & CEO",
    bio: "Ehtasham leads Devzoo's strategy, client relationships, and product vision. With a sharp eye for quality and an obsession for delivering results, he makes sure every project that leaves Devzoo is something both the client and the team are proud of.",
  },
  {
    name: "Muhammad Umar Malik",
    role: "Co-Founder & COO",
    bio: "Umar drives Devzoo's operations, delivery standards, and team execution. He's the one making sure projects are running on time, communication is clear, and clients always know exactly where their project stands.",
  },
];

const whyItems = [
  {
    id: "01",
    title: "Mockups before we build",
    desc: "You see exactly what you're getting before a single line of code is written. No surprises, no rework, no wasted money.",
    featured: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <circle cx="12" cy="10" r="2.5" />
        <path d="M6.5 10c1.2-2 3-3 5.5-3s4.3 1 5.5 3c-1.2 2-3 3-5.5 3s-4.3-1-5.5-3Z" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Weekly project updates",
    desc: "You always know what's happening. No chasing, no guessing. Clear status every step of the way.",
    featured: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <path d="M8 14l2.5 2.5L16 11" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Feedback goes to the CEO",
    desc: "Your voice reaches the top. Every piece of feedback shapes the work directly. No middlemen filtering your priorities.",
    featured: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <path d="M20 2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4l4 4 4-4h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
        <path d="M8 10h8M8 14h5" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Zero jargon, plain English",
    desc: "We explain everything in language you actually understand. No tech-speak, no acronyms, no confusion.",
    featured: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
        <path d="M8 9h8M8 13h5" />
      </svg>
    ),
  },
  {
    id: "05",
    title: "One agency, all services",
    desc: "Website, branding, marketing, and video, handled by one team with one shared context. No juggling vendors.",
    featured: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <circle cx="4" cy="6" r="2" />
        <circle cx="20" cy="6" r="2" />
        <circle cx="4" cy="18" r="2" />
        <circle cx="20" cy="18" r="2" />
        <path d="M6 6.5l4.5 4M17.5 6.5 13 10.5M6 17.5l4.5-4M17.5 17.5 13 13.5" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection>
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel>About Devzoo</SectionLabel>
          <h1 className="mt-2 font-heading text-[40px] font-extrabold leading-[1.05] text-white md:text-[64px]">
            We&apos;re Not a Typical Agency.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/65 md:text-lg">
            No inflated quotes. No disappearing after the deposit. No
            copy-paste solutions. Just clean, precise digital work, built
            around your business, not our convenience.
          </p>
        </div>
      </HeroSection>

      {/* ── Kate Story ──────────────────────────────────────────── */}
      <section className="bg-surface-light px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.35fr_0.65fr] md:items-start">
          <AnimateIn>
            <SectionLabel>Why We Started</SectionLabel>
            <h2 className="mt-2 font-heading text-[30px] font-bold leading-[1.15] text-surface-dark md:text-[44px]">
              Not Every Solution Fits Every Business. Just Like Shoes.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-surface-dark/72">
              <p>
                Kate went to the market looking for the perfect pair. She found
                one that fit just right, but it was too expensive. So she
                settled for a cheaper alternative. At first, it seemed like a
                great choice, comfortable and durable. But over time, she
                started experiencing ankle pain. The problem? The shoe lacked
                the right support.
              </p>
              <p>
                The same happens with digital solutions. Many businesses settle
                for cheaper or generic options, only to face issues later.
                Poor performance, lack of scalability, or work that simply
                doesn&apos;t fit their needs.
              </p>
              <p>
                That&apos;s where Devzoo comes in. We take the time to understand
                your unique challenges and deliver high-quality digital
                solutions tailored specifically to you. No one-size-fits-all
                approach. Just smart, effective work that actually fits.
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delay={120}>
            {/* Dark pull-quote with brand accent */}
            <aside className="relative overflow-hidden rounded-section bg-surface-dark p-8">
              {/* Left brand line */}
              <div
                className="absolute left-0 top-10 bottom-10 w-0.5"
                style={{ background: "linear-gradient(180deg, transparent, rgba(232,71,10,0.8) 40%, rgba(232,71,10,0.8) 60%, transparent)" }}
                aria-hidden="true"
              />
              <p className="pl-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
                The Devzoo Promise
              </p>
              <blockquote className="mt-5 pl-5 font-heading text-xl font-bold leading-snug text-white">
                &ldquo;With Devzoo, you won&apos;t have to settle or struggle. You&apos;ll get
                the right fit from the start.&rdquo;
              </blockquote>
              {/* Decorative quote mark */}
              <span className="pointer-events-none absolute bottom-4 right-6 select-none font-heading text-[80px] font-extrabold leading-none text-white/4">
                &rdquo;
              </span>
            </aside>
          </AnimateIn>
        </div>
      </section>

      {/* ── Mission / Vision / Values ────────────────────────────── */}
      <section className="grain-overlay bg-surface-dark px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <AnimateIn className="max-w-xl">
              <SectionLabel>Mission, Vision &amp; Values</SectionLabel>
              <h2 className="mt-3 font-heading text-[28px] font-bold leading-[1.1] text-white sm:text-[34px] md:text-[44px]">
                Built on trust,<br className="hidden sm:block" /> clarity, and quality.
              </h2>
            </AnimateIn>
            <AnimateIn delay={80} className="max-w-xs shrink-0 md:pb-1">
              <p className="text-sm leading-relaxed text-white/45 md:text-base">
                Three principles that guide every decision we make and every project we deliver.
              </p>
            </AnimateIn>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
            {pillars.map((pillar, i) => (
              <AnimateIn key={pillar.title} delay={i * 100} variant="scale-up">
                <article className="group relative h-full overflow-hidden rounded-card border border-white/8 bg-surface-dark-2 p-8 transition-all duration-300 hover:border-brand/25 hover:shadow-[0_8px_32px_-12px_rgba(232,71,10,0.18)]">
                  {/* Hover gradient */}
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,71,10,0.1),transparent_50%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
                  <div className="relative z-10">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-section border border-brand/20 bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand/18">
                      {pillar.icon}
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-white/58">
                      {pillar.body}
                    </p>
                  </div>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────────────── */}
      <section className="bg-surface-warm px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <AnimateIn className="max-w-xl">
              <SectionLabel>Meet the Team</SectionLabel>
              <h2 className="mt-3 font-heading text-[28px] font-bold leading-[1.1] text-surface-dark sm:text-[34px] md:text-[44px]">
                Two Founders.<br className="hidden sm:block" /> One Mission.
              </h2>
            </AnimateIn>
            <AnimateIn delay={80} className="max-w-xs shrink-0 md:pb-1">
              <p className="text-sm leading-relaxed text-surface-dark/50 md:text-base">
                Small team. No middlemen. You always know who you&apos;re talking to.
              </p>
            </AnimateIn>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            {team.map((member, i) => (
              <AnimateIn key={member.name} delay={i * 120}>
                <article className="relative h-full overflow-hidden rounded-card bg-surface-dark p-8 transition-all duration-300 hover:shadow-[0_12px_40px_-16px_rgba(7,9,12,0.5)]">
                  {/* Subtle top accent */}
                  <div
                    className="absolute inset-x-8 top-0 h-px"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(232,71,10,0.45), transparent)" }}
                    aria-hidden="true"
                  />
                  <div className="flex items-start gap-5">
                    {/* Avatar with glow ring */}
                    <div className="relative shrink-0">
                      <div className="absolute inset-0 rounded-full bg-brand/25 blur-md" aria-hidden="true" />
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-brand/35 bg-surface-dark-2 font-heading text-2xl font-bold text-brand">
                        {member.name[0]}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-white">
                        {member.name}
                      </h3>
                      <p className="mt-1 inline-flex items-center gap-1.5 rounded-full border border-brand/20 bg-brand/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <p className="mt-6 text-sm leading-relaxed text-white/62">
                    {member.bio}
                  </p>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Devzoo ───────────────────────────────────────────── */}
      <div className="bg-surface-dark">
        <BrandTicker inverted />
      </div>
      <section className="bg-surface-dark px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          {/* Header — split layout */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <AnimateIn className="max-w-xl">
              <SectionLabel>Why Devzoo</SectionLabel>
              <h2 className="mt-3 font-heading text-[28px] font-bold leading-[1.1] text-white sm:text-[34px] md:text-[44px]">
                Why businesses{" "}
                <span className="text-brand">choose us.</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={80} className="max-w-xs shrink-0 md:pb-1">
              <p className="text-sm leading-relaxed text-white/45 md:text-base">
                Five things every client notices — usually within the first week of working with us.
              </p>
            </AnimateIn>
          </div>

          {/* Bento grid */}
          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {whyItems.map((item, i) => (
              <AnimateIn
                key={item.id}
                delay={i * 80}
                variant="scale-up"
                className={item.featured ? "md:col-span-2 lg:col-span-2" : ""}
              >
                <article
                  className={`group relative flex h-full flex-col overflow-hidden rounded-card border transition-all duration-300 ${
                    item.featured
                      ? "border-brand/30 bg-surface-dark-2 hover:-translate-y-1 hover:border-brand/55 hover:shadow-[0_20px_60px_-16px_rgba(232,71,10,0.28)]"
                      : "border-white/8 bg-surface-dark-2 hover:-translate-y-1 hover:border-brand/25 hover:shadow-[0_12px_40px_-12px_rgba(232,71,10,0.16)]"
                  } ${item.featured ? "p-8 md:p-10" : "p-7"}`}
                >
                  {/* Ambient glow — featured card only */}
                  {item.featured && (
                    <>
                      <div
                        className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full opacity-15 transition-opacity duration-300 group-hover:opacity-30"
                        style={{ background: "radial-gradient(circle, #E8470A, transparent 70%)" }}
                        aria-hidden="true"
                      />
                      <div
                        className="pointer-events-none absolute inset-x-0 top-0 h-px transition-opacity duration-300 group-hover:opacity-100"
                        style={{ background: "linear-gradient(90deg, transparent, rgba(232,71,10,0.7) 50%, transparent)" }}
                        aria-hidden="true"
                      />
                    </>
                  )}

                  <div className="relative z-10 flex flex-1 flex-col">
                    {/* Top row: number + icon */}
                    <div className="flex items-start justify-between">
                      <div
                        className={`flex items-center justify-center rounded-section border border-brand/20 bg-brand/10 text-brand transition-all duration-300 group-hover:bg-brand/18 group-hover:border-brand/40 ${
                          item.featured ? "h-14 w-14" : "h-12 w-12"
                        }`}
                      >
                        {item.icon}
                      </div>
                      <span className="font-mono text-[11px] font-bold tracking-widest text-white/20 group-hover:text-brand/40 transition-colors duration-300">
                        {item.id}
                      </span>
                    </div>

                    {/* Content */}
                    <div className={`flex flex-1 flex-col ${item.featured ? "mt-8" : "mt-6"}`}>
                      <h3
                        className={`font-heading font-bold leading-snug text-white ${
                          item.featured ? "text-2xl md:text-3xl" : "text-xl"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`mt-3 leading-relaxed text-white/52 ${
                          item.featured ? "text-base" : "text-sm"
                        }`}
                      >
                        {item.desc}
                      </p>
                    </div>

                    {/* Bottom accent line */}
                    <div
                      className="mt-6 h-px w-0 rounded-full bg-brand/50 transition-all duration-500 group-hover:w-full"
                      aria-hidden="true"
                    />
                  </div>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <PageCTA
        badge="Ready to Work Together?"
        heading="Let's Build Something That Actually Works."
        subtext="Tell us about your business and we'll tell you exactly how we can help."
        primaryLabel="Book a Free Discovery Call"
        primaryHref="/contact"
        secondaryLabel="See Our Work"
        secondaryHref="/portfolio"
      />
    </>
  );
}
