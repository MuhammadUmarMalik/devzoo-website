import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: {
    absolute:
      "About Devzoo - The Digital Agency Built for Startups & Small Businesses",
  },
  description:
    "Meet the team behind Devzoo. Founded by Ehtasham ul Haq and Muhammad Umar Malik, we're a modern digital agency delivering clean, reliable digital solutions with zero shortcuts.",
};

const pillars = [
  {
    title: "Our Mission",
    body:
      "To simplify digital product development for businesses while delivering top-notch quality. No complexities, no compromises - just high-quality digital solutions designed to support your success.",
  },
  {
    title: "Our Vision",
    body:
      "To simplify digital solutions, deliver glitch-free products, and build lifelong partnerships with clients built on trust, transparency, and real results.",
  },
  {
    title: "Our Values",
    body:
      "Trust - We earn it by delivering on every promise, every time. Passion - We love what we do, and it shows in every project. Adaptability - The digital world moves fast. So do we. Quality - No shortcuts. Only solutions that actually work.",
  },
];

const team = [
  {
    name: "Ehtasham ul Haq",
    role: "Founder & CEO",
    bio:
      "Ehtasham leads Devzoo's strategy, client relationships, and product vision. With a sharp eye for quality and an obsession for delivering results, he makes sure every project that leaves Devzoo is something both the client and the team are proud of.",
  },
  {
    name: "Muhammad Umar Malik",
    role: "Co-Founder & COO",
    bio:
      "Umar drives Devzoo's operations, delivery standards, and team execution. He's the one making sure projects are running on time, communication is clear, and clients always know exactly where their project stands.",
  },
];

const reasons = [
  "Mockups before we build - you see it before it's built.",
  "Weekly project updates - you always know what's happening.",
  "Client feedback goes to the CEO - your voice shapes our work.",
  "Zero jargon - we explain everything in plain English.",
  "One agency, all services - no juggling multiple vendors.",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-surface-dark px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel>About Devzoo</SectionLabel>
          <h1 className="mt-2 font-heading text-[40px] font-extrabold leading-[1.05] text-white md:text-[64px]">
            We&apos;re Not a Typical Agency.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/65 md:text-lg">
            No inflated quotes. No disappearing after the deposit. No
            copy-paste solutions. Just clean, precise digital work - built
            around your business, not our convenience.
          </p>
        </div>
      </section>

      <section className="bg-surface-light px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
          <div>
            <SectionLabel>Why We Started</SectionLabel>
            <h2 className="mt-2 font-heading text-[30px] font-bold leading-[1.15] text-surface-dark md:text-[44px]">
              Not Every Solution Fits Every Business - Just Like Shoes.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-surface-dark/72">
              <p>
                Kate went to the market looking for the perfect pair. She found
                one that fit just right, but it was too expensive. So she
                settled for a cheaper alternative. At first, it seemed like a
                great choice - comfortable and durable. But over time, she
                started experiencing ankle pain. The problem? The shoe lacked
                the right support.
              </p>
              <p>
                The same happens with digital solutions. Many businesses settle
                for cheaper or generic options, only to face issues later -
                poor performance, lack of scalability, or work that simply
                doesn&apos;t fit their needs.
              </p>
              <p>
                That&apos;s where Devzoo comes in. We take the time to understand
                your unique challenges and deliver high-quality digital
                solutions tailored specifically to you. No one-size-fits-all
                approach - just smart, effective work that actually fits.
              </p>
            </div>
          </div>
          <aside className="rounded-section bg-surface-warm p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">
              Pull Quote
            </p>
            <p className="mt-5 font-heading text-2xl font-bold leading-tight text-surface-dark">
              &quot;With Devzoo, you won&apos;t have to settle or struggle. You&apos;ll get
              the right fit from the start.&quot;
            </p>
          </aside>
        </div>
      </section>

      <section className="bg-surface-dark px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Mission, Vision & Values</SectionLabel>
            <h2 className="mt-2 font-heading text-[30px] font-bold leading-[1.15] text-white md:text-[44px]">
              Built on trust, clarity, and quality.
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="rounded-card bg-surface-dark-2 p-8">
                <div className="mb-5 h-10 w-10 rounded-section bg-brand/10" />
                <h3 className="font-heading text-2xl font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/62">
                  {pillar.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-warm px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Meet the Team</SectionLabel>
            <h2 className="mt-2 font-heading text-[30px] font-bold leading-[1.15] text-surface-dark md:text-[44px]">
              Two Founders. One Mission. Your Success.
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {team.map((member) => (
              <article key={member.name} className="rounded-card bg-surface-dark p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-section bg-brand/12 font-heading text-2xl font-bold text-brand">
                  {member.name[0]}
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">
                  {member.name}
                </h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand">
                  {member.role}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-white/65">
                  {member.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-light px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Why Devzoo</SectionLabel>
            <h2 className="mt-2 font-heading text-[30px] font-bold leading-[1.15] text-surface-dark md:text-[44px]">
              Why Businesses Choose Devzoo
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="rounded-card border border-surface-dark/10 bg-surface-warm p-6 text-sm leading-relaxed text-surface-dark/75"
              >
                {reason}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-dark px-6 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-[30px] font-bold leading-[1.15] text-white md:text-[44px]">
            Let&apos;s Build Something That Actually Works.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            Tell us about your business and we&apos;ll tell you exactly how we can
            help.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Book a Free Discovery Call
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
