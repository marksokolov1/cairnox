"""CAIRNOX ebook design tokens, derived from the current website."""

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

PAGE_W, PAGE_H = A4

CREAM = HexColor("#F2EEE4")
BLACK = HexColor("#111310")
CHARCOAL = HexColor("#292C28")
MINERAL = HexColor("#656960")
STONE = HexColor("#AAA99F")
STONE_LIGHT = HexColor("#E3DED2")
MOSS = HexColor("#4F5948")
OCHRE = HexColor("#8A6F3C")
LINE = HexColor("#CBC5B8")
WHITE = HexColor("#FFFFFF")

MARGIN_X = 39
TOP = 46
BOTTOM = 34
CONTENT_W = PAGE_W - (MARGIN_X * 2)

FONT_PATH = "/System/Library/Fonts/HelveticaNeue.ttc"
FONT_REGULAR = "CAIRNOX-HelveticaNeue"
FONT_BOLD = "CAIRNOX-HelveticaNeue-Bold"
FONT_OBLIQUE = "CAIRNOX-HelveticaNeue-Italic"

pdfmetrics.registerFont(TTFont(FONT_REGULAR, FONT_PATH, subfontIndex=0))
pdfmetrics.registerFont(TTFont(FONT_BOLD, FONT_PATH, subfontIndex=1))
pdfmetrics.registerFont(TTFont(FONT_OBLIQUE, FONT_PATH, subfontIndex=2))
