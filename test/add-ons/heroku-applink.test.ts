/*
 * Copyright (c) 2025, Salesforce.com, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { expect } from "chai";
import sinon from "sinon";
import { HttpRequestUtil, HttpResponseError } from "../../src/utils/request";
import { getAuthorization } from "../../src/add-ons/heroku-applink";
import { OrgImpl } from "../../src/sdk/org";

describe("getAuthorization", () => {
  let httpRequestStub: sinon.SinonStub;
  let originalEnv: NodeJS.ProcessEnv;
  const mockResponse = {
    id: "b8bc7bcb-89c3-45c0-b7b7-4fb4427e598a",
    status: "authorized",
    org: {
      id: "00DSG00000DGEIr2AP",
      developer_name: "productionOrg2",
      instance_url: "https://dmomain.my.salesforce.com",
      type: "SalesforceOrg",
      api_version: "57.0",
      user_auth: {
        username: "admin@whatever.org",
        user_id: "005...",
        access_token: "00DSG00000DGEIr2AP!<token>",
      },
    },
    created_at: "2025-03-06T18:20:42.226577Z",
    created_by: "foo@heroku.com",
    created_via_app: "test-app",
    last_modified_at: "2025-03-09T18:20:42.226577Z",
    last_modified_by: "foo@heroku.com",
    redirect_uri: "https://test-app.herokuapp.com",
  };

  beforeEach(() => {
    originalEnv = { ...process.env };
    process.env.HEROKU_APPLINK_API_URL =
      "https://applink.staging.herokudev.com/addons/1530f4b5-c63a-4221-b28c-bc9602119605";
    process.env.HEROKU_APPLINK_TOKEN = "test-token";
    process.env.HEROKU_APPLINK_PURPLE_API_URL =
      "https://applink.staging.herokudev.com/addons/536c15d8-c2c1-47f7-a582-76f5aae385e0";
    process.env.HEROKU_APPLINK_PURPLE_TOKEN = "purple-token";
    process.env.HEROKU_APP_ID = "d52a726b-11a4-47a1-a4b6-2e18a771c2ac";
    httpRequestStub = sinon.stub(HttpRequestUtil.prototype, "request");
  });

  afterEach(() => {
    process.env = originalEnv;
    sinon.restore();
  });

  it("should successfully get authorization with default attachment name", async () => {
    httpRequestStub.resolves(mockResponse);

    const result = await getAuthorization("testDev");

    expect(result).to.be.instanceOf(OrgImpl);
    expect(result.id).to.equal("00DSG00000DGEIr2AP");
    expect(result.domainUrl).to.equal("https://dmomain.my.salesforce.com");
    expect(result.apiVersion).to.equal("57.0");
    expect(result.user.username).to.equal("admin@whatever.org");
    expect(result.user.id).to.equal("005...");
  });

  it("should successfully get authorization with custom attachment name", async () => {
    httpRequestStub.resolves(mockResponse);

    const result = await getAuthorization("testDev", "HEROKU_APPLINK_PURPLE");

    expect(result).to.be.instanceOf(OrgImpl);
    expect(result.id).to.equal("00DSG00000DGEIr2AP");
  });

  it("should successfully get authorization with URL", async () => {
    httpRequestStub.resolves(mockResponse);

    const result = await getAuthorization(
      "testDev",
      "https://applink.staging.herokudev.com/addons/1530f4b5-c63a-4221-b28c-bc9602119605"
    );

    expect(result).to.be.instanceOf(OrgImpl);
    expect(result.id).to.equal("00DSG00000DGEIr2AP");
  });

  it("should throw error when developer name is not provided", async () => {
    try {
      await getAuthorization("");
      expect.fail("Should have thrown an error");
    } catch (error) {
      expect(error.message).to.equal("Developer name not provided");
    }
  });

  it("should throw error when HTTP request fails", async () => {
    httpRequestStub.rejects(new Error("Network error"));

    try {
      await getAuthorization("testDev");
      expect.fail("Should have thrown an error");
    } catch (error) {
      expect(error.message).to.equal(
        "Unable to get connection testDev: Network error"
      );
    }
  });

  it("should throw error when response contains error details", async () => {
    const errorResponse = new Response(
      JSON.stringify({
        title: "Not Found",
        detail: "Authorization not found",
      }),
      { status: 404 }
    );
    httpRequestStub.rejects(new HttpResponseError(errorResponse));

    try {
      await getAuthorization("testDev");
      expect.fail("Should have thrown an error");
    } catch (error) {
      expect(error.message).to.equal("Not Found - Authorization not found");
    }
  });

  it("should handle non-JSON error responses gracefully", async () => {
    const invalidJsonResponse = new Response("Invalid JSON content", {
      status: 500,
    });
    httpRequestStub.rejects(new HttpResponseError(invalidJsonResponse));

    try {
      await getAuthorization("testDev");
      expect.fail("Should have thrown an error");
    } catch (error) {
      expect(error.message).to.equal(
        "Unable to get connection testDev: HTTP Error Response: 500: "
      );
    }
  });
});
