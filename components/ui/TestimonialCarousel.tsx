"use client";

import { useEffect, useRef, useState } from "react";

interface Testimonial {
  quote: string;
  client: string;
  role: string;
}

const StarIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
      clipRule="evenodd"
    />
  </svg>
);

export default function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const count = testimonials.length;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scrollTo = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement;
    if (!card) return;
    el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
    setActiveIndex(index);
  };

  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % count;
        const el = scrollRef.current;
        if (el) {
          const card = el.children[next] as HTMLElement;
          if (card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
        }
        return next;
      });
    }, 3500);
  };

  useEffect(() => {
    startAutoplay();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const handleTouchStart = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleTouchEnd = () => {
    // re-sync active dot after manual swipe
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = (el.children[0] as HTMLElement)?.offsetWidth ?? 0;
    const gap = 16;
    const idx = Math.round(el.scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.max(0, Math.min(idx, count - 1)));
    startAutoplay();
  };

  return (
    <div>
      <div
        ref={scrollRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.client}
            className="group relative flex w-[85vw] max-w-[320px] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-card border border-white/10 bg-surface-dark p-5 text-white shadow-[0_20px_60px_-30px_rgba(7,9,12,0.7)] transition-all duration-300 hover:border-brand/35 hover:bg-surface-dark-3 sm:w-[300px] sm:p-6"
          >
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,71,10,0.2),transparent_42%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-x-6 top-0 h-px bg-white/18 transition-colors duration-300 group-hover:bg-brand/40"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <div className="flex items-center gap-1 text-brand" aria-label="5 star review">
                {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
              </div>
              <blockquote className="mt-4 text-[14px] leading-7 text-white/74 transition-colors duration-300 group-hover:text-white/84 sm:text-[15px]">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
            </div>

            <div className="relative z-10 mt-5 border-t border-white/8 pt-4 transition-colors duration-300 group-hover:border-brand/20">
              <p className="font-heading text-sm font-bold text-white">{testimonial.client}</p>
              <p className="text-xs text-white/42 transition-colors duration-300 group-hover:text-white/54">{testimonial.role}</p>
            </div>
          </article>
        ))}
        <div className="w-2 shrink-0" aria-hidden="true" />
      </div>

      {/* Dot indicators */}
      <div className="mt-4 flex justify-center gap-2" aria-hidden="true">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => { scrollTo(i); startAutoplay(); }}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? "w-6 bg-brand" : "w-2 bg-surface-dark/30"}`}
          />
        ))}
      </div>
    </div>
  );
}
