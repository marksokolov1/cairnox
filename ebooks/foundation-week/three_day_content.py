"""Mat's three-day replacement programme, approved in conversation 6 Nov 2026.

This supersedes the original PDF sample. Do not change the eight-week source.
Rows are: identifier, exercise, instruction, prescription.
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
WARMUP = (
    'Warm-ups may differ depending on the individual. Before each session, complete '
    'a 5-10-minute warm-up incorporating general mobility and light-to-moderate activity. '
    'The goal is to feel fully prepared before beginning the Performance Block.'
)
DAYS = [
    dict(title='Upper body.', focus='Strength + off-feet conditioning', rows=[
        ('1A','Bench Press','3-second lower, pause, explode up','3 x 5'),
        ('1B','MB Chest Pass','','3 x 5'),
        ('2A','Bird Dog Row','','3 x 6 per side'),
        ('2B','Chin Up','If more than 8, add weight','3 x 5-8'),
        ('3A','1/2 Kneeling DB Press','','3 x 8 per side'),
        ('3B','Banded Facepull','','3 x 12'),
        ('4A','Stability Ball Stir the Pot','','2 x 8 each way'),
        ('4B','Deadbug','','2 x 8 per side'),
    ], field_title='Off-feet conditioning', field=[
        'Assault Bike, Ski-Erg or WATT Bike',
        '20s ON / 40s OFF - 3 sets of 5 intervals.',
        'High effort, not maximal. Recover stationary or with light turnover, depending on fitness. Between sets, rest 2 additional minutes after the final 40s OFF.',
    ]),
    dict(title='Lower body.', focus='Strength + linear speed development', rows=[
        ('1A','Trapbar Deadlift','','3 x 5'),
        ('1B','Banded Broad Jump','','3 x 3'),
        ('2A','DB Step Up','','3 x 6 per side'),
        ('2B','Single Leg Glute Bridge','','3 x 5 per side'),
        ('3A','Lateral Squat','','3 x 6 per side'),
        ('3B','Heel Elevated Split Squat Hold','','3 x 20s per side'),
        ('4A','Hanging Leg Raises','','2 x 10'),
        ('4B','Single Arm Farmers Carry','','2 x 15m per side'),
    ], field_title='Linear speed', field=[
        '10m acceleration x 5.',
        'Sprint ladder: 2 sets of 5 complete sequences.',
        'Each sequence: sprint 5m, backpedal 5m, sprint 10m.',
        'Recovery: walk back or 1 minute between reps; 3-5 minutes between sets.',
    ]),
    dict(title='Whole body.', focus='Power + lateral acceleration', rows=[
        ('1A','DB Drop Jump','','3 x 4'),
        ('1B','Med Ball Shot Put','','3 x 3 per side'),
        ('2A','DB Split Jerk','','3 x 4 per side'),
        ('2B','Hamstring Switches','','3 x 5 per side'),
        ('3A',"TRX Y's & T's",'','3 x 6 each way'),
        ('3B','Copenhagen Plank','','3 x 20s per side'),
        ('3C','Contralateral Plank','','3 x 8 each way'),
    ], field_title='Lateral speed', field=[
        'Shuffle 5m into a 10m sprint: 3 facing each way.',
        '5-10-5 shuttle (yards): 5 reps.',
        'Recovery: walk back or 1 minute between reps; 3-5 minutes between sets.',
    ]),
]
INTRO = [
    'Cricket can give you time to wait. It does not always give you time to prepare.',
    'The next ball can ask for a sharp acceleration, a hard throw, force through a shot or another demanding effort late in the day. Physical preparation has to make sense in that world.',
    'This guide opens a window into the CAIRNOX approach: three early-off-season sessions connecting upper-body strength, lower-body strength and whole-body power with conditioning and speed development.',
    'Use the week to understand the structure, ask better questions and record the work. A single week is an introduction to the process. Development continues beyond these pages.',
]
PRINCIPLES = [
    ('Train the quality', 'Start with what the work is intended to develop. Exercise variety is useful when it serves that purpose; it is not an objective of its own.'),
    ('Respect the sport', 'The gym shares the week with batting, bowling, fielding, practice, matches and travel. A programme has to sit inside that wider picture.'),
    ('Build the system', 'A clear session is one layer. Repeated work, recovery and adjustment connect the layers. That is where the longer development process begins.'),
]
CONTENTS = [
    ('03','The demands behind the work','opening'),
    ('04','Meet Mathew Skyner','mathew'),
    ('05','Three principles to take with you','principles'),
    ('06','Your week at a glance','week'),
    ('07','Read the plan','read'),
    ('08','Day 1 / Upper body + conditioning','day1'),
    ('09','Day 2 / Lower body + linear speed','day2'),
    ('10','Day 3 / Whole body + lateral speed','day3'),
    ('11','Record the work','log'),
    ('12','Reflect on the week','reflect'),
    ('13','Your next layer','contact'),
]
