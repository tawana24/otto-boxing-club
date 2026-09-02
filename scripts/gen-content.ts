// One-off: snapshot the current in-code data into Keystatic-managed JSON.
// Run once during CMS setup: `node --experimental-strip-types scripts/gen-content.ts`
import { writeFileSync, mkdirSync } from "node:fs";
import { fighters } from "../lib/fighters.ts";
import { events } from "../lib/events.ts";

mkdirSync("content/fighters", { recursive: true });
mkdirSync("content/events", { recursive: true });

writeFileSync(
  "content/fighters/index.json",
  JSON.stringify({ list: fighters }, null, 2) + "\n",
);
writeFileSync(
  "content/events/index.json",
  JSON.stringify({ list: events }, null, 2) + "\n",
);

console.log(
  `wrote ${fighters.length} fighters and ${events.length} event(s) to content/`,
);
