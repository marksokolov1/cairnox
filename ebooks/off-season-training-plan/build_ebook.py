#!/usr/bin/env python3
"""Build the print-ready CAIRNOX Off-Season Training Plan PDF."""

from pathlib import Path
import sys

from reportlab.lib.enums import TA_CENTER
from reportlab.pdfgen import canvas

ROOT = Path(__file__).resolve().parents[2]
HERE = Path(__file__).resolve().parent
OUTPUT = ROOT / "output" / "pdf" / "cairnox-off-season-training-plan-8-week.pdf"
CACHE = ROOT / "tmp" / "pdfs" / "ebook-image-cache"
PUBLIC = ROOT / "public"

sys.path.insert(0, str(HERE))

from components import (  # noqa: E402
    concept_row,
    display_heading,
    eyebrow,
    fit_image,
    page_background,
    page_footer,
    page_header,
    paragraph,
    rule,
    workout_table,
)
from styles import (  # noqa: E402
    BLACK,
    CHARCOAL,
    CREAM,
    FONT_BOLD,
    FONT_REGULAR,
    LINE,
    MINERAL,
    MOSS,
    OCHRE,
    PAGE_H,
    PAGE_W,
    STONE,
    STONE_LIGHT,
)
from training_data import APPENDIX, PLAN, SOURCE_NOTATION  # noqa: E402


class Ebook:
    def __init__(self, output_path):
        output_path.parent.mkdir(parents=True, exist_ok=True)
        self.c = canvas.Canvas(
            str(output_path),
            pagesize=(PAGE_W, PAGE_H),
            pageCompression=1,
            initialFontName=FONT_REGULAR,
        )
        self.c.setTitle("CAIRNOX Off-Season Training Plan - 8 Week Block")
        self.c.setAuthor("CAIRNOX")
        self.c.setCreator("CAIRNOX")
        self.page = 0

    def start(self, *, dark=False, header=None):
        self.page += 1
        page_background(self.c, dark=dark)
        if header:
            page_header(self.c, header, self.page, dark=dark)

    def finish(self):
        self.c.showPage()

    def save(self):
        self.c.save()

    def outline(self, key, title, level=0):
        self.c.bookmarkPage(key)
        self.c.addOutlineEntry(title, key, level=level, closed=False)


def draw_logo(c, x, y, width):
    logo = PUBLIC / "brand" / "cairnox-logo.png"
    height = width / 3
    c.drawImage(str(logo), x, y, width, height, mask="auto", preserveAspectRatio=True)


def cover(book):
    book.start()
    c = book.c
    c.setFillColor(BLACK)
    c.rect(0, 0, 12, PAGE_H, fill=1, stroke=0)
    draw_logo(c, 39, PAGE_H - 99, 150)
    eyebrow(c, "CAIRNOX PERFORMANCE PROGRAMMES", 39, PAGE_H - 126)
    display_heading(c, "OFF-SEASON\nTRAINING PLAN", 39, PAGE_H - 178, 455, size=45, leading=42)
    c.setFillColor(MOSS)
    c.rect(39, PAGE_H - 315, 157, 35, fill=1, stroke=0)
    c.setFillColor(CREAM)
    c.setFont(FONT_BOLD, 10)
    c.drawString(52, PAGE_H - 302, "8 WEEK BLOCK")
    fit_image(
        c,
        PUBLIC / "media/images/usa-cricket-team-performance-environment.jpg",
        39,
        45,
        PAGE_W - 78,
        420,
        saturation=0.84,
        contrast=1.05,
        anchor=(0.5, 0.48),
        cache_dir=CACHE,
    )
    c.setFillColor(BLACK)
    c.rect(39, 45, PAGE_W - 78, 38, fill=1, stroke=0)
    c.setFillColor(CREAM)
    c.setFont(FONT_BOLD, 7)
    c.drawString(52, 61, "STRUCTURE. PROGRESSION. PERFORMANCE.")
    book.finish()


