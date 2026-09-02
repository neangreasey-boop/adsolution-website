import { processSteps } from "@/lib/data/process";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function ProcessTimeline() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeader
          eyebrow="How We Work"
          title="A Clear Process From First Call to Ongoing Growth."
          description="Simple, transparent and built around your business — so you always know what's happening and why."
        />

        {/* Desktop: horizontal timeline. Mobile: vertical timeline. */}
        <ol className="relative mt-14 lg:mt-20 lg:grid lg:grid-cols-5 lg:gap-6">
          {/* Horizontal rail (desktop) */}
          <div
            className="absolute left-0 right-0 top-[22px] hidden h-px bg-line lg:block"
            aria-hidden
          />
          {/* Vertical rail (mobile) */}
          <div
            className="absolute bottom-6 left-[22px] top-0 w-px bg-line lg:hidden"
            aria-hidden
          />

          {processSteps.map((step, i) => (
            <li key={step.number} className="relative pb-10 last:pb-0 lg:pb-0">
              <Reveal delay={i * 100} className="flex gap-6 lg:block">
                {/* marker */}
                <span className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-full border-[3px] border-white bg-navy-950 font-display text-[13px] font-bold text-white shadow-[0_0_0_1px_var(--color-line)] transition-colors duration-300 lg:mb-6">
                  {step.number}
                </span>
                <div className="pt-2 lg:pt-0">
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="mt-1.5 max-w-xs text-[15px] leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
