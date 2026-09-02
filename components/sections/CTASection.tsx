import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

type Props = {
  title?: string;
  description?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export function CTASection({
  title = "Let's Work Together.",
  description = "Tell us about your business and goals. We'll come back with a clear recommendation on how ADSolution can help you grow.",
  primary = { label: "Start Your Project", href: "/contact" },
  secondary = { label: "Explore Our Services", href: "/services" },
}: Props) {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-2xl bg-navy-950 px-6 py-16 text-center text-white sm:px-12 sm:py-20 lg:py-24">
            <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
            <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/30 blur-[100px]" />
            <div className="relative mx-auto max-w-2xl">
              <p className="eyebrow eyebrow-dark justify-center">Ready when you are</p>
              <h2 className="mt-5 text-balance text-3xl text-white sm:text-4xl lg:text-5xl">
                {title}
              </h2>
              <p className="mt-5 text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
                {description}
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Button href={primary.href} size="lg" arrow>
                  {primary.label}
                </Button>
                <Button href={secondary.href} size="lg" variant="outline-light">
                  {secondary.label}
                </Button>
              </div>
              <p className="mt-8 text-sm text-white/45">
                Prefer email?{" "}
                <a href={`mailto:${site.email}`} className="text-white/80 underline-offset-4 hover:underline">
                  {site.email}
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
