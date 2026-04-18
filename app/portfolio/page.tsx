"use client";

import { useState } from "react";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

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
      {/* Hero */}
      <section className="bg-surface-dark py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Portfolio</SectionLabel>
          <h1 className="font-heading font-extrabold text-[40px] md:text-[64px] leading-[1.05] text-white mt-2">
            Work we&apos;re proud to put our name on
          </h1>
          <p className="mt-6 text-base md:text-lg font-body text-white/60 leading-relaxed">
            Real projects for real businesses. Every case study shows the
            problem, the approach, and the result.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="bg-surface-light py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-sm font-body font-medium px-4 py-2 rounded-chip transition-all duration-200 ${
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
            <p className="text-center text-sm font-body text-surface-dark/40">
              No projects in this category yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project) => (
                <Link
                  key={project.slug}
                  href={`/portfolio/${project.slug}`}
                  className="group bg-surface-warm rounded-card p-6 border border-transparent hover:border-brand transition-all duration-200"
                >
                  <div className="aspect-video bg-surface-dark/8 rounded-btn mb-4 flex items-center justify-center">
                    <span className="text-xs font-body text-surface-dark/30">Preview</span>
                  </div>
                  <span className="text-xs font-heading font-semibold uppercase tracking-wider text-brand">
                    {project.category}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-surface-dark mt-2 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm font-body text-surface-dark/60 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-body bg-surface-dark/8 text-surface-dark/50 px-2 py-1 rounded-chip"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-dark py-24 md:py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-bold text-[30px] md:text-[44px] leading-[1.15] text-white">
            Want results like these?
          </h2>
          <p className="mt-4 text-base font-body text-white/60 leading-relaxed">
            Book a free call and tell us what you&apos;re building.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">Start a Project</Button>
          </div>
        </div>
      </section>
    </>
  );
}
