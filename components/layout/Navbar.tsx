"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Solid background once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Every page opens with a dark hero, so the transparent navbar uses
  // light text until the user scrolls (or opens the drawer).
  const onDark = !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? open
            ? "border-b border-line bg-white"
            : "border-b border-line/80 bg-white/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-[72px] items-center justify-between">
        <Logo tone={onDark ? "dark" : "light"} />

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative rounded-md px-3.5 py-2 text-[14.5px] font-medium transition-colors",
                onDark
                  ? isActive(item.href)
                    ? "text-white"
                    : "text-white/65 hover:text-white"
                  : isActive(item.href)
                    ? "text-ink"
                    : "text-muted hover:text-ink",
              )}
            >
              {item.label}
              <span
                className={cn(
                  "absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-brand-500 transition-transform duration-300 origin-left",
                  isActive(item.href) ? "scale-x-100" : "scale-x-0",
                )}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" size="md" arrow>
            Get Started
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className={cn(
            "-mr-2 inline-flex size-11 items-center justify-center rounded-md transition lg:hidden",
            onDark ? "text-white hover:bg-white/10" : "text-ink hover:bg-surface",
          )}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden fixed inset-x-0 top-[72px] z-40 flex h-[calc(100dvh-72px)] flex-col overflow-y-auto bg-white transition-all duration-300 ease-[var(--ease-out-expo)]",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        )}
        inert={!open}
      >
        <Container className="flex flex-1 flex-col py-6">
          <nav aria-label="Mobile" className="flex flex-col">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${60 + i * 40}ms` : "0ms" }}
                className={cn(
                  "flex items-center justify-between border-b border-line py-4 text-2xl font-display font-bold tracking-tight transition-all duration-500",
                  open ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0",
                  isActive(item.href) ? "text-brand-600" : "text-ink",
                )}
              >
                {item.label}
                <ArrowUpRight className="size-5 text-muted" aria-hidden />
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-4 pt-8">
            <Button href="/contact" size="lg" className="w-full" arrow onClick={() => setOpen(false)}>
              Get Started
            </Button>
            <p className="text-center text-sm text-muted">
              <a href={`mailto:${site.email}`} className="hover:text-ink">
                {site.email}
              </a>
            </p>
          </div>
        </Container>
      </div>
    </header>
  );
}
