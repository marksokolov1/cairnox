# Editorial research, QA and release status

Prepared 5 November 2026. This accompanies the finished visual review edition, not a public launch.

## Editorial decisions

The copy uses an immediate cricket situation, a clear promise, short explanatory sections, numbered session navigation, practical reflection prompts and a relevant coaching invitation. These are general editorial and coaching techniques; no named influencer's voice or distinctive prose has been copied. The source prescriptions are separate from the new editorial material.

The strongest opening is the reader's sporting context: waiting, then being asked to accelerate, throw or produce an effort. This is drawn from the supplied cricket content. The reader's role continues through the publication: recognise the purpose, locate the session, record what happened, identify the next question. This creates a reason to keep reading without inventing a transformation, research result or personal story.

## Research used

- [Pat Sherwood / Linchpin programming ebook](https://cdn.shopify.com/s/files/1/0729/6895/files/Linchpin_Programming_System.pdf?v=1699812725): transparent reasoning with practical examples. Applied here through short session explanations and a navigable example week. His programme and author-specific system are not copied.
- [Joel Jamieson / first-week conditioning PDF](https://8weeksout.com/wp-content/uploads/2013/03/Conditioning-Program-Week-One.pdf): a sample needs context and usage guidance. Applied through the week map and reading page. His prescriptions and HR/HRV thresholds are not used.
- [Eric Cressey / focused free technique resource](https://ericcressey.com/learn-how-to-deadlift-detailed-deadlift-technique/): a defined topic can introduce wider expertise. Applied through the single-week scope and a clear route to individual coaching. The public page does not establish current conversion results.
- [Precision Nutrition / behaviour-change coaching](https://www.precisionnutrition.com/behavior-change-coaching): practical, clear actions and attention to the person's context. Applied as planning, logging and reflection prompts. No nutrition prescription or claim of proven adherence improvement for this ebook is made.
- [Nielsen Norman Group / How Users Read on the Web](https://www.nngroup.com/articles/how-users-read-on-the-web/): meaningful headings, short paragraphs and restrained claims. Applied as editorial guidance; web-usability findings are not presented as evidence of PDF reading or sales performance.

Research supports the editorial choices, not guaranteed results. No conversion rates, urgency claims, fake scientific references or endorsements appear in the ebook. Other coaches' names are kept in this research note rather than used to imply association in the product.

## Source material

- `/Users/marksokolov/Downloads/E-Book Content.pdf`: cricket context and philosophy. Four-week power claims are not carried into the one-week guide. Empty sessions are not filled with invented programming. More specific new job-title and squash-ranking claims are omitted pending approval.
- `ebook/Off-Season Training Plan (8 Weeks) (1).pdf`: original pages 7-10, Week 1 column only, plus The Pyramid from page 15.
- `ebook/cairnox-off-season-training-plan-8-week.pdf`: previous brand/layout reference and selected-week cross-check.
- Current website CSS, approved About copy, ELEVATE/APEX descriptions, public logo and two authentic photos. Photography: `mathew-skyner-usa-cricket-resisted-sprint-coaching.jpg` and `mathew-skyner-rugby-strength-conditioning-coach.jpg`.

## Fidelity boundaries

All 31 exercise rows and three conditioning entries are retained in source order. Sets, reps, percentages, distances, holds and notes are preserved. Capitalisation, spacing and parentheses are normalised for layout. The misspelling `Coppenhagen's` remains as in the source. Day 4 has no conditioning prescription added. Week 2-4 values, Phase 2, unrelated appendix protocols and unapproved session substitutions are excluded.

The source's ES/EL notation and percentage figures remain unchanged. They have not been reinterpreted. A public-ready guide requires their definitions, not guesses.

## Release decisions still needed from Mat

1. Confirm intended reader, experience level, equipment access and season context, plus how the four sessions fit around cricket. “Foundational” does not establish beginner suitability.
2. Define ES / EL and the reference behind 70% / 75%. Confirm the approach to loads where no percentage is given, rest periods and intended lettered groupings.
3. Supply or approve the warm-up and exercise demonstrations/instructions necessary for independent use, including any required substitutions.
4. Confirm Day 1 interval timing units, hard-effort guidance, the interpretation of 3 x 5 and recovery; confirm Day 2 recovery between sprint sets where applicable.
5. Define The Pyramid's timing units, hard/light guidance, turnaround endpoint and recovery between its two sets.

These are missing source instructions, not transcription failures. Review status is stated in the PDF. It should not be promoted as a fully self-directed training product until they are resolved. No Mailchimp work is needed for this review.

## QA procedure

`validate.py` extracts tables directly from the 16-page original using pdfplumber. It compares each selected exercise, note and Week 1 prescription with the content data. It then reads the exported PDF cells at their actual coordinates to confirm the right values were rendered in the right rows. A CSV gives the 34 source-to-ebook comparisons.

The script also checks page dimensions, non-empty pages, text bounds, overlapping text boxes, used-font embedding and the final ELEVATE/APEX/email links. PDF contents and week-map links use named destinations; no external URL is substituted for an internal reference.

All 19 pages are rendered for visual inspection, including every workout page and the first and last pages. Phone-size previews are used to examine reading density. The logo is a sharp existing raster asset; workout text and rules remain vector/selectable. No browser headers, browser footers or screenshot pages are present.

## Status

Final automated results are written to `output/pdf/cairnox-foundation-week.validation.json`; the full comparison matrix is `output/pdf/cairnox-foundation-week-validation.csv`. Visual results and any release-blocking source questions are recorded in the delivered QA report.
