"""Validate against actual original PDF cells, then the exported PDF text."""
import csv
import json
import re
import sys
from pathlib import Path
import pdfplumber
from pypdf import PdfReader
from content import ROOT, DAYS

PDF=ROOT/('output/pdf/cairnox-foundation-week-editorial.pdf' if '--editorial' in sys.argv
          else 'output/pdf/cairnox-foundation-week.pdf')
SOURCE=ROOT/'ebook/Off-Season Training Plan (8 Weeks) (1).pdf'
if '--clean' in sys.argv:
    PDF=ROOT/'output/pdf/cairnox-foundation-week-clean.pdf'
if '--premium' in sys.argv:
    PDF=ROOT/'output/pdf/cairnox-foundation-week-premium.pdf'
OUT=PDF.with_name(PDF.stem+'-validation.csv')

def normal(text):
    return re.sub(r'[^a-z0-9%]', '', str(text).lower())

def run():
    matrix=[]
    boxes=json.loads(PDF.with_suffix('.layout.json').read_text())
    def crop_text(page,box):
        return page.crop((box['x']-1,box['top']-1,box['x']+box['width']+1,
                          box['top']+box['height']+1)).extract_text() or ''
    with pdfplumber.open(SOURCE) as original, pdfplumber.open(PDF) as exported:
        for d,day in enumerate(DAYS):
            source_rows=original.pages[6+d].extract_tables()[0]
            for block in ['performance','resilience','conditioning']:
                target=7+d*2+(block!='performance')
                for code,name,note,value in day[block]:
                    if block=='conditioning':
                        row=source_rows[-1]
                        original_name=row[0]
                        original_value=re.sub(r'^Week\s+1\s*','',row[2])
                    else:
                        row=next(r for r in source_rows if r[0]==code)
                        original_name,original_value=row[1],row[2]
                    expected_name=name+note
                    name_pass=normal(original_name)==normal(expected_name)
                    value_pass=normal(original_value)==normal(value)
                    onpage=[b for b in boxes if b['page']==target+1]
                    namebox=next(b for b in onpage if b['text']==name)
                    if block=='conditioning':
                        valuebox=next(b for b in onpage if b['text']==value)
                    else:
                        valuebox=next(b for b in onpage if b['text']==value and b['x']==317 and abs(b['top']-namebox['top'])<1)
                    actual_name=crop_text(exported.pages[target],namebox)
                    actual_value=crop_text(exported.pages[target],valuebox)
                    rendered=normal(actual_name)==normal(name) and normal(actual_value)==normal(value)
                    if note:
                        notebox=next(b for b in onpage if b['text']==note)
                        rendered=rendered and normal(crop_text(exported.pages[target],notebox))==normal(note)
                    status='PASS' if name_pass and value_pass and rendered else 'MISMATCH'
                    matrix.append(dict(day=d+1,block=block,id=code,source_page=7+d,
                                       ebook_page=target+1,source_exercise=original_name,
                                       ebook_exercise=expected_name,source_week1=original_value,
                                       ebook_week1=actual_value,status=status))
        for i,p in enumerate(exported.pages):
            assert (p.width,p.height)==(480,680)
            assert p.extract_text().strip(),f'Blank page {i+1}'
            for ch in p.chars:
                assert 0 <= ch['x0'] < ch['x1'] <= 480.5,(i+1,ch)
                assert 0 <= ch['top'] < ch['bottom'] <= 680.5,(i+1,ch)
    assert len(matrix)==34,len(matrix)
    assert all(x['status']=='PASS' for x in matrix),[x for x in matrix if x['status']!='PASS']
    for i,a in enumerate(boxes):
        if any(x in sys.argv for x in ['--editorial','--clean','--premium']) and 40 <= a['top'] < 642:
            assert a['top']+a['height'] <= 638,('Footer safe area',a)
        for z in boxes[i+1:]:
            if a['page']!=z['page']:continue
            overlap_x=min(a['x']+a['width'],z['x']+z['width'])-max(a['x'],z['x'])
            overlap_y=min(a['top']+a['height'],z['top']+z['height'])-max(a['top'],z['top'])
            assert not(overlap_x>1 and overlap_y>1),(a,z)
    reader=PdfReader(PDF)
    assert len(reader.pages)==19
    for p in reader.pages:
        assert str(p.extract_text()).count('REVIEW EDITION') == 1
    pyramid=normal(reader.pages[15].extract_text())
    for pair in ['10 Hard 50 Light','20 Hard 40 Light','30 Hard 30 Light',
                 '40 Hard 20 Light','50 Hard 10 Light','Go back down']:
        assert normal(pair) in pyramid,pair
    page_refs={p.indirect_reference.idnum:i for i,p in enumerate(reader.pages)}
    internal_links=0
    links=[]
    for p in reader.pages:
        for ref in p.get('/Annots',[]):
            annotation=ref.get_object()
            if annotation.get('/A',{}).get('/URI'):links.append(str(annotation['/A']['/URI']))
            if annotation.get('/Dest'):
                assert annotation['/Dest'][0].idnum in page_refs
                internal_links+=1
    assert internal_links==(35 if '--premium' in sys.argv else 16),internal_links
    for url in ['https://cairnox.com/contact/elevate/','https://cairnox.com/contact/apex/',
                'mailto:mathew@cairnox.com']:
        assert url in links,url
    # The fonts that actually supply characters are embedded TrueType subsets.
    used_fonts=set()
    with pdfplumber.open(PDF) as f:
        for p in f.pages:used_fonts.update(c['fontname'] for c in p.chars)
    embedded=set()
    for p in reader.pages:
        for ref in p['/Resources']['/Font'].values():
            font=ref.get_object()
            descriptor=font.get('/FontDescriptor')
            if descriptor and descriptor.get_object().get('/FontFile2'):
                embedded.add(str(font['/BaseFont']).lstrip('/'))
    assert used_fonts <= embedded,(used_fonts,embedded)
    with OUT.open('w',newline='') as f:
        writer=csv.DictWriter(f,fieldnames=matrix[0].keys());writer.writeheader();writer.writerows(matrix)
    summary=dict(pages=19,source_rows_checked=34,source_values='PASS',exported_cells='PASS',
                 bounds='PASS',overlapping_text_boxes=0,fonts_embedded=sorted(used_fonts),
                 internal_links=internal_links,pyramid_fidelity='PASS',external_links=links,
                 release_status='REVIEW - coaching clarifications outstanding')
    PDF.with_suffix('.validation.json').write_text(json.dumps(summary,indent=2))
    print(json.dumps(summary,indent=2))

if __name__=='__main__':run()
