"""Reusable drawing components for CAIRNOX training ebooks."""

from pathlib import Path

from PIL import Image
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.platypus import Paragraph

from styles import (
    BLACK,
    CHARCOAL,
    CREAM,
    FONT_BOLD,
    FONT_REGULAR,
    LINE,
    MINERAL,
    PAGE_H,
    PAGE_W,
    STONE_LIGHT,
)


def _hex(color):
    return color.hexval()


def paragraph(canvas, text, x, top, width, *, font=FONT_REGULAR, size=10,
              leading=None, color=BLACK, align=TA_LEFT, max_height=500):
    """Draw a wrapping paragraph from a top coordinate and return its height."""
    leading = leading or size * 1.35
    style = ParagraphStyle(
        "inline",
        fontName=font,
        fontSize=size,
        leading=leading,
        textColor=color,
        alignment=align,
        spaceAfter=0,
        spaceBefore=0,
    )
    flow = Paragraph(text.replace("\n", "<br/>"), style)
    _, height = flow.wrap(width, max_height)
    flow.drawOn(canvas, x, top - height)
    return height


def fit_image(canvas, image_path, x, y, width, height, *, saturation=0.88,
              contrast=1.03, anchor=(0.5, 0.5), cache_dir=None):
    """Crop documentary photography into a frame without altering source files."""
    image_path = Path(image_path)
    cache_dir = Path(cache_dir) if cache_dir else image_path.parent
    cache_dir.mkdir(parents=True, exist_ok=True)
    ax, ay = anchor
    key = f"{image_path.stem}-{int(width)}x{int(height)}-{ax:.2f}-{ay:.2f}.jpg"
    rendered = cache_dir / key
    if not rendered.exists():
        from PIL import ImageEnhance

        with Image.open(image_path).convert("RGB") as im:
            target_ratio = width / height
            source_ratio = im.width / im.height
            if source_ratio > target_ratio:
                crop_w = int(im.height * target_ratio)
                left = int((im.width - crop_w) * ax)
                im = im.crop((left, 0, left + crop_w, im.height))
            else:
                crop_h = int(im.width / target_ratio)
                top = int((im.height - crop_h) * (1 - ay))
                top = max(0, min(top, im.height - crop_h))
                im = im.crop((0, top, im.width, top + crop_h))
            im = ImageEnhance.Color(im).enhance(saturation)
            im = ImageEnhance.Contrast(im).enhance(contrast)
            im.thumbnail((int(width * 3), int(height * 3)), Image.Resampling.LANCZOS)
            im.save(rendered, quality=92, optimize=True)
    canvas.drawImage(ImageReader(str(rendered)), x, y, width, height, mask="auto")


def page_background(canvas, dark=False):
    canvas.setFillColor(BLACK if dark else CREAM)
    canvas.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)


def eyebrow(canvas, text, x, top, *, color=MINERAL, size=7.2):
    canvas.setFillColor(color)
    canvas.setFont(FONT_BOLD, size)
    canvas.drawString(x, top - size, text.upper())


def display_heading(canvas, text, x, top, width, *, color=BLACK, size=37,
                    leading=None):
    return paragraph(
        canvas,
        text,
        x,
        top,
        width,
        font=FONT_BOLD,
        size=size,
        leading=leading or size * 0.94,
        color=color,
    )


def rule(canvas, x, y, width, *, color=LINE, thickness=0.6):
    canvas.setStrokeColor(color)
    canvas.setLineWidth(thickness)
    canvas.line(x, y, x + width, y)


def page_footer(canvas, page_number, section="OFF-SEASON / 8 WEEK BLOCK", dark=False):
    color = CREAM if dark else MINERAL
    canvas.setFillColor(color)
    canvas.setFont(FONT_BOLD, 6.4)
    canvas.drawString(39, 23, "CAIRNOX PERFORMANCE")
    canvas.setFont(FONT_REGULAR, 6.4)
    canvas.drawCentredString(PAGE_W / 2, 23, section)
    canvas.setFont(FONT_BOLD, 6.4)
    canvas.drawRightString(PAGE_W - 39, 23, f"{page_number:02d}")


def page_header(canvas, section, page_number, dark=False):
    color = CREAM if dark else BLACK
    line = CHARCOAL if dark else LINE
    canvas.setFillColor(color)
    canvas.setFont(FONT_BOLD, 7)
    canvas.drawString(39, PAGE_H - 34, "CAIRNOX")
    canvas.setFont(FONT_REGULAR, 6.6)
    canvas.drawRightString(PAGE_W - 39, PAGE_H - 34, section)
    rule(canvas, 39, PAGE_H - 45, PAGE_W - 78, color=line)
    page_footer(canvas, page_number, section, dark=dark)


