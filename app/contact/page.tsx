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
  "w-full rounded-btn border border-surface-dark/12 bg-surface-warm px-4 py-3 text-sm text-surface-dark placeholder:text-surface-dark/30 transition-colors duration-200 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/15";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    // Simulate async — wire to Formspree / your backend here
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
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-5">

          {/* ── Form ──────────────────────────────────── */}
          <AnimateIn className="md:col-span-3">
            {/* aria-live region announces success to screen readers */}
            <div aria-live="polite" aria-atomic="true">
              {status === "success" ? (
                <div className="rounded-card bg-surface-warm p-10 text-center">
                  {/* SVG checkmark — no emoji */}
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand/10">
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
                    className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-btn bg-brand py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        {/* Spinner */}
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

          {/* ── Contact info ──────────────────────────── */}
          <AnimateIn delay={120} className="space-y-8 md:col-span-2">
            <div>
              <h3 className="mb-3 font-heading text-lg font-bold text-surface-dark">
                Direct contact
              </h3>
              <a
                href="mailto:info@thedevzoo.com"
                className="block text-sm text-brand transition-colors duration-200 hover:text-brand-hover"
              >
                info@thedevzoo.com
              </a>
            </div>

            <div>
              <h3 className="mb-3 font-heading text-lg font-bold text-surface-dark">
                Response time
              </h3>
              <p className="text-sm leading-relaxed text-surface-dark/60">
                We reply within one business day. For urgent projects, mention
                your deadline in the message.
              </p>
            </div>

            <div>
              <h3 className="mb-3 font-heading text-lg font-bold text-surface-dark">
                Markets we serve
              </h3>
              <p className="text-sm leading-relaxed text-surface-dark/60">
                Pakistan · USA · UK · UAE
              </p>
            </div>

            <div className="rounded-card bg-surface-warm p-6">
              <p className="mb-2 text-xs font-heading font-semibold uppercase tracking-widest text-surface-dark/40">
                Prefer to book a call?
              </p>
              <p className="mb-4 text-sm leading-relaxed text-surface-dark/60">
                Schedule a free 30-minute discovery call directly in our
                calendar.
              </p>
              <div className="rounded-btn bg-surface-dark/5 py-6 text-center text-xs text-surface-dark/30">
                Calendly embed
              </div>
            </div>
          </AnimateIn>

        </div>
      </section>
    </>
  );
}
