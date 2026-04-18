"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

const services = [
  "Website Development",
  "Digital Marketing",
  "Graphic Design",
  "Video Editing",
  "Not sure yet",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire to your form backend (Formspree, etc.)
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-surface-dark py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Get in Touch</SectionLabel>
          <h1 className="font-heading font-extrabold text-[40px] md:text-[64px] leading-[1.05] text-white mt-2">
            Let&apos;s talk about your project
          </h1>
          <p className="mt-6 text-base md:text-lg font-body text-white/60 leading-relaxed">
            Fill in the form and we&apos;ll get back to you within one business
            day. Or email us directly at{" "}
            <a
              href="mailto:info@thedevzoo.com"
              className="text-brand hover:text-brand-hover transition-colors duration-200"
            >
              info@thedevzoo.com
            </a>
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-surface-light py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="bg-surface-warm rounded-card p-10 text-center">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h2 className="font-heading font-bold text-2xl text-surface-dark mb-3">
                  Message received
                </h2>
                <p className="text-sm font-body text-surface-dark/60 leading-relaxed">
                  We&apos;ll review your project details and get back to you
                  within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-body font-medium text-surface-dark mb-1.5">
                      Your name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full bg-surface-warm border border-surface-dark/10 rounded-btn px-4 py-3 text-sm font-body text-surface-dark placeholder:text-surface-dark/30 focus:outline-none focus:border-brand transition-colors duration-200"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium text-surface-dark mb-1.5">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-surface-warm border border-surface-dark/10 rounded-btn px-4 py-3 text-sm font-body text-surface-dark placeholder:text-surface-dark/30 focus:outline-none focus:border-brand transition-colors duration-200"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-body font-medium text-surface-dark mb-1.5">
                    Service you&apos;re interested in
                  </label>
                  <select
                    name="service"
                    required
                    className="w-full bg-surface-warm border border-surface-dark/10 rounded-btn px-4 py-3 text-sm font-body text-surface-dark focus:outline-none focus:border-brand transition-colors duration-200"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-body font-medium text-surface-dark mb-1.5">
                    Tell us about your project
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-surface-warm border border-surface-dark/10 rounded-btn px-4 py-3 text-sm font-body text-surface-dark placeholder:text-surface-dark/30 focus:outline-none focus:border-brand transition-colors duration-200 resize-none"
                    placeholder="What are you building? What's your timeline and budget?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand text-white font-body font-medium py-3 rounded-btn hover:bg-brand-hover transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="font-heading font-bold text-lg text-surface-dark mb-3">
                Direct contact
              </h3>
              <a
                href="mailto:info@thedevzoo.com"
                className="text-sm font-body text-brand hover:text-brand-hover transition-colors duration-200 block"
              >
                info@thedevzoo.com
              </a>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg text-surface-dark mb-3">
                Response time
              </h3>
              <p className="text-sm font-body text-surface-dark/60 leading-relaxed">
                We reply within one business day. For urgent projects, mention
                your deadline in the message.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg text-surface-dark mb-3">
                Markets we serve
              </h3>
              <p className="text-sm font-body text-surface-dark/60 leading-relaxed">
                Pakistan · USA · UK · UAE
              </p>
            </div>

            <div className="bg-surface-warm rounded-card p-6">
              <p className="text-xs font-heading font-semibold uppercase tracking-widest text-surface-dark/40 mb-2">
                Prefer to book a call?
              </p>
              <p className="text-sm font-body text-surface-dark/60 leading-relaxed mb-4">
                Schedule a free 30-minute discovery call directly in our
                calendar.
              </p>
              {/* Calendly embed goes here */}
              <div className="text-center py-6 bg-surface-dark/5 rounded-btn text-xs font-body text-surface-dark/30">
                Calendly embed
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
