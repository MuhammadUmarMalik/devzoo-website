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
  "w-full rounded-btn border border-surface-dark/10 bg-white px-4 py-3 text-sm text-surface-dark placeholder:text-surface-dark/30 transition-all duration-200 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 focus:bg-white hover:border-surface-dark/20";

const selectBase =
  "w-full rounded-btn border border-surface-dark/10 bg-white px-4 py-3 text-sm text-surface-dark transition-all duration-200 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 hover:border-surface-dark/20 appearance-none cursor-pointer";

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
          className="block text-sm font-medium text-surface-dark/80"
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

function SelectWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      {children}
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
        <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5 text-surface-dark/40">
          <path d="M8 10.5L3 5.5h10L8 10.5z" />
        </svg>
      </div>
    </div>
  );
}

const trustStats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "<24h", label: "Avg. Response Time" },
  { value: "100%", label: "Client Satisfaction" },
];

const processSteps = [
  {
    title: "We read your brief",
    body: "We review every detail — service, budget, timeline — and assess fit within hours.",
  },
  {
    title: "We reply with a plan",
    body: "A direct reply with scope, suggested approach, and clear next step. No generic templates.",
  },
  {
    title: "We move forward together",
    body: "Discovery call, proposal, or kickoff — whichever makes sense for your project.",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as {
        message?: string;
        fieldErrors?: FieldErrors;
      };

      if (!response.ok) {
        setStatus("error");
        setMessage(
          data.message ?? "We could not send your message just now. Please try again."
        );
        setFieldErrors(data.fieldErrors ?? {});
        return;
      }

      setStatus("success");
      setMessage(
        data.message ??
          "Your project details are in. We will get back to you within one business day."
      );
      setShowSuccessPopup(true);
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
      {showSuccessPopup ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-surface-dark/55 px-6 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-[24px] border border-surface-dark/8 bg-white p-6 shadow-[0_32px_80px_-24px_rgba(26,28,34,0.28)]">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-heading text-xl font-bold text-surface-dark">
                    Thanks for reaching out
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-surface-dark/60">
                    {message ||
                      "Your brief has been submitted successfully. We will get back to you within one business day."}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowSuccessPopup(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-surface-dark/10 text-surface-dark/50 transition-colors duration-200 hover:border-brand/25 hover:text-brand"
                aria-label="Close success message"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.22 4.22a.75.75 0 011.06 0L10 8.94l4.72-4.72a.75.75 0 111.06 1.06L11.06 10l4.72 4.72a.75.75 0 11-1.06 1.06L10 11.06l-4.72 4.72a.75.75 0 11-1.06-1.06L8.94 10 4.22 5.28a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={() => setShowSuccessPopup(false)}
                className="inline-flex flex-1 items-center justify-center rounded-btn bg-brand px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2"
              >
                Close
              </button>
              <a
                href="mailto:info@thedevzoo.com"
                className="inline-flex flex-1 items-center justify-center rounded-btn border border-surface-dark/10 px-5 py-3 text-sm font-semibold text-surface-dark transition-all duration-200 hover:border-brand/25 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2"
              >
                Email us
              </a>
            </div>
          </div>
        </div>
      ) : null}

      <HeroSection>
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Get in Touch</SectionLabel>
          <h1 className="mt-8 font-heading text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.05] text-white">
            Tell us what you need.
            <br />
            <span className="text-white/60">We&apos;ll map the next step.</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/55 md:text-lg">
            Share your project, timeline, and budget. We review everything and
            reply within one business day — no vague replies, no back-and-forth.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            {trustStats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-0.5">
                <span className="font-heading text-2xl font-bold text-white">{stat.value}</span>
                <span className="text-xs tracking-wide text-white/45">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </HeroSection>

      <section className="bg-surface-warm px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(300px,0.65fr)]">

          {/* ── Form card ── */}
          <AnimateIn>
            <div className="overflow-hidden rounded-[24px] border border-surface-dark/8 bg-white shadow-[0_32px_80px_-32px_rgba(26,28,34,0.16)]">

              {/* Card header */}
              <div className="border-b border-surface-dark/6 bg-surface-dark px-8 py-7">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-heading text-xl font-bold text-white">
                      Start your project brief
                    </p>
                    <p className="mt-1 text-sm text-white/45">
                      Takes 3 minutes. Helps us reply with something useful.
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3.5 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                    <span className="text-xs font-medium text-white/65">Responding now</span>
                  </div>
                </div>
              </div>

              <div className="px-6 py-8 sm:px-8">

                {/* Info grid */}
                <div className="mb-8 grid gap-4 sm:grid-cols-3">
                  {[
                    { heading: "Good fit for", body: "Startups, creators & small businesses" },
                    { heading: "Include in brief", body: "Goal, deadline & rough budget" },
                    { heading: "What happens next", body: "We review and reply with a clear plan" },
                  ].map((item) => (
                    <div
                      key={item.heading}
                      className="rounded-card border border-surface-dark/6 bg-surface-warm p-4"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-surface-dark/40">
                        {item.heading}
                      </p>
                      <p className="mt-1.5 text-sm leading-snug text-surface-dark/70">{item.body}</p>
                    </div>
                  ))}
                </div>

                {/* Status banner */}
                <div aria-live="polite" aria-atomic="true">
                  {message ? (
                    <div
                      className={`mb-6 flex items-start gap-3 rounded-card border px-4 py-3.5 text-sm leading-relaxed ${
                        status === "success"
                          ? "hidden"
                          : "border-red-200 bg-red-50 text-red-800"
                      }`}
                    >
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className={`mt-0.5 h-4 w-4 shrink-0 ${status === "success" ? "text-brand" : "text-red-500"}`}
                        aria-hidden="true"
                      >
                        {status === "success" ? (
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        ) : (
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        )}
                      </svg>
                      {message}
                    </div>
                  ) : null}
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-0">
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={(event) => updateField("website", event.target.value)}
                    className="hidden"
                  />

                  {/* Section: About you */}
                  <div className="mb-6">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand/10 text-[11px] font-bold text-brand">1</span>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-surface-dark/45">About you</p>
                      <div className="h-px flex-1 bg-surface-dark/6" />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Your name" htmlFor="name" error={fieldErrors.name}>
                        <input
                          id="name" type="text" name="name" required autoComplete="name"
                          value={form.name}
                          onChange={(e) => updateField("name", e.target.value)}
                          className={inputBase} placeholder="Jane Smith"
                        />
                      </Field>
                      <Field label="Email address" htmlFor="email" error={fieldErrors.email}>
                        <input
                          id="email" type="email" name="email" required autoComplete="email"
                          value={form.email}
                          onChange={(e) => updateField("email", e.target.value)}
                          className={inputBase} placeholder="jane@company.com"
                        />
                      </Field>
                      <Field label="Company or brand" htmlFor="company" error={fieldErrors.company}>
                        <input
                          id="company" type="text" name="company" autoComplete="organization"
                          value={form.company}
                          onChange={(e) => updateField("company", e.target.value)}
                          className={inputBase} placeholder="Acme Studio"
                        />
                      </Field>
                      <Field label="WhatsApp or phone" htmlFor="phone" error={fieldErrors.phone}>
                        <input
                          id="phone" type="tel" name="phone" autoComplete="tel"
                          value={form.phone}
                          onChange={(e) => updateField("phone", e.target.value)}
                          className={inputBase} placeholder="+92 300 1234567"
                        />
                      </Field>
                    </div>
                  </div>

                  {/* Section: Your project */}
                  <div className="mb-6">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand/10 text-[11px] font-bold text-brand">2</span>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-surface-dark/45">Your project</p>
                      <div className="h-px flex-1 bg-surface-dark/6" />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Service you need" htmlFor="service" error={fieldErrors.service}>
                        <SelectWrapper>
                          <select
                            id="service" name="service" required
                            value={form.service}
                            onChange={(e) => updateField("service", e.target.value)}
                            className={selectBase}
                          >
                            <option value="">Select a service</option>
                            {services.map((s) => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </SelectWrapper>
                      </Field>
                      <Field label="Preferred contact" htmlFor="preferredContact" error={fieldErrors.preferredContact}>
                        <SelectWrapper>
                          <select
                            id="preferredContact" name="preferredContact" required
                            value={form.preferredContact}
                            onChange={(e) => updateField("preferredContact", e.target.value)}
                            className={selectBase}
                          >
                            <option value="">Choose one</option>
                            {contactOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                          </select>
                        </SelectWrapper>
                      </Field>
                      <Field label="Timeline" htmlFor="timeline" error={fieldErrors.timeline}>
                        <SelectWrapper>
                          <select
                            id="timeline" name="timeline" required
                            value={form.timeline}
                            onChange={(e) => updateField("timeline", e.target.value)}
                            className={selectBase}
                          >
                            <option value="">Select timing</option>
                            {timelineOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                          </select>
                        </SelectWrapper>
                      </Field>
                      <Field label="Budget range" htmlFor="budget" error={fieldErrors.budget}>
                        <SelectWrapper>
                          <select
                            id="budget" name="budget"
                            value={form.budget}
                            onChange={(e) => updateField("budget", e.target.value)}
                            className={selectBase}
                          >
                            <option value="">Select a range</option>
                            {budgetOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                          </select>
                        </SelectWrapper>
                      </Field>
                    </div>
                  </div>

                  {/* Section: Tell us more */}
                  <div className="mb-8">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand/10 text-[11px] font-bold text-brand">3</span>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-surface-dark/45">Tell us more</p>
                      <div className="h-px flex-1 bg-surface-dark/6" />
                    </div>
                    <Field label="About your project" htmlFor="message" error={fieldErrors.message}>
                      <textarea
                        id="message" name="message" required rows={5}
                        value={form.message}
                        onChange={(e) => updateField("message", e.target.value)}
                        className={`${inputBase} resize-none`}
                        placeholder="What are you building, what help do you need, and when do you want to launch?"
                      />
                    </Field>
                  </div>

                  {/* Micro-testimonial above CTA */}
                  <div className="mb-6 flex items-start gap-3 rounded-card border border-surface-dark/6 bg-surface-warm p-4">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-brand" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm leading-relaxed text-surface-dark/70">
                        &ldquo;They presented detailed mock-ups, conducted extensive research, and kept me informed every step of the way.&rdquo;
                      </p>
                      <p className="mt-1 text-xs font-medium text-surface-dark/40">Kate — Construction Business Owner, Virginia USA</p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-btn bg-brand py-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-hover hover:shadow-[0_16px_40px_-16px_rgba(232,71,10,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                        </svg>
                        Sending your brief&hellip;
                      </>
                    ) : (
                      <>
                        Send project brief
                        <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
                          <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="mt-3 text-center text-xs text-surface-dark/35">
                    No spam. No cold pitches. We only use your details to reply to this enquiry.
                  </p>
                </form>
              </div>
            </div>
          </AnimateIn>

          {/* ── Sidebar ── */}
          <AnimateIn delay={120} className="flex flex-col gap-4">

            {/* Direct contact */}
            <div className="rounded-[24px] border border-surface-dark/8 bg-surface-dark p-6 text-white shadow-[0_24px_80px_-48px_rgba(26,28,34,0.72)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">
                Direct contact
              </p>
              <p className="mt-2 font-heading text-lg font-bold leading-snug text-white">
                Prefer to skip the form?
              </p>
              <p className="mt-1.5 text-sm text-white/50">
                Reach us directly — we reply the same day.
              </p>
              <div className="mt-5 flex flex-col gap-2.5">
                <a
                  href="mailto:info@thedevzoo.com"
                  className="group flex items-center gap-3 rounded-btn border border-white/10 bg-white/6 px-4 py-3 transition-all duration-200 hover:border-brand/30 hover:bg-brand/10"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/8">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-white/60 group-hover:text-brand" aria-hidden="true">
                      <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                      <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-white/40">Email</span>
                    <span className="block truncate text-sm font-medium text-white group-hover:text-brand">info@thedevzoo.com</span>
                  </span>
                </a>
                <a
                  href="https://wa.me/923001234567"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-center gap-3 rounded-btn border border-white/10 bg-white/6 px-4 py-3 transition-all duration-200 hover:border-[#25D366]/30 hover:bg-[#25D366]/10"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/8">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-white/60 group-hover:text-[#25D366]" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.849L.057 23.852a.5.5 0 00.614.608l6.178-1.616A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.944 9.944 0 01-5.177-1.447l-.37-.22-3.834 1.004 1.021-3.73-.242-.384A9.939 9.939 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z" />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-white/40">WhatsApp</span>
                    <span className="block text-sm font-medium text-white group-hover:text-[#25D366]">Chat with us</span>
                  </span>
                </a>
              </div>
            </div>

            {/* What happens next */}
            <div className="rounded-[24px] border border-surface-dark/8 bg-white p-6 shadow-[0_8px_32px_-16px_rgba(26,28,34,0.10)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-surface-dark/40">
                What happens next
              </p>
              <p className="mt-2 font-heading text-lg font-bold leading-snug text-surface-dark">
                No vague replies. No wasted week.
              </p>
              <div className="mt-5 space-y-4">
                {processSteps.map((step, index) => (
                  <div key={step.title} className="flex gap-3.5">
                    <div className="flex flex-col items-center">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand/20 bg-brand/8 text-[11px] font-bold text-brand">
                        0{index + 1}
                      </div>
                      {index < processSteps.length - 1 && (
                        <div className="mt-1 h-full w-px bg-surface-dark/6" />
                      )}
                    </div>
                    <div className="pb-4">
                      <p className="text-sm font-semibold text-surface-dark">{step.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-surface-dark/55">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response time */}
            <div className="flex items-center gap-4 rounded-card border border-surface-dark/8 bg-surface-warm px-5 py-4 transition-all duration-200 hover:border-brand/18">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10">
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-brand" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-surface-dark">Reply within 24 hours</p>
                <p className="text-xs leading-relaxed text-surface-dark/55">
                  Include your deadline and we&apos;ll plan around it.
                </p>
              </div>
            </div>

            {/* Book a call */}
            <div className="rounded-[24px] border border-surface-dark/8 bg-white p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-surface-dark/40">
                Prefer a call?
              </p>
              <p className="mt-3 font-heading text-lg font-bold text-surface-dark">
                Book a free 30-min discovery call
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-surface-dark/55">
                Pick a slot that works for you. We&apos;ll come prepared with questions and ideas — no sales pitch.
              </p>
              <a
                href="https://calendly.com/thedevzoo711/30min"
                target="_blank"
                rel="noreferrer noopener"
                className="group mt-5 inline-flex w-full items-center justify-center gap-2.5 rounded-btn border border-surface-dark/10 bg-surface-dark px-5 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand hover:border-brand hover:shadow-[0_12px_32px_-12px_rgba(232,71,10,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clipRule="evenodd" />
                </svg>
                Schedule on Calendly
                <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5 opacity-50 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
                  <path d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z" />
                </svg>
              </a>
              <p className="mt-3 text-center text-xs text-surface-dark/35">Opens in a new tab &middot; Free &middot; No commitment</p>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
