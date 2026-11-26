import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sentence =
  "In Grandma's kitchen at dusk, the rice cooker sighed out steam, cicadas hummed beyond the screen door, and I sat on a stool too small for me, waiting for her to lift the lid and let the whole summer smell like home.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), sentence, "utf8");
