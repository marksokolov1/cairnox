# CAIRNOX Off-Season Training Plan - second-pass QA audit

## Audit scope

Source of truth: `/Users/marksokolov/Desktop/Off-Season Training Plan (8 Weeks) (1).pdf`

Audited output: `output/pdf/cairnox-off-season-training-plan-8-week.pdf`

The source's pages 7-14 were independently extracted with `pdfplumber`. Each table row, exercise identifier, note, and Week 1-4 value was compared with the structured ebook source and the rendered PDF. The pre-fix 20-page output and final 28-page output were both rendered for visual inspection; every workout page was additionally reviewed at a 390 px fit-to-width phone size.

## Pre-fix source comparison matrices

### Phase 1 - Day 1

| Item | Status | Finding |
| --- | --- | --- |
| Day title | MISMATCH | Source uses `Upper Body w/ Off-Feet Conditioning`; ebook uses `Upper Body + Off-Feet Conditioning`. |
| Exercise IDs/order | PASS | 1A, 1B, 2A, 3A, 3B, 4A, 4B, 4C are present in source order. |
| Exercise names/notes | PASS | All names and the 2-minute conditioning rest note are represented. |
| Week 1-4 prescriptions | PASS | All sets, reps, percentages, ES notation, and conditioning values match in sequence. |
| Conditioning column labels | AMBIGUOUS | Source labels the third conditioning column `Week 1`; ebook interprets the third sequential column as Week 3. |

### Phase 1 - Day 2

| Item | Status | Finding |
| --- | --- | --- |
| Day title | MISMATCH | Source uses `Lower Body w/ Speed & Acceleration`; ebook uses `Lower Body + Speed & Acceleration`. |
| Exercise IDs/order | PASS | 1A, 2A, 2B, 3A, 3B, 4A, 4B are present in source order. |
| Exercise names/notes | MISMATCH | Source spells the exercise `Coppenhagen's`; ebook normalizes it to `Copenhagen's`. |
| Week 1-4 prescriptions | PASS | Percentages, seconds, EL/ES notation, distances, sets, and repetitions match. |
| Conditioning | PASS | All four sprint progressions and the walk-back/max-effort note match. |

### Phase 1 - Day 3

| Item | Status | Finding |
| --- | --- | --- |
| Day title | MISMATCH | Source uses `Upper Body w/ Off-Feet Conditioning`; ebook uses `Upper Body + Off-Feet Conditioning`. |
| Exercise IDs/order | PASS | All eight exercise rows are present in source order. |
| Exercise names/notes | PASS | Stability-ball, cable/band, carry, and banded notes are represented. |
| Week 1-4 prescriptions | PASS | Sets, reps, ES notation, distances, and week ordering match. |
| Conditioning | PASS | Pyramid, Tabata, Volatile, and Tabata progression match their source columns. |

### Phase 1 - Day 4

| Item | Status | Finding |
| --- | --- | --- |
| Day title | PASS | Lower Body Strength matches. |
| Exercise IDs/order | PASS | All eight rows are present in source order. |
| Exercise names/notes | PASS | Squat/drop-jump/calf/hip-thrust/side-plank notes are represented. |
| Week 1-4 prescriptions | PASS | Percentages, seconds, ES notation, sets, and reps match. |
| Conditioning | AMBIGUOUS | Source supplies no Conditioning block despite the Daily Breakdown stating that every day has one. Ebook flags the absence and does not invent a session. |

### Phase 2 - Day 1

| Item | Status | Finding |
| --- | --- | --- |
| Day title | MISMATCH | Source uses `Upper Body w/ Off-Feet Conditioning`; ebook uses `Upper Body + Off-Feet Conditioning`. |
| Exercise IDs/order | PASS | 1A, 2A, 2B, 3A, 3B, 4A, 4B, 5 are present in order. |
| Exercise names/notes | MISMATCH | Ebook adds presentation spaces to source label `Bicep/Tricep Choice`; meaning is unchanged. |
| Week 1-4 prescriptions | PASS | Sets, reps, ES/EW notation, distances, and eccentric note match. |
| Conditioning | PASS | Acid Bath, 2km Time Trial, Impossible Test, rest, and attempt counts match. |

