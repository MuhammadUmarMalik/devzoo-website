import Link from "next/link";

const services = [
  { label: "Website Development", href: "/services/web-development" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "Graphic Design", href: "/services/graphic-design" },
  { label: "Video Editing", href: "/services/video-editing" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="font-heading font-bold text-xl text-white">
              Dev<span className="text-brand">zoo</span>
            </Link>
            <p className="mt-3 text-sm font-body text-white/50 leading-relaxed">
              Digital Magic. Web Wonders. Design Dreams.
            </p>
            <a
              href="mailto:info@thedevzoo.com"
              className="mt-2 block text-sm font-body text-white/50 hover:text-white transition-colors duration-200"
            >
              info@thedevzoo.com
            </a>
          </div>

          <div>
            <h4 className="text-xs font-heading font-semibold uppercase tracking-widest text-white/30 mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-body text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-heading font-semibold uppercase tracking-widest text-white/30 mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-body text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-heading font-semibold uppercase tracking-widest text-white/30 mb-4">
              Get in Touch
            </h4>
            <p className="text-sm font-body text-white/60 leading-relaxed">
              Book a free discovery call and get a proposal within 48 hours.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-4 text-sm font-body font-medium text-brand hover:text-brand-hover transition-colors duration-200"
            >
              Book a call →
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-body text-white/30">
          <p>© {new Date().getFullYear()} Devzoo. All rights reserved.</p>
          <p>Pakistan · USA · UK · UAE</p>
        </div>
      </div>
    </footer>
  );
}
