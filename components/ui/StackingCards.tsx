"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { cn } from "@/libs/utils";

interface ServiceItem {
  title: string;
  body: string;
  includes: string[];
  extras?: { label: string; value: string }[];
  href: string;
  cta: string;
  icon: React.ReactNode;
  index: number;
}

const NAVBAR_H = 88; // px — clears the fixed nav
const PEEK = 20;     // px each previous card peeks out

function CheckIcon() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-brand/30 bg-brand/12 text-brand">
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" aria-hidden="true">
        <path d="M3 8l3.5 3.5L13 5" />
      </svg>
    </span>
  );
}

function ServiceCard({ service }: { service: ServiceItem }) {
  const cardRef = useRef<HTMLElement>(null);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const stickyTop = NAVBAR_H + service.index * PEEK;

    const observer = new IntersectionObserver(
      ([entry]) => setStuck(!entry.isIntersecting),
      { rootMargin: `-${stickyTop + 1}px 0px 0px 0px`, threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [service.index]);

  const num = String(service.index + 1).padStart(2, "0");

  return (
    <article
      ref={cardRef}
      className={cn(
        "group relative overflow-hidden rounded-section border transition-all duration-300",
        stuck
          ? "border-brand/20 shadow-[0_-4px_24px_rgba(232,71,10,0.12)]"
          : "border-white/8 shadow-[0_16px_56px_rgba(0,0,0,0.45)]",
        "bg-surface-dark",
      )}
    >
      {/* Top shimmer */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(232,71,10,0.55) 50%, transparent)" }}
        aria-hidden="true"
      />

      {/* Ambient glow top-right */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-10 transition-opacity duration-500 group-hover:opacity-20"
        style={{ background: "radial-gradient(circle, #E8470A, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* ── Header row ── */}
      <div className="relative z-10 flex items-center justify-between gap-6 border-b border-white/8 px-8 py-5 md:px-10">
        <div className="flex items-center gap-4">
          {/* Step badge */}
          <span className="font-mono text-xs font-bold tracking-widest text-brand/50">
            {num}
          </span>
          {/* Icon */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-section border border-brand/20 bg-brand/10 text-brand transition-colors duration-200 group-hover:bg-brand/18">
            {service.icon}
          </div>
          {/* Title */}
          <h2 className="font-heading text-xl font-bold text-white md:text-2xl">
            {service.title}
          </h2>
        </div>

        {/* View page link */}
        <Link
          href={service.href}
          className="group/link hidden shrink-0 items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-white/30 transition-colors duration-200 hover:text-brand sm:inline-flex"
          aria-label={`View ${service.title} dedicated page`}
        >
          View page
          <svg viewBox="0 0 16 16" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" aria-hidden="true">
            <path d="M3 13 13 3M7 3h6v6" stroke="currentColor" />
          </svg>
        </Link>
      </div>

      {/* ── Body ── */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_280px]">

        {/* Left: description + includes */}
        <div className="px-8 py-8 md:px-10 md:py-10">
          <p className="text-base leading-relaxed text-white/60">
            {service.body}
          </p>

          {/* Includes */}
          <div className="mt-8">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white/30">
              What&apos;s included
            </p>
            <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/65">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Extras */}
          {service.extras && (
            <div className="mt-6 flex flex-wrap gap-3">
              {service.extras.map((extra) => (
                <div
                  key={extra.label}
                  className="rounded-btn border border-white/8 bg-white/5 px-3 py-1.5"
                >
                  <span className="text-[11px] font-bold uppercase tracking-widest text-white/30">
                    {extra.label}:{" "}
                  </span>
                  <span className="text-xs text-white/55">{extra.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right: CTA panel */}
        <div className="relative flex flex-col justify-between overflow-hidden border-t border-white/8 bg-surface-dark-3 px-8 py-8 lg:border-l lg:border-t-0">
          {/* Vertical brand line */}
          <div
            className="pointer-events-none absolute left-0 inset-y-8 w-px rounded-full"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(232,71,10,0.5) 40%, rgba(232,71,10,0.5) 60%, transparent)" }}
            aria-hidden="true"
          />

          {/* Faint service number watermark */}
          <span
            className="pointer-events-none absolute -bottom-4 -right-2 select-none font-heading text-[96px] font-extrabold leading-none text-white/[0.03]"
            aria-hidden="true"
          >
            {num}
          </span>

          <div className="relative z-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand">
              Get started
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/45">
              Book a free 30-minute discovery call. No pressure, no pitch decks — just a clear conversation about your project.
            </p>
          </div>

          <div className="relative z-10 mt-8 space-y-3">
            <Link
              href="/contact"
              className="group/btn inline-flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-btn bg-brand px-5 py-3 font-body text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-hover hover:shadow-[0_0_24px_rgba(232,71,10,0.4)]"
            >
              Book a Free Call
              <svg viewBox="0 0 16 16" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" />
              </svg>
            </Link>
            <Link
              href={service.href}
              className="inline-flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-btn border border-white/10 px-5 py-3 text-sm font-medium text-white/50 transition-all duration-200 hover:border-white/20 hover:text-white/80 sm:hidden"
            >
              View full service page
            </Link>
          </div>
        </div>

      </div>
    </article>
  );
}

interface StackingCardsProps {
  services: Omit<ServiceItem, "index">[];
}

export default function StackingCards({ services }: StackingCardsProps) {
  return (
    <div className="relative space-y-0">
      {services.map((service, i) => (
        <div
          key={service.href}
          className="sticky mb-4"
          style={{
            top: `${NAVBAR_H + i * PEEK}px`,
            zIndex: 10 + i,
          }}
        >
          <ServiceCard service={{ ...service, index: i }} />
        </div>
      ))}
      {/* Scroll buffer so the last card unsticks cleanly */}
      <div className="h-24" aria-hidden="true" />
    </div>
  );
}