### Phase 2 - Day 2

| Item | Status | Finding |
| --- | --- | --- |
| Day title | MISMATCH | Source uses `Lower Body w/ Tempo or MAS runs`; ebook uses `Lower Body + Tempo or MAS Runs`. |
| Exercise IDs/order | PASS | All seven rows are present in source order. |
| Exercise names/notes | MISMATCH | Source note `Band Resisisted` is silently spelling-corrected to `band resisted`. |
| Week 1-4 prescriptions | PASS | Percentages, band notation, EL/ES, seconds, and Each Way values match. |
| Conditioning | PASS | Lungbuster / 500m Shuttle alternation is in the correct Week 1-4 order. |

### Phase 2 - Day 3

| Item | Status | Finding |
| --- | --- | --- |
| Day title | MISMATCH | Source uses `Whole Body Power w/ Repeat Sprint Ability`; ebook uses `Whole Body Power + Repeat Sprint Ability`. |
| Exercise IDs/order | PASS | Source's numbering jump from 1B to 2B is preserved. |
| Exercise names/notes | PASS | Clean-complex, fast/slow row, explosive-drive, fast-bench, and ISO notes are represented. |
| Week 1-4 prescriptions | PASS | All ES values, seconds, distances, sets, reps, and week positions match. |
| Conditioning | PASS | Scotland drill and 20m/30m sprint progression match. |

### Phase 2 - Day 4

| Item | Status | Finding |
| --- | --- | --- |
| Day title | MISMATCH | Source uses `Whole Body Power w/ Repeat Sprint Ability`; ebook uses `Whole Body Power + Repeat Sprint Ability`. |
| Exercise IDs/order | PASS | Source's numbering jump from 1B to 2B is preserved. |
| Exercise names/notes | PASS | All names and notes are represented. |
| Week 1-4 prescriptions | PASS | Every prescription matches Phase 2 Day 3, exactly as in the source. |
| Conditioning | AMBIGUOUS | Source Day 4 is an exact duplicate of Day 3. Ebook preserves the duplicate rather than inventing a replacement. |

## Appendix comparison

| Protocol | Status | Finding |
| --- | --- | --- |
| Tabata | PASS | 20 On : 10 Off x8 and 3-5 round note retained. |
| 500m Repeats | PASS | Distance, maximum-effort direction, 1-minute rest, and 6-10 reps retained. |
| Volatile | PASS | All three work/rest sequences and 2-minute rests retained. |
| The Pyramid | PASS | 10/50 through 50/10 sequence and return direction retained. |
| 2km Time Trials | PASS | Distance, recorded time, and rest instruction retained. |
| The Acid Bath | MISMATCH | Meaning is preserved, but the source sentence is editorially rewritten. |
| The Impossible Test | MISMATCH | Distances/rests/calculation match, but source wording is editorially rewritten. |
| Missing source protocols | AMBIGUOUS | Lungbuster, 500m Shuttle, and Scotland Anaerobic Drill are prescribed but not defined. |

## Source-only inconsistencies

These are not generated-ebook errors and must not be silently repaired:

1. Phase 1 Day 1's third conditioning column is labelled Week 1 instead of Week 3.
2. Phase 1 Day 4 has no Conditioning block.
3. Phase 2 Day 4 duplicates Day 3 exactly.
4. ES, EL, and EW are never defined.
5. Lungbuster, 500m Shuttle, and Scotland Anaerobic Drill have no appendix definitions.
6. Appendix `500m Repeats` does not match the prescribed label `500m Shuttle`.
7. Phase 2 Days 3 and 4 jump from exercise 1B to 2B.
8. Off-season overview copy refers to the season, early season, and a break in play.
9. `Both 4 week Blocks (which will be repeated)` is ambiguous within an eight-week plan.
10. Source spelling/terminology varies: `Phillosophies`, `compund`, `Coppenhagen's`, `Band Resisisted`, and Resiliency/Resilience.

