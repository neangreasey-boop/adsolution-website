import { Hero } from "@/components/sections/Hero";
import { ValueSection } from "@/components/sections/ValueSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FounderQuote } from "@/components/sections/FounderSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueSection />
      <ServicesSection />
      <WorkflowSection />
      <ProcessTimeline />

      <FounderQuote />

      <CTASection />
    </>
  );
}
