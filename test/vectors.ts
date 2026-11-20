/*
 * Copyright (c) 2026, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { readFileSync } from "node:fs";
import { join } from "node:path";

const VECTORS_DIR = join(import.meta.dirname, "..", "test-vectors");

export function loadVectors<T>(name: string): T[] {
  return (
    JSON.parse(readFileSync(join(VECTORS_DIR, name), "utf8")) as { cases: T[] }
  ).cases;
}