## Pre-fix issue register

### CRITICAL

None. No missing exercise row or incorrect numerical training prescription was found.

### HIGH

| Page | Component | Issue | Expected | Current | Recommended fix |
| --- | --- | --- | --- | --- | --- |
| 8-16 | Workout tables | At 390 px fit-to-width, table values and notes render at roughly 4-5 px and require excessive zoom. | Current week, exercise, sets/reps, and notes should be usable on a phone. | Six horizontal columns compress all eight workout pages. | Split each day into Weeks 1-2 and Weeks 3-4 pages; enlarge table and note type. |
| All | PDF fonts | Helvetica and Helvetica-Bold are not embedded. | Fonts should render consistently in print and across devices. | PDF relies on non-embedded Base-14 fonts. | Embed Helvetica Neue or the closest website-stack font as subset TrueType fonts. |
| 7 | Phase 1 divider image | Full-page crop is 73 ppi and can look soft in print. | Major photography should remain acceptably sharp. | Landscape source is cropped into an A4 portrait full bleed. | Use a shallower editorial image frame or a higher-resolution portrait crop. |

### MEDIUM

| Page | Component | Issue | Expected | Current | Recommended fix |
| --- | --- | --- | --- | --- | --- |
| 2-6, 17-20 | Editorial headings | Large headings are predominantly all caps, while the current website uses sentence-case display headlines. | Ebook and website should read as one current brand. | Ebook display language is more conventional sports-manual uppercase. | Move editorial display headings to sentence case; retain uppercase eyebrows/table labels. |
| 3-5 | Overview/philosophy copy | Several source statements are paraphrased rather than reproduced. | Source wording should remain traceable line by line. | Meaning is retained but wording has changed. | Restore source wording with only spacing/capitalization corrections. |
| 8-16 | Day titles | Seven of eight day titles replace source `w/` with `+`. | Day names should match source labels. | Editorially normalized titles. | Restore the source day-title wording. |
| 17-18 | Appendix | Acid Bath and Impossible Test explanations are rewritten. | Protocol wording should match source while remaining legible. | Values match, wording differs. | Restore source sentences verbatim apart from typographic spacing. |
| 1-20 | Navigation | PDF has no outline/bookmarks. | Long digital manual should allow direct phase/day navigation. | Users must scroll by page number. | Add bookmarks for overview, phases, days, and appendix. |

### LOW

| Page | Component | Issue | Expected | Current | Recommended fix |
| --- | --- | --- | --- | --- | --- |
| 3 and 7 | Photography | Same resisted-sprint image appears twice. | Photography rhythm should avoid immediate repetition. | Small overview crop and Phase 1 full bleed reuse one asset. | Use a different approved overview image or redesign divider crop. |
| Metadata | PDF properties | Creator is `anonymous`. | Product metadata should identify CAIRNOX. | ReportLab default creator remains. | Set Creator to CAIRNOX. |
| 8-16 | Workout navigation | Current week is not emphasized beyond four equal headers. | Athlete should locate the active two-week range quickly. | All four weeks carry equal weight. | With the mobile split, label each page clearly as Weeks 1-2 or Weeks 3-4. |

## Pre-fix totals

- Critical: 0
- High: 3
- Medium: 5
- Low: 3

## Final revalidation

### Corrective work applied

