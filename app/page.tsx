import { Hero } from "@/components/sections/Hero";
import { ValueSection } from "@/components/sections/ValueSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueSection />
      <ServicesSection />
      <WorkflowSection />
      <ProcessTimeline />

      {/* Portfolio preview */}
      <section className="bg-surface py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Portfolio"
              title="Selected Work."
              description="A look at the kind of projects we take on — from campaigns and creative to brand identity and web."
            />
            <Reveal delay={100} className="shrink-0">
              <Button href="/portfolio" variant="secondary" arrow>
                View Portfolio
              </Button>
            </Reveal>
          </div>
          <Reveal className="mt-14">
            <PortfolioGrid limit={3} filterable={false} />
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
