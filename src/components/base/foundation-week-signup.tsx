import Image from "next/image";
import Link from "next/link";
import { BodyCopy, Button, Container, Eyebrow, Section, SectionHeading } from "@/components/ui/primitives";
import { getPublicAssetPath } from "@/config/site";

// Public form identifiers from Mailchimp's generated embed. No API key is needed.
const signupAction = "https://cairnox.us7.list-manage.com/subscribe/post?u=07a7f107629f2caba5e610799&id=05a748a4b7&f_id=00684ae1f0";

export function FoundationWeekSignup() {
  return (
    <Section id="foundation-week" aria-labelledby="foundation-week-title" tone="muted" spacing="compact" className="scroll-mt-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-center lg:gap-20">
          <div className="order-2 md:order-1">
            <Image
              src={getPublicAssetPath("/media/images/cairnox-foundation-week-cover.png")}
              alt="Cover of The Foundation Week, a three-day cricket training guide by Mathew Skyner"
              width={706}
              height={1000}
              className="h-auto w-full max-w-[18rem] border border-line md:mx-auto"
            />
          </div>
          <div className="order-1 max-w-xl md:order-2">
            <Eyebrow className="text-moss">A free sample from CAIRNOX BASE</Eyebrow>
            <SectionHeading id="foundation-week-title" className="mt-4">The Foundation Week.</SectionHeading>
            <BodyCopy className="mt-5 text-charcoal">
              Three early off-season training sessions for cricketers, built by Mathew Skyner. See how BASE brings strength, power, speed and conditioning together across a training week.
            </BodyCopy>
            <form action={signupAction} method="post" className="relative mt-7" aria-labelledby="foundation-week-title">
              <label htmlFor="foundation-email" className="type-eyebrow block">Email address</label>
              <input id="foundation-email" name="EMAIL" type="email" autoComplete="email" required maxLength={254}
                aria-describedby="foundation-consent" className="mt-2 min-h-12 w-full border border-ink/50 bg-canvas px-3 text-base text-ink" />
              <input type="hidden" name="tags" value="3377578" />
              <div aria-hidden="true" className="absolute -left-[5000px] top-0">
                <input type="text" name="b_07a7f107629f2caba5e610799_05a748a4b7" tabIndex={-1} autoComplete="off" />
              </div>
              <p id="foundation-consent" className="mt-3 text-sm leading-relaxed text-charcoal">
                Sign up for future CAIRNOX cricket training notes and BASE programme updates. Download the guide after signup. Unsubscribe anytime. <Link href="/privacy" className="underline underline-offset-4">Privacy</Link>.
              </p>
              <Button type="submit" name="subscribe" className="mt-5 w-full text-center sm:w-auto">Join the list &amp; download the guide</Button>
              <p className="mt-3 text-sm text-charcoal">Signup is handled by <a href="https://eepurl.com/QqTqqi75X3" className="underline underline-offset-4">Intuit Mailchimp</a>.</p>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}
