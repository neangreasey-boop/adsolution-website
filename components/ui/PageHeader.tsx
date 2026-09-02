import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

/** Dark page intro used on every inner page. */
export function PageHeader({ eyebrow, title, description, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-16 pt-32 text-white sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-48">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_top_left,black_10%,transparent_70%)]" />
      <div className="pointer-events-none absolute -right-32 top-0 h-[26rem] w-[26rem] rounded-full bg-brand-600/25 blur-[130px]" />
      <Container className="relative">
        <SectionHeader
          as="h1"
          tone="dark"
          eyebrow={eyebrow}
          title={title}
          description={description}
          className="max-w-3xl"
        />
        {children}
      </Container>
    </section>
  );
}
