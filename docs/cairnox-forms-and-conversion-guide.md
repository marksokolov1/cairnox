# CAIRNOX Forms and Conversion Guide

This document describes the launch contact architecture, the static GitHub Pages validation boundary and the work still required before submissions can be delivered in production.

## Routes and purposes

| Route | Submission type | Purpose |
| --- | --- | --- |
| `/contact` | `general` | Route-selection hub plus a short general enquiry form at `#general-enquiry` |
| `/contact/base` | `base_interest` | Low-friction interest registration for future BASE cricket performance programmes |
| `/contact/elevate` | `elevate_application` | Selective application for direct 1:1 cricket performance coaching with Mathew |
| `/contact/apex` | `apex_enquiry` | Professional cricket-performance project enquiry for teams and organisations |

The four submission type IDs are included internally with each validated payload. They are not editable form controls.

## Field schemas

### General enquiry

- Required: name, email, what can we help with
- Optional: organisation/team

### BASE interest

- Required: name, email
- Optional: cricket role/training context, interest areas, additional context
- Interest options: Cricket Strength and Power; Fast-Bowling Physical Preparation; Batting Power and Rotational Performance; Cricket Conditioning; In-Season Cricket Training; Off-Season Cricket Development; Cricket Athletic Development; General Cricket Performance Programme

### ELEVATE application

- About you: required full name and email; optional city/country location
- Your cricket: required cricket role/performance context and current level; optional season status
- What you need: required improvement areas and main reason for seeking 1:1 coaching; optional current-training context
- Coaching context: optional current coach/team programme, competition schedule and ideal start timing
- Final: optional additional context; required acknowledgement that this is an application and availability is not guaranteed

The form intentionally does not request diagnoses, medical history, medication, body weight, eating-disorder history, mental-health information or detailed nutrition information.

### APEX enquiry

- Contact: required name, work email and organisation; optional role
- Environment: required cricket organisation type and cricket programme/performance environment; optional player/programme context
- Area of support: at least one approved consultancy area is required
- Project context: required objective/problem; optional current environment, preferred support formats and timing
- Final: optional additional context

Personal-domain email addresses are accepted. Athlete counts are not required.

## Validation

The shared schemas live in `src/lib/forms/schemas.ts` and run in the browser for the GitHub Pages build. They check required fields, email shape, approved select/checkbox values, required checkbox groups and maximum lengths.

- Names: maximum 120 characters
- Emails: maximum 254 characters and must use a valid email shape
- Short context fields: maximum 180 characters
- Textareas: maximum 3,000 characters

Invalid submissions return field-level errors and preserve valid entered values. Every input has a real label; grouped choices use fieldsets and legends; errors are connected with `aria-describedby` and `aria-invalid`.

## Submission architecture

The form boundary lives in `src/lib/forms/`:

- `types.ts`: submission IDs, payload and action-state types
- `options.ts`: approved select and checkbox values
- `schemas.ts`: shared validation used by the static form UI
- `actions.ts`: retained server-action reference for a future server-backed deployment; not used by GitHub Pages
- `provider.ts`: future submission-provider interface and adapters
- `rate-limit.ts`: rate-limit integration interface
- `analytics.ts`: reserved analytics event names

### Current provider status

Production delivery uses FormSubmit's free AJAX endpoint. Validated submissions are sent to `mathew@cairnox.com`; no API key or browser-exposed secret is required. FormSubmit requires a one-time confirmation from that mailbox before forwarding begins.

The published direct-contact address remains available on the contact pages and alongside each form as an email fallback.

## FormSubmit activation and delivery

1. Submit or trigger the form once after integration.
2. Open the activation email sent by FormSubmit to `mathew@cairnox.com`.
3. Click the confirmation link once.
4. Submit a second test enquiry and confirm it arrives with the expected subject and Reply-To address.

FormSubmit documents that submissions can be retained for up to 30 days. This is disclosed beside every submit action, with a link to FormSubmit's privacy terms. If CAIRNOX later requires domain restriction, custom retention or a private server-side provider, replace `src/lib/forms/formsubmit-client.ts` through the existing provider architecture.

## Spam and rate-limit strategy

- A visually hidden `website` honeypot is checked before validation or delivery.
- `src/lib/forms/rate-limit.ts` provides a future server-side rate-limit adapter point.
- No CAPTCHA is installed.
- The current rate-limit adapter is explicitly marked unconfigured and does not claim production protection.
- The browser sends validated submissions to FormSubmit's AJAX endpoint over HTTPS.

Before launch, connect rate limiting using a stable client identifier available in the chosen deployment environment, establish limits per form type, and confirm the failure policy.

## Success, unavailable and failure behavior

- Success copy appears only after FormSubmit returns an accepted HTTP/JSON result.
- Delivery failures preserve entered values and provide the direct email fallback.
- Provider failure shows “We couldn't send this yet. Please try again.” and preserves entered values where feasible.
- Development acceptance is explicitly labelled as a test with no email sent.

## Privacy

Forms collect only information needed to qualify or answer the relevant conversation. Every form links to `/privacy`; BASE and ELEVATE also link to `/training-disclaimer`. No marketing opt-in is present, no user is automatically subscribed, and no form requires agreement to placeholder legal copy.

## Analytics readiness

No analytics provider is installed and no events are emitted. Reserved event names are:

- `general_enquiry_started`
- `general_enquiry_submitted`
- `base_interest_started`
- `base_interest_submitted`
- `elevate_application_started`
- `elevate_application_submitted`
- `apex_enquiry_started`
- `apex_enquiry_submitted`

Event constants live in `src/lib/forms/analytics.ts`. Add an adapter only after an analytics provider and consent approach are approved.

## Test procedure

1. Run `pnpm typecheck`, `pnpm lint` and `pnpm build`.
2. Serve `out/` with `pnpm start` and verify that a valid form returns the truthful unconfigured state without losing values.
3. Check invalid email, missing required fields, maximum lengths and required checkbox groups.
4. Test keyboard navigation, visible focus, error announcements and touch targets.
5. Test 390px, 768px, 1440px and 1920px viewports for overflow and readable field layout.
6. Re-audit BASE, ELEVATE and APEX conversion links after any service-page copy change.
8. After a real provider is connected, test accepted, rejected, timeout and rate-limited delivery paths in a non-production environment before launch.
