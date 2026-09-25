import type {
  InsightArticle,
  PublishedInsightArticle,
} from "@/types/insight-article";

// Keep drafts and published work in one collection. Public routes and the
// sitemap only read from getPublishedInsights(). Order resolves same-day ties.
export const allInsights: readonly InsightArticle[] = [
  {
    status: "published",
    title: "Speed in Cricket: The Dos and the Dos",
    slug: "speed-training-in-cricket",
    description:
      "Why cricket players need intentional exposure to acceleration, change of direction and high-speed running rather than relying on matches to develop speed.",
    category: "Physical Preparation",
    author: { name: "Mathew Skyner", role: "High-Performance Coach and Founder of CAIRNOX" },
    publicationDate: "2026-09-25",
    standfirst:
      "Cricket may expose players to speed, but the game is too unpredictable to guarantee the physical qualities they need. Speed should be assessed, trained and developed deliberately.",
    heroImage: {
      src: "/media/images/mathew-skyner-usa-cricket-resisted-sprint-coaching.jpg",
      width: 1280,
      height: 853,
      alt: "Mathew Skyner coaching a USA Cricket athlete during resisted sprint training",
      caption: "Speed qualities should be exposed deliberately rather than left entirely to match play.",
    },
    body: [
      { type: "paragraph", text: "If it is not obvious from the title, do I think cricketers need to be sprinting? Yes." },
      { type: "paragraph", text: "In fact, I struggle to think of a reason why the answer would be anything else. Speed is one of the most overlooked physical qualities in cricket. When I first moved into an international cricket environment, one of the biggest surprises was how little dedicated speed training existed. There were no dedicated speed sessions, no formal speed testing and very little measurement of speed exposure. Speed largely came through games and fielding drills." },
      { type: "heading", level: 2, text: "Why matches are not enough" },
      { type: "paragraph", text: "What I can say with certainty is that this is not enough. Games are too unpredictable to rely on for particular exposures. Unless fielding drills are planned well, they typically do not address physical qualities such as lateral acceleration, change of direction and especially maximum velocity." },
      { type: "paragraph", text: "Take a previous USA Cricket CWCL2 series. In the last game, all of our infielders recorded more than 30 accelerations, yet none had exposure above 85% of maximum speed." },
      { type: "paragraph", text: "Was that a bad thing? Absolutely not. In the context of that game, it was actually a positive. Our infielders were anticipating well, moving efficiently and preventing balls from getting through the circle." },
      { type: "heading", level: 2, text: "Good performance does not equal complete exposure" },
      { type: "paragraph", text: "But there is an important distinction here: good performance does not necessarily equal complete physical exposure. We performed well, but we did not expose those players to high-speed running in that game." },
      { type: "pull-quote", quote: "Good performance does not necessarily equal complete physical exposure." },
      { type: "heading", level: 2, text: "Why dedicated speed sessions matter" },
      { type: "paragraph", text: "That is why dedicated speed sessions are hugely important in cricket training. Speed is a fundamental quality of the game, and if you do not regularly expose players to it, you should not expect to maintain or develop it indefinitely." },
      { type: "paragraph", text: "Here is the interesting part: not every game requires the same output, but different demands emerge across a tournament or series. The infielders in that game did not hit top-end speed, but they did during the tour. Different games, different scenarios." },
      { type: "paragraph", text: "Cricket is a dynamic sport that calls on different abilities depending on the scenario. Every cricketer needs exposure to the fundamental qualities of speed, although the required dose and application will differ by player and role:" },
      { type: "unordered-list", items: ["Acceleration", "Change of direction", "High-speed running"] },
      { type: "paragraph", text: "Being fast to a ground ball can be the difference between one run and two. A keeper's ability to move quickly towards a loose ball can prevent runs from leaking. A batter's ability to take off from the crease can pressure fielders into making mistakes." },
      { type: "paragraph", text: "One of my first interventions with USA Cricket was to introduce dedicated speed sessions and measure those outputs. Speed is not about one-off scenarios we can disregard. It is fundamental to the game. Every ball, every run, every over matters." },
      { type: "heading", level: 2, text: "Do not leave speed to chance" },
      { type: "paragraph", text: "The crux of it is simple: speed is not something we should hope to see in cricket. It is something we should deliberately develop." },
      { type: "paragraph", text: "Games will provide speed exposure—sometimes a lot, sometimes very little. Fielding drills can provide it too, when they are designed with the physical objective in mind. But neither should be left entirely to chance." },
      { type: "paragraph", text: "If speed is an important quality in cricket, it deserves the same intentional approach we give strength, conditioning or any other physical quality." },
      { type: "unordered-list", items: ["Assess it.", "Train it.", "Expose it.", "Adapt it."] },
      { type: "paragraph", text: "Because speed is not just something that happens in cricket. It is something you train for." },
    ],
    relatedService: {
      label: "ELEVATE",
      href: "/elevate",
      description: "Explore individual cricket performance coaching adapted around the player, playing role, schedule and physical-development needs.",
    },
    relatedArticleSlugs: ["game-day-warm-ups"],
    seo: {
      title: "Speed Training for Cricket | CAIRNOX",
      description: "Why cricket players need dedicated acceleration, change-of-direction and maximum-speed exposure alongside match play and fielding drills.",
      openGraphImage: "/media/images/mathew-skyner-usa-cricket-resisted-sprint-coaching.jpg",
    },
  },
  {
    status: "published",
    title: "Game-Day Warm-Ups: How to Prepare an Athlete to Perform",
    slug: "game-day-warm-ups",
    description:
      "A practical framework for building game-day warm-ups that prepare cricket players for the movements, speeds, forces and skills they are about to perform.",
    category: "Performance Planning",
    author: { name: "Mathew Skyner", role: "High-Performance Coach and Founder of CAIRNOX" },
    publicationDate: "2026-09-25",
    standfirst:
      "The best warm-up is not the one with the most exercises. It is the one that prepares the player for the demands that come next—without creating unnecessary fatigue.",
    heroImage: {
      src: "/media/images/mathew-skyner-usa-cricket-individual-resistance-coaching.jpg",
      width: 1024,
      height: 683,
      alt: "Mathew Skyner preparing a USA Cricket athlete during a field warm-up",
      caption: "Preparation should progress toward the demands the player is about to face.",
    },
    body: [
      { type: "paragraph", text: "I have seen plenty of warm-ups that look impressive. It is a fascination of mine to see how teams and athletes prepare, and you will often see the same things: lots of exercises, bands, mobility drills, activation, dynamic stretching, and maybe some jumps and sprints." },
      { type: "paragraph", text: "But here is the question I think we should ask more often: what is the athlete actually trying to achieve?" },
      { type: "heading", level: 2, text: "Start with the demands" },
      { type: "paragraph", text: "Before deciding what goes into a warm-up, we need to understand what we are preparing the athlete for." },
      { type: "unordered-list", items: ["What movements will they perform?", "What speeds will they reach?", "What forces will they produce?", "What ranges of motion do they need?", "What skills require the highest level of precision?"] },
      { type: "paragraph", text: "The warm-up should prepare the athlete for those demands. Here is the process I would follow and, importantly, why." },
      { type: "heading", level: 2, text: "Raise temperature" },
      { type: "paragraph", text: "This is the boring part, but it is important. Get the body moving. Increase temperature. Increase blood flow. But please do not spend 15 minutes jogging around just because ‘warm-up’ means running." },
      { type: "heading", level: 2, text: "Use mobility with a purpose" },
      { type: "paragraph", text: "Mobility should have a purpose. If you are preparing a fast bowler, that might mean preparing the shoulder, thoracic spine, hips and lower limb for high-speed bowling. For a batter, the requirements may be different." },
      { type: "pull-quote", quote: "Mobility is not the goal. Readiness is." },
      { type: "heading", level: 2, text: "Activation should earn its place" },
      { type: "paragraph", text: "‘Activation’ has become one of those words that can mean almost anything. You do not need 17 band exercises because someone decided the glutes need activating." },
      { type: "paragraph", text: "The question should be: does this exercise improve the athlete's ability to perform what comes next? If yes, keep it. If not, remove it." },
      { type: "heading", level: 2, text: "Build intensity progressively" },
      { type: "paragraph", text: "This is probably one of the most important parts. A warm-up should not go from 0% to 100%. It should progressively build:" },
      { type: "ordered-list", items: ["General", "Specific", "Fast", "Explosive", "Sport-specific"] },
      { type: "paragraph", text: "For cricket, that could look like raising temperature, then mobility, movement, acceleration, higher-speed movement, jumps and throws, and finally cricket-specific actions. The athlete should progressively experience the qualities they are about to need." },
      { type: "heading", level: 2, text: "Leave something in the tank" },
      { type: "paragraph", text: "I have seen warm-ups become 30–40 minute workouts. That is not necessarily better preparation. If the athlete finishes the warm-up sweating, exhausted and feeling like they have already completed a session, something has probably gone wrong." },
      { type: "paragraph", text: "The warm-up should create readiness, not fatigue. Ultimately, the best warm-up is not the one with the most exercises. It is the one that leaves the athlete most prepared for what comes next." },
    ],
    relatedService: {
      label: "METHOD",
      href: "/method",
      description: "Explore the CAIRNOX framework for connecting physical preparation to the player, the sport and the demands ahead.",
    },
    relatedArticleSlugs: ["speed-training-in-cricket"],
    seo: {
      title: "Game-Day Warm-Ups for Cricket | CAIRNOX",
      description: "How to structure a cricket game-day warm-up around readiness, progressive intensity and the movements, speeds and skills that performance demands.",
      openGraphImage: "/media/images/mathew-skyner-usa-cricket-individual-resistance-coaching.jpg",
    },
  },
];

function validateInsightLibrary(articles: readonly InsightArticle[]) {
  const slugs = new Set<string>();

  for (const article of articles) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(article.slug)) {
      throw new Error(`Invalid Insights slug: ${article.slug}`);
    }

    if (slugs.has(article.slug)) {
      throw new Error(`Duplicate Insights slug: ${article.slug}`);
    }

    slugs.add(article.slug);

    if (article.status === "published" && !article.publicationDate) {
      throw new Error(`Published Insight is missing a publication date: ${article.slug}`);
    }
  }
}

validateInsightLibrary(allInsights);

export function getPublishedInsights(): readonly PublishedInsightArticle[] {
  return allInsights.filter(
    (article): article is PublishedInsightArticle => article.status === "published",
  );
}

export function getPublishedInsight(slug: string): PublishedInsightArticle | undefined {
  return getPublishedInsights().find((article) => article.slug === slug);
}
