"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import React, { useState } from "react";
import { cn } from "@/libs/utils";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const shellShadow =
  "0 18px 48px rgba(7, 9, 12, 0.28), 0 4px 14px rgba(7, 9, 12, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.14)";
const navbarBaseColor = "rgba(37, 40, 48, 0.34)";
const navbarScrolledColor = "rgba(26, 28, 34, 0.54)";

export const Navbar = ({ children, className }: NavbarProps) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 24);
  });

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex justify-center px-4 pb-4 pt-3 sm:px-6 sm:pb-4 sm:pt-4",
        className,
      )}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        width: visible
          ? "min(860px, calc(100vw - 3rem))"
          : "min(1180px, calc(100vw - 2rem))",
        y: visible ? 4 : 0,
        borderRadius: visible ? 28 : 20,
        backgroundColor: visible ? navbarScrolledColor : navbarBaseColor,
        backdropFilter: visible
          ? "blur(24px) saturate(180%)"
          : "blur(20px) saturate(160%)",
        boxShadow: shellShadow,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 28,
      }}
      className={cn(
        "relative hidden min-h-16 items-center justify-between overflow-hidden border border-white/14 px-3 lg:flex before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-white/30 after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03)_35%,rgba(255,255,255,0.02)_100%)]",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const pathname = usePathname();

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 items-center justify-center gap-1 text-sm font-medium lg:flex",
        className,
      )}
    >
      {items.map((item, idx) => {
        const active = pathname === item.link;

        return (
          <Link
            key={item.link}
            href={item.link}
            onMouseEnter={() => setHovered(idx)}
            onClick={onItemClick}
            className={cn(
              "relative rounded-full px-4 py-2 font-body text-sm transition-colors duration-200",
              active ? "text-white" : "text-white/68 hover:text-white",
            )}
          >
            {(hovered === idx || active) && (
              <motion.div
                layoutId="navbar-hovered"
                className={cn(
                  "absolute inset-0 rounded-full border",
                  active
                    ? "border-brand/40 bg-brand/15"
                    : "border-white/8 bg-white/6",
                )}
                transition={{ type: "spring", stiffness: 320, damping: 30 }}
              />
            )}
            <span className="relative z-10">{item.name}</span>
          </Link>
        );
      })}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        width: visible
          ? "min(420px, calc(100vw - 1.5rem))"
          : "min(480px, calc(100vw - 1rem))",
        y: visible ? 4 : 0,
        borderRadius: visible ? 24 : 20,
        backgroundColor: visible ? navbarScrolledColor : navbarBaseColor,
        backdropFilter: visible
          ? "blur(24px) saturate(180%)"
          : "blur(20px) saturate(160%)",
        boxShadow: shellShadow,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 28,
      }}
      className={cn(
        "relative flex w-full flex-col overflow-hidden border border-white/14 px-4 py-3 lg:hidden before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-white/28 after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03)_35%,rgba(255,255,255,0.02)_100%)]",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div className={cn("flex items-center justify-between gap-4", className)}>
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  void onClose;

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0, marginTop: 0 }}
          animate={{ opacity: 1, height: "auto", marginTop: 16 }}
          exit={{ opacity: 0, height: 0, marginTop: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={cn(
            "overflow-hidden border-t border-white/8 pt-4",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white transition-colors duration-200 hover:border-brand/40 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/70"
    >
      <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      >
        {isOpen ? (
          <>
            <path d="M6 6L18 18" />
            <path d="M18 6L6 18" />
          </>
        ) : (
          <>
            <path d="M4 7H20" />
            <path d="M4 12H20" />
            <path d="M4 17H20" />
          </>
        )}
      </svg>
    </button>
  );
};

export const NavbarLogo = () => {
  const pathname = usePathname();

  return (
    <Link
      href="/"
      className="relative z-10 flex items-center gap-3 rounded-full px-2 py-1 text-white"
      aria-label="Devzoo home"
      scroll={pathname === "/" ? false : undefined}
    >
      <span className="flex h-11 w-11 items-center justify-center overflow-hidden">
        <Image
          src="/logo12.png"
          alt="Devzoo logo"
          width={44}
          height={44}
          className="h-full w-full object-cover"
          priority
        />
      </span>
    </Link>
  );
};

export const NavbarButton = ({
  href,
  children,
  className,
  variant = "primary",
  onClick,
  ...props
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  onClick?: React.MouseEventHandler<HTMLElement>;
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-btn px-4 py-2 text-sm font-medium font-body transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/70";

  const variantStyles = {
    primary: "bg-brand text-white hover:bg-brand-hover",
    secondary:
      "border border-white/14 bg-white/6 text-white hover:border-brand/45 hover:text-brand",
  };

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={cn(baseStyles, variantStyles[variant], className)}
        {...(props as Omit<React.ComponentPropsWithoutRef<"a">, "href">)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={
        (props as React.ComponentPropsWithoutRef<"button">).type ?? "button"
      }
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...(props as React.ComponentPropsWithoutRef<"button">)}
    >
      {children}
    </button>
  );
};
