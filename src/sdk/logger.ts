/*
 * Copyright (c) 2025, Salesforce.com, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import baseLogger from "../utils/base-logger";
import { Logger } from "../index.js";

export class LoggerImpl implements Logger {
  private readonly properties: Record<string, unknown>;

  constructor(id: string) {
    this.properties = {
      requestId: id,
    };
  }

  error(message: string): void {
    underlyingLogger.error(Object.assign(this.properties, { message }));
  }

  warn(message: string): void {
    underlyingLogger.warn(Object.assign(this.properties, { message }));
  }

  info(message: string): void {
    underlyingLogger.info(Object.assign(this.properties, { message }));
  }

  debug(message: string): void {
    underlyingLogger.debug(Object.assign(this.properties, { message }));
  }

  trace(message: string): void {
    underlyingLogger.trace(Object.assign(this.properties, { message }));
  }
}

const underlyingLogger = baseLogger;
