import { values } from "@/lib/data/values";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function ValueSection() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Why ADSolution"
              title="Built for Businesses That Want to Grow."
              description="We don't just create ads. We create digital solutions that help businesses grow — combining advertising strategy, creative content, social media, branding and digital solutions into practical services designed around each business."
            />
          </div>

          <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:col-span-7">
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 80}
                className="group relative bg-white p-7 transition-colors duration-300 hover:bg-surface sm:p-8"
              >
                <span className="flex size-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                  <v.icon className="size-5" strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {v.description}
                </p>
                <span className="absolute right-6 top-6 font-display text-sm font-bold text-line transition-colors group-hover:text-brand-200">
                  0{i + 1}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
