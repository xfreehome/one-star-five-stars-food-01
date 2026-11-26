import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "One star: your gravity stole my luggage, your rain arrived unannounced, yet the tacos apologised for everything and I would cross three galaxies for seconds.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
