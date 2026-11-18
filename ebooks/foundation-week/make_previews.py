"""Render review assets from the vector PDF, never use them as PDF source."""
import subprocess
import sys
from pathlib import Path
from PIL import Image, ImageDraw
from pypdf import PdfReader
from content import ROOT

editorial='--editorial' in sys.argv
edition='foundation-week-editorial' if editorial else 'foundation-week'
if '--clean' in sys.argv:edition='foundation-week-clean'
if '--premium' in sys.argv:edition='foundation-week-premium'
if '--three-day' in sys.argv:edition='foundation-week-three-day'
TEMP=ROOT/'tmp/pdfs'/edition
OUT=ROOT/'output/pdf'/(edition+'-previews')
TEMP.mkdir(parents=True,exist_ok=True)
OUT.mkdir(parents=True,exist_ok=True)
subprocess.run(['pdftoppm','-scale-to','1000','-png',
                str(ROOT/'output/pdf'/('cairnox-'+edition+'.pdf')),str(TEMP/'page')],check=True)
paths=sorted(TEMP.glob('page-*.png'))
count=len(PdfReader(ROOT/'output/pdf'/('cairnox-'+edition+'.pdf')).pages)
assert len(paths)==count
thumb_w,thumb_h=280,397
sheet=Image.new('RGB',(5*(thumb_w+20)+20,((count+4)//5)*(thumb_h+40)+20),'#dedbd2')
draw=ImageDraw.Draw(sheet)
for i,p in enumerate(paths):
    im=Image.open(p).convert('RGB');im.thumbnail((thumb_w,thumb_h))
    x=20+(i%5)*(thumb_w+20);y=20+(i//5)*(thumb_h+40)
    sheet.paste(im,(x,y));draw.text((x,y+thumb_h+7),f'{i+1:02d}',fill='#111310')
sheet.save(OUT/'review-sheet.png')
for n in range(1,count+1):
    image=Image.open(paths[n-1]).convert('RGB')
    if n==1:image.save(OUT/'cover.png')
    image.resize((390,round(image.height*390/image.width)),Image.Resampling.LANCZOS).save(OUT/f'mobile-{n:02d}.png')
print(OUT)
