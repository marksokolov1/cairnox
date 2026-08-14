import { rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const outputDirectory = join(process.cwd(), "out");
const placeholderArticle = join(outputDirectory, "insights", "__build-placeholder__");

await rm(placeholderArticle, { recursive: true, force: true });
await writeFile(join(outputDirectory, ".nojekyll"), "");
