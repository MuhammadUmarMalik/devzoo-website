"use client";

import { useState } from "react";
import HeroSection from "@/components/ui/HeroSection";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimateIn from "@/components/ui/AnimateIn";

const services = [
  "Website Development",
  "Digital Marketing",
  "Graphic Design",
  "Video Editing",
  "Not sure yet",
];

const inputBase =
  "w-full rounded-btn border border-surface-dark/12 bg-surface-warm px-4 py-3 text-sm text-surface-dark placeholder:text-surface-dark/32 transition-all duration-200 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/12 focus:bg-white";

const infoCards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Direct contact",
    content: (
      <a
        href="mailto:info@thedevzoo.com"
        className="text-sm text-brand transition-colors duration-200 hover:text-brand-hover"
      >
        info@thedevzoo.com
      </a>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <path d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    label: "Response time",
    content: (
      <p className="text-sm leading-relaxed text-surface-dark/60">
        Within one business day. For urgent projects, mention your deadline in the message.
      </p>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <path d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253M3.284 14.253A8.959 8.959 0 0 1 3 12c0-1.001.163-1.965.457-2.918" />
      </svg>
    ),
    label: "Markets we serve",
    content: (
      <p className="text-sm text-surface-dark/60">Pakistan · USA · UK · UAE</p>
    ),
  },
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1000);
  }

  return (
    <>
      <HeroSection>
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Get in Touch</SectionLabel>
          <h1 className="mt-2 font-heading text-[40px] font-extrabold leading-[1.05] text-white md:text-[64px]">
            Let&apos;s talk about your project
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/60 md:text-lg">
            Fill in the form and we&apos;ll get back to you within one business
            day. Or email us directly at{" "}
            <a
              href="mailto:info@thedevzoo.com"
              className="text-brand transition-colors duration-200 hover:text-brand-hover"
            >
              info@thedevzoo.com
            </a>
          </p>
        </div>
      </HeroSection>

      <section className="bg-surface-light px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-5">

          {/* ── Form ──────────────────────────────────── */}
          <AnimateIn className="md:col-span-3">
            <div aria-live="polite" aria-atomic="true">
              {status === "success" ? (
                <div className="rounded-card border border-surface-dark/8 bg-surface-warm p-10 text-center">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-brand/25 bg-brand/10">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#E8470A"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-7 w-7"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-surface-dark">
                    Message received
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-surface-dark/60">
                    We&apos;ll review your project details and get back to you
                    within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-surface-dark">
                        Your name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        autoComplete="name"
                        className={inputBase}
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-surface-dark">
                        Email address
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        autoComplete="email"
                        className={inputBase}
                        placeholder="jane@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-surface-dark">
                      Service you&apos;re interested in
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className={inputBase}
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-surface-dark">
                      Tell us about your project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className={`${inputBase} resize-none`}
                      placeholder="What are you building? What's your timeline and budget?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-btn bg-brand py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-hover hover:shadow-[0_8px_24px_-8px_rgba(232,71,10,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </AnimateIn>

          {/* ── Sidebar ───────────────────────────────── */}
          <AnimateIn delay={120} className="space-y-4 md:col-span-2">
            {infoCards.map((card) => (
              <div
                key={card.label}
                className="rounded-card border border-surface-dark/8 bg-surface-warm p-5 transition-all duration-200 hover:border-brand/18 hover:shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-section border border-brand/20 bg-brand/10 text-brand">
                    {card.icon}
                  </div>
                  <p className="font-heading text-sm font-bold text-surface-dark">
                    {card.label}
                  </p>
                </div>
                <div className="mt-3 pl-12">
                  {card.content}
                </div>
              </div>
            ))}

            {/* Calendly placeholder */}
            <div className="rounded-card border border-surface-dark/8 bg-surface-warm p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-section border border-brand/20 bg-brand/10 text-brand">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
                    <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                </div>
                <p className="font-heading text-sm font-bold text-surface-dark">
                  Prefer to book a call?
                </p>
              </div>
              <div className="mt-3 pl-12">
                <p className="mb-4 text-sm leading-relaxed text-surface-dark/60">
                  Schedule a free 30-minute discovery call directly in our calendar.
                </p>
                <div className="rounded-btn border border-surface-dark/8 bg-white py-5 text-center text-xs text-surface-dark/30">
                  Calendly embed
                </div>
              </div>
            </div>
          </AnimateIn>

        </div>
      </section>
    </>
  );
}
