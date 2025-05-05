/*
 * Copyright (c) 2024, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { LoggerLevel } from "@salesforce/core";
import { expect } from "chai";
import baseLogger from "../src/utils/base-logger";

describe("Logger", () => {
  describe("Basic logger functionality", () => {
    it.skip("should have a basic message", async () => {
      const testbasiclogger = (
        await baseLogger.child("testLogger")
      ).useMemoryLogging();
      testbasiclogger.warn("This is a test message");
      const logRecords = testbasiclogger.getBufferedRecords();
      expect(logRecords[0]).to.have.property("msg", "This is a test message");
    });
    it.skip("should check for proper escaping", async () => {
      const testescapelogger = (
        await baseLogger.child("testLogger")
      ).useMemoryLogging();
      testescapelogger.info('Checking escaping: "test" \\o/ foo=bar');
      const logRecords = testescapelogger.getBufferedRecords();
      expect(logRecords[0]).to.have.property(
        "msg",
        'Checking escaping: "test" \\o/ foo=bar'
      );
    });
  });
  describe("Logger levels", () => {
    it.skip("should set the log level to a number: 50 for Error", async () => {
      const errorlogger = (
        await baseLogger.child("testLogger")
      ).useMemoryLogging();
      errorlogger.error("test Error");
      const logRecords = errorlogger.getBufferedRecords();
      expect(logRecords[0]).to.have.property("level", 50);
    });
    it.skip("should set the log level to a number: 40 for Warn", async () => {
      const warnlogger = (
        await baseLogger.child("testLogger")
      ).useMemoryLogging();
      warnlogger.warn("test warn");
      const logRecords = warnlogger.getBufferedRecords();
      expect(logRecords[0]).to.have.property("level", 40);
    });
    it.skip("should set the log level to a number: 30 for Info", async () => {
      const infologger = (
        await baseLogger.child("testLogger")
      ).useMemoryLogging();
      infologger.info("test info");
      const logRecords = infologger.getBufferedRecords();
      expect(logRecords[0]).to.have.property("level", 30);
    });
    it.skip("should set the log level to a number: 20 for Debug", async () => {
      const debuglogger = (
        await baseLogger.child("testLogger")
      ).useMemoryLogging();
      debuglogger.setLevel(20);
      expect(debuglogger.getLevel()).to.equal(LoggerLevel.DEBUG);
    });
    it.skip("should set the log level to a number: 10 for Trace", async () => {
      const tracelogger = (
        await baseLogger.child("testLogger")
      ).useMemoryLogging();
      tracelogger.setLevel(10);
      expect(tracelogger.getLevel()).to.equal(LoggerLevel.TRACE);
    });
  });
});
