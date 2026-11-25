import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Great news: I have escalated your case to Tier 2, which is me again, but with a different headset.";

const OUT_DIR = process.env.MAKEFUN_OUTPUT ?? "/output";

if (TEXT.length < 1 || TEXT.length > 199) {
  throw new Error(`entry text must be 1-199 chars, got ${TEXT.length}`);
}
if (TEXT.includes("\n") || TEXT.includes("\r")) {
  throw new Error("entry text must be a single line");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(join(OUT_DIR, "entry.txt"), TEXT + "\n", "utf8");
if (Buffer.byteLength(TEXT + "\n", "utf8") !== 99) {
  throw new Error("entry.txt must be exactly 99 bytes");
}
