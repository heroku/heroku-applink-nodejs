/*
 * Copyright (c) 2025, Salesforce.com, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { expect } from "chai";
import {
  resolveAddonConfigByAttachmentOrColor,
  resolveAddonConfigByUrl,
} from "../../src/utils/addon-config";

const ATTACHMENT = "HEROKU_APPLINK";

describe("resolveAddonConfigByAttachmentOrColor", () => {
  let originalEnv: NodeJS.ProcessEnv;

  beforeEach(() => {
    originalEnv = { ...process.env };
    process.env.HEROKU_APP_ID = "d52a726b-11a4-47a1-a4b6-2e18a771c2ac";
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it("finds config for specified attachment", () => {
    process.env.HEROKU_APPLINK_API_URL = "https://api.example.com";
    process.env.HEROKU_APPLINK_TOKEN = "default-token";

    const config = resolveAddonConfigByAttachmentOrColor(ATTACHMENT);
    expect(config.apiUrl).to.equal("https://api.example.com");
    expect(config.token).to.equal("default-token");
  });

  it("finds config ignoring case of attachment name", () => {
    process.env.HEROKU_APPLINK_API_URL = "https://api.example.com";
    process.env.HEROKU_APPLINK_TOKEN = "default-token";

    const config = resolveAddonConfigByAttachmentOrColor(
      ATTACHMENT.toLowerCase()
    );
    expect(config.apiUrl).to.equal("https://api.example.com");
    expect(config.token).to.equal("default-token");
  });

  it("finds config for specified color", () => {
    process.env.HEROKU_APPLINK_PURPLE_API_URL = "https://api.example.com";
    process.env.HEROKU_APPLINK_PURPLE_TOKEN = "default-token";

    const config = resolveAddonConfigByAttachmentOrColor("purple");
    expect(config.apiUrl).to.equal("https://api.example.com");
    expect(config.token).to.equal("default-token");
  });

  it("finds config for specified color for STAGING addon", () => {
    process.env.HEROKU_APPLINK_ADDON_NAME = "HEROKU_APPLINK_STAGING";
    process.env.HEROKU_APPLINK_STAGING_PURPLE_API_URL =
      "https://api.example.com";
    process.env.HEROKU_APPLINK_STAGING_PURPLE_TOKEN = "default-token";

    const config = resolveAddonConfigByAttachmentOrColor("purple");
    expect(config.apiUrl).to.equal("https://api.example.com");
    expect(config.token).to.equal("default-token");
  });

  it("throws if API_URL config not found", () => {
    process.env.HEROKU_APPLINK_TOKEN = "token";
    // APPLINK_API_URL intentionally not set

    expect(() => resolveAddonConfigByAttachmentOrColor(ATTACHMENT)).to.throw(
      "Heroku Applink config not found under attachment or color HEROKU_APPLINK"
    );
  });

  it("throws if TOKEN config not found", () => {
    process.env.HEROKU_APPLINK_API_URL = "https://api.example.com";
    // APPLINK_TOKEN intentionally not set

    expect(() => resolveAddonConfigByAttachmentOrColor(ATTACHMENT)).to.throw(
      "Heroku Applink config not found under attachment or color HEROKU_APPLINK"
    );
  });

  it("throws if HEROKU_APP_ID is not set", () => {
    delete process.env.HEROKU_APP_ID;

    expect(() => resolveAddonConfigByAttachmentOrColor(ATTACHMENT)).to.throw(
      "Heroku Applink app UUID not found"
    );
  });
});

describe("resolveAddonConfigByUrl", () => {
  let originalEnv: NodeJS.ProcessEnv;

  beforeEach(() => {
    originalEnv = { ...process.env };
    process.env.HEROKU_APP_ID = "d52a726b-11a4-47a1-a4b6-2e18a771c2ac";
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it("finds config for matching URL", () => {
    const testUrl = "https://api.example.com";
    process.env.HEROKU_APPLINK_API_URL = testUrl;
    process.env.HEROKU_APPLINK_TOKEN = "test-token";

    const config = resolveAddonConfigByUrl(testUrl);
    expect(config.apiUrl).to.equal(testUrl);
    expect(config.token).to.equal("test-token");
  });

  it("finds config ignoring url case", () => {
    const testUrl = "https://api.example.com";
    process.env.HEROKU_APPLINK_API_URL = testUrl;
    process.env.HEROKU_APPLINK_TOKEN = "test-token";

    const config = resolveAddonConfigByUrl(testUrl.toUpperCase());
    expect(config.apiUrl).to.equal(testUrl);
    expect(config.token).to.equal("test-token");
  });

  it("throws if no matching URL is found", () => {
    const testUrl = "https://nonexistent.example.com";

    expect(() => resolveAddonConfigByUrl(testUrl)).to.throw(
      `Heroku Applink config not found for API URL: ${testUrl}`
    );
  });

  it("throws if matching URL found but no corresponding token", () => {
    const testUrl = "https://api.example.com";
    process.env.SOME_API_URL = testUrl;
    // SOME_TOKEN intentionally not set

    expect(() => resolveAddonConfigByUrl(testUrl)).to.throw(
      `Heroku Applink token not found for API URL: ${testUrl}`
    );
  });

  it("throws if HEROKU_APP_ID is not set", () => {
    delete process.env.HEROKU_APP_ID;

    expect(() => resolveAddonConfigByUrl("https://api.example.com")).to.throw(
      "Heroku Applink app UUID not found"
    );
  });
});
