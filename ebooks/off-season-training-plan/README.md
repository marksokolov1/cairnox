# CAIRNOX Off-Season Training Plan ebook

This folder contains the editable, structured source for the CAIRNOX 8-week off-season training ebook.

## Files

- `training_data.py` - programme prescriptions and conditioning appendix content.
- `styles.py` - ebook design tokens derived from the current CAIRNOX website.
- `components.py` - reusable page, typography, image, concept-list, and workout-table components.
- `build_ebook.py` - page composition and PDF builder.
- `audit_content.py` - independent source-PDF comparison for every programme row and week value.
- `validate_content.py` - internal structural validation for the content model.
- `QA_REPORT.md` - source ambiguities, fidelity checks, and final render verification.
- `SECOND_PASS_QA_REPORT.md` - pre-fix issue register and final second-pass validation.

## Regenerate the PDF

From the project root, run:

```bash
/Users/marksokolov/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3 ebooks/off-season-training-plan/build_ebook.py
```

The stable output path is:

`output/pdf/cairnox-off-season-training-plan-8-week.pdf`

## Editing content safely

1. Edit programme prescriptions only in `training_data.py`.
2. Keep each exercise tuple in the form `(ID, exercise, note, [Week 1, Week 2, Week 3, Week 4])`.
3. Record any prescription change and its approved source in `QA_REPORT.md`.
4. Rebuild and render every page before release.

Run the independent source comparison with:

```bash
/Users/marksokolov/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3 ebooks/off-season-training-plan/audit_content.py
```

## Reusing the system

The design tokens and drawing components are not tied to this programme. A future ebook can supply a new structured content file and reuse the same page, image, table, divider, and footer components.
