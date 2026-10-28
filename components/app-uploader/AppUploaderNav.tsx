"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { LayoutDashboard, ShieldCheck, FileText, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const appUploaderNavLinks = [
  {
    label: "Application Info",
    href: "/app-uploader",
    icon: LayoutDashboard,
  },
  {
    label: "Privacy Policy",
    href: "/app-uploader/privacy",
    icon: ShieldCheck,
  },
  {
    label: "Terms of Service",
    href: "/app-uploader/terms",
    icon: FileText,
  },
  {
    label: "Data Deletion",
    href: "/app-uploader/data-deletion",
    icon: Trash2,
  },
] as const;

export function AppUploaderNav({ className }: { className?: string }) {
  const pathname = usePathname();
  const currentPath = pathname ? pathname.replace(/\/$/, "") : "";

  return (
    <div
      className={cn(
        "sticky top-[72px] z-30 border-b border-line bg-white/95 backdrop-blur-md shadow-xs",
        className
      )}
    >
      <Container>
        <div className="flex items-center justify-between py-2 sm:py-2.5">
          <div className="hidden md:flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted">
            <span className="size-2 rounded-full bg-brand-500 animate-pulse" />
            <span>REASEY Uploader Hub</span>
          </div>

          <nav
            aria-label="REASEY Uploader Pages"
            className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto py-1 scrollbar-none w-full md:w-auto"
          >
            {appUploaderNavLinks.map((item) => {
              const itemPath = item.href.replace(/\/$/, "");
              const isActive = currentPath === itemPath;
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs sm:text-sm font-medium transition-all whitespace-nowrap",
                    isActive
                      ? "bg-brand-500 text-white shadow-xs"
                      : "text-muted hover:bg-surface hover:text-ink"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon
                    className={cn(
                      "size-3.5 sm:size-4 shrink-0",
                      isActive ? "text-white" : "text-brand-500"
                    )}
                  />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </Container>
    </div>
  );
}
