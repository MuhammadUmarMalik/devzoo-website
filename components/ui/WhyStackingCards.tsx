"use client";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/libs/utils";

interface WhyItem {
  id: string;
  title: string;
  desc: string;
  featured: boolean;
  icon: React.ReactNode;
}

const NAVBAR_H = 88;
const PEEK = 24;

function WhyCard({ item, index }: { item: WhyItem; index: number }) {
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
        "group relative overflow-hidden rounded-card border transition-all duration-300",
        item.featured
          ? "border-brand/30 bg-surface-dark-2"
          : "border-white/8 bg-surface-dark-2",
        stuck && "shadow-[0_-6px_32px_-4px_rgba(232,71,10,0.18)]",
        stuck && item.featured && "border-brand/50 shadow-[0_-6px_40px_-4px_rgba(232,71,10,0.3)]",
      )}
    >
      {/* Top shimmer */}
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-px transition-opacity duration-300",
          item.featured ? "opacity-100" : "opacity-0 group-hover:opacity-100",
        )}
        style={{ background: "linear-gradient(90deg, transparent, rgba(232,71,10,0.65) 50%, transparent)" }}
        aria-hidden="true"
      />

      {/* Ambient glow */}
      {item.featured && (
        <div
          className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full opacity-12 transition-opacity duration-300 group-hover:opacity-25"
          style={{ background: "radial-gradient(circle, #E8470A, transparent 70%)" }}
          aria-hidden="true"
        />
      )}

      <div className="relative z-10 grid grid-cols-1 gap-6 p-7 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-8 md:p-8 lg:p-10">

        {/* Left: number + icon */}
        <div className="flex items-center gap-4 sm:flex-col sm:items-center sm:gap-3">
          <div className={cn(
            "flex shrink-0 items-center justify-center rounded-section border border-brand/20 bg-brand/10 text-brand transition-all duration-300 group-hover:bg-brand/18",
            item.featured ? "h-14 w-14" : "h-12 w-12",
          )}>
            {item.icon}
          </div>
          <span className="font-mono text-xs font-bold tracking-widest text-white/20 transition-colors duration-300 group-hover:text-brand/50">
            {item.id}
          </span>
        </div>

        {/* Center: title + desc */}
        <div>
          <h3 className={cn(
            "font-heading font-bold leading-snug text-white",
            item.featured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl",
          )}>
            {item.title}
          </h3>
          <p className={cn(
            "mt-2 leading-relaxed text-white/52",
            item.featured ? "text-base" : "text-sm md:text-base",
          )}>
            {item.desc}
          </p>
        </div>

        {/* Right: animated bottom line on mobile / arrow on desktop */}
        <div className="hidden sm:flex sm:items-center">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/8 bg-white/4 text-white/20 transition-all duration-300 group-hover:border-brand/35 group-hover:bg-brand/10 group-hover:text-brand">
            <svg viewBox="0 0 16 16" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" />
            </svg>
          </div>
        </div>

      </div>

      {/* Bottom brand line slides in on hover */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-brand/50 transition-[width] duration-500 group-hover:w-full"
        aria-hidden="true"
      />
    </article>
  );
}

export default function WhyStackingCards({ items }: { items: WhyItem[] }) {
  return (
    <div className="relative">
      {items.map((item, i) => (
        <div
          key={item.id}
          className="mb-3 lg:sticky"
          style={{
            top: `${NAVBAR_H + i * PEEK}px`,
            zIndex: 10 + i,
          }}
        >
          <WhyCard item={item} index={i} />
        </div>
      ))}
      <div className="h-20" aria-hidden="true" />
    </div>
  );
}
