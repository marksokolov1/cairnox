# CAIRNOX - The Foundation Week

## Current: Mat's three-day replacement, 6 November 2026

Current output: `output/pdf/cairnox-foundation-week-three-day.pdf` (13 pages). All older outputs below remain preserved. The new training authority is Mat's relayed programme and clarifications, not Week 1 of the old PDF. `MAT_APPROVALS.md` records the source and explicit approvals.

- Edit `three_day_content.py` for the approved three-day programme and warm-up. Do not change the eight-week source to update this sample.
- `build_ebook.py` now builds the three-day edition; `design.py` provides reusable publication and compact session-table components.
- Run `python3 ebooks/foundation-week/build_ebook.py`, then `python3 ebooks/foundation-week/validate_three_day.py`, then `python3 ebooks/foundation-week/make_previews.py --three-day`.
- The bundled Python path below remains available. No new dependencies were installed.
- Each day fits one 480 x 680 pt page. Exercise names and prescriptions are 12.8 pt; warm-up and field instructions 11.5 pt. The phone preview is 390px wide; small exercise notes may benefit from zoom.
- The new validator uses a separate approved-message fixture, not the old PDF. It checks all 23 exercise rows, warm-ups, conditioning/speed instructions, actual exported text cells, page geometry, overlap, embedded fonts, contents folios and links. CSV/JSON results accompany the PDF.
- Current renders: `tmp/pdfs/foundation-week-three-day/`. Current contact sheet and phone previews: `output/pdf/foundation-week-three-day-previews/`.
- `THREE_DAY_QA.md` records the update. The old source-completeness warnings were resolved by Mat's clarifications and removed from the current PDF; the final proof should still be shared with Mat before distribution.
- No website, email-provider or Mailchimp changes are part of this update. The PDF uses selectable text, vector rules and embedded fonts; it is not fully tagged for PDF/UA.

## Historical four-day edition (preserved reference)

19-page sports-editorial review edition of the approved Phase 1, Week 1 sample. The original eight-week PDFs and the previous Foundation Week PDF are preserved. No website, signup or Mailchimp changes are included.

Current output: `output/pdf/cairnox-foundation-week-premium.pdf`. Previous editions are preserved.

The design uses original CAIRNOX layouts informed by sports-editorial photography and restrained book grids, not purchased BrandPacks or Ruben Stom template files. No third-party template assets or bundled fonts are included. Three existing public cricket photographs support the cover, opening and founder feature; no source image is altered.

## Files and editing

- `content.py`: selected source data, opening copy, session explanations, principles and contents.
- `design.py`: page dimensions, current website colours, font registration, text, photography, links and workout-table components.
- `build_ebook.py`: page composition and remaining editable editorial copy.
- `validate.py`: compares original PDF table cells with the selected data and the actual exported PDF cells; checks page bounds, text-box overlaps, embedding and conversion links.
- `RESEARCH_AND_RELEASE.md`: editorial rationale, sources and remaining owner decisions.

The training data is read from `../off-season-training-plan/training_data.py` and selects phase index 0 and week index 0 only. Edit programming only after Mat approves it. Do not alter the older source data casually, since it also builds the full book.

## Regenerate

Use Python with ReportLab, Pillow, pypdf and pdfplumber. In this workspace the bundled Python is:

```
/Users/marksokolov/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3
```

From the repository root:

```
python3 ebooks/foundation-week/build_ebook.py
python3 ebooks/foundation-week/validate.py --premium
python3 ebooks/foundation-week/make_previews.py --premium
```

Substitute the bundled executable if system Python lacks the packages. The build uses `/System/Library/Fonts/HelveticaNeue.ttc`, matching the site's first-choice system font. On another OS, configure an appropriately licensed equivalent font rather than silently accepting a fallback.

Companion validation CSV and JSON are in the output directory. All 19 page renders, a contact sheet and 390px previews are generated for review; these are never used as PDF source. The PDF is selectable text and vector rules, not page screenshots. Photographs are clipped directly from existing public assets; originals are unchanged. The existing high-resolution PNG logo is retained because the repository does not contain an SVG logo.

The previous edition remains at `output/pdf/cairnox-foundation-week.pdf`; running the current build does not overwrite it. Use validation without `--editorial` to check that previous PDF.

## Format and review

480 x 680 pt portrait; editorial body generally 12.5-13 pt, workout-table prescriptions 15 pt, exercise names 14 pt and notes 11.5 pt. Each day has performance and supporting-work pages. The PDF has clickable contents, bookmarks and links. The training log is a printable/reference worksheet, not an interactive form. The PDF is not claimed to be fully tagged for PDF/UA accessibility.

Every page has a review-edition footer. Retain it until Mat's outstanding technical guidance is supplied and incorporated. Once approved, update the review notice and the footer, rebuild, validate and inspect the changed pages before distributing the ebook.
