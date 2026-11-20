/*
 * Copyright (c) 2026, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

export type JsonObject = Readonly<Record<string, unknown>>;

const utf8 = new TextDecoder("utf-8", { fatal: true });

export function parseJson(bytes: Uint8Array): unknown {
  try {
    return JSON.parse(utf8.decode(bytes));
  } catch {
    return undefined;
  }
}

export function isObject(value: unknown): value is JsonObject {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function nonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value !== "";
}
