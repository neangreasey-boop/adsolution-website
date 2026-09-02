import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * ADSolution logo.
 *
 * TODO (brand): Replace the inline SVG mark below with the official
 * ADSolution logo. Drop the file at /public/brand/logo.svg (and a
 * white-on-dark variant at /public/brand/logo-white.svg), then swap
 * the <Mark /> + wordmark for:
 *   <Image src="/brand/logo.svg" alt="ADSolution" width={160} height={36} priority />
 */
function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("size-9", className)}
      aria-hidden
      fill="none"
    >
      <rect width="40" height="40" rx="9" className="fill-brand-500" />
      {/* Stylised "A" built from a rising bar + arrow: advertising → growth */}
      <path
        d="M11 29 L20 11 L29 29"
        stroke="white"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M15.5 23.5 H24.5" stroke="white" strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="29.5" cy="11" r="2.4" fill="white" />
    </svg>
  );
}

type Props = {
  tone?: "light" | "dark";
  className?: string;
  asLink?: boolean;
};

export function Logo({ tone = "light", className, asLink = true }: Props) {
  const content = (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Mark />
      <span
        className={cn(
          "font-display text-[1.35rem] font-extrabold tracking-[-0.03em]",
          tone === "dark" ? "text-white" : "text-ink",
        )}
      >
        AD<span className="text-brand-500">Solution</span>
      </span>
    </span>
  );

  if (!asLink) return content;
  return (
    <Link href="/" aria-label="ADSolution — Home" className="inline-flex shrink-0">
      {content}
    </Link>
  );
}
