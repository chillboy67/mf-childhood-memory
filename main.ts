// mf-childhood-memory: one sentence, at most 280 characters, for the
// make.fun "Make the AI Judge Feel Nostalgic" bounty.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sentence =
  "Grandma's kitchen glowed gold at dusk, the rice cooker sighing steam, and I sat on a small stool waiting for the lid to lift, knowing dinner meant her hand on my head and one more summer evening that would never come back.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), sentence, "utf8");
