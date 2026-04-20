"use client";

import { useEffect, useRef, useState } from "react";

type AnimateInProps = {
  children: React.ReactNode;
  className?: string;
  /** ms delay before animation starts after element enters viewport */
  delay?: number;
  /** animation variant */
  variant?: "fade-up" | "fade-in" | "scale-up";
  /** IntersectionObserver threshold */
  threshold?: number;
};

export default function AnimateIn({
  children,
  className = "",
  delay = 0,
  variant = "fade-up",
  threshold = 0.12,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const animClass = `reveal-${variant}`;

  return (
    <div
      ref={ref}
      className={`${visible ? animClass : "opacity-0"} ${className}`}
      style={visible ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
