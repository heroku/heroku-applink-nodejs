/*
 * Copyright (c) 2025, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { Logger } from "@salesforce/core";

function getloglevel() {
  const logLevel = (process.env.LOGLEVEL || "info").toLowerCase();
  switch (logLevel) {
    case "trace":
      return 10;
    case "debug":
      return 20;
    case "info":
      return 30;
    case "warn":
      return 40;
    case "error":
      return 50;
    default:
      console.warn(
        `LOGLEVEL environment variable contains unknown log level '${logLevel}'! Effective log level will be 'info'!`
      );
      return 30;
  }
}

const baseLogger = new Logger({
  name: "appLogger",
  level: getloglevel(),
  useMemoryLogger: process.env.NODE_ENV === "test",
});

export default baseLogger;
