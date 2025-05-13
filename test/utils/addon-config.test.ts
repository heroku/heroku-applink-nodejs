/*
 * Copyright (c) 2024, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { expect } from "chai";
import {
  resolveAddonConfigByAttachment,
  resolveAddonConfigByUrl,
} from "../../src/utils/addon-config";

const ATTACHMENT = "HEROKU_APPLINK";

describe("resolveAddonConfigByAttachment", () => {
  let originalEnv: NodeJS.ProcessEnv;

  beforeEach(() => {
    originalEnv = { ...process.env };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it("finds config for specified attachment", () => {
    process.env.HEROKU_APPLINK_API_URL = "https://api.example.com";
    process.env.HEROKU_APPLINK_TOKEN = "default-token";

    const config = resolveAddonConfigByAttachment(ATTACHMENT);
    expect(config.apiUrl).to.equal("https://api.example.com");
    expect(config.token).to.equal("default-token");
  });

  it("finds config ignoring case of attachment name", () => {
    process.env.HEROKU_APPLINK_API_URL = "https://api.example.com";
    process.env.HEROKU_APPLINK_TOKEN = "default-token";

    const config = resolveAddonConfigByAttachment(ATTACHMENT.toLowerCase());
    expect(config.apiUrl).to.equal("https://api.example.com");
    expect(config.token).to.equal("default-token");
  });

  it("throws if API_URL config not found", () => {
    process.env.HEROKU_APPLINK_TOKEN = "token";
    // APPLINK_API_URL intentionally not set

    expect(() => resolveAddonConfigByAttachment(ATTACHMENT)).to.throw(
      "Heroku Applink config not found under attachment HEROKU_APPLINK"
    );
  });

  it("throws if TOKEN config not found", () => {
    process.env.HEROKU_APPLINK_API_URL = "https://api.example.com";
    // APPLINK_TOKEN intentionally not set

    expect(() => resolveAddonConfigByAttachment(ATTACHMENT)).to.throw(
      "Heroku Applink config not found under attachment HEROKU_APPLINK"
    );
  });
});

describe("resolveAddonConfigByUrl", () => {
  let originalEnv: NodeJS.ProcessEnv;

  beforeEach(() => {
    originalEnv = { ...process.env };
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

  it("finds custom prefix config for matching URL", () => {
    const testUrl = "https://custom.example.com";
    process.env.CUSTOM_ATTACHMENT_API_URL = testUrl;
    process.env.CUSTOM_ATTACHMENT_TOKEN = "custom-token";

    const config = resolveAddonConfigByUrl(testUrl);
    expect(config.apiUrl).to.equal(testUrl);
    expect(config.token).to.equal("custom-token");
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
});
