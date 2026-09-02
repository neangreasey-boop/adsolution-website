import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import type { Project } from "@/lib/data/portfolio";
import { cn } from "@/lib/utils";

const tones: Record<Project["tone"], string> = {
  blue: "from-brand-600 to-brand-800",
  navy: "from-navy-700 to-navy-950",
  slate: "from-charcoal-800 to-navy-900",
};

export function PortfolioCard({ project }: { project: Project }) {
  return (
    <article className="group card card-hover overflow-hidden">
      {/* Media */}
      <div className="relative aspect-[4/3] overflow-hidden bg-navy-900">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
          />
        ) : (
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.04]",
              tones[project.tone],
            )}
          >
            <div className="absolute inset-0 bg-grid-dark opacity-60" />
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 text-white/60">
              <ImageIcon className="size-8" strokeWidth={1.5} aria-hidden />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">
                Image placeholder
              </span>
            </div>
          </div>
        )}

        {project.placeholder && (
          <span className="absolute left-3 top-3 rounded-md bg-white/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-ink backdrop-blur">
            Sample project
          </span>
        )}
        <span className="absolute right-3 top-3 rounded-md bg-navy-950/70 px-2 py-1 text-[11px] font-semibold text-white backdrop-blur">
          {project.category}
        </span>
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="text-lg font-bold leading-snug">{project.title}</h3>
        <p className="clamp-3 mt-2 text-[14.5px] leading-relaxed text-muted">
          {project.description}
        </p>
        <Link
          href={`/portfolio#${project.slug}`}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600"
        >
          View Case Study<span className="sr-only">: {project.title}</span>
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
