import { ChevronRight, ChevronDown } from "lucide-react";
import { workflow } from "@/lib/data/process";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function WorkflowSection() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="pointer-events-none absolute right-0 top-0 h-[28rem] w-[28rem] translate-x-1/3 -translate-y-1/3 rounded-full bg-brand-600/25 blur-[140px]" />

      <Container className="relative">
        <SectionHeader
          tone="dark"
          eyebrow="Our Specialization"
          title="From Attention to Action."
          description="ADSolution combines creative production with digital advertising, so your business moves from awareness to measurable results — with one team, one plan."
          align="center"
        />

        {/* Workflow */}
        <ol className="mt-16 flex flex-col items-stretch gap-3 lg:flex-row lg:items-center lg:gap-0">
          {workflow.map((step, i) => (
            <li
              key={step.title}
              className="flex flex-col items-center lg:flex-1 lg:flex-row"
            >
              <Reveal
                delay={i * 110}
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-brand-400/50 hover:bg-brand-500/10"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-bold tracking-[0.2em] text-brand-300">
                    STEP {i + 1}
                  </span>
                  <span
                    className="size-2 rounded-full bg-brand-400"
                    style={{ opacity: 0.35 + i * 0.16 }}
                  />
                </div>
                <h3 className="mt-3 text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                  {step.description}
                </p>
              </Reveal>
              {i < workflow.length - 1 && (
                <span className="flex shrink-0 items-center justify-center py-1 text-brand-400 lg:px-2 lg:py-0">
                  <ChevronDown className="size-5 lg:hidden" aria-hidden />
                  <ChevronRight className="hidden size-5 lg:block" aria-hidden />
                </span>
              )}
            </li>
          ))}
        </ol>

        <Reveal delay={200} className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="max-w-xl text-white/60">
            Creative that earns attention. Advertising that turns it into
            action. Optimization that keeps improving the result.
          </p>
          <Button href="/contact" variant="white" arrow>
            Start Your Project
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
