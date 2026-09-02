import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/data/services";
import { cn } from "@/lib/utils";

type Props = {
  service: Service;
  /** Show the full checklist of items (Services page) */
  expanded?: boolean;
  className?: string;
};

export function ServiceCard({ service, expanded = false, className }: Props) {
  const Icon = service.icon;
  return (
    <article
      className={cn("card card-hover group flex h-full flex-col p-7 sm:p-8", className)}
    >
      {/* accent bar */}
      <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 rounded-t-xl bg-brand-500 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-x-100" />

      <span className="flex size-12 items-center justify-center rounded-lg bg-navy-950 text-white transition-colors duration-300 group-hover:bg-brand-500">
        <Icon className="size-[22px]" strokeWidth={1.75} aria-hidden />
      </span>

      <h3 className="mt-6 text-xl font-bold">{service.title}</h3>
      <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
        {service.short}
      </p>

      <ul
        className={cn(
          "mt-5 grid gap-x-4 gap-y-2 text-[14px] text-ink/80",
          expanded ? "sm:grid-cols-2" : "grid-cols-1",
        )}
      >
        {(expanded ? service.items : service.items.slice(0, 3)).map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-brand-500" />
            {item}
          </li>
        ))}
        {!expanded && service.items.length > 3 && (
          <li className="text-muted">+ {service.items.length - 3} more</li>
        )}
      </ul>

      <div className="mt-auto pt-7">
        <Link
          href={`/services#${service.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors group-hover:text-brand-700"
        >
          Learn more<span className="sr-only"> about {service.title}</span>
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
