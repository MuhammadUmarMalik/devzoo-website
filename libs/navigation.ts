export type NavLink = {
  label: string;
  href: string;
};

export const headerNavLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];
