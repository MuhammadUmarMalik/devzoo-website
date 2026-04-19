import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-hover",
  secondary:
    "bg-transparent text-white border border-white/20 hover:border-brand hover:text-brand",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  const base = `inline-flex cursor-pointer items-center justify-center font-body font-medium rounded-btn transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {children}
    </button>
  );
}
