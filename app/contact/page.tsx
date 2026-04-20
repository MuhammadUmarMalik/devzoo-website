"use client";

import { useState, type FormEvent, type ReactNode } from "react";
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

const timelineOptions = [
  "ASAP",
  "Within 2 weeks",
  "Within 1 month",
  "Within 2-3 months",
  "Just exploring",
];

const budgetOptions = [
  "Under $300",
  "$300-$800",
  "$800-$1,500",
  "$1,500-$3,000",
  "$3,000+",
  "Let's discuss",
];

const contactOptions = ["Email", "WhatsApp", "Phone call"];

const inputBase =
  "w-full rounded-btn border border-surface-dark/12 bg-surface-warm px-4 py-3 text-sm text-surface-dark placeholder:text-surface-dark/32 transition-all duration-200 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/12 focus:bg-white";

type FormState = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  timeline: string;
  budget: string;
  preferredContact: string;
  message: string;
  website: string;
};

type SubmitState = "idle" | "loading" | "success" | "error";

type FieldErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  timeline: "",
  budget: "",
  preferredContact: "",
  message: "",
  website: "",
};

const sidebarCards = [
  {
    label: "Direct contact",
    body: (
      <a
        href="mailto:info@thedevzoo.com"
        className="text-sm font-medium text-brand transition-colors duration-200 hover:text-brand-hover"
      >
        info@thedevzoo.com
      </a>
    ),
  },
  {
    label: "Response time",
    body: (
      <p className="text-sm leading-relaxed text-surface-dark/65">
        Most replies go out within one business day. If timing matters, add
        your deadline and we will plan around it.
      </p>
    ),
  },
  {
    label: "Markets we serve",
    body: (
      <p className="text-sm leading-relaxed text-surface-dark/65">
        Pakistan, USA, UK, and UAE. Remote-first, clear process, weekly
        updates.
      </p>
    ),
  },
];

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between gap-3">
        <label
          htmlFor={htmlFor}
          className="block text-sm font-medium text-surface-dark"
        >
          {label}
        </label>
        {error ? (
          <span className="text-xs font-medium text-brand" role="alert">
            {error}
          </span>
        ) : null}
      </div>
      {children}
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));

    if (fieldErrors[key]) {
      setFieldErrors((current) => ({ ...current, [key]: undefined }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    setFieldErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as {
        message?: string;
        fieldErrors?: FieldErrors;
      };

      if (!response.ok) {
        setStatus("error");
        setMessage(
          data.message ??
            "We could not send your message just now. Please try again."
        );
        setFieldErrors(data.fieldErrors ?? {});
        return;
      }

      setStatus("success");
      setMessage(
        data.message ??
          "Your project details are in. We will get back to you within one business day."
      );
      setForm(initialForm);
    } catch {
      setStatus("error");
      setMessage(
        "We could not reach the server. Please try again in a moment or email us directly."
      );
    }
  }

  return (
    <>
      <HeroSection>
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Get in Touch</SectionLabel>
          <h1 className="mt-2 font-heading text-[40px] font-extrabold leading-[1.05] text-white md:text-[64px]">
            Tell us what you need. We&apos;ll map the fastest next step.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/60 md:text-lg">
            Share the basics, your timeline, and how you prefer to talk. We
            will review everything and reply within one business day.
          </p>
        </div>
      </HeroSection>

      <section className="bg-surface-light px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_280px] lg:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)]">
          <AnimateIn>
            <div className="overflow-hidden rounded-[24px] border border-surface-dark/8 bg-white shadow-[0_24px_80px_-48px_rgba(26,28,34,0.32)]">
              <div className="border-b border-surface-dark/8 bg-surface-warm px-6 py-6 sm:px-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="font-heading text-2xl font-bold text-surface-dark">
                      Start your project brief
                    </p>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-surface-dark/65">
                      Clear details help us reply with the right scope, timing,
                      and next step instead of a generic email.
                    </p>
                  </div>
                  <div className="inline-flex items-center rounded-full border border-brand/15 bg-brand/8 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                    Lead form
                  </div>
                </div>
              </div>

              <div className="px-6 py-6 sm:px-8 sm:py-8">
                <div className="mb-6 grid gap-3 rounded-card border border-surface-dark/8 bg-surface-warm/75 p-4 sm:grid-cols-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-surface-dark/45">
                      Good fit for
                    </p>
                    <p className="mt-1 text-sm text-surface-dark/72">
                      Startups, creators, and small businesses
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-surface-dark/45">
                      Best details to include
                    </p>
                    <p className="mt-1 text-sm text-surface-dark/72">
                      Goal, deadline, and rough budget
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-surface-dark/45">
                      What happens next
                    </p>
                    <p className="mt-1 text-sm text-surface-dark/72">
                      We review, reply, and suggest the next step
                    </p>
                  </div>
                </div>

                <div aria-live="polite" aria-atomic="true" className="space-y-5">
                  {message ? (
                    <div
                      className={`rounded-card border px-4 py-3 text-sm leading-relaxed ${
                        status === "success"
                          ? "border-brand/16 bg-brand/6 text-surface-dark"
                          : "border-brand/18 bg-brand/8 text-surface-dark"
                      }`}
                    >
                      {message}
                    </div>
                  ) : null}

                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.website}
                      onChange={(event) =>
                        updateField("website", event.target.value)
                      }
                      className="hidden"
                    />

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field
                        label="Your name"
                        htmlFor="name"
                        error={fieldErrors.name}
                      >
                        <input
                          id="name"
                          type="text"
                          name="name"
                          required
                          autoComplete="name"
                          value={form.name}
                          onChange={(event) =>
                            updateField("name", event.target.value)
                          }
                          className={inputBase}
                          placeholder="Jane Smith"
                        />
                      </Field>

                      <Field
                        label="Email address"
                        htmlFor="email"
                        error={fieldErrors.email}
                      >
                        <input
                          id="email"
                          type="email"
                          name="email"
                          required
                          autoComplete="email"
                          value={form.email}
                          onChange={(event) =>
                            updateField("email", event.target.value)
                          }
                          className={inputBase}
                          placeholder="jane@company.com"
                        />
                      </Field>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field
                        label="Company or brand"
                        htmlFor="company"
                        error={fieldErrors.company}
                      >
                        <input
                          id="company"
                          type="text"
                          name="company"
                          autoComplete="organization"
                          value={form.company}
                          onChange={(event) =>
                            updateField("company", event.target.value)
                          }
                          className={inputBase}
                          placeholder="Acme Studio"
                        />
                      </Field>

                      <Field
                        label="WhatsApp or phone"
                        htmlFor="phone"
                        error={fieldErrors.phone}
                      >
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          autoComplete="tel"
                          value={form.phone}
                          onChange={(event) =>
                            updateField("phone", event.target.value)
                          }
                          className={inputBase}
                          placeholder="+92 300 1234567"
                        />
                      </Field>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field
                        label="Service you need"
                        htmlFor="service"
                        error={fieldErrors.service}
                      >
                        <select
                          id="service"
                          name="service"
                          required
                          value={form.service}
                          onChange={(event) =>
                            updateField("service", event.target.value)
                          }
                          className={inputBase}
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </Field>

                      <Field
                        label="Preferred contact"
                        htmlFor="preferredContact"
                        error={fieldErrors.preferredContact}
                      >
                        <select
                          id="preferredContact"
                          name="preferredContact"
                          required
                          value={form.preferredContact}
                          onChange={(event) =>
                            updateField("preferredContact", event.target.value)
                          }
                          className={inputBase}
                        >
                          <option value="">Choose one</option>
                          {contactOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </Field>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field
                        label="Timeline"
                        htmlFor="timeline"
                        error={fieldErrors.timeline}
                      >
                        <select
                          id="timeline"
                          name="timeline"
                          required
                          value={form.timeline}
                          onChange={(event) =>
                            updateField("timeline", event.target.value)
                          }
                          className={inputBase}
                        >
                          <option value="">Select timing</option>
                          {timelineOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </Field>

                      <Field
                        label="Budget range"
                        htmlFor="budget"
                        error={fieldErrors.budget}
                      >
                        <select
                          id="budget"
                          name="budget"
                          value={form.budget}
                          onChange={(event) =>
                            updateField("budget", event.target.value)
                          }
                          className={inputBase}
                        >
                          <option value="">Select a budget range</option>
                          {budgetOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </Field>
                    </div>

                    <Field
                      label="Tell us about your project"
                      htmlFor="message"
                      error={fieldErrors.message}
                    >
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={form.message}
                        onChange={(event) =>
                          updateField("message", event.target.value)
                        }
                        className={`${inputBase} resize-none`}
                        placeholder="What are you building, what do you need help with, and when do you want to launch?"
                      />
                    </Field>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-btn bg-brand py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-hover hover:shadow-[0_10px_32px_-12px_rgba(232,71,10,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {status === "loading" ? (
                        <>
                          <svg
                            className="h-4 w-4 animate-spin"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                            />
                          </svg>
                          Sending your brief...
                        </>
                      ) : (
                        "Send project brief"
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={120} className="space-y-4">
            <div className="rounded-[24px] border border-surface-dark/8 bg-surface-dark p-6 text-white shadow-[0_24px_80px_-48px_rgba(26,28,34,0.72)]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
                What happens next
              </p>
              <h2 className="mt-3 font-heading text-2xl font-bold leading-tight text-white">
                No vague replies. No back-and-forth that wastes your week.
              </h2>
              <div className="mt-6 space-y-4">
                {[
                  "We read your brief and check fit.",
                  "We reply with the next step, timeline, or questions.",
                  "If it makes sense, we move into a discovery call or quote.",
                ].map((item, index) => (
                  <div key={item} className="flex gap-3">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/6 text-xs font-semibold text-brand">
                      0{index + 1}
                    </div>
                    <p className="text-sm leading-relaxed text-white/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {sidebarCards.map((card) => (
              <div
                key={card.label}
                className="rounded-card border border-surface-dark/8 bg-surface-warm p-5 transition-all duration-200 hover:border-brand/18 hover:shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-surface-dark/45">
                  {card.label}
                </p>
                <div className="mt-3">{card.body}</div>
              </div>
            ))}

            <div className="rounded-card border border-surface-dark/8 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-surface-dark/45">
                Prefer to book a call?
              </p>
              <p className="mt-3 text-sm leading-relaxed text-surface-dark/65">
                Add your Calendly embed or booking link here for a 30-minute
                discovery call.
              </p>
              <div className="mt-4 rounded-btn border border-dashed border-surface-dark/14 bg-surface-warm px-4 py-6 text-center text-xs font-medium uppercase tracking-[0.14em] text-surface-dark/35">
                Calendly embed area
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
