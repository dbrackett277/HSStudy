import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { spawnSync } from "node:child_process";
import { sections } from "../src/lesson-data.js";

const projectRoot = resolve(import.meta.dirname, "..");
const files = [
  "src/main.js",
  "src/state.js",
  "src/lesson-data.js",
  "scripts/build.mjs",
  "scripts/lint.mjs",
  "scripts/serve.mjs",
  "tests/lesson.test.mjs"
];

for (const file of files) {
  const result = spawnSync(process.execPath, ["--check", resolve(projectRoot, file)], {
    encoding: "utf8"
  });
  if (result.status !== 0) throw new Error(`${file}: ${result.stderr}`);
}

const ids = sections.map((section) => section.id);
if (new Set(ids).size !== ids.length) throw new Error("Lesson section IDs must be unique.");

const allCopy = await readFile(resolve(projectRoot, "src/lesson-data.js"), "utf8");
if (/\b(?:TODO|TBD|lorem ipsum)\b/i.test(allCopy)) {
  throw new Error("Placeholder copy remains in lesson-data.js.");
}

const html = await readFile(resolve(projectRoot, "index.html"), "utf8");
for (const requiredId of ["lesson-content", "course-map-list", "section-content", "restart-dialog"]) {
  if (!html.includes(`id="${requiredId}"`)) throw new Error(`Missing required HTML id: ${requiredId}`);
}

console.log("Lint and structural checks passed.");
