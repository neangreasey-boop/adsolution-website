"use client";

import { useEffect, useRef } from "react";
import { Megaphone, Share2, BarChart3, Globe, MousePointerClick } from "lucide-react";

/**
 * Abstract "growth canvas" visual for the hero.
 * - A dashboard-like panel with an ascending curve and bar set (no numbers —
 *   purely illustrative, nothing here claims a result).
 * - Floating capability tiles for advertising / social / data / web.
 * - Very subtle pointer parallax on desktop; disabled with reduced motion.
 */
export function HeroVisual() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) / r.width;
      const y = (e.clientY - (r.top + r.height / 2)) / r.height;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--px", x.toFixed(3));
        el.style.setProperty("--py", y.toFixed(3));
      });
    };
    const reset = () => {
      el.style.setProperty("--px", "0");
      el.style.setProperty("--py", "0");
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", reset);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", reset);
    };
  }, []);

  return (
    <div
      ref={root}
      className="relative mx-auto aspect-[5/4] w-full max-w-[560px] select-none [--px:0] [--py:0] lg:max-w-none"
      aria-hidden
    >
      {/* Glow + rings */}
      <div className="absolute left-1/2 top-1/2 size-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/25 blur-[110px]" />
      <div className="absolute left-1/2 top-1/2 size-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />
      <div className="absolute left-1/2 top-1/2 size-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]" />

      {/* Main panel (depth layer 1) */}
      <div
        className="absolute inset-x-[2%] top-[6%] bottom-[6%] rounded-2xl sm:inset-x-[8%] sm:top-[14%] sm:bottom-[12%] border border-white/10 bg-navy-900/80 shadow-[0_40px_80px_-30px_rgb(0_0_0/0.7)] backdrop-blur-sm transition-transform duration-500 ease-out will-change-transform"
        style={{
          transform:
            "translate3d(calc(var(--px) * -10px), calc(var(--py) * -10px), 0)",
        }}
      >
        <div className="absolute inset-0 rounded-2xl bg-grid-dark opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

        {/* Panel header */}
        <div className="relative flex items-center justify-between border-b border-white/10 px-5 py-3.5">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-white/20" />
            <span className="size-2 rounded-full bg-white/20" />
            <span className="size-2 rounded-full bg-white/20" />
          </div>
          <div className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-emerald-400" />
              <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
            </span>
            Campaign live
          </div>
        </div>

        {/* Chart area */}
        <div className="relative px-5 pt-5">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                Growth
              </p>
              <div className="mt-2 h-2.5 w-24 rounded bg-white/15" />
            </div>
            <div className="flex gap-1.5">
              {["Reach", "Engagement", "Results"].map((l, i) => (
                <span
                  key={l}
                  className={
                    i === 0
                      ? "rounded-md bg-brand-500 px-2 py-1 text-[10px] font-medium text-white"
                      : "rounded-md border border-white/10 px-2 py-1 text-[10px] font-medium text-white/50"
                  }
                >
                  {l}
                </span>
              ))}
            </div>
          </div>

          <svg viewBox="0 0 400 180" className="mt-4 w-full" fill="none">
            <defs>
              <linearGradient id="hero-area" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* baseline grid */}
            {[40, 80, 120].map((y) => (
              <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="white" strokeOpacity="0.06" />
            ))}
            {/* bars */}
            {[30, 46, 40, 62, 58, 80, 92, 110, 104, 130, 142, 160].map((h, i) => (
              <rect
                key={i}
                x={12 + i * 32}
                y={170 - h}
                width="14"
                height={h}
                rx="3"
                fill="white"
                fillOpacity={0.08 + i * 0.012}
                className="animate-bar"
                style={{ animationDelay: `${200 + i * 60}ms` }}
              />
            ))}
            {/* area + line */}
            <path
              d="M10 150 C 60 140, 90 130, 130 118 S 200 96, 240 78 S 320 44, 390 18 L 390 172 L 10 172 Z"
              fill="url(#hero-area)"
              className="animate-hero"
              style={{ animationDelay: "900ms" }}
            />
            <path
              d="M10 150 C 60 140, 90 130, 130 118 S 200 96, 240 78 S 320 44, 390 18"
              stroke="#60a5fa"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="animate-draw"
            />
            <circle cx="390" cy="18" r="5" fill="#2563eb" stroke="white" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Floating tiles (depth layer 2) */}
      <div
        className="absolute inset-0 hidden transition-transform duration-500 ease-out will-change-transform sm:block"
        style={{
          transform:
            "translate3d(calc(var(--px) * 18px), calc(var(--py) * 18px), 0)",
        }}
      >
        <Tile className="left-[0%] top-[6%] animate-float" icon={Megaphone} label="Advertising" />
        <Tile
          className="right-[-2%] top-[0%] animate-float-slow"
          icon={Share2}
          label="Social"
          delay="1.2s"
        />
        <Tile
          className="bottom-[4%] left-[6%] animate-float-slow"
          icon={Globe}
          label="Web"
          delay="0.6s"
        />
        <Tile
          className="bottom-[14%] right-[-2%] animate-float"
          icon={BarChart3}
          label="Performance"
          delay="1.8s"
        />

        {/* Click-through chip */}
        <div
          className="absolute bottom-[-2%] right-[28%] flex animate-float items-center gap-2 rounded-lg border border-white/10 bg-white px-3 py-2 text-[12px] font-semibold text-ink shadow-[0_20px_40px_-16px_rgb(0_0_0/0.6)]"
          style={{ animationDelay: "0.9s" }}
        >
          <span className="flex size-6 items-center justify-center rounded-md bg-brand-500 text-white">
            <MousePointerClick className="size-3.5" />
          </span>
          Attention → Action
        </div>
      </div>
    </div>
  );
}

function Tile({
  icon: Icon,
  label,
  className,
  delay,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  className: string;
  delay?: string;
}) {
  return (
    <div
      className={`absolute flex items-center gap-2.5 rounded-xl border border-white/10 bg-navy-800/90 py-2.5 pl-2.5 pr-4 shadow-[0_24px_50px_-20px_rgb(0_0_0/0.8)] backdrop-blur ${className}`}
      style={delay ? { animationDelay: delay } : undefined}
    >
      <span className="flex size-9 items-center justify-center rounded-lg bg-brand-500/15 text-brand-300 ring-1 ring-inset ring-brand-400/30">
        <Icon className="size-[18px]" />
      </span>
      <span className="text-[13px] font-semibold text-white/90">{label}</span>
    </div>
  );
}
