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
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) { setReducedMotion(true); return; }

    // Touch-only devices — bail out
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (state === "hidden") setState("default");
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest("input, textarea, select, [contenteditable]")) {
        setState("text");
      } else if (
        el.closest("a, button, [role=button], label, [tabindex]")
      ) {
        setState("hover");
      } else {
        setState("default");
      }
    };

    const onLeave = () => setState("hidden");

    // RAF loop — dot snaps, ring lerps
    const tick = () => {
      const LERP = 0.1;
      ring.current.x += (mouse.current.x - ring.current.x) * LERP;
      ring.current.y += (mouse.current.y - ring.current.y) * LERP;

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

    return () => {
      cancelAnimationFrame(rafId.current);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [state]);

  if (reducedMotion) return null;

  const isHover = state === "hover";
  const isText = state === "text";
  const isHidden = state === "hidden";

  return (
    <>
      {/* ── Outer ring ───────────────────────────── */}
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
          // Centre the ring on the cursor origin
          marginLeft: isHover ? -24 : isText ? -2 : -20,
          marginTop: isHover ? -24 : isText ? -18 : -20,
          width: isHover ? 48 : isText ? 4 : 40,
          height: isHover ? 48 : isText ? 36 : 40,
          borderRadius: isText ? "2px" : "9999px",
          border: isText
            ? "none"
            : `1.5px solid #E8470A`,
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

      {/* ── Inner dot ─────────────────────────────── */}
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
          marginLeft: isHover ? -3 : isText ? -3 : -3,
          marginTop: isHover ? -3 : isText ? -3 : -3,
          width: isHover ? 6 : isText ? 6 : 6,
          height: isHover ? 6 : isText ? 6 : 6,
          borderRadius: "9999px",
          backgroundColor: "#E8470A",
          // White halo so dot reads on any background
          boxShadow: "0 0 0 1.5px rgba(255,255,255,0.6)",
          opacity: isHidden ? 0 : isText ? 0 : 1,
          transition: "opacity 200ms ease, width 300ms cubic-bezier(.23,1,.32,1), height 300ms cubic-bezier(.23,1,.32,1)",
        }}
      />
    </>
  );
}
