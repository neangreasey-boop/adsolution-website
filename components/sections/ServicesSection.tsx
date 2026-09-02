import { services } from "@/lib/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  return (
    <section className="relative bg-surface py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-light [mask-image:linear-gradient(to_bottom,black,transparent_60%)] opacity-60" />
      <Container className="relative">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Services"
            title="Everything Your Business Needs to Grow Online."
            description="Five focused service areas, designed to work together — or stand on their own."
          />
          <Reveal delay={100} className="shrink-0">
            <Button href="/services" variant="secondary" arrow>
              View All Services
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 90} className="h-full">
              <ServiceCard service={s} />
            </Reveal>
          ))}
          {/* 6th slot: CTA tile keeps the 3-col grid balanced */}
          <Reveal delay={180} className="h-full">
            <div className="flex h-full flex-col justify-between rounded-xl bg-navy-950 p-7 text-white sm:p-8">
              <div>
                <p className="eyebrow eyebrow-dark">Not sure where to start?</p>
                <h3 className="mt-4 text-2xl font-bold text-white">
                  Get a digital strategy tailored to your business.
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/60">
                  Tell us about your goals and we&apos;ll recommend the right
                  mix of services — no obligation.
                </p>
              </div>
              <div className="pt-8">
                <Button href="/contact" variant="white" arrow>
                  Get a Digital Strategy
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
