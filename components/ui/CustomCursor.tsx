"use client";

import { useEffect, useRef, useState } from "react";

type CursorState = "default" | "hover" | "text" | "hidden";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -200, y: -200 });
  const ring = useRef({ x: -200, y: -200 });
  const rafId = useRef<number>(0);
  const [state, setState] = useState<CursorState>("hidden");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const pointerIsCoarse = window.matchMedia("(pointer: coarse)").matches;

    if (prefersReducedMotion || pointerIsCoarse) {
      document.documentElement.classList.remove("has-custom-cursor");
      return;
    }

    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (state === "hidden") setState("default");
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest("input, textarea, select, [contenteditable]")) {
        setState("text");
      } else if (el.closest("a, button, [role=button], label, [tabindex]")) {
        setState("hover");
      } else {
        setState("default");
      }
    };

    const onLeave = () => setState("hidden");
    const onEnter = () => setState("default");

    const tick = () => {
      const lerp = 0.1;
      ring.current.x += (mouse.current.x - ring.current.x) * lerp;
      ring.current.y += (mouse.current.y - ring.current.y) * lerp;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      cancelAnimationFrame(rafId.current);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [state]);

  const isHover = state === "hover";
  const isText = state === "text";
  const isHidden = state === "hidden";

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9998,
          pointerEvents: "none",
          willChange: "transform",
          marginLeft: isHover ? -24 : isText ? -2 : -20,
          marginTop: isHover ? -24 : isText ? -18 : -20,
          width: isHover ? 48 : isText ? 4 : 40,
          height: isHover ? 48 : isText ? 36 : 40,
          borderRadius: isText ? "2px" : "9999px",
          border: isText ? "none" : "1.5px solid #E8470A",
          backgroundColor: isHover
            ? "rgba(232,71,10,0.08)"
            : isText
              ? "rgba(232,71,10,0.55)"
              : "transparent",
          opacity: isHidden ? 0 : 1,
          transition:
            "width 300ms cubic-bezier(.23,1,.32,1), height 300ms cubic-bezier(.23,1,.32,1), margin 300ms cubic-bezier(.23,1,.32,1), border-radius 300ms cubic-bezier(.23,1,.32,1), background-color 300ms cubic-bezier(.23,1,.32,1), opacity 200ms ease",
        }}
      />

      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9999,
          pointerEvents: "none",
          willChange: "transform",
          marginLeft: -3,
          marginTop: -3,
          width: 6,
          height: 6,
          borderRadius: "9999px",
          backgroundColor: "#E8470A",
          boxShadow: "0 0 0 1.5px rgba(255,255,255,0.6)",
          opacity: isHidden || isText ? 0 : 1,
          transition:
            "opacity 200ms ease, width 300ms cubic-bezier(.23,1,.32,1), height 300ms cubic-bezier(.23,1,.32,1)",
        }}
      />
    </>
  );
}