1. Split every training day into a Weeks 1-2 page and a Weeks 3-4 page, increasing table size without changing data.
2. Embedded Helvetica Neue regular and bold subsets and removed reliance on unembedded Base-14 Helvetica.
3. Reworked both phase dividers into shallower editorial image bands, increasing effective print resolution.
4. Restored source day names, exercise spelling, overview copy, philosophy copy, Daily Breakdown copy, and appendix wording where the first implementation had editorially normalised them.
5. Moved editorial display headings to sentence case while retaining uppercase functional labels, matching the current website more closely.
6. Added PDF bookmarks for major sections, phases, days, and week ranges.
7. Replaced the repeated overview photograph and set CAIRNOX document metadata.

### Final source-to-ebook matrix

| Workout day | Title | Exercise IDs/order | Exercise names/notes | Week 1-4 values | Conditioning | Final status |
| --- | --- | --- | --- | --- | --- | --- |
| Phase 1 - Day 1 | PASS | PASS | PASS | PASS | AMBIGUOUS in source: third header says Week 1; values retained in sequence as Week 3 | PASS |
| Phase 1 - Day 2 | PASS | PASS | PASS | PASS | PASS | PASS |
| Phase 1 - Day 3 | PASS | PASS | PASS | PASS | PASS | PASS |
| Phase 1 - Day 4 | PASS | PASS | PASS | PASS | AMBIGUOUS in source: no conditioning supplied | PASS |
| Phase 2 - Day 1 | PASS | PASS | PASS | PASS | PASS | PASS |
| Phase 2 - Day 2 | PASS | PASS | PASS | PASS | PASS | PASS |
| Phase 2 - Day 3 | PASS | PASS | PASS | PASS | PASS | PASS |
| Phase 2 - Day 4 | PASS | PASS | PASS | PASS | AMBIGUOUS in source: exact duplicate of Day 3 | PASS |

Independent extraction revalidation passed all 69 programme rows and every Week 1-4 prescription in source sequence. All seven appendix protocols are present and source wording is retained. The listed source ambiguities remain unaltered and are not generated-ebook defects.

### Final athlete usability review

For every workout page:

1. Day is immediately identifiable: PASS.
2. Phase is immediately identifiable: PASS.
3. Current two-week range is immediately identifiable: PASS.
4. Exercise rows are quick to locate: PASS.
5. Sets/reps are readable at normal desktop/tablet zoom and practical mobile zoom: PASS.
6. Performance, Resilience, and Conditioning blocks are visually distinct: PASS.
7. Exercise notes are complete and readable: PASS.
8. Phone use is practical because each page contains only two week columns: PASS.

### Final visual, brand, and export review

- All 28 pages were rendered and manually inspected, including the first page, last page, all 16 workout pages, both phase dividers, and all appendix pages.
- No blank pages, browser headers/footers, clipped text, hidden rows, overlaps, orphaned headings, stretched images, or broken assets were found.
- All pages are consistent A4 portrait (595.276 × 841.890 points).
- Helvetica Neue regular and bold subsets are embedded; text remains selectable and tables remain vector-sharp.
- PDF outline/bookmarks are present, page numbering is consistent, and metadata identifies CAIRNOX.
- Embedded photography resolves between 113 and 175 ppi at placed size; the phase dividers now resolve at approximately 155 ppi and 124 ppi.
- The final publication uses the current website's warm cream, near-black, restrained green, Helvetica Neue hierarchy, thin rules, square geometry, documentary media treatment, and sentence-case editorial display language.
- No old red/purple/yellow table palette, rounded page decoration, legacy grey template, or generic fitness-ebook styling remains.
- Editorial pacing is intentional: cover, orientation, philosophy, phase dividers, consistent training pages, reference material, and a restrained final page.

### Final issue totals

- Critical: 0
- High: 0
- Medium: 0
- Low: 0

Source ambiguities are recorded separately and remain pending owner clarification; they do not represent failures introduced by the ebook.

### Final disposition

- CONTENT VALIDATION: PASS
- VISUAL QA: PASS
- MOBILE READABILITY: PASS
- PDF EXPORT: PASS
- WEBSITE BRAND MATCH: PASS
