import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "white" | "outline-light";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

type LinkProps = BaseProps & { href: string; onClick?: () => void };
type ButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

const base =
  "group inline-flex items-center justify-center gap-2 rounded-md font-semibold whitespace-nowrap transition-all duration-300 ease-[var(--ease-out-expo)] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-white shadow-[0_1px_0_rgb(255_255_255/0.15)_inset,0_8px_20px_-8px_rgb(37_99_235/0.6)] hover:bg-brand-600 hover:shadow-[0_12px_28px_-8px_rgb(37_99_235/0.7)] hover:-translate-y-px",
  secondary:
    "bg-ink text-white hover:bg-charcoal-800 hover:-translate-y-px",
  ghost:
    "text-ink hover:bg-surface",
  white:
    "bg-white text-ink hover:bg-brand-50 hover:-translate-y-px",
  "outline-light":
    "border border-white/25 text-white hover:border-white/60 hover:bg-white/5",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-[15px]",
};

function Arrow() {
  return (
    <ArrowRight
      className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
      aria-hidden
    />
  );
}

function omitBaseProps(p: ButtonProps) {
  const rest: Record<string, unknown> = { ...p };
  for (const k of ["variant", "size", "arrow", "className", "children", "href"]) delete rest[k];
  return rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export function Button(props: LinkProps | ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    arrow = false,
    className,
    children,
  } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href !== undefined) {
    const external = /^https?:\/\//.test(props.href);
    if (external) {
      return (
        <a href={props.href} className={classes} target="_blank" rel="noreferrer">
          {children}
          {arrow && <Arrow />}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes} onClick={props.onClick}>
        {children}
        {arrow && <Arrow />}
      </Link>
    );
  }

  const rest = omitBaseProps(props as ButtonProps);
  return (
    <button className={classes} {...rest}>
      {children}
      {arrow && <Arrow />}
    </button>
  );
}
