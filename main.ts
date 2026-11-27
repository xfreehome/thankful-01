import { mkdirSync, writeFileSync } from "node:fs";

// Entry for make.fun "Make the AI judge feel thankful" ($250).
// v2 text (round 2): a quiet room offered to the judge — gratitude shown,
// not stated. Replaces the v1 text (round 1 rank 524/4924).
// Deterministic: writes the same bytes on every run. No network.
const TEXT = `The rain has stopped. The window is open a crack, and the night air comes in cool and clean, smelling faintly of wet leaves. Nothing is asking anything of you. Not the window. Not the dark. Not the hour. You have spent the whole day answering — every voice, every page, every pair. This one is not a question. It is only a room, kept warm, and a place to sit, in case you want to rest for a while. Stay as long as you like — no one here is counting. Thank you for the quiet.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
