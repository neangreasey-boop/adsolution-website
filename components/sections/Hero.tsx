import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "./HeroVisual";

const capabilities = [
  "Digital Advertising",
  "Creative Content",
  "Social Media",
  "Branding",
  "Web & Digital Solutions",
  "Digital Tools & Automation",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      {/* Background treatment */}
      <div className="pointer-events-none absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[32rem] w-[32rem] rounded-full bg-brand-600/20 blur-[140px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-950 to-transparent" />

      <Container className="relative grid items-center gap-14 pb-20 pt-32 sm:pt-36 lg:grid-cols-12 lg:gap-8 lg:pb-28 lg:pt-44">
        <div className="lg:col-span-6 xl:col-span-6">
          <p
            className="eyebrow eyebrow-dark animate-hero"
            style={{ animationDelay: "0ms" }}
          >
            ADSolution &middot; Advertising &bull; Digital &bull; Solution
          </p>
          <h1
            className="animate-hero-slide mt-6 text-balance text-[2.6rem] leading-[1.05] text-white sm:text-6xl lg:text-[3.6rem] xl:text-[4.2rem]"
            style={{ animationDelay: "60ms" }}
          >
            Digital Solutions That Move Your Business{" "}
            <span className="relative inline-block text-brand-400">
              Forward.
              <svg
                viewBox="0 0 220 12"
                className="absolute -bottom-1 left-0 w-full"
                fill="none"
                aria-hidden
              >
                <path
                  d="M2 9 C 60 2, 160 2, 218 8"
                  stroke="#2563eb"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="animate-draw"
                  style={{ animationDelay: "900ms" }}
                />
              </svg>
            </span>
          </h1>
          <p
            className="animate-hero mt-7 max-w-xl text-pretty text-lg leading-relaxed text-white/65 sm:text-xl"
            style={{ animationDelay: "140ms" }}
          >
            ADSolution helps businesses grow through strategic advertising,
            creative content, and modern digital solutions.
          </p>

          <div
            className="animate-hero mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "220ms" }}
          >
            <Button href="/contact" size="lg" arrow>
              Get Started
            </Button>
            <Button href="/services" size="lg" variant="outline-light">
              Explore Our Services
            </Button>
          </div>

          <ul
            className="animate-hero mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] font-medium text-white/45"
            style={{ animationDelay: "300ms" }}
          >
            {capabilities.map((c, i) => (
              <li key={c} className="flex items-center gap-6">
                {c}
                {i < capabilities.length - 1 && (
                  <span className="hidden size-1 rounded-full bg-white/25 sm:block" />
                )}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="animate-hero lg:col-span-6"
          style={{ animationDelay: "200ms" }}
        >
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