def contents(book):
    book.start(header="CONTENTS")
    book.outline("contents", "Contents")
    c = book.c
    eyebrow(c, "DOCUMENT MAP", 39, PAGE_H - 82)
    display_heading(c, "The work,\nlayer by layer.", 39, PAGE_H - 112, 420, size=38)
    entries = [
        ("01", "PROGRAMME OVERVIEW", "03"),
        ("02", "THE EIGHT-WEEK STRUCTURE", "04"),
        ("03", "TRAINING PHILOSOPHY", "05"),
        ("04", "HOW TO READ THE PLAN", "06"),
        ("05", "PHASE 1 - FOUNDATIONAL STRENGTH", "07"),
        ("06", "PHASE 2 - FUNCTIONALITY / REALISATION", "16"),
        ("07", "CONDITIONING APPENDIX", "25"),
        ("08", "NOTATION & SOURCE NOTES", "27"),
    ]
    y = 600
    for number, title, page in entries:
        rule(c, 39, y, PAGE_W - 78)
        c.setFillColor(MINERAL)
        c.setFont(FONT_BOLD, 7.4)
        c.drawString(39, y - 24, number)
        c.setFillColor(BLACK)
        c.setFont(FONT_BOLD, 10)
        c.drawString(82, y - 26, title)
        c.setFillColor(MINERAL)
        c.drawRightString(PAGE_W - 39, y - 26, page)
        y -= 57
    book.finish()


def overview(book):
    book.start(header="PROGRAMME OVERVIEW")
    book.outline("overview", "Programme overview")
    c = book.c
    eyebrow(c, "THE EIGHT-WEEK BLOCK", 39, PAGE_H - 82)
    display_heading(c, "Prepare for the\ndemands of sport.", 39, PAGE_H - 112, 480, size=38)
    paragraph(
        c,
        "The following document will outline a phase of training aimed at optimising your on field performances while developing key physical characteristics.",
        39,
        610,
        305,
        size=12,
        leading=17,
    )
    paragraph(
        c,
        "The blueprint below will prepare you for the physical demands of the sport and its purpose is to guide and support you throughout the season.",
        39,
        520,
        305,
        size=10.2,
        leading=15,
        color=MINERAL,
    )
    fit_image(
        c,
        PUBLIC / "media/images/mathew-skyner-usa-cricket-field-coaching.jpg",
        375,
        260,
        181,
        350,
        anchor=(0.54, 0.48),
        cache_dir=CACHE,
    )
    rule(c, 39, 286, 305)
    eyebrow(c, "PRIMARY OUTCOME", 39, 268)
    paragraph(c, "Optimise on-field performance while developing key physical characteristics.", 39, 244, 300, font=FONT_BOLD, size=13, leading=17)
    book.finish()


def structure(book):
    book.start(header="PROGRAMME STRUCTURE")
    book.outline("structure", "The eight-week structure")
    c = book.c
    eyebrow(c, "TWO FOUR-WEEK BLOCKS", 39, PAGE_H - 82)
    display_heading(c, "Build the base.\nThen build the demand.", 39, PAGE_H - 112, 500, size=35)
    paragraph(c, "The program will have 2 primary phases; both are 4 week blocks (which will be repeated).", 39, 618, 470, size=10.5, leading=15, color=MINERAL)

    blocks = [
        (
            "01",
            "FOUNDATIONAL PHASE",
            "Development of fundamental concepts ie. Base Strength, injury prevention and Acceleration Focus. (Ideal for early season or gaps in schedule.) Off-Feet conditioning is provided as replacement for running due to weather etc.",
            MOSS,
        ),
        (
            "02",
            "FUNCTIONALITY PHASE",
            "This block will build intensity. More complex movements may be added and the primary focus will be Eccentric Loading and maximal Strength. This is a key component for us to continue to address during a break in play and will prepare the tissue for the next phase. Conditioning sessions will introduce repeat high intensity efforts (RHIE).",
            CHARCOAL,
        ),
    ]
    y = 505
    for number, title, focus, color in blocks:
        c.setFillColor(color)
        c.rect(39, y - 150, PAGE_W - 78, 150, fill=1, stroke=0)
        c.setFillColor(CREAM)
        c.setFont(FONT_BOLD, 8)
        c.drawString(54, y - 26, number)
        c.setFont(FONT_BOLD, 16)
        c.drawString(93, y - 30, title)
        paragraph(c, focus, 93, y - 45, PAGE_W - 150, size=8.2, leading=10.8, color=CREAM)
        c.setFont(FONT_BOLD, 7)
        c.drawString(93, y - 128, "WEEKS 1-4  /  FOUR TRAINING DAYS PER WEEK")
        y -= 170
    book.finish()


