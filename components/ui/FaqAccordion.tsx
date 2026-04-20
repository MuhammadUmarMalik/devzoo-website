"use client";

import { useState } from "react";
import { cn } from "@/libs/utils";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
}

function PlusIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      className="h-5 w-5 shrink-0 transition-transform duration-300"
      style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
      aria-hidden="true"
    >
      <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" />
      <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" />
    </svg>
  );
}

function AccordionItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = `faq-panel-${index}`;
  const triggerId = `faq-trigger-${index}`;

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-card border transition-all duration-300",
        isOpen
          ? "border-brand/40 bg-surface-dark shadow-[0_8px_32px_-8px_rgba(232,71,10,0.18)]"
          : "border-surface-dark/10 bg-white hover:border-brand/20 hover:shadow-sm",
      )}
    >
      {/* Top shimmer on open */}
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-px transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0",
        )}
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(232,71,10,0.6) 50%, transparent)",
        }}
        aria-hidden="true"
      />

      <button
        id={triggerId}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex min-h-[56px] w-full cursor-pointer items-start gap-3 px-5 py-5 text-left sm:gap-4 sm:px-6"
      >
        {/* Number badge */}
        <span
          className={cn(
            "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold transition-all duration-300",
            isOpen
              ? "bg-brand text-white"
              : "bg-surface-dark/8 text-text-muted group-hover:bg-brand/12 group-hover:text-brand",
          )}
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span
          className={cn(
            "flex-1 font-heading text-base font-bold leading-snug transition-colors duration-200 md:text-lg",
            isOpen ? "text-white" : "text-surface-dark",
          )}
        >
          {faq.question}
        </span>

        <span
          className={cn(
            "mt-0.5 transition-colors duration-200",
            isOpen ? "text-brand" : "text-text-muted group-hover:text-brand",
          )}
        >
          <PlusIcon open={isOpen} />
        </span>
      </button>

      {/* Grid-row animated body */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 pl-5 sm:px-6 sm:pb-6 sm:pl-17">
            <p
              className={cn(
                "text-sm leading-relaxed",
                isOpen ? "text-white/70" : "text-surface-dark/65",
              )}
            >
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <AccordionItem
          key={faq.question}
          faq={faq}
          index={i}
          isOpen={openIndex === i}
          onToggle={() => toggle(i)}
        />
      ))}
    </div>
  );
}
