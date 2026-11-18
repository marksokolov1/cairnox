# Foundation Week signup and delivery

- Existing audience: Cairnox. Default sender: `mathew@cairnox.com`. Mailchimp embedded form and subscriber tag: `Foundation Week / BASE`.
- Launch flow: submit email on `/base` → Mailchimp records the subscriber and tag → Mailchimp redirects on success to `https://cairnox.com/base/foundation-week/thanks/` → visitor downloads the PDF. No automated delivery email or paid plan is needed. The site posts natively to Mailchimp with no embed JavaScript, and the existing BASE programme interest form remains separate.
- The download URL is shareable, not access-controlled. The download page is noindex and not in the sitemap. The PDF staged under `ebooks/foundation-week/distribution/` is not in `public`; the production build copies it into the site export only when the download flag is enabled.

## Staged launch

1. Confirm PDF distribution approval. `/privacy` has a local draft reflecting the owner’s confirmations: Mathew Skyner operates CAIRNOX in the United States; enquiry copies have no fixed deletion schedule and may be retained indefinitely. Before publication, review the applicable jurisdictions and complaint authorities, retention practices for subscriber records, legal bases where applicable, and hosting/email/FormSubmit transfer arrangements. Confirm Mailchimp tracking and consent settings. The draft does not certify compliance.
2. With publish approval, deploy stage 1: the GitHub Pages workflow sets `NEXT_PUBLIC_FOUNDATION_WEEK_DOWNLOAD=true` and `NEXT_PUBLIC_FOUNDATION_WEEK_SIGNUP=false`. Verify the thank-you page and PDF load on the public domain. Outside the deployment workflow both flags are off unless set explicitly.
3. In Mailchimp, go to **Forms → Settings → Basic Subscribe Form → Edit → Outline → Success**. Set the external URL to `https://cairnox.com/base/foundation-week/thanks/`. This setting is shared with the audience’s basic form; get approval before changing it and check both forms. [Mailchimp instructions](https://mailchimp.com/help/design-and-host-your-own-thank-you-pages/).
4. With an expressly authorized test address, test a fresh signup, tag assignment, success redirect, PDF download, repeat signup and unsubscribe path. Check phone and desktop layouts. Do not submit a real address without permission. Do not publish the signup if delivery or consent is unverified.
5. Set `NEXT_PUBLIC_FOUNDATION_WEEK_SIGNUP: "true"` in the GitHub Pages workflow and redeploy only after testing and approval. If rolling back, hide the signup first, restore Mailchimp’s prior success setting, then disable the download page.

Local export preview: `NEXT_PUBLIC_FOUNDATION_WEEK_DOWNLOAD=true NEXT_PUBLIC_FOUNDATION_WEEK_SIGNUP=true pnpm build`. Serve `out` with `pnpm start`. Supply the flags as shell environment variables so both Next.js and the export preparation script see them.

### Newsletter consent review

The owner chose to retain newsletter signup as a requirement for the download. The form and privacy notice should both state that clearly. Before enabling the form, confirm that the approach is appropriate for the audiences CAIRNOX plans to serve; a US operating location does not by itself settle requirements elsewhere. [ICO electronic marketing consent guidance](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-direct-marketing-using-electronic-mail/how-do-we-comply-with-the-pecr-electronic-mail-marketing-rules/).
