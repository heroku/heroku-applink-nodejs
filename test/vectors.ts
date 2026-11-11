import { readFileSync } from "node:fs";
import { join } from "node:path";

const VECTORS_DIR = join(import.meta.dirname, "..", "test-vectors");

export function loadVectors<T>(name: string): T[] {
  return (
    JSON.parse(readFileSync(join(VECTORS_DIR, name), "utf8")) as { cases: T[] }
  ).cases;
}