def philosophy(book):
    book.start(dark=True, header="TRAINING PHILOSOPHY")
    book.outline("philosophy", "Training philosophy")
    c = book.c
    eyebrow(c, "THE INTENT BEHIND THE WORK", 39, PAGE_H - 82, color=STONE)
    display_heading(c, "Train movements,\nnot muscles.", 39, PAGE_H - 112, 500, color=CREAM, size=42, leading=39)
    paragraph(c, "Try to think about HOW you move and not just WHAT you move. Intention and execution is key.", 39, 598, 310, size=11.2, leading=16, color=STONE_LIGHT)
    fit_image(
        c,
        PUBLIC / "media/images/mathew-skyner-active-rugby-coaching.jpg",
        363,
        255,
        193,
        350,
        saturation=0.78,
        contrast=1.08,
        anchor=(0.58, 0.5),
        cache_dir=CACHE,
    )
    goals = [
        ("01", "CREATE AND PROMOTE RESILIENCE", ""),
        ("02", "DEVELOP KEY PHYSICAL OUTPUTS", "ie. Strength, Power, Speed etc."),
        ("03", "PREPARE YOU FOR THE DEMANDS OF THE SPORT", ""),
    ]
    y = 470
    for number, title, body in goals:
        concept_row(c, number, title, body, 39, y, 295, dark=True)
        y -= 94
    book.finish()


def how_to_read(book):
    book.start(header="HOW TO READ THE PLAN")
    book.outline("how-to-read", "How to read the plan")
    c = book.c
    eyebrow(c, "THE DAILY ARCHITECTURE", 39, PAGE_H - 82)
    display_heading(c, "Three blocks.\nOne training day.", 39, PAGE_H - 112, 470, size=38)
    blocks = [
        ("A", "PERFORMANCE BLOCK", "Typically your heavier compound movements or the main focus of the session."),
        ("B", "RESILIENCY BLOCK", "Accessory work & injury prevention."),
        ("C", "CONDITIONING", "Field/Pitch Work (Sprints, Runs, SAQ) or Off-Feet."),
    ]
    y = 608
    for number, title, body in blocks:
        concept_row(c, number, title, body, 39, y, PAGE_W - 78)
        y -= 90
    rule(c, 39, 320, PAGE_W - 78)
    eyebrow(c, "PRIMARY MOVEMENT CONCEPTS", 39, 298)
    movements = ["PUSH", "PULL", "SQUAT", "HINGE", "LUNGE", "ROTATE", "BRACE"]
    x, y = 39, 256
    for item in movements:
        w = 64 if item not in {"ROTATE", "HINGE"} else 76
        c.setFillColor(STONE_LIGHT)
        c.rect(x, y, w, 30, fill=1, stroke=0)
        c.setFillColor(BLACK)
        c.setFont(FONT_BOLD, 7.4)
        c.drawCentredString(x + w / 2, y + 11, item)
        x += w + 7
        if x + w > PAGE_W - 39:
            x = 39
            y -= 39
    paragraph(c, "These primary movement concepts make up the foundation of our daily routines.", 39, 185, 450, size=10, leading=14, color=MINERAL)
    book.finish()


