// Monday Morning Punchlines — one joke about Monday mornings.
//
// Writes the joke to /output/entry.txt. Fully deterministic: the same
// text every run, no network, no randomness, no files outside the repo.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const JOKE =
  "Monday morning, my bed filed for custody. The judge took one look at me and ruled in the bed's favour.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to ${join(outDir, "entry.txt")}`);
