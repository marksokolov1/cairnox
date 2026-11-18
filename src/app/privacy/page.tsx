import type { ReactNode } from "react";
import { Container, DisplayHeading, Eyebrow, Section } from "@/components/ui/primitives";
import { contactConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ title: "Privacy", description: "CAIRNOX privacy information.", pathname: "/privacy", index: false });

const linkClass = "underline underline-offset-4";

function NoticeSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-line pt-6">
      <h2 className="text-2xl font-semibold tracking-tight text-ink">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-charcoal">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <main id="main-content">
      <Section aria-labelledby="privacy-title" spacing="large">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow className="text-moss">CAIRNOX / Website information</Eyebrow>
            <DisplayHeading id="privacy-title" className="mt-4">Privacy notice.</DisplayHeading>
            <p className="mt-6 leading-relaxed text-charcoal">
              CAIRNOX is operated by Mathew Skyner in the United States. This notice explains how we use personal information when you visit this website, contact us or join our email list. For privacy questions, email <a className={linkClass} href={`mailto:${contactConfig.email}`}>{contactConfig.email}</a>.
            </p>
            <div className="mt-10 space-y-8">
              <NoticeSection title="Enquiries and applications">
                <p>When you contact us, we receive your contact details and what you choose to share about your enquiry, training or organisation. We use that information to respond, assess whether we can help and take any steps you request before arranging a service. Submitting an enquiry or application does not sign you up for marketing emails.</p>
                <p>Website enquiry forms are sent to us through FormSubmit. <a href="https://formsubmit.co/documentation" className={linkClass}>FormSubmit says it retains submissions for 30 days</a>. That period does not apply to the copy we receive in our inbox.</p>
              </NoticeSection>
              <NoticeSection title="Newsletter and Foundation Week">
                <p>If you join the list, we use your email address and signup information to manage your subscription and send CAIRNOX cricket training notes and BASE programme updates. Mailchimp handles the signup and email list on our behalf. Signup records may include your subscription status and the form you used.</p>
                <p>The Foundation Week guide is a free download for newsletter subscribers. Joining the email list is required to access the download through the signup form. You don’t need to subscribe to browse the site or send us an enquiry.</p>
                <p>You can withdraw your consent at any time using the unsubscribe link in a newsletter or by emailing us. We may retain a record of your opt-out so we do not send you marketing again.</p>
              </NoticeSection>
              <NoticeSection title="Website hosting and service providers">
                <p>GitHub Pages hosts this site. GitHub <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection" className={linkClass}>logs visitors’ IP addresses for security</a>. Our providers may process data outside your country. Mailchimp may process subscription data in the United States and other locations; see its <a href="https://mailchimp.com/legal/data-processing-addendum/" className={linkClass}>data processing addendum</a> for its transfer safeguards.</p>
              </NoticeSection>
              <NoticeSection title="How long information is kept">
                <p>CAIRNOX does not currently have a fixed deletion schedule for enquiries. Copies of enquiries we receive may be kept indefinitely. We keep subscription information while you’re subscribed and may keep a record of your signup or opt-out afterwards to document your choices.</p>
              </NoticeSection>
              <NoticeSection title="Your choices and rights">
                <p>Depending on applicable law, you may have rights to access, correct, delete or receive a copy of your information, to restrict or object to its use, and to complain to your data protection authority. You can always object to direct marketing. To ask about your information or exercise a right, email <a className={linkClass} href={`mailto:${contactConfig.email}`}>{contactConfig.email}</a>.</p>
              </NoticeSection>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
