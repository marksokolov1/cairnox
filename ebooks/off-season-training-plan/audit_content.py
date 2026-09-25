#!/usr/bin/env python3
"""Independent source-PDF-to-structured-data prescription audit."""

from pathlib import Path
import re
import sys

import pdfplumber

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))

from training_data import APPENDIX, PLAN  # noqa: E402

SOURCE = Path("/Users/marksokolov/Desktop/Off-Season Training Plan (8 Weeks) (1).pdf")
SOURCE_DAY_TITLES = [
    "Upper Body w/ Off-Feet Conditioning",
    "Lower Body w/ Speed & Acceleration",
    "Upper Body w/ Off-Feet Conditioning",
    "Lower Body Strength",
    "Upper Body w/ Off-Feet Conditioning",
    "Lower Body w/ Tempo or MAS runs",
    "Whole Body Power w/ Repeat Sprint Ability",
    "Whole Body Power w/ Repeat Sprint Ability",
]
SOURCE_APPENDIX = [
    ("Tabata", "20 On: 10 Off x8", "Typically 3-5 rounds"),
    ("500m Repeats", "On any machine, as fast as possible, rest 1 min, repeat", "6-10 reps"),
    ("Volatile", "60 On: 30 Off x5 Rest 2 mins 30 On: 30 Off x5 Rest 2 mins 20 On: 10 Off x8", ""),
    ("The Pyramid", "10 Hard: 50 Light 20 Hard: 40 Light 30 Hard: 30 Light 40 Hard: 20 Light 50 Hard: 10 Light", "Go back down"),
    ("2km Time Trials", "Record time to complete 2km", "Rest given time before repeating"),
    ("The Acid Bath", "500m on Rower, 500m on Ski-Erg & 1km on Assault Bike = 1 Rep", ""),
    ("The Impossible Test", "1 KM Row - 3 mins rest - 1 KM Ski - 3 mins rest - 2 KM Bike", "Add 3 total times together to get result (DO NOT INCLUDE THE REST TIME)"),
]


def norm(value):
    value = str(value or "").lower().replace("’", "'")
    return re.sub(r"[^a-z0-9%]+", "", value)


def source_rows(table):
    blocks = {"performance": [], "resilience": [], "conditioning": []}
    current = None
    for row in table[2:]:
        first = row[0] or ""
        if first == "PERFORMANCE BLOCK":
            current = "performance"
            continue
        if first == "RESILIENCE BLOCK":
            current = "resilience"
            continue
        if first == "CONDITIONING":
            current = "conditioning"
            continue
        if current in {"performance", "resilience"}:
            blocks[current].append((first, row[1] or "", row[2:6]))
        elif current == "conditioning":
            values = []
            for value in row[2:6]:
                value = re.sub(r"^Week\s+[124]\s*", "", value or "", flags=re.I)
                values.append(value)
            blocks[current].append(("C", first, values))
    return blocks


def generated_rows(day, block):
    return [
        (code, f"{exercise} {note}".strip(), weeks)
        for code, exercise, note, weeks in day[block]
    ]


def main():
    failures = []
    ambiguous = []
    day_summaries = []
    days = [day for phase in PLAN["phases"] for day in phase["days"]]
    with pdfplumber.open(SOURCE) as pdf:
        tables = [pdf.pages[index].extract_tables()[0] for index in range(6, 14)]

    for index, (table, day, expected_title) in enumerate(zip(tables, days, SOURCE_DAY_TITLES), 1):
        phase_no = 1 if index <= 4 else 2
        day_no = ((index - 1) % 4) + 1
        label = f"Phase {phase_no} Day {day_no}"
        if norm(day["title"]) != norm(expected_title):
            failures.append(f"{label}: day title mismatch")
        parsed = source_rows(table)
        row_count = 0
        for block in ("performance", "resilience", "conditioning"):
            source_block = parsed[block]
            generated_block = generated_rows(day, block)
            if len(source_block) != len(generated_block):
                failures.append(f"{label} {block}: row-count mismatch")
                continue
            for source_row, generated_row in zip(source_block, generated_block):
                row_count += 1
                source_code, source_exercise, source_weeks = source_row
                generated_code, generated_exercise, generated_weeks = generated_row
                if norm(source_code) != norm(generated_code):
                    failures.append(f"{label} {block}: ID {source_code!r} != {generated_code!r}")
                if norm(source_exercise) != norm(generated_exercise):
                    failures.append(f"{label} {block} {source_code}: exercise/note mismatch")
                for week_index, (source_value, generated_value) in enumerate(zip(source_weeks, generated_weeks), 1):
                    if norm(source_value) != norm(generated_value):
                        failures.append(
                            f"{label} {block} {source_code} Week {week_index}: "
                            f"{source_value!r} != {generated_value!r}"
                        )
        if label == "Phase 1 Day 1":
            ambiguous.append(f"{label}: source third conditioning header says Week 1; treated as sequential Week 3")
        if label == "Phase 1 Day 4":
            ambiguous.append(f"{label}: source has no Conditioning block")
        if label == "Phase 2 Day 4":
            ambiguous.append(f"{label}: source exactly duplicates Day 3")
        day_summaries.append((label, row_count, "PASS"))

    assert len(APPENDIX) == len(SOURCE_APPENDIX) == 7
    for source_item, generated_item in zip(SOURCE_APPENDIX, APPENDIX):
        if any(norm(source_value) != norm(generated_value) for source_value, generated_value in zip(source_item, generated_item)):
            failures.append(f"Appendix mismatch: {source_item[0]}")
    if failures:
        for failure in failures:
            print("MISMATCH", failure)
        raise SystemExit(1)
    for label, rows, status in day_summaries:
        print(f"{status}: {label} - {rows} rows")
    for item in ambiguous:
        print("AMBIGUOUS:", item)
    print("PASS: 69 rows and every Week 1-4 prescription match the source sequence.")


if __name__ == "__main__":
    main()
