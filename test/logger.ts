/*
 * Copyright (c) 2025, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { LoggerLevel } from "@salesforce/core";
import { expect } from "chai";
import testBaseLogger from "../src/utils/base-logger";

describe("Logger", () => {
  describe("Basic logger functionality", () => {
    it("should have a basic message", async () => {
      const testbasiclogger = testBaseLogger.child("basic");
      testbasiclogger.warn("This is a test message");
      const logRecords = testbasiclogger.getBufferedRecords();
      expect(
        logRecords.filter((lR) => lR.name === "appLogger:basic")[0]
      ).to.have.property("msg", "This is a test message");
    });
    it("should check for proper escaping", async () => {
      const testescapelogger = testBaseLogger.child("escape");
      testescapelogger.info('Checking escaping: "test" \\o/ foo=bar');
      const logRecords = testescapelogger.getBufferedRecords();
      expect(
        logRecords.filter((lR) => lR.name === "appLogger:escape")[0]
      ).to.have.property("msg", 'Checking escaping: "test" \\o/ foo=bar');
    });
  });
  describe("Logger levels", () => {
    it("should set the log level to a number: 50 for Error", async () => {
      const errorlogger = testBaseLogger.child("error50");
      errorlogger.error("test Error");
      const logRecords = errorlogger.getBufferedRecords();
      expect(
        logRecords.filter((lR) => lR.name === "appLogger:error50")[0]
      ).to.have.property("level", 50);
    });
    it("should set the log level to a number: 40 for Warn", async () => {
      const warnlogger = testBaseLogger.child("warn40");
      warnlogger.warn("test warn");
      const logRecords = warnlogger.getBufferedRecords();
      expect(
        logRecords.filter((lR) => lR.name === "appLogger:warn40")[0]
      ).to.have.property("level", 40);
    });
    it("should set the log level to a number: 30 for Info", async () => {
      const infologger = testBaseLogger.child("info30");
      infologger.info("test info");
      const logRecords = infologger.getBufferedRecords();
      expect(
        logRecords.filter((lR) => lR.name === "appLogger:info30")[0]
      ).to.have.property("level", 30);
    });
    it("should set the log level to a number: 20 for Debug", async () => {
      const debuglogger = testBaseLogger.child("debug20");
      debuglogger.setLevel(20);
      expect(debuglogger.getLevel()).to.equal(LoggerLevel.DEBUG);
    });
    it("should set the log level to a number: 10 for Trace", async () => {
      const tracelogger = testBaseLogger.child("trace10");
      tracelogger.setLevel(10);
      expect(tracelogger.getLevel()).to.equal(LoggerLevel.TRACE);
    });
  });
});
