import { Check } from "lucide-react";
import { services } from "@/lib/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

/**
 * "What We Can Do" — shown on the Portfolio page while no real client
 * projects are published. Lists real capabilities only; no invented work.
 */
export function CapabilitiesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeader
          eyebrow="What We Can Do"
          title="Our Capabilities."
          description="Case studies from client projects will be published here as they become available. Until then, this is the work ADSolution delivers across six service areas."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 90}>
              <div className="card card-hover group flex h-full flex-col p-7">
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-lg bg-navy-950 text-white transition-colors group-hover:bg-brand-500">
                    <s.icon className="size-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <span className="font-display text-sm font-bold text-line transition-colors group-hover:text-brand-200">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                <ul className="mt-4 space-y-2 text-[14px] text-ink/80">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand-500" strokeWidth={2.5} aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="max-w-lg text-muted">
            Want to see how these capabilities apply to your business? Tell us
            about your project and we&apos;ll walk you through our approach.
          </p>
          <Button href="/contact" arrow>
            Talk to ADSolution
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
