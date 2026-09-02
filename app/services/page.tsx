import type { Metadata } from "next";
import { Check } from "lucide-react";
import { services } from "@/lib/data/services";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { CTASection } from "@/components/sections/CTASection";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Digital advertising, social media management, creative & content, branding and digital solutions — five service areas built to help your business grow.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Digital Services Built Around Business Growth."
        description="Five focused service areas that work together — strategy, creative, advertising, branding and the digital foundations behind them."
      >
        {/* In-page navigation */}
        <nav aria-label="Services on this page" className="mt-10">
          <ul className="flex flex-wrap gap-2">
            {services.map((s) => (
              <li key={s.slug}>
                <a
                  href={`#${s.slug}`}
                  className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3.5 py-2 text-sm font-medium text-white/80 transition hover:border-brand-400 hover:bg-brand-500/10 hover:text-white"
                >
                  <s.icon className="size-4 text-brand-300" aria-hidden />
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      {/* Detailed service blocks — alternating layout */}
      <section className="py-8 sm:py-12">
        <Container>
          {services.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <article
                key={s.slug}
                id={s.slug}
                className="grid scroll-mt-28 items-center gap-10 border-b border-line py-16 last:border-0 sm:py-20 lg:grid-cols-12 lg:gap-16"
              >
                <Reveal
                  className={cn("lg:col-span-6", flip && "lg:order-2")}
                >
                  <div className="flex items-center gap-4">
                    <span className="flex size-12 items-center justify-center rounded-lg bg-navy-950 text-white">
                      <s.icon className="size-[22px]" strokeWidth={1.75} aria-hidden />
                    </span>
                    <span className="font-display text-sm font-bold tracking-[0.2em] text-muted">
                      0{i + 1}
                    </span>
                  </div>
                  <h2 className="mt-6 text-3xl sm:text-4xl">{s.title}</h2>
                  <p className="mt-5 text-pretty text-lg leading-relaxed text-muted">
                    {s.description}
                  </p>
                  <p className="mt-5 border-l-2 border-brand-500 pl-4 text-[15px] font-medium text-ink">
                    {s.outcome}
                  </p>
                  <div className="mt-8">
                    <Button href={`/contact?service=${encodeURIComponent(s.title)}`} arrow>
                      Talk to ADSolution
                    </Button>
                  </div>
                </Reveal>

                <Reveal
                  delay={120}
                  className={cn("lg:col-span-6", flip && "lg:order-1")}
                >
                  <div className="card p-7 sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                      What&apos;s included
                    </p>
                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                      {s.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 rounded-lg border border-line bg-surface px-4 py-3 text-[15px] font-medium"
                        >
                          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
                            <Check className="size-3.5" strokeWidth={3} aria-hidden />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </article>
            );
          })}
        </Container>
      </section>

      <WorkflowSection />
      <CTASection
        title="Not Sure Which Service You Need?"
        description="Tell us about your goals and we'll recommend the right mix — with a clear scope and no pressure."
        primary={{ label: "Get a Digital Strategy", href: "/contact" }}
        secondary={{ label: "See Our Work", href: "/portfolio" }}
      />
    </>
  );
}
