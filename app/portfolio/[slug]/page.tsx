import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import HeroSection from "@/components/ui/HeroSection";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimateIn from "@/components/ui/AnimateIn";
import PageCTA from "@/components/ui/PageCTA";
import { getCaseStudy, caseStudies } from "@/lib/case-studies";

interface Props {
  params: Promise<{ slug: string }>;
}

type ApproachStep = {
  title: string;
  body: string;
  icon: React.ReactNode;
  screenshot?: string;
  screenshotAlt?: string;
};

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return { title: "Case Study Not Found" };
  const url = `https://thedevzoo.com/portfolio/${slug}`;
  return {
    title: { absolute: `${cs.client} Case Study | Devzoo` },
    description: cs.cardDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${cs.client} Case Study | Devzoo`,
      description: cs.cardDescription,
      url,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const approachSteps: ApproachStep[] =
    cs.approach.length >= 4
      ? cs.approach
      : [
          ...cs.approach,
          {
            title: "Measurement and refinement",
            body: "Once the core experience was in place, the final layer focused on improving clarity, tightening the handoff between content and conversion, and making the system easier to scale over time.",
            icon: (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M3 3v18h18" />
                <path d="m7 15 4-4 3 3 5-6" />
              </svg>
            ),
            screenshot: undefined,
            screenshotAlt: undefined,
          },
        ];

  const hasAnyScreenshot = approachSteps.some((step) => step.screenshot);
  const displayUrl = cs.liveUrl
    ? cs.liveUrl.replace(/^https?:\/\//, "")
    : cs.client.toLowerCase().replace(/\s+/g, "") + ".com";

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <HeroSection>
        <div className="mx-auto max-w-5xl">
          {/* Back link must be a direct sibling of SectionLabel so globals.css
              adds the 5rem gap (.inline-flex...text-white\/40 + .section-label) */}
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-white/40 transition-colors duration-200 hover:text-white"
          >
            <svg viewBox="0 0 16 16" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
              <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" />
            </svg>
            Back to Portfolio
          </Link>
          <div className="mt-10">
            <SectionLabel>Case Study</SectionLabel>
          </div>
          <h1 className="font-heading text-[36px] font-extrabold leading-[1.05] text-white md:text-[60px]">
            {cs.client}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
            {cs.cardDescription}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {cs.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-xs font-medium text-white/60">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </HeroSection>

      {/* ── Meta strip + overview ─────────────────────────────────── */}
      <section className="bg-surface-light px-6 py-14">
        <div className="mx-auto max-w-5xl">
          {/* Meta row */}
          <div className="grid grid-cols-2 gap-6 border-b border-surface-dark/8 pb-12 md:grid-cols-4">
            {[
              { label: "Client", value: cs.client },
              { label: "Service", value: cs.service },
              { label: "Timeline", value: cs.timeline },
              { label: "Industry", value: cs.industry },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-surface-dark/40">
                  {item.label}
                </p>
                <p className="mt-1.5 font-heading text-base font-bold text-surface-dark">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Overview */}
          <AnimateIn>
            <div className="pt-12">
              <p className="text-base leading-[1.8] text-surface-dark/70 md:text-lg">
                {cs.overview}
              </p>
              {cs.liveUrl && (
                <a
                  href={cs.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors duration-200 hover:text-brand-hover"
                >
                  View live site
                  <svg viewBox="0 0 16 16" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" />
                  </svg>
                </a>
              )}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Hero screenshot (only when available) ─────────────────── */}
      {cs.heroImage && (
        <section className="bg-surface-dark px-6 pt-16 pb-0">
          <div className="mx-auto max-w-6xl">
            <AnimateIn>
              <div className="overflow-hidden rounded-t-section border border-b-0 border-white/10 shadow-[0_32px_80px_-16px_rgba(0,0,0,0.6)]">
                {/* Browser chrome */}
                <div className="flex items-center gap-3 border-b border-white/8 bg-surface-dark-3 px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-white/15" />
                    <span className="h-3 w-3 rounded-full bg-white/15" />
                    <span className="h-3 w-3 rounded-full bg-white/15" />
                  </div>
                  <div className="flex flex-1 items-center gap-2 rounded-md bg-white/8 px-3 py-1.5">
                    <svg viewBox="0 0 16 16" fill="none" strokeWidth="1.5" strokeLinecap="round" className="h-3 w-3 shrink-0 text-white/30" aria-hidden="true">
                      <circle cx="8" cy="8" r="6" stroke="currentColor" />
                      <path d="M2 8h12M8 2a10 10 0 0 1 0 12M8 2a10 10 0 0 0 0 12" stroke="currentColor" />
                    </svg>
                    <span className="font-mono text-xs text-white/30">{displayUrl}</span>
                  </div>
                </div>
                <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src={cs.heroImage}
                    alt={`${cs.client} platform, live screenshot`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 1200px"
                    priority
                  />
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>
      )}

      {/* ── The Challenge ─────────────────────────────────────────── */}
      <section className={`px-6 py-24 md:py-28 ${cs.heroImage ? "bg-surface-dark" : "bg-surface-warm"}`}>
        <div className="mx-auto max-w-5xl">
          <AnimateIn>
            <div className={`rounded-section border p-10 md:p-14 ${cs.heroImage ? "border-white/8 bg-surface-dark-2" : "border-surface-dark/8 bg-white"}`}>
              <SectionLabel>The Challenge</SectionLabel>
              <h2 className={`mt-3 font-heading text-[26px] font-bold leading-[1.2] md:text-[36px] ${cs.heroImage ? "text-white" : "text-surface-dark"}`}>
                What we were up against
              </h2>
              <p className={`mt-6 text-base leading-[1.8] ${cs.heroImage ? "text-white/65" : "text-surface-dark/70"}`}>
                {cs.challenge}
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── How We Built It ───────────────────────────────────────── */}
      <section className="bg-surface-dark px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <AnimateIn className="mx-auto max-w-3xl text-center">
            <SectionLabel>Our Approach</SectionLabel>
            <h2 className="mt-3 font-heading text-[26px] font-bold leading-[1.2] text-white md:text-[36px]">
              How we built it
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/45">
              {approachSteps.length} distinct layers, each solving a specific problem on the platform.
            </p>
          </AnimateIn>

          {hasAnyScreenshot ? (
            /* Mixed layout: screenshot steps = split panel, plain steps = full-width */
            <div className="mt-16 space-y-5">
              {approachSteps.map((step, i) => {
                const isEven = i % 2 === 0;
                return (
                  <AnimateIn key={step.title} delay={i * 60}>
                    <div
                      className={`group relative overflow-hidden rounded-section border border-white/8 bg-surface-dark-2 transition-all duration-300 hover:border-brand/25 hover:shadow-[0_16px_48px_-16px_rgba(232,71,10,0.22)] ${
                        step.screenshot ? "grid grid-cols-1 lg:grid-cols-2" : ""
                      }`}
                    >
                      {/* Hover glow */}
                      <div
                        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{ background: "radial-gradient(circle at 20% 50%, rgba(232,71,10,0.07), transparent 60%)" }}
                        aria-hidden="true"
                      />

                      {/* Text panel */}
                      <div className={`relative z-10 flex flex-col justify-center p-8 md:p-10 ${step.screenshot && !isEven ? "lg:order-2" : ""}`}>
                        <div className="mb-6 flex items-center gap-4">
                          <span className="font-mono text-[11px] font-bold tracking-widest text-brand/50">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div className="h-px flex-1 bg-white/8" aria-hidden="true" />
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-section border border-brand/20 bg-brand/10 text-brand transition-colors duration-200 group-hover:bg-brand/20">
                            {step.icon}
                          </div>
                        </div>
                        <h3 className="font-heading text-xl font-bold leading-snug text-white md:text-2xl">
                          {step.title}
                        </h3>
                        <p className="mt-4 text-sm leading-relaxed text-white/55 md:text-base">
                          {step.body}
                        </p>
                        <div className="mt-8 h-px w-0 rounded-full bg-brand/40 transition-all duration-500 group-hover:w-16" aria-hidden="true" />
                      </div>

                      {/* Screenshot panel */}
                      {step.screenshot ? (
                        <div
                          className={`relative overflow-hidden ${isEven ? "lg:order-2" : "lg:order-1"}`}
                          style={{ minHeight: "280px" }}
                        >
                          <div
                            className={`pointer-events-none absolute inset-y-0 z-10 w-20 ${
                              isEven
                                ? "left-0 bg-linear-to-r from-surface-dark-2 to-transparent"
                                : "right-0 bg-linear-to-l from-surface-dark-2 to-transparent"
                            }`}
                            aria-hidden="true"
                          />
                          <Image
                            src={step.screenshot}
                            alt={step.screenshotAlt ?? `${step.title} screenshot`}
                            fill
                            className="object-cover object-top-left transition-transform duration-500 group-hover:scale-[1.03]"
                            sizes="(max-width: 1024px) 100vw, 576px"
                          />
                        </div>
                      ) : (
                        /* No screenshot — show icon-feature panel instead */
                        <div className="relative flex items-center justify-center border-t border-white/6 p-10 lg:border-l lg:border-t-0">
                          <div className="text-center">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-section border border-brand/25 bg-brand/10 text-brand">
                              {step.icon}
                            </div>
                            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-white/30">
                              {step.title}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          ) : (
            /* Uniform 2-col card grid when no screenshots at all */
            <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
              {approachSteps.map((step, i) => (
                <AnimateIn key={step.title} delay={i * 70} variant="scale-up">
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-card border border-white/8 bg-surface-dark-2 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-[0_12px_40px_-12px_rgba(232,71,10,0.2)]">
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ background: "radial-gradient(circle at top left, rgba(232,71,10,0.08), transparent 55%)" }}
                      aria-hidden="true"
                    />
                    <div className="relative z-10 flex flex-1 flex-col">
                      {/* Number + icon */}
                      <div className="flex items-start justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-section border border-brand/20 bg-brand/10 text-brand transition-colors duration-200 group-hover:bg-brand/20">
                          {step.icon}
                        </div>
                        <span className="font-mono text-[11px] font-bold tracking-widest text-white/20 transition-colors duration-300 group-hover:text-brand/40">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="mt-6 font-heading text-lg font-bold leading-snug text-white">
                        {step.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">
                        {step.body}
                      </p>
                      <div className="mt-6 h-px w-0 rounded-full bg-brand/40 transition-all duration-500 group-hover:w-full" aria-hidden="true" />
                    </div>
                  </article>
                </AnimateIn>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Platform screenshots gallery (only when available) ────── */}
      {cs.screenshots && cs.screenshots.length > 0 && (
        <section className="bg-surface-warm px-6 py-24 md:py-28">
          <div className="mx-auto max-w-6xl">
            <AnimateIn className="mb-12 text-center">
              <SectionLabel>Platform Preview</SectionLabel>
              <h2 className="mt-3 font-heading text-[26px] font-bold leading-[1.2] text-surface-dark md:text-[36px]">
                Inside the product
              </h2>
            </AnimateIn>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {cs.screenshots.map((shot, i) => (
                <AnimateIn key={shot.src} delay={i * 80} variant="scale-up">
                  <figure className="group overflow-hidden rounded-card border border-surface-dark/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_-12px_rgba(7,9,12,0.18)]">
                    <div className="flex items-center gap-2 border-b border-surface-dark/6 bg-surface-warm px-4 py-2.5">
                      <div className="flex gap-1">
                        <span className="h-2 w-2 rounded-full bg-surface-dark/15" />
                        <span className="h-2 w-2 rounded-full bg-surface-dark/15" />
                        <span className="h-2 w-2 rounded-full bg-surface-dark/15" />
                      </div>
                      <div className="h-3.5 flex-1 rounded bg-surface-dark/6" />
                    </div>
                    <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/10" }}>
                      <Image
                        src={shot.src}
                        alt={shot.caption}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 576px"
                      />
                    </div>
                    <figcaption className="px-5 py-3 text-xs leading-snug text-surface-dark/45">
                      {shot.caption}
                    </figcaption>
                  </figure>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Results ──────────────────────────────────────────────── */}
      <section className="bg-surface-light px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <AnimateIn className="mx-auto max-w-3xl text-center">
            <SectionLabel>The Results</SectionLabel>
            <h2 className="mt-3 font-heading text-[26px] font-bold leading-[1.2] text-surface-dark md:text-[36px]">
              What it looks like when it works
            </h2>
          </AnimateIn>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cs.results.map((result, i) => (
              <AnimateIn key={result.label} delay={i * 80} variant="scale-up">
                <div className="group relative overflow-hidden rounded-card border border-surface-dark/10 bg-surface-warm p-6 text-center transition-all duration-300 hover:border-brand/25 hover:shadow-[0_8px_32px_-8px_rgba(232,71,10,0.14)]">
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(232,71,10,0.6) 50%, transparent)" }}
                    aria-hidden="true"
                  />
                  <p className="font-heading text-[32px] font-extrabold leading-none text-brand md:text-[40px]">
                    {result.value}
                  </p>
                  <p className="mt-2 text-xs font-medium leading-snug text-surface-dark/55">
                    {result.label}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={160}>
            <div className="relative mt-10 overflow-hidden rounded-card border border-surface-dark/8 bg-surface-warm p-8 md:p-10">
              <div
                className="pointer-events-none absolute left-0 top-8 bottom-8 w-0.5 rounded-full"
                style={{ background: "linear-gradient(180deg, transparent, rgba(232,71,10,0.7) 40%, rgba(232,71,10,0.7) 60%, transparent)" }}
                aria-hidden="true"
              />
              <p className="pl-6 text-base leading-[1.8] text-surface-dark/70">
                {cs.resultNarrative}
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <PageCTA
        badge="Want Results Like This?"
        heading="Let's build something worth showing off."
        subtext="Book a free discovery call and tell us what you're building. We'll show you exactly how we can help."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="See More Work"
        secondaryHref="/portfolio"
      />
    </>
  );
}
