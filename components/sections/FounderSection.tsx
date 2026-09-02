import Image from "next/image";
import { Briefcase, Quote } from "lucide-react";
import { founder } from "@/lib/data/founder";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/** Full founder profile — About page. */
export function FounderSection() {
  return (
    <section id="founder" className="relative overflow-hidden bg-surface py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Photo */}
          <Reveal variant="scale" className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* frame accents */}
              <div className="absolute -left-3 -top-3 h-24 w-24 border-l-2 border-t-2 border-brand-500" aria-hidden />
              <div className="absolute -bottom-3 -right-3 h-24 w-24 border-b-2 border-r-2 border-brand-500" aria-hidden />
              <div className="relative overflow-hidden rounded-xl bg-navy-950 shadow-[0_30px_60px_-24px_rgb(6_11_24/0.5)]">
                <Image
                  src={founder.photo}
                  alt={founder.photoAlt}
                  width={800}
                  height={800}
                  sizes="(min-width: 1024px) 40vw, (min-width: 640px) 448px, 100vw"
                  className="aspect-square w-full object-cover"
                  priority={false}
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-950/90 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white sm:p-6">
                  <div>
                    <p className="font-display text-xl font-bold tracking-tight">{founder.name}</p>
                    <p className="text-sm text-white/70">{founder.role}</p>
                  </div>
                  <span className="hidden items-center gap-1.5 rounded-md border border-white/20 bg-white/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider backdrop-blur sm:inline-flex">
                    <Briefcase className="size-3.5" aria-hidden /> 13+ yrs
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Profile */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow">Founder</p>
              <h2 className="mt-4 font-display text-3xl uppercase tracking-[0.02em] sm:text-4xl">
                {founder.displayName}
              </h2>
              <p className="mt-2 text-lg font-semibold text-brand-600">{founder.role}</p>
              <p className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-muted">
                <Briefcase className="size-4 text-brand-500" aria-hidden />
                {founder.experience}
              </p>
              <p className="mt-6 text-pretty text-[17px] leading-relaxed text-muted">
                {founder.bio}
              </p>
            </Reveal>

            <Reveal delay={100} className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Areas of expertise
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {founder.skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-md border border-line bg-white px-3.5 py-2 text-[14px] font-medium text-ink transition-colors hover:border-brand-300 hover:bg-brand-50"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={160} className="mt-10">
              <blockquote className="relative rounded-xl bg-navy-950 p-7 text-white sm:p-8">
                <Quote className="absolute right-6 top-6 size-8 text-brand-500/40" aria-hidden />
                <p className="pr-8 text-pretty font-display text-xl font-semibold leading-snug sm:pr-10 sm:text-[1.35rem]">
                  &ldquo;{founder.quote}&rdquo;
                </p>
                <footer className="mt-5 text-sm text-white/60">— {founder.quoteAttribution}</footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Compact founder message — homepage. */
export function FounderQuote() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-2xl bg-navy-950 text-white">
            <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50 [mask-image:radial-gradient(ellipse_at_left,black,transparent_70%)]" />
            <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-brand-500/25 blur-[100px]" />
            <div className="relative grid items-center gap-8 p-7 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-14">
              <div className="flex items-center gap-5 lg:col-span-4 lg:flex-col lg:items-start">
                <Image
                  src={founder.photo}
                  alt={founder.photoAlt}
                  width={800}
                  height={800}
                  sizes="(min-width: 1024px) 260px, 96px"
                  className="size-24 shrink-0 rounded-xl object-cover ring-2 ring-brand-500/60 lg:size-full lg:max-w-[260px]"
                />
                <div>
                  <p className="font-display text-lg font-bold">{founder.name}</p>
                  <p className="text-sm text-white/60">{founder.role}</p>
                  <p className="mt-1 text-xs font-medium text-brand-300">{founder.experience}</p>
                </div>
              </div>
              <blockquote className="lg:col-span-8">
                <Quote className="size-8 text-brand-500" aria-hidden />
                <p className="mt-4 text-balance font-display text-2xl font-semibold leading-snug sm:text-3xl lg:text-[2.1rem]">
                  {founder.quote}
                </p>
                <footer className="mt-6 text-sm text-white/55">— {founder.quoteAttribution}</footer>
              </blockquote>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
