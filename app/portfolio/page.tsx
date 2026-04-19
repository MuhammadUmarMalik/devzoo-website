"use client";

import { useState } from "react";
import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import SectionLabel from "@/components/ui/SectionLabel";
import PageCTA from "@/components/ui/PageCTA";

const categories = ["All", "Web Development", "Digital Marketing", "Graphic Design", "Video Editing"];

const projects = [
  {
    slug: "example-project-1",
    title: "Coming Soon",
    category: "Web Development",
    description: "Case studies will appear here as projects are completed.",
    tags: ["Next.js", "Tailwind"],
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
                  className="group cursor-pointer rounded-card border border-transparent bg-surface-warm transition-all duration-200 hover:border-brand hover:shadow-lg"
                >
                  {/* Image area with hover overlay */}
                  <div className="relative aspect-video overflow-hidden rounded-t-card bg-surface-dark/8">
                    <div className="flex h-full items-center justify-center">
                      <span className="text-xs text-surface-dark/30">Preview</span>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-surface-dark/80 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      <span className="font-heading text-sm font-semibold uppercase tracking-[0.12em] text-brand">
                        {project.category}
                      </span>
                      <span className="flex items-center gap-1 text-sm font-medium text-white">
                        View Case Study
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-4 w-4 translate-x-0 transition-transform duration-200 group-hover:translate-x-1"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-6">
                    <span className="text-xs font-heading font-semibold uppercase tracking-wider text-brand">
                      {project.category}
                    </span>
                    <h3 className="mt-2 font-heading text-xl font-bold text-surface-dark">
                      {project.title}
                    </h3>
                    <p className="mb-4 mt-2 text-sm leading-relaxed text-surface-dark/60">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-chip bg-surface-dark/8 px-2 py-1 text-xs text-surface-dark/50"
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
