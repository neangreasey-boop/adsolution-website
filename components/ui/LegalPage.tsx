import { Container } from "./Container";
import { PageHeader } from "./PageHeader";

export type LegalSection = { heading: string; body: React.ReactNode };

type Props = {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalPage({ eyebrow, title, updated, intro, sections }: Props) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} description={intro}>
        <p className="mt-6 text-sm text-white/45">Last updated: {updated}</p>
      </PageHeader>
      <section className="py-16 sm:py-20">
        <Container size="narrow">
          <div className="space-y-10 text-[15.5px] leading-relaxed text-muted [&_a]:text-brand-600 [&_a]:underline [&_a]:underline-offset-2 [&_li]:mt-2 [&_ul]:list-disc [&_ul]:pl-5">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-xl text-ink sm:text-2xl">{s.heading}</h2>
                <div className="mt-3 space-y-3">{s.body}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
