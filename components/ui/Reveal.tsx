"use client";

import { useEffect, useRef, type ElementType } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Delay in ms, useful for staggered lists */
  delay?: number;
  variant?: "up" | "scale" | "clip";
  as?: ElementType;
  /** Fraction of the element that must be visible before revealing */
  threshold?: number;
};

const variantClass = {
  up: "reveal",
  scale: "reveal-scale",
  clip: "reveal-clip",
};

/**
 * Scroll-triggered reveal. Adds `.is-visible` once the element enters
 * the viewport. Purely CSS-driven; respects prefers-reduced-motion in CSS.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
  as: Tag = "div",
  threshold = 0.15,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return (
    <Tag
      ref={ref}
      className={cn(variantClass[variant], className)}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
