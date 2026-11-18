# Foundation Week - final review QA

Checked 5 November 2026 against the original 16-page training PDF and the exported 19-page review edition.

## Results

| Check | Result |
| --- | --- |
| Original Week 1 exercise names, order and notes | PASS - 31 exercise rows |
| Original Week 1 conditioning entries | PASS - 3 entries |
| Sets, reps, percentages, distances and holds in exported cells | PASS - 34 comparisons |
| Pyramid pairs and descending instruction | PASS - unchanged source content |
| PDF dimensions | PASS - all 19 pages are 480 x 680 pt |
| Blank pages / clipped text / text-box collisions | PASS - none detected |
| Fonts actually used | PASS - Helvetica Neue regular and bold subsets embedded |
| Navigation | PASS - 16 resolved internal links; ELEVATE, APEX, email, About and Insights URL targets present |
| Visual page inspection | PASS - all 19 rendered pages inspected; all 8 workout pages re-inspected after enlarging table typography |
| Phone-size review | PASS with normal PDF limitations - core table values enlarged to 15 pt, exercise names 14 pt; secondary notes may benefit from zoom. A fixed-layout PDF does not reflow. |
| Brand consistency | PASS - current website type family, cream/charcoal/moss palette, rules, square action and authentic images |
| Public training release | PENDING - missing source instructions require Mat's approval |

The comparison matrix is `output/pdf/cairnox-foundation-week-validation.csv`. The automated summary is `output/pdf/cairnox-foundation-week.validation.json`. The comparison ignores presentation punctuation, spacing and case, but preserves numerical values and notation. It checks actual exported PDF cells, not just Python data.

## Publication review

The approved Foundation Week is the only programme sample included. No later-week prescriptions, new sessions, substitutions, training results, testimonials, credentials or scientific claims were invented. Editorial introductions and reflective questions were written for this edition using the supplied brand material. Two existing documentary photographs were used; no originals were changed.

The final page contains the live-shaped ELEVATE application and APEX project URLs and the approved email address. Their PDF annotations were checked; this QA does not claim to have tested server-side form delivery. No website or Mailchimp configuration was changed.

## Source issues retained for approval

| Page / area | Issue | Expected before public release | Current review edition |
| --- | --- | --- | --- |
| 7 and workout pages | ES / EL not defined by source; percentage reference unstated | Mat defines notation and reference loads | Original notation and percentages retained, with explicit review guidance |
| 7 and workout pages | Warm-up, most rest periods and precise grouping instructions missing | Mat supplies the intended instructions and independent-use requirements | None invented; review status shown |
| 9 / Day 1 conditioning | Timing units, intensity and interval interpretation need confirmation | Mat confirms them with existing two-minute between-set rest | Source values retained |
| 11 / Day 2 acceleration | Recovery between sets not explicit | Mat confirms, without altering the supplied walk-back recovery direction | Original note retained |
| 13 and 16 / Pyramid | Timing units, turnaround endpoint and between-set recovery omitted | Mat confirms exact execution | All five hard/light pairs and “Go back down” preserved |
| 10 / Day 2 exercise name | Source spelling “Coppenhagen's” | Mat approves a presentation correction if desired | Source spelling retained |
| 6 / sample context | Suitability and placement around cricket not fully defined | Mat confirms target reader and schedule context | Day numbers are explicitly not presented as consecutive calendar days |

These are source-completeness questions, not export defects. The review footer and the note on page 2 must remain until the technical guidance is incorporated. The file is ready for Mat's content review; it is not represented as a final public self-directed training product.

## Known format limits

- The training log is a printable/reference worksheet, not a fillable PDF form.
- Text is selectable and navigation is linked, but this is not a certified tagged PDF/UA document.
- Original image resolution is retained without artificial upscaling. The cover is approximately 219 effective dpi; the coaching image is approximately 142 dpi at its placed width. These are authentic supplied images rather than 300-dpi replacement photography.
- No browser-generated headers/footers exist. Backgrounds and page furniture are drawn in the PDF. Home printing depends on the printer's colour/background and scaling settings.