def phase_divider(book, phase, image_name, anchor):
    book.start(dark=True)
    c = book.c
    book.outline(f"phase-{phase['number']}", f"Phase {phase['number']} - {phase['name'].title()}")
    fit_image(c, PUBLIC / f"media/images/{image_name}", 0, PAGE_H - 365, PAGE_W, 365,
              saturation=0.72, contrast=1.10, anchor=anchor, cache_dir=CACHE)
    c.setFillColor(CREAM)
    c.setFont(FONT_BOLD, 112)
    c.setFillAlpha(0.12)
    c.drawRightString(PAGE_W - 28, 76, phase["number"])
    c.setFillAlpha(1)
    eyebrow(c, f"PHASE {phase['number']}", 39, 432, color=STONE_LIGHT)
    display_heading(c, phase["name"].title(), 39, 397, 505, color=CREAM, size=39, leading=37)
    paragraph(c, phase["summary"], 39, 285, 390, size=11, leading=16, color=STONE_LIGHT)
    c.setFillColor(CREAM)
    c.setFont(FONT_BOLD, 8)
    c.drawString(39, 190, phase["frequency"])
    page_footer(c, book.page, f"PHASE {phase['number']} / {phase['short_name']}", dark=True)
    book.finish()


def workout_day(book, phase, day, week_indices):
    section = f"PHASE {phase['number']} / DAY {day['day']}"
    book.start(header=section)
    c = book.c
    first_week, last_week = week_indices[0] + 1, week_indices[-1] + 1
    book.outline(
        f"phase-{phase['number']}-day-{day['day']}-weeks-{first_week}-{last_week}",
        f"Day {day['day']} - Weeks {first_week}-{last_week}",
        level=1,
    )
    eyebrow(c, f"PHASE {phase['number']} - {phase['short_name']}", 39, PAGE_H - 82)
    c.setFillColor(MINERAL)
    c.setFont(FONT_BOLD, 8)
    c.drawRightString(PAGE_W - 39, PAGE_H - 89, f"WEEKS {first_week}-{last_week}")
    display_heading(c, f"Day {day['day']}\n{day['title']}", 39, PAGE_H - 111, 515, size=23, leading=22)
    y = 625
    y, _ = workout_table(c, "A / Performance Block", day["performance"], 39, y, PAGE_W - 78, dark_header=True, week_indices=week_indices)
    y, _ = workout_table(c, "B / Resilience Block", day["resilience"], 39, y, PAGE_W - 78, week_indices=week_indices)
    if day["conditioning"]:
        workout_table(c, "C / Conditioning", day["conditioning"], 39, y, PAGE_W - 78, dark_header=True, week_indices=week_indices)
    else:
        rule(c, 39, y, PAGE_W - 78)
        eyebrow(c, "SOURCE NOTE", 39, y - 18)
        paragraph(c, "No conditioning block is supplied for this day in the source PDF.", 39, y - 40, PAGE_W - 78, size=8.5, leading=12, color=MINERAL)
    book.finish()


def appendix_page_one(book):
    book.start(header="CONDITIONING APPENDIX")
    book.outline("appendix", "Conditioning appendix")
    c = book.c
    eyebrow(c, "OFF-FEET CONDITIONING", 39, PAGE_H - 82)
    display_heading(c, "Conditioning\nreference.", 39, PAGE_H - 112, 460, size=38)
    y = 610
    for index, (title, protocol, note) in enumerate(APPENDIX[:4], 1):
        rule(c, 39, y, PAGE_W - 78)
        c.setFillColor(MINERAL)
        c.setFont(FONT_BOLD, 7.2)
        c.drawString(39, y - 24, f"{index:02d}")
        c.setFillColor(BLACK)
        c.setFont(FONT_BOLD, 11)
        c.drawString(78, y - 25, title)
        h = paragraph(c, protocol, 78, y - 43, 430, size=9.3, leading=12.5)
        if note:
            paragraph(c, note, 78, y - 49 - h, 430, size=8, leading=11, color=MINERAL)
        y -= 116 if title in {"VOLATILE", "THE PYRAMID"} else 93
    book.finish()


def appendix_page_two(book):
    book.start(dark=True, header="CONDITIONING APPENDIX / PHASE 2")
    c = book.c
    eyebrow(c, "PHASE 2 / OFF-FEET CONDITIONING", 39, PAGE_H - 82, color=STONE)
    display_heading(c, "Record the work.\nPreserve the rest.", 39, PAGE_H - 112, 500, color=CREAM, size=36)
    y = 600
    for index, (title, protocol, note) in enumerate(APPENDIX[4:], 5):
        concept_row(c, f"{index:02d}", title, f"{protocol} {note}".strip(), 39, y, PAGE_W - 78, dark=True)
        y -= 125
    paragraph(c, "The appendix reproduces only the protocols defined in the supplied source. Unexplained conditioning labels are identified on the following page.", 39, 180, 480, size=9, leading=13, color=STONE_LIGHT)
    book.finish()


