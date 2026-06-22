/*
 * Copyright (c) 2025, Salesforce.com, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

// chai >= 5 ships as ESM-only, so it cannot be `require`d from this
// CommonJS test toolchain. Load it via dynamic import in mocha's global
// setup hook and stash `expect` on globalThis. The `test/chai.ts` helper
// re-exports it as a Proxy so test files can import { expect } from "./chai"
// synchronously at the top level.
export const mochaGlobalSetup = async () => {
  const chai = await import("chai");
  (globalThis as { __chaiExpect?: Chai.ExpectStatic }).__chaiExpect =
    chai.expect;
};

export const mochaHooks = {
  beforeAll(done) {
    // wait 2s for wiremock to start before starting tests
    setTimeout(done, 2000);
  },
};
