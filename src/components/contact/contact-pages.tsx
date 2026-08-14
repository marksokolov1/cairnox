import type { ReactNode } from "react";
import { ArrowLink, BodyCopy, Container, DisplayHeading, Eyebrow, Section, SectionHeading, TextLink } from "@/components/ui/primitives";
import { ApexEnquiryForm, BaseInterestForm, ElevateApplicationForm, GeneralEnquiryForm } from "@/components/forms/conversion-forms";

type ContactPathway = {
  label: string;
  descriptor?: string;
  title: string;
  copy: string;
  cta: string;
  href: "#general-enquiry" | "/contact/base" | "/contact/elevate" | "/contact/apex";
};

const pathways: readonly ContactPathway[] = [
  {
    label: "General",
    title: "Ask a question.",
    copy: "For general CAIRNOX enquiries that do not sit within BASE, ELEVATE or APEX.",
    cta: "General enquiry",
    href: "#general-enquiry",
  },
  {
    label: "BASE",
    descriptor: "Performance Programmes",
    title: "Register your interest.",
    copy: "Register interest in upcoming CAIRNOX performance programmes.",
    cta: "Register interest",
    href: "/contact/base",
  },
  {
    label: "ELEVATE",
    descriptor: "1:1 Performance Coaching",
    title: "Apply for coaching.",
    copy: "Apply for individual coaching with Mathew Skyner.",
    cta: "Apply for ELEVATE",
    href: "/contact/elevate",
  },
  {
    label: "APEX",
    descriptor: "High-Performance Consultancy",
    title: "Discuss the environment.",
    copy: "Start a conversation about support for your team or organisation.",
    cta: "Discuss a project",
    href: "/contact/apex",
  },
];

