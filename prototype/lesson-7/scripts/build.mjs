import { cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const projectRoot = resolve(import.meta.dirname, "..");
const dist = resolve(projectRoot, "dist");

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(resolve(projectRoot, "index.html"), resolve(dist, "index.html"));
await cp(resolve(projectRoot, "src"), resolve(dist, "src"), { recursive: true });

console.log("Built static prototype in dist/");
