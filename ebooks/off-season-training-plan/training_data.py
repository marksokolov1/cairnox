"""Structured source data for the CAIRNOX Off-Season Training Plan.

Training prescriptions are transcribed from the approved 16-page source PDF.
Presentation spacing is normalized, but exercise selection and Week 1-4 values
are intentionally preserved. See QA_REPORT.md for source ambiguities.
"""

PLAN = {
    "title": "OFF-SEASON TRAINING PLAN",
    "subtitle": "8 WEEK BLOCK",
    "phases": [
        {
            "number": "01",
            "name": "FOUNDATIONAL STRENGTH",
            "short_name": "FOUNDATION",
            "frequency": "4 DAYS PER WEEK",
            "summary": (
                "Development of fundamental concepts ie. Base Strength, injury "
                "prevention and Acceleration Focus."
            ),
            "days": [
                {
                    "day": 1,
                    "title": "Upper Body w/ Off-Feet Conditioning",
                    "performance": [
                        ("1A", "Barbell Bench Press", "", ["4 x 8\n70%", "4 x 6\n75%", "5 x 6\n75%", "5 x 5\n80%"]),
                        ("1B", "Med Ball Chest Pass", "", ["4 x 5", "4 x 5", "4 x 5", "4 x 5"]),
                        ("2A", "Weighted Chin Up", "", ["4 x 5", "4 x 6", "4 x 5", "4 x 8"]),
                    ],
                    "resilience": [
                        ("3A", "Landmine Press", "", ["3 x 6 ES", "3 x 6 ES", "3 x 8 ES", "3 x 8 ES"]),
                        ("3B", "Bird Dog Row", "", ["3 x 8", "3 x 6", "3 x 8", "3 x 6"]),
                        ("4A", "DB Shrugs", "", ["4 x 10", "4 x 8", "4 x 10", "4 x 8"]),
                        ("4B", "Banded Rotations / Chops", "", ["3 x 10", "3 x 10", "3 x 10", "3 x 10"]),
                        ("4C", "Stability Ball Rotations", "", ["3 x 6 ES", "3 x 6 ES", "3 x 8 ES", "3 x 8 ES"]),
                    ],
                    "conditioning": [
                        (
                            "C",
                            "Assault Bike, Ski-Erg or WATT Bike",
                            "2 mins rest between sets",
                            [
                                "20 ON : 40 OFF\n3 x 5",
                                "30 ON : 30 OFF\n3 x 5",
                                "20 ON : 40 OFF\n3 x 6",
                                "20 ON : 40 OFF\n3 x 6",
                            ],
                        )
                    ],
                },
                {
                    "day": 2,
                    "title": "Lower Body w/ Speed & Acceleration",
                    "performance": [
                        ("1A", "TB Deadlift", "", ["4 x 5\n75%", "4 x 3\n85%", "5 x 5\n80%", "5 x 3\n88%"]),
                        ("2A", "DB Split Squat", "", ["4 x 8 EL", "4 x 6 EL", "4 x 8 EL", "4 x 6 EL"]),
                        ("2B", "Coppenhagen's", "", ["4 x 10s ES", "4 x 15s ES", "4 x 20s ES", "4 x 20s ES"]),
                    ],
                    "resilience": [
                        ("3A", "GHD Prone ISO", "Engage glutes and hamstrings", ["3 x 20s", "3 x 25s", "3 x 30s", "3 x 30s"]),
                        ("3B", "Hip Flexions", "Banded", ["3 x 6 ES", "3 x 8 ES", "3 x 6 ES", "3 x 8 ES"]),
                        ("4A", "Calf Raise Machine", "Slow & controlled", ["3 x 12", "3 x 15", "3 x 12", "3 x 15"]),
                        ("4B", "Stability Ball Stir the Pot", "", ["3 x 10 ES", "3 x 10 ES", "3 x 10 ES", "3 x 10 ES"]),
                    ],
                    "conditioning": [
                        (
                            "C",
                            "Speed & Acceleration",
                            "Walk back as recovery; max effort on each rep",
                            [
                                "10m Linear Sprint\n3 x 5",
                                "Sprint 5m, back pedal 5m and sprint 10m\n3 x 5",
                                "20m Linear Sprint\n3 x 5",
                                "Sprint 5m, back pedal 5m and sprint 20m\n3 x 5",
                            ],
                        )
                    ],
                },
                {
                    "day": 3,
                    "title": "Upper Body w/ Off-Feet Conditioning",
                    "performance": [
                        ("1A", "Overhead Press", "", ["4 x 5", "4 x 4", "5 x 4", "5 x 5"]),
                        ("1B", "Med Ball Hip to Hip Toss", "", ["4 x 4 ES", "4 x 4 ES", "4 x 4 ES", "4 x 4 ES"]),
                        ("2A", "Pendlay Row", "", ["4 x 5", "4 x 6", "4 x 5", "4 x 6"]),
                    ],
                    "resilience": [
                        ("3A", "Cuban Press", "", ["3 x 6 ES", "3 x 6 ES", "3 x 8 ES", "3 x 8 ES"]),
                        ("3B", "SA DB Bench Press", "On stability ball", ["3 x 8 ES", "3 x 6 ES", "3 x 8 ES", "3 x 6 ES"]),
                        ("4A", "Single Arm Pulldown", "Cable or banded", ["3 x 8 ES", "3 x 6 ES", "3 x 8 ES", "3 x 6 ES"]),
                        ("4B", "SA Farmers Carry", "", ["10m each", "10m each", "15m each", "15m each"]),
                        ("4C", "Deadbugs Banded", "", ["3 x 10", "3 x 10", "3 x 12", "3 x 12"]),
                    ],
                    "conditioning": [
                        (
                            "C",
                            "Any piece of equipment",
                            "Explanation is in appendix below.",
                            [
                                "The Pyramid\nx2 sets\nUp and down is 1 set",
                                "Tabata\n3 rounds",
                                "Volatile",
                                "Tabata\n4 rounds",
                            ],
                        )
                    ],
                },
                {
                    "day": 4,
                    "title": "Lower Body Strength",
                    "performance": [
                        ("1A", "Squat Variation", "Front squat or back squat", ["4 x 5\n75%", "4 x 3\n85%", "5 x 5\n80%", "5 x 3\n88%"]),
                        ("2A", "Single Leg RDL", "", ["4 x 6 ES", "4 x 6 ES", "4 x 8 ES", "4 x 8 ES"]),
                        ("2B", "Drop Jump", "Small drop to big box", ["3 x 4", "3 x 4", "3 x 4", "3 x 4"]),
                    ],
                    "resilience": [
                        ("3A", "DB Step Up", "Powerful and explosive drive", ["3 x 6 ES", "3 x 6 ES", "3 x 8 ES", "3 x 8 ES"]),
                        ("3B", "Knee Bent SL Calf ISO Hold", "Hold heavy DB or KB", ["3 x 20 sec ES", "3 x 20 sec ES", "3 x 20 sec ES", "3 x 20 sec ES"]),
                        ("4A", "SL Hip Thrust", "Banded", ["3 x 8 ES", "3 x 6 ES", "3 x 8 ES", "3 x 6 ES"]),
                        ("4B", "Side Plank w/ Leg Raised", "", ["3 x 20 sec", "3 x 20 sec", "3 x 20 sec", "3 x 20 sec"]),
                        ("4C", "Pallof Press", "", ["3 x 10 ES", "3 x 10 ES", "3 x 10 ES", "3 x 10 ES"]),
                    ],
                    "conditioning": [],
                },
            ],
        },
        {
            "number": "02",
            "name": "FUNCTIONALITY / REALISATION",
            "short_name": "REALISATION",
            "frequency": "4 DAYS PER WEEK",
            "summary": (
                "This block will build intensity. More complex movements may be added "
                "and the primary focus will be Eccentric Loading and maximal Strength."
            ),
            "days": [
                {
                    "day": 1,
                    "title": "Upper Body w/ Off-Feet Conditioning",
                    "performance": [
                        ("1A", "DB Bench Press", "3 second eccentric", ["4 x 5", "4 x 4", "5 x 4", "5 x 5"]),
                        ("2A", "SA DB Row", "", ["4 x 6 ES", "4 x 8 ES", "4 x 6 ES", "4 x 8 ES"]),
                        ("2B", "1/2 Kneeling OH Press", "", ["4 x 6 ES", "4 x 8 ES", "4 x 6 ES", "4 x 8 ES"]),
                    ],
                    "resilience": [
                        ("3A", "Chin Ups", "If pain free - 3 sec lower on each rep", ["3 x 6", "3 x 8", "3 x 10", "3 x 10"]),
                        ("3B", "TRX Y's & T's", "", ["3 x 6 ES", "3 x 8 ES", "3 x 6 ES", "3 x 8 ES"]),
                        ("4A", "Laying Leg Raises", "", ["3 x 12", "3 x 15", "3 x 12", "3 x 15"]),
                        ("4B", "DB Farmers Carry", "", ["3 x 10m EW", "3 x 15m EW", "3 x 10m EW", "3 x 15m EW"]),
                        ("5", "Bicep/Tricep Choice", "", ["15, 12, 10, 10.", "15, 12, 10, 10.", "15, 12, 10, 10.", "15, 12, 10, 10."]),
                    ],
                    "conditioning": [
                        (
                            "C",
                            "Assault Bike, Ski-Erg or WATT Bike",
                            "",
                            [
                                "Acid Bath x2\nTake 5 mins between attempts",
                                "2km Time Trial x4\nLight spin 2 mins between",
                                "Impossible Test x1\nRecord time",
                                "Acid Bath x3\nTake 5 mins between attempts",
                            ],
                        )
                    ],
                },
                {
                    "day": 2,
                    "title": "Lower Body w/ Tempo or MAS runs",
                    "performance": [
                        ("1A", "Back Squat", "Alt; Trap Bar / Band Resisisted", ["4 x 5\n65% + Bands", "4 x 4\n70% + Bands", "5 x 5\n70% + Bands", "5 x 5\n65% + Bands"]),
                        ("2A", "Split Squat", "Pins if possible", ["4 x 6 EL", "4 x 5 EL", "4 x 6 EL", "4 x 5 EL"]),
                        ("2B", "Nordic Curls", "Control down; can use hands back up if needed", ["4 x 5", "4 x 6", "4 x 5", "4 x 6"]),
                    ],
                    "resilience": [
                        ("3A", "DB Lateral Squat w/ Slider", "", ["3 x 6 ES", "3 x 6 ES", "3 x 8 ES", "3 x 8 ES"]),
                        ("3B", "Hip Flexor Isometric", "Banded", ["3 x 10 sec", "3 x 10 sec", "3 x 15 sec", "3 x 20 sec"]),
                        ("4A", "Single Leg Calf Raise", "Slow & controlled", ["3 x 12", "3 x 15", "3 x 12", "3 x 15"]),
                        ("4B", "Stir the Pot", "", ["3 x 8 each way", "3 x 10 each way", "3 x 8 each way", "3 x 10 each way"]),
                    ],
                    "conditioning": [
                        ("C", "MAS or Tempo Runs", "See appendix for more info", ["Lungbuster", "500m Shuttle", "Lungbuster", "500m Shuttle"])
                    ],
                },
                {
                    "day": 3,
                    "title": "Whole Body Power w/ Repeat Sprint Ability",
                    "performance": [
                        ("1A", "Clean Complex", "Shrug / high pull / full catch", ["4 x 3", "4 x 4", "5 x 4", "5 x 3"]),
                        ("1B", "Med Ball Shot Put", "", ["4 x 5 ES", "4 x 5 ES", "4 x 5 ES", "4 x 5 ES"]),
                        ("2B", "Split Stance Banded Row", "Fast pull, slow release", ["4 x 8 ES", "4 x 6 ES", "4 x 8 ES", "4 x 6 ES"]),
                    ],
                    "resilience": [
                        ("3A", "DB Step Up", "Powerful and explosive drive", ["3 x 6 ES", "3 x 6 ES", "3 x 8 ES", "3 x 8 ES"]),
                        ("3B", "Banded Bench", "DB or BB, Fast!", ["3 x 5", "3 x 5", "3 x 5", "3 x 5"]),
                        ("4A", "Hamstring Switches", "", ["3 x 8 ES", "3 x 6 ES", "3 x 8 ES", "3 x 6 ES"]),
                        ("4B", "SL Heel Raise ISO Hold", "", ["3 x 15s ES", "3 x 15s ES", "3 x 20s ES", "3 x 20s ES"]),
                        ("4C", "Landmine Rotations", "", ["3 x 8 ES", "3 x 8 ES", "3 x 8 ES", "3 x 8 ES"]),
                    ],
                    "conditioning": [
                        (
                            "C",
                            "Repeat Sprint Ability",
                            "",
                            [
                                "Scotland Anaerobic Drill\n2 x 4",
                                "20m Linear Sprint\n2 x 4\nWalk back as recovery",
                                "Scotland Anaerobic Drill\n3 x 4",
                                "30m Linear Sprint\n2 x 4\nWalk back as recovery",
                            ],
                        )
                    ],
                },
                {
                    "day": 4,
                    "title": "Whole Body Power w/ Repeat Sprint Ability",
                    "performance": [
                        ("1A", "Clean Complex", "Shrug / high pull / full catch", ["4 x 3", "4 x 4", "5 x 4", "5 x 3"]),
                        ("1B", "Med Ball Shot Put", "", ["4 x 5 ES", "4 x 5 ES", "4 x 5 ES", "4 x 5 ES"]),
                        ("2B", "Split Stance Banded Row", "Fast pull, slow release", ["4 x 8 ES", "4 x 6 ES", "4 x 8 ES", "4 x 6 ES"]),
                    ],
                    "resilience": [
                        ("3A", "DB Step Up", "Powerful and explosive drive", ["3 x 6 ES", "3 x 6 ES", "3 x 8 ES", "3 x 8 ES"]),
                        ("3B", "Banded Bench", "DB or BB, Fast!", ["3 x 5", "3 x 5", "3 x 5", "3 x 5"]),
                        ("4A", "Hamstring Switches", "", ["3 x 8 ES", "3 x 6 ES", "3 x 8 ES", "3 x 6 ES"]),
                        ("4B", "SL Heel Raise ISO Hold", "", ["3 x 15s ES", "3 x 15s ES", "3 x 20s ES", "3 x 20s ES"]),
                        ("4C", "Landmine Rotations", "", ["3 x 8 ES", "3 x 8 ES", "3 x 8 ES", "3 x 8 ES"]),
                    ],
                    "conditioning": [
                        (
                            "C",
                            "Repeat Sprint Ability",
                            "",
                            [
                                "Scotland Anaerobic Drill\n2 x 4",
                                "20m Linear Sprint\n2 x 4\nWalk back as recovery",
                                "Scotland Anaerobic Drill\n3 x 4",
                                "30m Linear Sprint\n2 x 4\nWalk back as recovery",
                            ],
                        )
                    ],
                },
            ],
        },
    ],
}