def notation_page(book):
    book.start(header="NOTATION & SOURCE NOTES")
    book.outline("notation", "Notation and source notes")
    c = book.c
    eyebrow(c, "READ BEFORE TRAINING", 39, PAGE_H - 82)
    display_heading(c, "The source does not\ndefine every term.", 39, PAGE_H - 112, 500, size=34)
    paragraph(c, "The following notation is reproduced exactly because its meaning is not defined in the supplied plan. Confirm the intended definitions with the programme author before use.", 39, 620, 480, size=10.3, leading=15, color=MINERAL)
    y = 535
    for code, body in SOURCE_NOTATION:
        concept_row(c, code, code, body, 39, y, PAGE_W - 78)
        y -= 84
    rule(c, 39, 270, PAGE_W - 78)
    eyebrow(c, "UNEXPLAINED CONDITIONING LABELS", 39, 249)
    paragraph(c, "LUNGBUSTER / 500M SHUTTLE / SCOTLAND ANAEROBIC DRILL", 39, 218, 500, font=FONT_BOLD, size=12, leading=16)
    paragraph(c, "These sessions appear in the weekly prescriptions but have no corresponding protocol in the source appendix. Do not infer or substitute a protocol without owner clarification.", 39, 174, 480, size=9.2, leading=13, color=MINERAL)
    book.finish()


def closing(book):
    book.start(dark=True)
    c = book.c
    c.setFillColor(CREAM)
    c.rect(0, PAGE_H - 125, PAGE_W, 125, fill=1, stroke=0)
    draw_logo(c, 39, PAGE_H - 99, 150)
    c.setFillColor(CREAM)
    c.setFont(FONT_BOLD, 68)
    c.setFillAlpha(0.07)
    c.drawRightString(PAGE_W - 30, 92, "08")
    c.setFillAlpha(1)
    eyebrow(c, "THE NEXT LAYER", 39, PAGE_H - 190, color=STONE)
    display_heading(c, "Build the\nfoundation.", 39, PAGE_H - 225, 500, color=CREAM, size=48, leading=44)
    paragraph(c, "Performance is accumulated through deliberate work, repeated over time.", 39, 470, 360, size=13, leading=18, color=STONE_LIGHT)
    rule(c, 39, 164, PAGE_W - 78, color=CHARCOAL)
    c.setFillColor(CREAM)
    c.setFont(FONT_BOLD, 8)
    c.drawString(39, 137, "STRUCTURE. PROGRESSION. PERFORMANCE.")
    page_footer(c, book.page, "OFF-SEASON / 8 WEEK BLOCK", dark=True)
    book.finish()


def build():
    book = Ebook(OUTPUT)
    cover(book)
    contents(book)
    overview(book)
    structure(book)
    philosophy(book)
    how_to_read(book)
    phase_divider(
        book,
        PLAN["phases"][0],
        "mathew-skyner-usa-cricket-resisted-sprint-coaching.jpg",
        (0.56, 0.52),
    )
    for day in PLAN["phases"][0]["days"]:
        workout_day(book, PLAN["phases"][0], day, (0, 1))
        workout_day(book, PLAN["phases"][0], day, (2, 3))
    phase_divider(
        book,
        PLAN["phases"][1],
        "mathew-skyner-usa-cricket-individual-resistance-coaching.jpg",
        (0.52, 0.5),
    )
    for day in PLAN["phases"][1]["days"]:
        workout_day(book, PLAN["phases"][1], day, (0, 1))
        workout_day(book, PLAN["phases"][1], day, (2, 3))
    appendix_page_one(book)
    appendix_page_two(book)
    notation_page(book)
    closing(book)
    book.save()
    print(OUTPUT)


if __name__ == "__main__":
    build()
