#!/usr/bin/env python3
"""Build the current sports-editorial edition; the previous PDF is preserved."""
from three_day_content import ROOT, DAYS, WARMUP, INTRO, PRINCIPLES, CONTENTS
from design import Publication, M, CW, W, H, CREAM, INK, STONE, MINERAL, MOSS

OUTPUT=ROOT/'output/pdf/cairnox-foundation-week-three-day.pdf'
IMAGES=ROOT/'public/media/images'

def page_intro(b,label,title,dark=False,key=None,size=39):
    b.start(label,key or label.lower().replace(' ','-'),dark)
    b.label(label,63,color=STONE if dark else MOSS)
    return b.title(title,88,size=size)

def cover(b):
    b.start('The Foundation Week','cover',chrome=False)
    b.logo(ROOT/'public/brand/cairnox-logo.png',34,157)
    b.label('A CAIRNOX TRAINING GUIDE',43,x=300,width=150,align=2,size=7.5,color=MOSS)
    b.label('EARLY OFF-SEASON / 3 DAYS',60,x=282,width=168,align=2,size=8,color=MOSS)
    b.photo(IMAGES/'mathew-skyner-usa-cricket-resisted-sprint-coaching.jpg',102,300,x=0,width=W,anchor=(.5,.64))
    b.label('CRICKET PHYSICAL PREPARATION',423,color=MOSS,size=9)
    b.title('The Foundation\nWeek.',449,size=54)
    b.text('One sample week. Three purposeful sessions.',567,size=14,leading=19)
    b.label('BY MATHEW SKYNER',606,color=MOSS,size=9)
    b.finish()

def contents(b):
    page_intro(b,'Start here','Inside the week.',key='contents',size=43)
    y=151
    for title,items in [('01 / UNDERSTAND',CONTENTS[:5]),('02 / TRAIN',CONTENTS[5:8]),('03 / REFLECT',CONTENTS[8:])]:
        b.label(title,y,color=MOSS,size=9)
        y+=23
        for n,label,key in items:
            b.rule(y)
            b.text(label,y+6,width=365,size=11.6,leading=15,bold=True)
            b.text(n,y+5,x=412,width=38,size=14,leading=17,bold=True,color=MOSS,align=2)
            b.c.linkRect('',key,(M,H-y-26,W-M,H-y),relative=0,thickness=0)
            y+=26
        y+=14
    b.panel(560,70,STONE)
    b.label('YOUR STARTING POINT',570,x=43,width=394,color=MOSS,size=8.5)
    b.text('An example of early-off-season programming. Some training experience is recommended. Read the guidance before beginning and adapt the weekly arrangement to your cricket context with your coach.',586,x=43,width=394,size=10.8,leading=14)
    b.finish()

def opening(b):
    page_intro(b,'The demands behind the work','Train for the moment\nthe game asks more.',key='opening',size=39)
    b.photo(IMAGES/'mathew-skyner-usa-cricket-field-coaching.jpg',181,183,anchor=(.5,.32))
    y=b.text(INTRO[0],383,size=17,leading=22,bold=True)+15
    for p in INTRO[1:]:
        y=b.text(p,y,size=12.5,leading=17)+11
    b.finish()

def mathew(b):
    page_intro(b,'The coach behind CAIRNOX','The principles travel.\nThe demands change.',key='mathew',size=38)
    b.photo(IMAGES/'mathew-skyner-usa-cricket-performance-coach-portrait.jpg',187,277,width=264,anchor=(.5,.53))
    b.rule(187,x=314,width=136)
    b.label('THE PRACTITIONER',201,x=314,width=136,color=MOSS,size=8.4)
    b.text('Mathew\nSkyner',227,x=314,width=136,size=27,leading=28,bold=True)
    b.text('Founder &\nhigh-performance\ncoach',299,x=314,width=136,size=12,leading=17)
    b.rule(375,x=314,width=136)
    b.label('UNDERSTAND\nTHE PLAYER.\n\nUNDERSTAND\nTHE SPORT.',391,x=314,width=136,color=MOSS,size=9)
    b.text("Mathew's experience spans USA Cricket, professional rugby, PSA Squash, British Cycling, professional soccer and NCAA programmes.",487,size=13,leading=18)
    b.text('CAIRNOX brings that perspective to cricket: understand the player, understand the sport, then give the preparation a clear structure.',555,size=13,leading=18)
    b.link('Meet Mathew / cairnox.com/about','https://cairnox.com/about/',608)
    b.finish()

