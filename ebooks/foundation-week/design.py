"""Sports-editorial components on a restrained CAIRNOX publication grid."""
import json
from pathlib import Path
from xml.sax.saxutils import escape
from PIL import Image
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen.canvas import Canvas
from reportlab.platypus import Paragraph

W, H, M = 480, 680, 30
CW = W - 2 * M
CREAM, INK = HexColor('#f2eee4'), HexColor('#111310')
STONE, LINE = HexColor('#e3ded2'), HexColor('#cbc5b8')
MINERAL, MOSS = HexColor('#656960'), HexColor('#4f5948')
CHARCOAL = HexColor('#292c28')
FONT = '/System/Library/Fonts/HelveticaNeue.ttc'
for name, index in [('Cairnox', 0), ('CairnoxBold', 1)]:
    pdfmetrics.registerFont(TTFont(name, FONT, subfontIndex=index))

class Publication:
    def __init__(self, path, edition='REVIEW EDITION'):
        path.parent.mkdir(parents=True, exist_ok=True)
        self.path = path
        self.c = Canvas(str(path), pagesize=(W, H), pageCompression=1)
        self.c.setTitle('CAIRNOX - The Foundation Week')
        self.c.setAuthor('CAIRNOX | Mathew Skyner')
        self.c.setSubject('A sample week of physical preparation for cricketers')
        self.edition = edition
        self.page = 0
        self.boxes = []

    def start(self, name, key, dark=False, chrome=True):
        self.page += 1
        self.dark, self.fg = dark, CREAM if dark else INK
        self.quiet = STONE if dark else MINERAL
        self.c.setFillColor(INK if dark else CREAM)
        self.c.rect(0, 0, W, H, fill=1, stroke=0)
        self.c.bookmarkPage(key)
        self.c.addOutlineEntry(name, key, level=0, closed=False)
        if chrome:
            self.label('CAIRNOX / FIELD NOTES', 20, width=140, size=8)
            self.label(name, 20, x=175, width=275, align=2, size=7.5)
            self.rule(40)
        self.rule(642)
        self.text(self.edition, 652, width=125, size=7.5, leading=10, color=self.quiet)
        self.text('BACK TO CONTENTS', 651, x=173, width=170, size=8.5, leading=11, color=self.quiet)
        self.c.linkRect('Back to contents','contents',(165,8,350,34),relative=0,thickness=0)
        self.text(f'{self.page:02d}', 652, x=414, width=36, size=8, leading=10, bold=True, align=2)

    def finish(self):
        self.c.showPage()

    def save(self):
        self.c.save()
        manifest = self.path.with_suffix('.layout.json')
        manifest.write_text(json.dumps(self.boxes, indent=2))

    def text(self, text, top, *, x=M, width=CW, size=12.5, leading=17,
             bold=False, color=None, align=0, raw=False):
        txt = text if raw else escape(text).replace('\n', '<br/>')
        style = ParagraphStyle('p', fontName='CairnoxBold' if bold else 'Cairnox',
                               fontSize=size, leading=leading, textColor=color or self.fg,
                               alignment=align)
        p = Paragraph(txt, style)
        _, height = p.wrap(width, H)
        assert top >= 10 and top + height <= 668, (self.page, text, top, height)
        p.drawOn(self.c, x, H-top-height)
        self.boxes.append(dict(page=self.page, text=text, x=x, top=top, width=width,
                               height=height, size=size))
        return top + height

    def title(self, text, top=84, size=36, width=CW):
        return self.text(text, top, size=size, leading=size*.98, bold=True, width=width)

    def label(self, text, top, x=M, width=CW, color=None, size=8.4, align=0):
        return self.text(text.upper(), top, x=x, width=width, size=size, leading=size*1.3,
                         bold=True, color=color or self.quiet, align=align)

    def rule(self, top, x=M, width=CW, color=None):
        self.c.setStrokeColor(color or (CHARCOAL if self.dark else LINE))
        self.c.setLineWidth(.6)
        self.c.line(x,H-top,x+width,H-top)

    def panel(self, top, height, color=STONE, x=M, width=CW):
        self.c.setFillColor(color)
        self.c.rect(x,H-top-height,width,height,fill=1,stroke=0)

    def folio(self, number, top=67, x=335, width=115, size=80):
        self.text(number,top,x=x,width=width,size=size,leading=size*.95,
                  bold=True,color=MOSS,align=2)

    def session_nav(self, active, top=177, conditioning=True):
        labels=['A / PERFORMANCE','B / RESILIENCE',
                'C / CONDITIONING' if conditioning else 'SESSION NOTE']
        for i, label in enumerate(labels):
            x=M+i*143
            self.rule(top,x=x,width=133,color=INK if i==active else LINE)
            self.label(label,top+8,x=x,width=133,size=7.7,color=INK if i==active else MINERAL)

    def photo(self, path, top, height, x=M, width=CW, anchor=(.5,.5)):
        # Clip the original photograph; no altered source or bitmap grade is written.
        with Image.open(path) as image:
            iw, ih = image.size
        scale = max(width/iw, height/ih)
        dw, dh = iw*scale, ih*scale
        left = x-(dw-width)*anchor[0]
        bottom = H-top-height-(dh-height)*(1-anchor[1])
        self.c.saveState()
        clip = self.c.beginPath(); clip.rect(x,H-top-height,width,height)
        self.c.clipPath(clip,stroke=0,fill=0)
        self.c.drawImage(ImageReader(str(path)),left,bottom,dw,dh,mask='auto')
        self.c.restoreState()

    def logo(self, path, top, width=170):
        self.c.drawImage(str(path),M,H-top-width/3,width,width/3,mask='auto')

    def button(self, label, url, top, *, inverse=False, width=CW):
        bg, fg = (CREAM,INK) if inverse else (INK,CREAM)
        self.c.setFillColor(bg); self.c.rect(M,H-top-43,width,43,fill=1,stroke=0)
        self.text(label.upper(),top+14,x=M+14,width=width-28,size=9,leading=12,bold=True,color=fg)
        self.c.linkURL(url,(M,H-top-43,M+width,H-top),relative=0,thickness=0)

    def link(self, label, url, top, size=10.5):
        end = self.text(label,top,size=size,leading=15,bold=True)
        if url.startswith('#'):
            self.c.linkRect('',url[1:],(M,H-end,M+CW,H-top),relative=0,thickness=0)
        else:
            self.c.linkURL(url,(M,H-end,M+CW,H-top),relative=0,thickness=0)
        self.rule(end+4,width=min(CW,pdfmetrics.stringWidth(label,'CairnoxBold',size)))
        return end+4

    def table(self, rows, top, title):
        self.panel(top,28,INK)
        self.panel(top,28,MOSS,width=4)
        self.text(title.upper(),top+8,x=M+10,width=CW-20,size=9,leading=12,bold=True,color=CREAM)
        y=top+28
        self.c.setFillColor(STONE); self.c.rect(M,H-y-25,CW,25,fill=1,stroke=0)
        self.label('ID',y+7,x=M+8,width=30,size=8.5)
        self.label('Exercise',y+7,x=M+42,width=235,size=8.5)
        self.label('Week 1',y+7,x=M+287,width=125,size=8.5)
        y+=25
        for code,name,note,value in rows:
            # Height follows actual wrapping; every row remains on this page.
            ns=ParagraphStyle('measure',fontName='CairnoxBold',fontSize=15,leading=18)
            p=Paragraph(escape(name),ns);_,nh=p.wrap(235,H)
            qh=0
            if note:
                q=Paragraph(escape(note),ParagraphStyle('note',fontName='Cairnox',fontSize=12.5,leading=16))
                _,qh=q.wrap(235,H)
            val=Paragraph(escape(value).replace('\n','<br/>'),ParagraphStyle('v',fontName='Cairnox',fontSize=16,leading=19))
            _,vh=val.wrap(120,H)
            rh=max(47,nh+qh+(4 if note else 0)+18,vh+18)
            self.panel(y,rh,STONE,x=M+278,width=CW-278)
            self.rule(y)
            self.text(code,y+10,x=M+8,width=30,size=10.5,leading=13,bold=True,color=MOSS)
            bottom=self.text(name,y+9,x=M+42,width=235,size=15,leading=18,bold=True)
            if note:self.text(note,bottom+4,x=M+42,width=235,size=12.5,leading=16,color=MOSS)
            self.text(value,y+9,x=M+287,width=125,size=16,leading=19)
            y+=rh
        self.rule(y)
        assert y < 630,(self.page,title,y)
        return y

    def session_table(self, rows, top):
        """One-day table: only two information columns, never split a row."""
        self.panel(top, 24, INK)
        self.label('PERFORMANCE BLOCK',top+6,x=M+9,width=240,size=9,color=CREAM)
        self.label('SETS x REPS / HOLD',top+6,x=331,width=110,size=8,color=CREAM)
        y=top+24
        for code,name,note,value in rows:
            ns=ParagraphStyle('measure',fontName='CairnoxBold',fontSize=12.8,leading=15)
            _,nh=Paragraph(escape(name),ns).wrap(250,H)
            qh=13 if note else 0
            rh=max(30,nh+qh+(2 if note else 0)+12)
            self.panel(y,rh,STONE,x=324,width=126)
            self.rule(y)
            self.text(code,y+7,x=36,width=25,size=9.5,leading=12,bold=True,color=MOSS)
            end=self.text(name,y+6,x=65,width=250,size=12.8,leading=15,bold=True)
            if note:self.text(note,end+2,x=65,width=250,size=10.5,leading=13,color=MOSS)
            self.text(value,y+6,x=331,width=112,size=12.8,leading=15)
            y+=rh
        self.rule(y)
        return y
