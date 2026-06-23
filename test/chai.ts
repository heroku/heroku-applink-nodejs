/*
 * Copyright (c) 2025, Salesforce.com, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

// chai 6 is ESM-only and cannot be `require`d from this CommonJS test
// toolchain. `test/setup.ts` dynamic-imports chai in `mochaGlobalSetup`
// and stashes `expect` on globalThis. This helper exposes `expect` as a
// callable Proxy so test files can keep their synchronous top-level
// `import { expect } from "../chai"` style.
//
// `expect` is only invoked inside `it()` callbacks (runtime), never at
// module top level, so by the time these calls fire the global has been
// populated.

type ChaiExpect = Chai.ExpectStatic;

function getExpect(): ChaiExpect {
  const cached = (globalThis as { __chaiExpect?: ChaiExpect }).__chaiExpect;
  if (!cached) {
    throw new Error(
      "chai expect not initialized — mochaGlobalSetup in test/setup.ts " +
        "should have populated globalThis.__chaiExpect before any test ran."
    );
  }
  return cached;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const proxyTarget = function () {} as unknown as ChaiExpect;

export const expect: ChaiExpect = new Proxy(proxyTarget, {
  apply(_target, thisArg, args: unknown[]) {
    return (getExpect() as unknown as (...a: unknown[]) => unknown).apply(
      thisArg,
      args
    );
  },
  get(_target, prop, receiver) {
    return Reflect.get(getExpect() as unknown as object, prop, receiver);
  },
  has(_target, prop) {
    return prop in (getExpect() as unknown as object);
  },
}) as ChaiExpect;
