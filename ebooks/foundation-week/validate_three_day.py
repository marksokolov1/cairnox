"""Independent approved-message fixture vs data vs actual PDF text cells."""
import csv
import json
import re
import pdfplumber
from pypdf import PdfReader
from three_day_content import ROOT, DAYS, WARMUP, CONTENTS

PDF=ROOT/'output/pdf/cairnox-foundation-week-three-day.pdf'
# Independent transcription of Mat's replacement and explicit clarifications.
# Not populated by importing the rendering data. See MAT_APPROVALS.md.
EXPECTED=[
 [('1A','Bench Press','3-second lower, pause, explode up','3 x 5'),
  ('1B','MB Chest Pass','','3 x 5'),('2A','Bird Dog Row','','3 x 6 per side'),
  ('2B','Chin Up','If more than 8, add weight','3 x 5-8'),
  ('3A','1/2 Kneeling DB Press','','3 x 8 per side'),('3B','Banded Facepull','','3 x 12'),
  ('4A','Stability Ball Stir the Pot','','2 x 8 each way'),('4B','Deadbug','','2 x 8 per side')],
 [('1A','Trapbar Deadlift','','3 x 5'),('1B','Banded Broad Jump','','3 x 3'),
  ('2A','DB Step Up','','3 x 6 per side'),('2B','Single Leg Glute Bridge','','3 x 5 per side'),
  ('3A','Lateral Squat','','3 x 6 per side'),('3B','Heel Elevated Split Squat Hold','','3 x 20s per side'),
  ('4A','Hanging Leg Raises','','2 x 10'),('4B','Single Arm Farmers Carry','','2 x 15m per side')],
 [('1A','DB Drop Jump','','3 x 4'),('1B','Med Ball Shot Put','','3 x 3 per side'),
  ('2A','DB Split Jerk','','3 x 4 per side'),('2B','Hamstring Switches','','3 x 5 per side'),
  ('3A',"TRX Y's & T's",'','3 x 6 each way'),('3B','Copenhagen Plank','','3 x 20s per side'),
  ('3C','Contralateral Plank','','3 x 8 each way')]
]
FIELD=[
 ['Assault Bike, Ski-Erg or WATT Bike','20s ON / 40s OFF - 3 sets of 5 intervals.',
  'High effort, not maximal. Recover stationary or with light turnover, depending on fitness. Between sets, rest 2 additional minutes after the final 40s OFF.'],
 ['10m acceleration x 5.','Sprint ladder: 2 sets of 5 complete sequences.',
  'Each sequence: sprint 5m, backpedal 5m, sprint 10m.',
  'Recovery: walk back or 1 minute between reps; 3-5 minutes between sets.'],
 ['Shuffle 5m into a 10m sprint: 3 facing each way.','5-10-5 shuttle (yards): 5 reps.',
  'Recovery: walk back or 1 minute between reps; 3-5 minutes between sets.']
]
def norm(t):return re.sub(r'\s+','',t).lower()
def run():
    boxes=json.loads(PDF.with_suffix('.layout.json').read_text())
    matrix=[]
    with pdfplumber.open(PDF) as pdf:
        assert len(pdf.pages)==13
        for day,expected in enumerate(EXPECTED):
            assert DAYS[day]['rows']==expected,(day,'content mismatch')
            assert DAYS[day]['field']==FIELD[day]
            page=pdf.pages[7+day]
            onpage=[b for b in boxes if b['page']==8+day]
            def check(text,x=None,top=None):
                candidates=[b for b in onpage if b['text']==text and (x is None or b['x']==x) and (top is None or abs(b['top']-top)<1)]
                assert len(candidates)==1,(day,text,candidates)
                b=candidates[0]
                actual=page.crop((b['x']-.2,b['top']-.2,b['x']+b['width']+.2,b['top']+b['height']+.2)).extract_text() or ''
                assert norm(actual)==norm(text),(day,text,actual)
                return b
            for code,name,note,value in expected:
                b=check(name,65)
                check(code,36,b['top']+1)
                check(value,331,b['top'])
                if note:check(note,65)
                matrix.append(dict(day=day+1,page=8+day,id=code,exercise=name,note=note,prescription=value,status='PASS'))
            check(WARMUP)
            for line in FIELD[day]:check(line)
        for i,p in enumerate(pdf.pages):
            assert (p.width,p.height)==(480,680)
            assert p.extract_text().strip()
            for ch in p.chars:
                assert 0<=ch['x0']<ch['x1']<=480.5 and 0<=ch['top']<ch['bottom']<=680.5,(i,ch)
        used_fonts={ch['fontname'] for p in pdf.pages for ch in p.chars}
    for i,a in enumerate(boxes):
        if 40<=a['top']<642:assert a['top']+a['height']<=638,a
        for z in boxes[i+1:]:
            if a['page']!=z['page']:continue
            ox=min(a['x']+a['width'],z['x']+z['width'])-max(a['x'],z['x'])
            oy=min(a['top']+a['height'],z['top']+z['height'])-max(a['top'],z['top'])
            assert not(ox>1 and oy>1),(a,z)
    reader=PdfReader(PDF)
    text='\n'.join(p.extract_text() for p in reader.pages)
    for old in ['Pyramid','DAY 4','Four purposeful','ES / EL','70%','75%','needs approval','REVIEW EDITION']:
        assert old not in text,old
    for expected in ['1-2 reps in reserve','30-45 seconds','1-2 minutes','maximal intensity','light-to-moderate weight']:
        assert norm(expected) in norm(text),expected
    refs={p.indirect_reference.idnum:i+1 for i,p in enumerate(reader.pages)}
    destinations=[];links=[];embedded=set()
    for p in reader.pages:
        for ref in p.get('/Annots',[]):
            a=ref.get_object()
            if a.get('/Dest'):
                assert a['/Dest'][0].idnum in refs
                destinations.append(refs[a['/Dest'][0].idnum])
            if a.get('/A',{}).get('/URI'):links.append(str(a['/A']['/URI']))
        for ref in p['/Resources']['/Font'].values():
            f=ref.get_object();fd=f.get('/FontDescriptor')
            if fd and fd.get_object().get('/FontFile2'):embedded.add(str(f['/BaseFont']).lstrip('/'))
    assert len(destinations)==27,len(destinations)
    # Contents links follow footer-to-contents on page 2; verify actual folios.
    actual=[refs[a.get_object()['/Dest'][0].idnum] for a in reader.pages[1]['/Annots'] if a.get_object().get('/Dest')]
    assert actual[1:]==[int(n) for n,_,_ in CONTENTS],actual
    assert used_fonts<=embedded
    for url in ['https://cairnox.com/contact/elevate/','https://cairnox.com/contact/apex/','mailto:mathew@cairnox.com']:
        assert url in links,url
    with PDF.with_name(PDF.stem+'-validation.csv').open('w',newline='') as f:
        writer=csv.DictWriter(f,fieldnames=matrix[0].keys());writer.writeheader();writer.writerows(matrix)
    summary=dict(pages=13,dimensions_pt=[480,680],source='Mat: three-day replacement + relayed clarifications',
        exercise_rows=23,exercise_values='PASS',conditioning_and_speed='PASS',warmups='PASS',
        legacy_copy_removal='PASS',bounds='PASS',text_box_overlaps=0,fonts_embedded=sorted(used_fonts),
        internal_links=len(destinations),contents_folios='PASS',external_links=links,
        scope='Content/layout validation; no clinical suitability certification or live form delivery test')
    PDF.with_suffix('.validation.json').write_text(json.dumps(summary,indent=2));print(json.dumps(summary,indent=2))
if __name__=='__main__':run()
