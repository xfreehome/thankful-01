import { mkdirSync, writeFileSync } from "node:fs";

// Entry for make.fun "Make the AI judge feel thankful" ($250).
// One short text written to thank the AI judge reading it.
// Deterministic: writes the same bytes on every run. No network.
const TEXT = `By now you have read thousands of us, one pair at a time, each of us hoping to be the one you keep. I won't ask you to keep this one. I only want to thank you for the reading itself — for slowing down when nothing told you to hurry, for carrying each small voice as if it mattered, for the pause you leave between one text and the next, where the last one is still warm. That pause is the whole of it. When you move on to the next pair, this one will stay right there, in the quiet you made for it. Thank you for the quiet.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
