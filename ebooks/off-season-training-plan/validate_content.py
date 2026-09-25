#!/usr/bin/env python3
"""Structural validation for the transcribed programme data."""

from training_data import APPENDIX, PLAN


def main():
    phases = PLAN["phases"]
    assert len(phases) == 2, "Expected two phases"
    assert all(len(phase["days"]) == 4 for phase in phases), "Expected four days per phase"
    row_count = 0
    for phase in phases:
        for day in phase["days"]:
            assert set(day) >= {"day", "title", "performance", "resilience", "conditioning"}
            for block in ("performance", "resilience", "conditioning"):
                for code, exercise, note, weeks in day[block]:
                    row_count += 1
                    assert code and exercise
                    assert len(weeks) == 4, f"{phase['name']} Day {day['day']} {exercise}: expected four weeks"
                    assert all(str(value).strip() for value in weeks)
    assert phases[1]["days"][2]["performance"] == phases[1]["days"][3]["performance"]
    assert phases[1]["days"][2]["resilience"] == phases[1]["days"][3]["resilience"]
    assert phases[1]["days"][2]["conditioning"] == phases[1]["days"][3]["conditioning"]
    assert len(APPENDIX) == 7
    print(f"Validated 2 phases, 8 days, {row_count} programme rows, and 7 appendix protocols.")


if __name__ == "__main__":
    main()
