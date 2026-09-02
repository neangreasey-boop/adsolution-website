import Link from "next/link";
import { Mail, Globe } from "lucide-react";
import { nav, site, socials } from "@/lib/site";
import { services } from "@/lib/data/services";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { SocialIcon } from "@/components/ui/SocialIcon";

const legal = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[120px]" />

      <Container className="relative">
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Logo tone="dark" />
            <p className="mt-5 font-display text-lg font-semibold tracking-tight text-white/90">
              {site.tagline}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/55">
              A modern digital advertising and creative solution company helping
              businesses grow through strategy, creativity and technology.
            </p>

            <ul className="mt-7 flex items-center gap-2" aria-label="Social media">
              {socials.map((s) => (
                <li key={s.key}>
                  {s.configured ? (
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.name}
                      className="flex size-10 items-center justify-center rounded-md border border-white/10 text-white/70 transition hover:border-brand-400 hover:bg-brand-500/10 hover:text-white"
                    >
                      <SocialIcon name={s.key} className="size-[18px]" />
                    </a>
                  ) : (
                    <span
                      role="img"
                      aria-label={`${s.name} — link not configured yet`}
                      title={`${s.name} (URL to be configured)`}
                      className="flex size-10 cursor-default items-center justify-center rounded-md border border-dashed border-white/15 text-white/35"
                    >
                      <SocialIcon name={s.key} className="size-[18px]" />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                Navigation
              </h3>
              <ul className="mt-5 space-y-3">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/75 transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                Services
              </h3>
              <ul className="mt-5 space-y-3">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services#${s.slug}`}
                      className="text-sm text-white/75 transition hover:text-white"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                Contact
              </h3>
              <ul className="mt-5 space-y-3">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-2 text-sm text-white/75 transition hover:text-white"
                  >
                    <Mail className="size-4 text-brand-400" aria-hidden />
                    {site.email}
                  </a>
                </li>
                <li>
                  <a
                    href={site.url}
                    className="inline-flex items-center gap-2 text-sm text-white/75 transition hover:text-white"
                  >
                    <Globe className="size-4 text-brand-400" aria-hidden />
                    {site.domain}
                  </a>
                </li>
              </ul>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 transition hover:text-white"
              >
                Talk to ADSolution →
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {site.year} {site.name}. All rights reserved.</p>
          <ul className="flex gap-6">
            {legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
