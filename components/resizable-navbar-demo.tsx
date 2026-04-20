"use client";

import Link from "next/link";
import { useState } from "react";
import { headerNavLinks } from "@/libs/navigation";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavBody,
  NavItems,
  Navbar,
  NavbarButton,
  NavbarLogo,
} from "@/components/ui/resizable-navbar";
import { CALENDLY_URL } from "@/libs/site-links";

const navItems = headerNavLinks.map((item) => ({
  name: item.label,
  link: item.href,
}));

export default function NavbarDemo() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="relative z-10 flex items-center gap-3">
          <NavbarButton variant="primary" href={CALENDLY_URL}>
            Book a call
          </NavbarButton>
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((current) => !current)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-2xl px-4 py-3 font-body text-base text-white/75 transition-colors duration-200 hover:bg-white/6 hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-3">
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              href="/portfolio"
              variant="secondary"
              className="w-full"
            >
              Our work
            </NavbarButton>
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              href={CALENDLY_URL}
              variant="primary"
              className="w-full"
            >
              Book a call
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
