import Link from "next/link";

const services = [
  { label: "Website Development", href: "/services/web-development" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "Graphic Design", href: "/services/graphic-design" },
  { label: "Video Editing", href: "/services/video-editing" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/company/thedevzoo" },
  { label: "Facebook", href: "https://facebook.com/thedevzoo" },
  { label: "Instagram", href: "https://instagram.com/thedevzoo" },
  { label: "WhatsApp", href: "https://wa.me/" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface-dark">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <Link href="/" className="font-heading text-xl font-bold text-white">
              Dev<span className="text-brand">zoo</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              We Build. You Grow.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              A modern digital agency delivering clean, fast, and reliable
              digital solutions for startups, creators, and small businesses.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm text-white/55">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="transition-colors duration-200 hover:text-brand"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-white/35">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-white/35">
              Company
            </h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-white/35">
              Get in Touch
            </h4>
            <a
              href="mailto:info@thedevzoo.com"
              className="block text-sm text-white/60 transition-colors duration-200 hover:text-white"
            >
              info@thedevzoo.com
            </a>
            <a
              href="https://www.thedevzoo.com"
              className="mt-2 block text-sm text-white/60 transition-colors duration-200 hover:text-white"
            >
              www.thedevzoo.com
            </a>
            <Link
              href="/contact"
              className="mt-5 inline-flex text-sm font-medium text-brand transition-colors duration-200 hover:text-brand-hover"
            >
              Book a Free Call -&gt;
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/5 pt-6 text-xs text-white/35 md:flex-row md:items-center md:justify-between">
          <p>Copyright © 2025 Devzoo. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