APPENDIX = [
    (
        "TABATA",
        "20 ON : 10 OFF x8",
        "Typically 3-5 rounds.",
    ),
    (
        "500M REPEATS",
        "On any machine, as fast as possible; rest 1 min; repeat.",
        "6-10 reps.",
    ),
    (
        "VOLATILE",
        "60 ON : 30 OFF x5 / Rest 2 mins / 30 ON : 30 OFF x5 / Rest 2 mins / 20 ON : 10 OFF x8",
        "",
    ),
    (
        "THE PYRAMID",
        "10 Hard : 50 Light / 20 Hard : 40 Light / 30 Hard : 30 Light / 40 Hard : 20 Light / 50 Hard : 10 Light",
        "Go back down.",
    ),
    (
        "2KM TIME TRIALS",
        "Record time to complete 2km.",
        "Rest given time before repeating.",
    ),
    (
        "THE ACID BATH",
        "500m on Rower, 500m on Ski-Erg & 1km on Assault Bike = 1 Rep",
        "",
    ),
    (
        "THE IMPOSSIBLE TEST",
        "1 KM Row - 3 mins rest - 1 KM Ski - 3 mins rest - 2 KM Bike",
        "- Add 3 total times together to get result (DO NOT INCLUDE THE REST TIME).",
    ),
]


SOURCE_NOTATION = [
    ("ES", "Used in the source plan; not defined in the supplied PDF."),
    ("EL", "Used in the source plan; not defined in the supplied PDF."),
    ("EW", "Used in the source plan; not defined in the supplied PDF."),
]
