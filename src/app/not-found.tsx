import { ButtonLink, Container, DisplayHeading, Eyebrow, Section } from "@/components/ui/primitives";

export default function NotFound() {
  return (
    <main id="main-content">
      <Section spacing="large">
        <Container>
          <div className="max-w-4xl border-t border-line pt-7">
            <Eyebrow>Page not found</Eyebrow>
            <DisplayHeading className="mt-7 max-w-[12ch]">This path ends here.</DisplayHeading>
            <p className="mt-8 max-w-xl text-base leading-7 text-mineral sm:text-lg">
              The page you were looking for could not be found.
            </p>
            <ButtonLink href="/" className="mt-9">
              Return home
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </main>
  );
}
