"use client";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/libs/utils";
import { CALENDLY_URL } from "@/libs/site-links";

interface PricingTier {
  name: string;
  price: string;
  bestFor: string;
  includes: string[];
  highlighted?: boolean;
}

const NAVBAR_H = 88;
const PEEK = 28;

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" />
    </svg>
  );
}

function PricingCard({ tier, index }: { tier: PricingTier; index: number }) {
  const cardRef = useRef<HTMLElement>(null);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const stickyTop = NAVBAR_H + index * PEEK;
    const observer = new IntersectionObserver(
      ([entry]) => setStuck(!entry.isIntersecting),
      { rootMargin: `-${stickyTop + 1}px 0px 0px 0px`, threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <article
      ref={cardRef}
      className={cn(
        "group relative overflow-hidden rounded-card transition-all duration-300",
        tier.highlighted
          ? "border-2 border-brand bg-surface-dark shadow-[0_16px_48px_-16px_rgb(232_71_10/0.35)]"
          : "border border-surface-dark/10 bg-surface-warm",
        stuck && !tier.highlighted && "border-brand/20 shadow-[0_-4px_32px_rgba(232,71,10,0.08)]",
        stuck && tier.highlighted && "shadow-[0_-4px_40px_rgba(232,71,10,0.3)]",
      )}
    >
      {/* Top shimmer line */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(232,71,10,0.6) 50%, transparent)" }}
        aria-hidden="true"
      />

      {tier.highlighted && (
        <div
          className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-300 group-hover:opacity-65"
          style={{ background: "radial-gradient(circle at top right, rgba(232,71,10,0.26), transparent 55%)" }}
          aria-hidden="true"
        />
      )}

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_auto] md:items-center">

        {/* Left body */}
        <div className="p-7 md:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className={cn(
              "font-heading text-2xl font-bold md:text-3xl",
              tier.highlighted ? "text-white" : "text-surface-dark",
            )}>
              {tier.name}
            </h2>

            {tier.highlighted && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/15 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" aria-hidden="true" />
                Most Popular
              </span>
            )}
          </div>

          <p className={cn(
            "mt-3 font-heading text-xl font-extrabold md:text-2xl",
            tier.highlighted ? "text-white" : "text-surface-dark",
          )}>
            {tier.price}
          </p>

          <p className={cn(
            "mt-3 text-sm leading-relaxed",
            tier.highlighted ? "text-white/55" : "text-surface-dark/60",
          )}>
            <span className="font-semibold">Best for:</span> {tier.bestFor}
          </p>

          <div className={cn("my-5 h-px", tier.highlighted ? "bg-white/10" : "bg-surface-dark/8")} />

          <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {tier.includes.map((item) => (
              <li
                key={item}
                className={cn(
                  "flex items-start gap-2.5 text-sm",
                  tier.highlighted ? "text-white/72" : "text-surface-dark/70",
                )}
              >
                <span className={cn(
                  "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                  tier.highlighted
                    ? "border border-brand/30 bg-brand/15 text-brand"
                    : "border border-brand/20 bg-brand/8 text-brand",
                )}>
                  <CheckIcon />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right CTA */}
        <div className={cn(
          "flex flex-col items-start gap-4 border-t p-7 md:min-w-[220px] md:border-l md:border-t-0 md:p-8 lg:p-10",
          tier.highlighted ? "border-white/10" : "border-surface-dark/8",
        )}>
          <a
            href={tier.name === "Enterprise" ? "/contact" : CALENDLY_URL}
            target={tier.name === "Enterprise" ? undefined : "_blank"}
            rel={tier.name === "Enterprise" ? undefined : "noopener noreferrer"}
            className={cn(
              "group/btn inline-flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-btn px-6 py-3 font-body text-base font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2",
              tier.highlighted
                ? "bg-brand text-white hover:bg-brand-hover hover:shadow-[0_0_28px_rgba(232,71,10,0.5)]"
                : "border border-surface-dark/20 bg-transparent text-surface-dark hover:border-brand hover:text-brand",
            )}
          >
            <span>{tier.name === "Enterprise" ? "Get a Custom Quote" : "Book a Free Call"}</span>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-200 group-hover/btn:translate-x-0 group-hover/btn:opacity-100"
              aria-hidden="true"
            >
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" />
            </svg>
          </a>

          <p className={cn(
            "text-xs leading-relaxed",
            tier.highlighted ? "text-white/30" : "text-surface-dark/35",
          )}>
            Free 30-min call · No pressure
          </p>
        </div>
      </div>
    </article>
  );
}

export default function PricingStackingCards({ tiers }: { tiers: PricingTier[] }) {
  return (
    <div className="relative">
      {tiers.map((tier, i) => (
        <div
          key={tier.name}
          className="mb-3 lg:sticky"
          style={{
            top: `${NAVBAR_H + i * PEEK}px`,
            zIndex: 10 + i,
          }}
        >
          <PricingCard tier={tier} index={i} />
        </div>
      ))}
      <div className="h-20" aria-hidden="true" />
    </div>
  );
}
