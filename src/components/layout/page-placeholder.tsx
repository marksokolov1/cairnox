import { BodyCopy, Container, DisplayHeading, Eyebrow, Section } from "@/components/ui/primitives";

export function PagePlaceholder({
  eyebrow,
  title,
  descriptor,
}: {
  eyebrow: string;
  title: string;
  descriptor?: string;
}) {
  return (
    <main id="main-content">
      <Section spacing="large">
        <Container>
          <div className="max-w-4xl">
            <Eyebrow>{eyebrow}</Eyebrow>
            <DisplayHeading className="mt-5">{title}</DisplayHeading>
            {descriptor ? (
              <BodyCopy className="mt-6 max-w-2xl text-mineral sm:mt-8">
                {descriptor}
              </BodyCopy>
            ) : null}
          </div>
        </Container>
      </Section>
    </main>
  );
}
