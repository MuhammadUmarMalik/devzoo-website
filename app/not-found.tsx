import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The page you're looking for doesn't exist. Let's get you back on track.",
  robots: { index: false, follow: false },
};

const quickLinks = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] flex-col items-center justify-center overflow-hidden bg-surface-dark px-6 py-24">
      {/* Dot-grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: 0.045,
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.22) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 0%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 0%, transparent 100%)",
        }}
      />

      {/* Ambient glow behind the zero */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          width: "clamp(280px, 44vw, 560px)",
          height: "clamp(280px, 44vw, 560px)",
          background:
            "radial-gradient(circle, rgba(232,71,10,0.20) 0%, transparent 68%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -58%)",
          filter: "blur(48px)",
        }}
      />

      {/* 404 hero number */}
      <div
        aria-hidden
        className="relative select-none font-heading font-extrabold leading-none"
        style={{
          fontSize: "clamp(100px, 19vw, 252px)",
          letterSpacing: "-0.055em",
          lineHeight: 0.88,
        }}
      >
        <span className="text-white/90">4</span>
        <span className="not-found-zero text-brand">0</span>
        <span className="text-white/90">4</span>
      </div>

      {/* Error badge */}
      <div className="mt-8 mb-5 flex items-center gap-2 font-body text-xs font-medium uppercase tracking-[0.18em] text-text-muted">
        <span
          aria-hidden
          className="inline-block h-1.5 w-1.5 rounded-full bg-brand"
        />
        Error 404 — Page Not Found
      </div>

      {/* Headline */}
      <h1
        className="font-heading font-bold text-surface-light text-center"
        style={{
          fontSize: "clamp(24px, 4vw, 44px)",
          lineHeight: 1.12,
          letterSpacing: "-0.04em",
        }}
      >
        This page wandered off.
      </h1>

      {/* Body */}
    <br/>
      {/* Primary CTA */}
      <Link
        href="/"
        className="inline-flex cursor-pointer items-center gap-2.5 rounded-btn bg-brand px-7 py-3.5 font-body text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        <svg
          aria-hidden
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 5l-7 7 7 7" />
        </svg>
        Back to Home
      </Link>

      {/* Separator */}
      <div className="mt-12 mb-6 h-px w-20 bg-surface-dark-3" />

      {/* Quick nav */}
      <nav aria-label="Quick navigation">
        <p className="mb-4 text-center font-body text-xs uppercase tracking-[0.16em] text-text-muted/50">
          Or explore
        </p>
        <ul className="flex flex-wrap justify-center gap-x-7 gap-y-3">
          {quickLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="cursor-pointer font-body text-sm text-text-muted transition-colors duration-200 hover:text-surface-light"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Floating decorative icon */}
      <div
        aria-hidden
        className="not-found-icon pointer-events-none absolute bottom-16 right-[8%] hidden opacity-10 lg:block"
      >
        <svg
          width="72"
          height="72"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="1"
            width="70"
            height="70"
            rx="18"
            stroke="white"
            strokeWidth="1.5"
            strokeDasharray="6 4"
          />
          <path
            d="M24 36h24M36 24l12 12-12 12"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div
        aria-hidden
        className="not-found-icon pointer-events-none absolute top-20 left-[7%] hidden opacity-[0.07] lg:block"
        style={{ animationDelay: "1.4s" }}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="24" cy="24" r="22" stroke="white" strokeWidth="1.2" />
          <circle cx="24" cy="24" r="4" fill="white" />
          <line
            x1="24"
            y1="2"
            x2="24"
            y2="10"
            stroke="white"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <line
            x1="24"
            y1="38"
            x2="24"
            y2="46"
            stroke="white"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <line
            x1="2"
            y1="24"
            x2="10"
            y2="24"
            stroke="white"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <line
            x1="38"
            y1="24"
            x2="46"
            y2="24"
            stroke="white"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
}
