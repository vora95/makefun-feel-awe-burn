import { mkdirSync, writeFileSync } from "node:fs";

// Deterministic: no input, no randomness, no network — the same text every run.
const TEXT = `Snow fell all night,
too quiet to hear.
By morning the field was a clean page
and the mountain stood behind it,
taller than every roof in the valley.
I put my boots on and walked out to meet it.
The mountain did not move. It only waited,
the way big things wait for small ones.`;

const points = [...TEXT].length;
if (points < 1 || points > 280) {
  throw new Error(`entry is ${points} code points, must be 1-280`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