def section_number(canvas, value, x, top, *, color=MINERAL):
    canvas.setFillColor(color)
    canvas.setFont(FONT_BOLD, 7.5)
    canvas.drawString(x, top - 7.5, value)


def concept_row(canvas, number, title, body, x, top, width, *, dark=False):
    fg = CREAM if dark else BLACK
    quiet = STONE_LIGHT if dark else MINERAL
    rule(canvas, x, top, width, color=CHARCOAL if dark else LINE)
    canvas.setFillColor(quiet)
    canvas.setFont(FONT_BOLD, 7)
    canvas.drawString(x, top - 23, number)
    canvas.setFillColor(fg)
    canvas.setFont(FONT_BOLD, 10)
    canvas.drawString(x + 34, top - 24, title.upper())
    paragraph(canvas, body, x + 34, top - 38, width - 34, size=8.4, leading=11.2, color=quiet)


def workout_table(canvas, title, rows, x, top, width, *, dark_header=False,
                  week_indices=(0, 1, 2, 3)):
    """Draw one intact training block and return the new y position."""
    header_h = 26
    label_w = 25
    week_count = len(week_indices)
    exercise_w = width * (0.50 if week_count == 2 else 0.35)
    week_w = (width - label_w - exercise_w) / week_count
    row_heights = []
    for _, exercise, note, values in rows:
        lines = max(
            1 + (1 if note else 0),
            max(len(str(values[i]).split("\n")) for i in week_indices),
        )
        row_heights.append(max(39 if week_count == 2 else 35, 17 + lines * (10 if week_count == 2 else 9)))
    block_h = 24 + header_h + sum(row_heights)

    canvas.setFillColor(BLACK if dark_header else CHARCOAL)
    canvas.rect(x, top - 24, width, 24, fill=1, stroke=0)
    canvas.setFillColor(CREAM)
    canvas.setFont(FONT_BOLD, 7.2)
    canvas.drawString(x + 10, top - 15.5, title.upper())

    y = top - 24
    canvas.setFillColor(STONE_LIGHT)
    canvas.rect(x, y - header_h, width, header_h, fill=1, stroke=0)
    canvas.setFillColor(BLACK)
    canvas.setFont(FONT_BOLD, 6.5)
    canvas.drawString(x + 7, y - 16, "ID")
    canvas.drawString(x + label_w + 7, y - 16, "EXERCISE")
    for column, source_index in enumerate(week_indices):
        wx = x + label_w + exercise_w + column * week_w
        canvas.drawCentredString(wx + week_w / 2, y - 16, f"WEEK {source_index + 1}")
    y -= header_h

    boundaries = [x, x + label_w, x + label_w + exercise_w]
    boundaries += [x + label_w + exercise_w + week_w * i for i in range(1, week_count + 1)]
    for (code, exercise, note, values), row_h in zip(rows, row_heights):
        canvas.setStrokeColor(LINE)
        canvas.setLineWidth(0.5)
        canvas.line(x, y, x + width, y)
        canvas.setFillColor(BLACK)
        canvas.setFont(FONT_BOLD, 7.2)
        canvas.drawString(x + 7, y - 17, code)
        paragraph(canvas, exercise, x + label_w + 7, y - 9, exercise_w - 13,
                  font=FONT_BOLD, size=9.2 if week_count == 2 else 7.7,
                  leading=11 if week_count == 2 else 9.4)
        if note:
            paragraph(canvas, note, x + label_w + 7, y - 26, exercise_w - 13,
                      size=7.4 if week_count == 2 else 6.4,
                      leading=8.7 if week_count == 2 else 7.6, color=MINERAL)
        for column, source_index in enumerate(week_indices):
            value = values[source_index]
            wx = x + label_w + exercise_w + column * week_w
            paragraph(canvas, str(value), wx + 5, y - 9, week_w - 10,
                      size=9 if week_count == 2 else 6.8,
                      leading=10.8 if week_count == 2 else 8.2, align=TA_CENTER)
        y -= row_h
    canvas.line(x, y, x + width, y)
    for bx in boundaries:
        canvas.line(bx, top - 24, bx, y)
    return y - 18, block_h


def small_caps_width(text, size=7):
    return stringWidth(text.upper(), FONT_BOLD, size)