def principles(b):
    b.start('The CAIRNOX approach','principles',dark=True)
    b.label('THE CAIRNOX APPROACH',63,color=STONE)
    b.text('Every exercise needs a job.',88,size=20,leading=24,bold=True)
    b.title('Train movements,\nnot muscles.',141,size=47)
    y=265
    for i,(title,copy) in enumerate(PRINCIPLES,1):
        b.rule(y,color=MINERAL)
        b.label(f'0{i}',y+16,width=30,color=STONE,size=10)
        b.text(title,y+13,x=78,width=372,size=22,leading=26,bold=True)
        end=b.text(copy,y+51,x=78,width=365,size=12.5,leading=18,color=STONE)
        y=end+18
    b.finish()

def week(b):
    b.start('Your week at a glance','week')
    b.label('YOUR WEEK AT A GLANCE',63,color=MOSS)
    b.title('Three sessions.\nOne connected\nweek.',88,size=35,width=290)
    b.folio('03',92,size=80)
    b.text('An early-off-season example. Some training experience is recommended. The session numbers are not consecutive calendar days.',219,size=13,leading=18)
    y=287
    for i,d in enumerate(DAYS):
        b.rule(y)
        b.text(f'{i+1:02d}',y+11,width=62,size=30,leading=32,bold=True,color=MOSS)
        b.text(d['title'].rstrip('.'),y+9,x=112,width=338,size=22,leading=26,bold=True)
        b.text(d['focus'],y+39,x=112,width=338,size=11.8,leading=16,color=MINERAL)
        b.c.linkRect('',f'day{i+1}',(M,H-y-67,W-M,H-y),relative=0,thickness=0)
        y+=67
    b.rule(y)
    b.label("MAT'S EXAMPLE RHYTHM / NOT A FIXED CALENDAR",501,color=MOSS,size=8)
    rhythm=['Training + gym','Light skills','Training / gym / speed','Rest or light skills','Power + speed','Match']
    for i,label in enumerate(rhythm):
        x=30+(i%3)*143;top=522+(i//3)*35
        b.rule(top,x=x,width=133)
        b.text(label,top+6,x=x,width=133,size=10.5,leading=13,bold=True)
    b.text('Group high-intensity cricket and training on the same day. Use non-gym days for rest or low-level skills; agree the spacing around your own schedule.',598,size=11,leading=15)
    b.finish()

def read_plan(b):
    page_intro(b,'Read the plan','Understand the brief.\nThen begin.',key='read',size=39)
    b.text('Read each complete session before starting. MB means medicine ball; DB means dumbbell. Each day includes a warm-up note, gym work and conditioning or speed.',185,size=12.5,leading=17)
    sections=[
        ('Strength: leave 1-2 reps in reserve','Choose a load you could lift for 1-2 more reps, but not more than that. This is reps in reserve (RIR), used primarily for the strength work. No percentage loads are prescribed.'),
        ('Power: velocity is the goal','Perform throws, jumps and jerks with maximal intensity and light-to-moderate weight. The priority is velocity, not applying the strength-work RIR target.'),
        ('Follow the numbered groups','1A and 1B are paired as a superset. Day 3 ends with the three-exercise group 3A / 3B / 3C. Rest 30-45 seconds between exercises and 1-2 minutes between sets.'),
        ('Fit the speed work around the day','Speed can be separate from the gym, attached to cricket training or done together; ideally on the same day. Walk back or rest 1 minute between reps; rest 3-5 minutes between sets.'),
    ]
    y=245
    for i,(title,copy) in enumerate(sections,1):
        b.rule(y)
        b.label(f'0{i}',y+12,width=30,color=MOSS,size=9.5)
        b.text(title,y+10,x=76,width=374,size=15,leading=19,bold=True)
        end=b.text(copy,y+36,x=76,width=374,size=11.5,leading=16)
        y=end+15
    b.finish()

def day(b,index):
    d=DAYS[index];n=index+1
    b.start(f'Day {n} / {d["focus"]}',f'day{n}')
    b.label('EARLY OFF-SEASON / SAMPLE WEEK',58,width=300,color=MOSS,size=8)
    b.title(d['title'],78,size=35,width=300)
    b.folio(f'{n:02d}',64,size=55)
    b.label(d['focus'],119,color=MOSS,size=9)
    b.rule(144)
    b.label('BEFORE YOU BEGIN / 5-10 MINUTES',153,color=MOSS,size=8)
    b.text(WARMUP,169,size=11.5,leading=15)
    end=b.session_table(d['rows'],239)
    b.label(d['field_title'],end+10,color=MOSS,size=9)
    y=end+27
    for i,line in enumerate(d['field']):
        y=b.text(line,y,size=11.5,leading=15,bold=(i==0))+3
    assert y<=632,(n,y)
    b.finish()

def log(b):
    page_intro(b,'Your training record','Record the work.\nNotice the response.',key='log',size=39)
    b.text('A useful note is one you can return to. Record what you completed and anything that needs a conversation with your coach. A number on its own cannot explain the whole week.',185,size=13,leading=18)
    y=271
    for n in range(1,4):
        b.rule(y)
        b.text(f'{n:02d}',y+12,width=55,size=25,leading=29,bold=True,color=MOSS)
        b.label('DATE / COMPLETED WORK / LOADS / OBSERVATIONS',y+10,x=100,width=350,size=7.5)
        b.rule(y+43,x=100,width=350)
        b.rule(y+66,x=100,width=350)
        y+=105
    b.text('Keep a fuller exercise-by-exercise record in your own training log.',616,size=10,leading=13,color=MINERAL)
    b.finish()

def reflect(b):
    page_intro(b,'The next layer','What did this\nweek tell you?',key='reflect',size=43)
    b.text('Finishing the sessions gives you a record, not a verdict on your potential. The useful next step is understanding how the work fitted the player and the week.',191,size=13,leading=18)
    questions=[('The purpose','Could you explain what each block was there to do?'),('The reality','What changed when cricket, travel or available time entered the picture?'),('The next decision','Which question would you want a coach to help you answer before progressing?')]
    y=276
    for i,(title,q) in enumerate(questions,1):
        b.rule(y)
        b.text(f'0{i}',y+13,width=38,size=23,leading=27,bold=True,color=MOSS)
        b.label(title,y+12,x=89,width=361,color=MOSS)
        b.text(q,y+35,x=89,width=361,size=15,leading=20,bold=True)
        y+=94
    b.label('KEEP EXPLORING',570,color=MOSS)
    b.link('Game-day warm-ups / CAIRNOX Insights','https://cairnox.com/insights/game-day-warm-ups/',590,size=10)
    b.link('Speed in cricket / CAIRNOX Insights','https://cairnox.com/insights/speed-training-in-cricket/',611,size=10)
    b.finish()

def closing(b):
    page_intro(b,'Work with Mathew','Your next\nlayer.',dark=True,key='contact',size=56)
    b.photo(IMAGES/'mathew-skyner-usa-cricket-performance-coach-portrait.jpg',226,178,width=130,anchor=(.5,.52))
    b.text('A sample shows you the structure. Coaching connects it to the player, the schedule and what needs to happen next.',231,x=183,width=267,size=16,leading=22,color=STONE)
    b.label('MATHEW SKYNER',355,x=183,width=267,color=CREAM,size=9)
    b.text('mathew@cairnox.com',377,x=183,width=267,size=12,leading=16,bold=True,color=CREAM)
    b.c.linkURL('mailto:mathew@cairnox.com',(183,H-393,450,H-377),relative=0,thickness=0)
    b.rule(425,color=MINERAL)
    b.label('ELEVATE / INDIVIDUAL COACHING',441,color=STONE,size=9)
    b.text('Build around you.',463,size=28,leading=32,bold=True)
    b.text('For players seeking personalised cricket physical preparation, direct support and training that adapts over time.',505,size=13,leading=18,color=STONE)
    b.button('Apply for ELEVATE','https://cairnox.com/contact/elevate/',556,inverse=True)
    b.link('Coaches & organisations: discuss an APEX project','https://cairnox.com/contact/apex/',615,size=11)
    b.finish()

def build():
    b=Publication(OUTPUT,edition='FOUNDATION WEEK / 3 DAYS')
    cover(b);contents(b);opening(b);mathew(b);principles(b);week(b);read_plan(b)
    for i in range(3):day(b,i)
    log(b);reflect(b);closing(b)
    assert b.page==13,b.page
    b.save();print(OUTPUT)

if __name__=='__main__':build()
