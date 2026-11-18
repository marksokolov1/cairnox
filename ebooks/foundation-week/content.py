"""Editable editorial content and a Week 1 view of the existing source data."""
import importlib.util
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
spec = importlib.util.spec_from_file_location(
    "original_training_data", ROOT / "ebooks/off-season-training-plan/training_data.py"
)
source = importlib.util.module_from_spec(spec)
spec.loader.exec_module(source)

# Select exactly Phase 1, Week 1. No programme values are rewritten here.
DAYS = [
    {
        **{k: v for k, v in day.items() if k not in ("performance", "resilience", "conditioning")},
        **{block: [(code, exercise, note, values[0]) for code, exercise, note, values in day[block]]
           for block in ("performance", "resilience", "conditioning")},
    }
    for day in source.PLAN["phases"][0]["days"]
]

DAY_LABELS = ["Upper body", "Lower body", "Upper body", "Lower body"]
DAY_FOCUS = [
    "Strength + off-feet conditioning",
    "Strength + speed & acceleration",
    "Strength + off-feet conditioning",
    "Strength + supporting work",
]
DAY_LENSES = [
    ("More than a pressing day.",
     "A bench press, a medicine-ball pass and a weighted chin-up occupy the performance block. The session then continues into supporting work and conditioning. Notice the structure: each block has a different job."),
    ("The work moves onto the field.",
     "This session brings lower-body strength and short acceleration work into the same training day. Read the entire day before starting: the field work is part of the prescription, not an extra challenge to add afterwards."),
    ("The pattern returns. The exercises change.",
     "The second upper-body session keeps the same three-block architecture while changing the movements. A clear structure gives you something to follow and something useful to discuss with your coach."),
    ("Finish with purpose.",
     "The final session pairs the squat variation with single-leg work, jumping and supporting exercises. No conditioning block is supplied for this day. The sample ends here; the longer programme contains the later progression."),
]

INTRO = [
    "Cricket can give you time to wait. It does not always give you time to prepare.",
    "The next ball can ask for a sharp acceleration, a hard throw, force through a shot or another demanding effort late in the day. Physical preparation has to make sense in that world.",
    "This guide opens a window into the CAIRNOX approach: four sessions from the first week of a foundational training phase, with a purpose behind the work and a way to reflect on it.",
    "Use the week to understand the structure, ask better questions and record the work. A single week is an introduction to the process. Development continues beyond these pages.",
]

PRINCIPLES = [
    ("Train the quality", "Start with what the work is intended to develop. Exercise variety is useful when it serves that purpose; it is not an objective of its own."),
    ("Respect the sport", "The gym shares the week with batting, bowling, fielding, practice, matches and travel. A programme has to sit inside that wider picture."),
    ("Build the system", "A clear session is one layer. Repeated work, recovery and adjustment connect the layers. That is where the longer development process begins."),
]

CONTENTS = [
    ("03", "The demands behind the work", "opening"),
    ("04", "Meet Mathew Skyner", "mathew"),
    ("05", "Three principles to take with you", "principles"),
    ("06", "Your week at a glance", "week"),
    ("07", "Read the plan", "read"),
    ("08", "Day 1 / Upper body", "day1"),
    ("10", "Day 2 / Lower body + acceleration", "day2"),
    ("12", "Day 3 / Upper body", "day3"),
    ("14", "Day 4 / Lower-body strength", "day4"),
    ("16", "The Pyramid / conditioning reference", "pyramid"),
    ("17", "Record, reflect and choose the next step", "log"),
]
