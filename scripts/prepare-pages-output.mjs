import { copyFile, mkdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const outputDirectory = join(process.cwd(), "out");
const placeholderArticle = join(outputDirectory, "insights", "__build-placeholder__");

await rm(placeholderArticle, { recursive: true, force: true });
await writeFile(join(outputDirectory, ".nojekyll"), "");

if (process.env.NEXT_PUBLIC_FOUNDATION_WEEK_DOWNLOAD === "true") {
  const downloadsDirectory = join(outputDirectory, "downloads");
  const filename = "cairnox-foundation-week-three-day.pdf";
  await mkdir(downloadsDirectory, { recursive: true });
  await copyFile(join(process.cwd(), "ebooks", "foundation-week", "distribution", filename), join(downloadsDirectory, filename));
}