export function ContactHub() {
  return (
    <main id="main-content" className="contact-system">
      <Section spacing="large" data-review-section="Contact routes">
        <Container>
          <div className="grid gap-12 border-t border-line pt-7 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <Eyebrow>Contact CAIRNOX</Eyebrow>
              <DisplayHeading className="type-hero mt-7 max-w-[11ch]">
                Start with what<br className="hidden sm:block" /> you need.
              </DisplayHeading>
            </div>
            <div className="self-end lg:col-span-4 lg:col-start-9">
              <BodyCopy className="text-mineral">
                Whether you are looking for a performance programme, individual coaching, organisational support or simply have a question, choose the route that best fits the conversation.
              </BodyCopy>
            </div>
          </div>

          <div className="mt-16 grid border-t border-line md:grid-cols-2 xl:grid-cols-4">
            {pathways.map((pathway, index) => (
              <article
                key={pathway.label}
                className="flex min-h-[21rem] flex-col border-b border-line py-8 md:px-8 md:[&:nth-child(odd)]:border-r xl:border-r xl:last:border-r-0 xl:[&:nth-child(odd)]:border-r"
              >
                <div className="flex items-start justify-between gap-5">
                  <Eyebrow>{pathway.label}</Eyebrow>
                  <span className="text-xs text-mineral">0{index + 1}</span>
                </div>
                {pathway.descriptor && <p className="mt-4 text-sm text-mineral">{pathway.descriptor}</p>}
                <h2 className="mt-10 text-2xl font-semibold leading-tight tracking-[-0.025em]">{pathway.title}</h2>
                <p className="mt-4 max-w-[32ch] text-base leading-7 text-mineral">{pathway.copy}</p>
                <ArrowLink href={pathway.href} className="mt-auto self-start pt-8">{pathway.cta}</ArrowLink>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="general-enquiry" tone="muted" data-review-section="General enquiry">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <Eyebrow>General enquiry</Eyebrow>
              <SectionHeading className="mt-7 max-w-[10ch]">Ask CAIRNOX.</SectionHeading>
              <p className="mt-7 max-w-sm text-base leading-7 text-mineral">
                Use this short form for questions that do not belong to BASE, ELEVATE or APEX. Required fields are marked with an asterisk.
              </p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <GeneralEnquiryForm />
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

type SpecialistPageProps = {
  service: "BASE" | "ELEVATE" | "APEX";
  eyebrow: string;
  headline: ReactNode;
  copy: string;
  note?: string;
  formLabel: string;
  formIntro: string;
  form: ReactNode;
  alternative: ReactNode;
};

export function SpecialistContactPage({
  service,
  eyebrow,
  headline,
  copy,
  note,
  formLabel,
  formIntro,
  form,
  alternative,
}: SpecialistPageProps) {
  return (
    <main id="main-content" className="contact-system">
      <Section spacing="large" data-review-section={`${service} contact hero`}>
        <Container>
          <div className="grid gap-12 border-t border-line pt-7 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <Eyebrow>{eyebrow}</Eyebrow>
              <DisplayHeading className="type-hero mt-7 max-w-[12ch]">{headline}</DisplayHeading>
            </div>
            <div className="self-end lg:col-span-4 lg:col-start-9">
              <BodyCopy className="text-mineral">{copy}</BodyCopy>
              {note && <p className="mt-5 border-l border-line pl-5 text-sm leading-6 text-mineral">{note}</p>}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="muted" data-review-section={`${service} form`}>
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
            <aside className="lg:col-span-4">
              <Eyebrow>{formLabel}</Eyebrow>
              <p className="mt-7 max-w-sm text-base leading-7 text-mineral">{formIntro}</p>
              <p className="mt-5 text-sm text-mineral">Required fields are marked with an asterisk.</p>
            </aside>
            <div className="lg:col-span-7 lg:col-start-6">{form}</div>
          </div>
        </Container>
      </Section>

      <Section spacing="compact" data-review-section={`${service} alternative`}>
        <Container>
          <div className="flex flex-col gap-5 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
            <div>{alternative}</div>
            <TextLink href="/contact">Return to contact options</TextLink>
          </div>
        </Container>
      </Section>
    </main>
  );
}

export function BaseContactPage() {
  return (
    <SpecialistContactPage
      service="BASE"
      eyebrow="CAIRNOX BASE"
      headline={<>Register your<br /> interest.</>}
      copy="The first CAIRNOX BASE performance programmes are being prepared for release. Leave your details to register interest and indicate what you are looking for from a programme."
      formLabel="BASE interest"
      formIntro="A low-friction registration for athletes interested in structured performance programming. No launch date, pricing or access is promised by submitting this form."
      form={<BaseInterestForm />}
      alternative={<p className="text-base">Need individual coaching? <TextLink href="/elevate">Explore ELEVATE.</TextLink></p>}
    />
  );
}

export function ElevateContactPage() {
  return (
    <SpecialistContactPage
      service="ELEVATE"
      eyebrow="CAIRNOX ELEVATE"
      headline={<>Apply for<br /> 1:1 coaching.</>}
      copy="ELEVATE is limited because the coaching is delivered directly by Mathew. The application helps establish your sporting context, current needs and whether the service is likely to be the right fit."
      note="This is an application for coaching, not an automatic purchase."
      formLabel="ELEVATE application"
      formIntro="Share enough context for Mathew to understand the athlete, the sporting environment and the level of support being sought. Sensitive health information is not requested here."
      form={<ElevateApplicationForm />}
      alternative={<p className="text-base">Looking for a programme to follow independently? <TextLink href="/base">Explore BASE.</TextLink></p>}
    />
  );
}

export function ApexContactPage() {
  return (
    <SpecialistContactPage
      service="APEX"
      eyebrow="CAIRNOX APEX"
      headline={<>Let&apos;s understand<br /> the environment.</>}
      copy="APEX starts with the organisation, the performance challenge and the people involved. Share enough context to begin a useful conversation."
      formLabel="APEX project enquiry"
      formIntro="A professional project enquiry designed to establish the organisation, performance context and area of support before any next step is arranged."
      form={<ApexEnquiryForm />}
      alternative={<p className="text-base">Looking for individual athlete support? <TextLink href="/elevate">Explore ELEVATE.</TextLink></p>}
    />
  );
}
