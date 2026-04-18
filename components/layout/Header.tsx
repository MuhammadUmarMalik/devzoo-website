"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-dark border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-heading font-bold text-xl text-white">
          Dev<span className="text-brand">zoo</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-body text-white/70 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" size="sm">
            Get a Quote
          </Button>
        </div>

        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-surface-dark-2 border-t border-white/5 px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-body text-white/70 hover:text-white transition-colors duration-200 py-2"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact" size="sm" className="mt-2">
            Get a Quote
          </Button>
        </div>
      )}
    </header>
  );
}
