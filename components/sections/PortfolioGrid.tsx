"use client";

import { useState } from "react";
import { portfolioCategories, projects, type Project } from "@/lib/data/portfolio";
import { cn } from "@/lib/utils";
import { PortfolioCard } from "./PortfolioCard";

type Props = {
  /** Limit the number of cards (used on the home page) */
  limit?: number;
  /** Show the category filter bar */
  filterable?: boolean;
};

export function PortfolioGrid({ limit, filterable = true }: Props) {
  const [active, setActive] =
    useState<(typeof portfolioCategories)[number]>("All");

  const list: Project[] = projects
    .filter((p) => active === "All" || p.category === active)
    .slice(0, limit ?? projects.length);

  return (
    <div>
      {filterable && (
        <div
          role="tablist"
          aria-label="Filter projects by category"
          className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0 [scrollbar-width:none]"
        >
          {portfolioCategories.map((c) => {
            const selected = c === active;
            return (
              <button
                key={c}
                role="tab"
                type="button"
                aria-selected={selected}
                onClick={() => setActive(c)}
                className={cn(
                  "shrink-0 rounded-md border px-4 py-2 text-sm font-medium transition-all duration-300",
                  selected
                    ? "border-navy-950 bg-navy-950 text-white"
                    : "border-line bg-white text-muted hover:border-brand-300 hover:text-ink",
                )}
              >
                {c}
              </button>
            );
          })}
        </div>
      )}

      <div
        className={cn("grid gap-5 sm:grid-cols-2 lg:grid-cols-3", filterable && "mt-8")}
      >
        {list.map((p) => (
          <div key={`${active}-${p.slug}`} id={p.slug} className="animate-hero scroll-mt-28">
            <PortfolioCard project={p} />
          </div>
        ))}
        {list.length === 0 && (
          <p className="col-span-full rounded-xl border border-dashed border-line p-10 text-center text-muted">
            No projects in this category yet.
          </p>
        )}
      </div>
    </div>
  );
}
