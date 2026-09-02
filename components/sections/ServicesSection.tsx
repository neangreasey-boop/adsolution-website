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
            description="Six focused service areas — advertising, social, creative, branding, web and digital tools — designed to work together or stand on their own."
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
        </div>
      </Container>
    </section>
  );
}
