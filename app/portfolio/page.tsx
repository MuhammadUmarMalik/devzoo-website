"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import SectionLabel from "@/components/ui/SectionLabel";
import PageCTA from "@/components/ui/PageCTA";

const categories = ["All", "Web Development", "Digital Marketing", "Graphic Design", "Video Editing"];

const projects = [
  {
    slug: "powerschool",
    title: "PowerSchool",
    category: "Web Development",
    description:
      "A unified platform website for the world's leading K-12 EdTech company. 60M+ students, 140+ countries.",
    tags: ["EdTech", "SaaS", "AI Integration", "Enterprise"],
    thumbnail: null,
    accent: "#E8470A",
  },
  {
    slug: "field-engineer",
    title: "Field Engineer",
    category: "Web Development",
    description:
      "A global B2B marketplace connecting 75,000+ vetted engineers with businesses across 200+ countries.",
    tags: ["Marketplace", "Web App", "API Integration", "Mobile-Ready"],
    thumbnail:
      "https://cdn.prod.website-files.com/5b6df8bb681f89ec20b48f37/5bad00b3f68e8b74d9581a4e_business-homepage-feature-01-screenshot%403x.png",
    accent: "#E8470A",
  },
];

export default function PortfolioPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <HeroSection>
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Portfolio</SectionLabel>
          <h1 className="mt-2 font-heading text-[40px] font-extrabold leading-[1.05] text-white md:text-[64px]">
            Work we&apos;re proud to put our name on
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/60 md:text-lg">
            Real projects for real businesses. Every case study shows the
            problem, the approach, and the result.
          </p>
        </div>
      </HeroSection>

      <section className="bg-surface-light px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          {/* Filter tabs */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`cursor-pointer rounded-chip px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  active === cat
                    ? "bg-brand text-white"
                    : "bg-surface-warm text-surface-dark/60 hover:text-surface-dark"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="text-center text-sm text-surface-dark/40">
              No projects in this category yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project) => (
                <Link
                  key={project.slug}
                  href={`/portfolio/${project.slug}`}
                  className="group flex cursor-pointer flex-col overflow-hidden rounded-card border border-surface-dark/8 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_16px_48px_-12px_rgba(232,71,10,0.16)]"
                >
                  {/* Thumbnail area */}
                  <div className="relative aspect-video overflow-hidden bg-surface-dark">
                    {project.thumbnail ? (
                      <Image
                        src={project.thumbnail}
                        alt={`${project.title} screenshot`}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
                      />
                    ) : (
                      /* Branded placeholder when no screenshot */
                      <div className="flex h-full flex-col items-center justify-center gap-3 bg-surface-dark-2">
                        <span className="font-heading text-4xl font-extrabold text-white/10">
                          {project.title.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                        </span>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/20">
                          {project.category}
                        </span>
                      </div>
                    )}

                    {/* Hover overlay — always */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-surface-dark/85 opacity-0 backdrop-blur-[2px] transition-opacity duration-200 group-hover:opacity-100">
                      <span className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-brand">
                        {project.category}
                      </span>
                      <span className="flex items-center gap-1.5 font-heading text-sm font-semibold text-white">
                        View Case Study
                        <svg viewBox="0 0 16 16" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" />
                        </svg>
                      </span>
                    </div>

                    {/* Top shimmer on hover */}
                    <div
                      className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ background: "linear-gradient(90deg, transparent, rgba(232,71,10,0.8) 50%, transparent)" }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Card body */}
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand">
                      {project.category}
                    </span>
                    <h3 className="mt-2 font-heading text-xl font-bold text-surface-dark">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-surface-dark/60">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-chip bg-surface-dark/6 px-2.5 py-1 text-xs text-surface-dark/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <PageCTA
        badge="Want Results Like These?"
        heading="Let's build something you're proud to show off."
        subtext="Book a free call and tell us what you're building. We'll show you exactly how we can help."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="View Pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
