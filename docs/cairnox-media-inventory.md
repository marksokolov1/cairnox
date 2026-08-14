# CAIRNOX Media Inventory

Status: approved source library inspected for Phase 1

Source directories: `/Media/Photos` and `/Media/Videos`

Public copies: `/public/media/images` and `/public/media/videos`

The source files were inspected individually and copied without renaming or altering them. Placement is intentionally deferred to later page-specific work. The people shown other than Mathew Skyner are not identified here.

## Approved photos

| Exact source filename | Public path | Visible depiction | Likely page category | Priority | Notes |
|---|---|---|---|---|---|
| `mathew-skyner-rugby-coaching-night-ball.jpg` | `/media/images/mathew-skyner-rugby-coaching-night-ball.jpg` | Mathew standing on a rugby field at night holding a rugby ball | About / Method / founder | High | Strong founder image; portrait image with substantial black space above and below the embedded photograph. 591×1280. |
| `mathew-skyner-active-rugby-coaching.jpg` | `/media/images/mathew-skyner-active-rugby-coaching.jpg` | Mathew actively coaching and clapping during an outdoor rugby training session | Homepage / About / Method | High | One of the strongest coaching-action images. Landscape, 828×552. |
| `mathew-skyner-rugby-field-night-profile.jpg` | `/media/images/mathew-skyner-rugby-field-night-profile.jpg` | Mathew walking in side profile on a rugby field at night | About / Method | Medium | Portrait image with substantial black space above and below the embedded photograph. 591×1280. |
| `mathew-skyner-professional-rugby-coach-portrait.jpg` | `/media/images/mathew-skyner-professional-rugby-coach-portrait.jpg` | Mathew smiling while carrying two rugby training-equipment bags | Homepage / About / founder | High | Strong, approachable founder portrait. Portrait, 828×1017. |
| `mathew-skyner-rugby-strength-conditioning-coach.jpg` | `/media/images/mathew-skyner-rugby-strength-conditioning-coach.jpg` | Mathew coaching from the rugby sideline with a whistle | About / Method / ELEVATE | Medium | Strong professional coaching context. Landscape, 828×542. |
| `mathew-skyner-usa-cricket-team-training.jpg` | `/media/images/mathew-skyner-usa-cricket-team-training.jpg` | Mathew seen from behind observing a USA Cricket training drill | APEX / Method / About | Medium | Vertical source with black space above and below the embedded photograph. 590×1280. |
| `mathew-skyner-usa-cricket-performance-team-wide.jpg` | `/media/images/mathew-skyner-usa-cricket-performance-team-wide.jpg` | Wide field view of Mathew addressing a line of USA Cricket athletes | APEX / Homepage / Results | High | Important team and performance-environment evidence. Landscape, 1280×853. |
| `mathew-skyner-usa-cricket-performance-coach-equipment.jpg` | `/media/images/mathew-skyner-usa-cricket-performance-coach-equipment.jpg` | Mathew in USA Cricket clothing carrying training bags and a clear training bag | About / APEX / founder | High | Strong working-coach portrait. Portrait, 858×1280. |

## Approved active videos

All six clips are short portrait H.264 MP4 files with AAC audio. They remain individual assets. No speed/acceleration field video is required or present, and no combined montage should be created.

| Exact source filename | Public path | Visible depiction | Likely page category | Priority | Technical / notes |
|---|---|---|---|---|---|
| `base-rotational-power-usa-cricket.mp4` | `/media/videos/base-rotational-power-usa-cricket.mp4` | USA Cricket athlete outdoors performing rotational power work with a clear, water-filled training bag | BASE | High | 464×848, 3.26s. Approved BASE footage. |
| `base-explosive-power-usa-cricket-gym.mp4` | `/media/videos/base-explosive-power-usa-cricket-gym.mp4` | USA Cricket athlete in red performing an explosive overhead gym power movement | BASE | High | 464×848, 1.69s. Approved BASE footage. |
| `elevate-individual-power-training.mp4` | `/media/videos/elevate-individual-power-training.mp4` | Individual athlete in a blue top performing indoor explosive/power training | ELEVATE | High | 464×848, 2.07s. Approved ELEVATE footage. |
| `mathew-coaching-usa-cricket-field.mp4` | `/media/videos/mathew-coaching-usa-cricket-field.mp4` | Mathew in USA Cricket training kit actively coaching/directing athletes on the field | APEX / About / Method | High | 352×640, 2.10s. Strong founder and high-performance evidence. |
| `mathew-team-coaching-usa-cricket.mp4` | `/media/videos/mathew-team-coaching-usa-cricket.mp4` | Mathew actively coaching a group of USA Cricket athletes on the field | APEX / About / Method | High | 352×640, 4.53s. Strong group-coaching evidence. |
| `apex-professional-cricket-environment.mp4` | `/media/videos/apex-professional-cricket-environment.mp4` | Professional cricket stadium/training-ground environment with equipment on the field | APEX / environment | High | 464×848, 3.22s. Establishes professional performance context. |

## Approved logo

| Exact source filename | Public path | Visible depiction | Priority | Notes |
|---|---|---|---|---|
| `logo_transparent.png` | `/brand/cairnox-logo.png` | Dark asymmetric three-layer cairn, divider, CAIRNOX wordmark and PERFORMANCE descriptor | Required | 2172×724 RGBA PNG. Preserve aspect ratio and clear space. Use on light surfaces. An approved inverse version does not currently exist. |

## Non-media files observed

`.DS_Store` files are present in `/Media`, `/Media/Photos` and `/Media/Videos`. These are macOS directory metadata, not approved website assets, and were not copied to the public asset tree.

## Implementation rules

- Source media stays in `/Media` and must not be renamed or modified.
- Do not use stock or generated replacement photography.
- Do not infer athlete identities from the visuals.
- Do not place every asset simply because it is available.
- Use explicit aspect ratios/dimensions and deliberate crops.
- Use responsive image optimisation and lazy loading unless an asset is genuinely critical.
- Videos must support posters and controlled preload; Phase 1 uses no autoplay.
- Do not create a combined hero video.
