/*
 * Copyright (c) 2025, Salesforce.com, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { expect } from "chai";
import sinon from "sinon";
import packageJson from "../../package.json";
import {
  HttpRequestUtil,
  HttpResponseError,
  uuidGenerator,
} from "../../src/utils/request";

describe("HttpRequestUtil", () => {
  let httpRequestUtil: HttpRequestUtil;
  let fetchStub: sinon.SinonStub;
  let uuidGeneratorStub: sinon.SinonStub;

  beforeEach(() => {
    httpRequestUtil = new HttpRequestUtil();
    fetchStub = sinon.stub(global, "fetch");
    uuidGeneratorStub = sinon.stub(uuidGenerator, "generate");
  });

  afterEach(() => {
    sinon.restore();
  });

  describe("request", () => {
    it("should make successful GET request with JSON response", async () => {
      const mockResponseData = { success: true, data: "test" };
      const mockResponse = {
        ok: true,
        status: 200,
        statusText: "OK",
        json: sinon.stub().resolves(mockResponseData),
      };
      fetchStub.resolves(mockResponse);

      const result = await httpRequestUtil.request(
        "https://api.example.com/test",
        {
          method: "GET",
        }
      );

      expect(result).to.deep.equal(mockResponseData);
      expect(fetchStub.calledOnce).to.be.true;

      const [url, options] = fetchStub.getCall(0).args;
      expect(url).to.equal("https://api.example.com/test");
      expect(options.method).to.equal("GET");
      expect(options.headers["User-Agent"]).to.equal(
        `${packageJson.name}/${packageJson.version}`
      );
    });

    it("should make successful request with non-JSON response", async () => {
      const mockResponse = {
        ok: true,
        status: 200,
        statusText: "OK",
        text: sinon.stub().resolves("plain text response"),
        json: sinon.stub(),
      };
      fetchStub.resolves(mockResponse);

      const result = await httpRequestUtil.request(
        "https://api.example.com/test",
        {
          method: "GET",
        },
        false
      );

      expect(result).to.equal(mockResponse);
      expect(fetchStub.calledOnce).to.be.true;
      expect(mockResponse.json.called).to.be.false;
    });

    it("should include User-Agent header from package.json", async () => {
      const mockResponse = {
        ok: true,
        status: 200,
        statusText: "OK",
        json: sinon.stub().resolves({}),
      };
      fetchStub.resolves(mockResponse);

      await httpRequestUtil.request("https://api.example.com/test", {});

      const [, options] = fetchStub.getCall(0).args;
      expect(options.headers["User-Agent"]).to.equal(
        `${packageJson.name}/${packageJson.version}`
      );
    });

    it("should include default request-id header", async () => {
      const mockUUID = "test-uuid-1234-5678-9abc";
      uuidGeneratorStub.returns(mockUUID);

      const mockResponse = {
        ok: true,
        status: 200,
        statusText: "OK",
        json: sinon.stub().resolves({}),
      };
      fetchStub.resolves(mockResponse);

      await httpRequestUtil.request("https://api.example.com/test", {});

      const [, options] = fetchStub.getCall(0).args;
      expect(options.headers["X-Request-Id"]).to.equal(mockUUID);
      expect(uuidGeneratorStub.calledOnce).to.be.true;
    });

    it("should generate unique request-id for each request", async () => {
      const mockUUID1 = "test-uuid-1111-1111-1111";
      const mockUUID2 = "test-uuid-2222-2222-2222";
      uuidGeneratorStub.onFirstCall().returns(mockUUID1);
      uuidGeneratorStub.onSecondCall().returns(mockUUID2);

      const mockResponse = {
        ok: true,
        status: 200,
        statusText: "OK",
        json: sinon.stub().resolves({}),
      };
      fetchStub.resolves(mockResponse);

      await httpRequestUtil.request("https://api.example.com/test1", {});
      await httpRequestUtil.request("https://api.example.com/test2", {});

      const [, options1] = fetchStub.getCall(0).args;
      const [, options2] = fetchStub.getCall(1).args;

      expect(options1.headers["X-Request-Id"]).to.equal(mockUUID1);
      expect(options2.headers["X-Request-Id"]).to.equal(mockUUID2);
      expect(uuidGeneratorStub.calledTwice).to.be.true;
    });

    it("should merge custom headers with default headers", async () => {
      const mockUUID = "test-uuid-merge-test";
      uuidGeneratorStub.returns(mockUUID);

      const mockResponse = {
        ok: true,
        status: 200,
        statusText: "OK",
        json: sinon.stub().resolves({}),
      };
      fetchStub.resolves(mockResponse);

      const customOpts = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer token123",
        },
      };

      await httpRequestUtil.request("https://api.example.com/test", customOpts);

      const [, options] = fetchStub.getCall(0).args;
      expect(options.method).to.equal("POST");
      expect(options.headers["User-Agent"]).to.equal(
        `${packageJson.name}/${packageJson.version}`
      );
      expect(options.headers["X-Request-Id"]).to.equal(mockUUID);
      expect(options.headers["Content-Type"]).to.equal("application/json");
      expect(options.headers["Authorization"]).to.equal("Bearer token123");
    });

    it("should allow custom headers to override User-Agent", async () => {
      const mockUUID = "test-uuid-override-test";
      uuidGeneratorStub.returns(mockUUID);

      const mockResponse = {
        ok: true,
        status: 200,
        statusText: "OK",
        json: sinon.stub().resolves({}),
      };
      fetchStub.resolves(mockResponse);

      const customOpts = {
        headers: {
          "User-Agent": "custom-agent/1.0",
        },
      };

      await httpRequestUtil.request("https://api.example.com/test", customOpts);

      const [, options] = fetchStub.getCall(0).args;
      expect(options.headers["User-Agent"]).to.equal("custom-agent/1.0");
      expect(options.headers["X-Request-Id"]).to.equal(mockUUID);
    });

    it("should allow custom headers to override request-id", async () => {
      // UUID generator should still be called since it's called before merging custom headers
      uuidGeneratorStub.returns("generated-uuid-that-gets-overridden");

      const mockResponse = {
        ok: true,
        status: 200,
        statusText: "OK",
        json: sinon.stub().resolves({}),
      };
      fetchStub.resolves(mockResponse);

      const customRequestId = "custom-request-id-123";
      const customOpts = {
        headers: {
          "X-Request-Id": customRequestId,
        },
      };

      await httpRequestUtil.request("https://api.example.com/test", customOpts);

      const [, options] = fetchStub.getCall(0).args;
      expect(options.headers["X-Request-Id"]).to.equal(customRequestId);
      expect(options.headers["User-Agent"]).to.equal(
        `${packageJson.name}/${packageJson.version}`
      );
      // UUID generator should still be called since it's called before merging custom headers
      expect(uuidGeneratorStub.calledOnce).to.be.true;
    });

    it("should throw HttpResponseError for 4xx status codes", async () => {
      const mockResponse = {
        ok: false,
        status: 404,
        statusText: "Not Found",
      };
      fetchStub.resolves(mockResponse);

      try {
        await httpRequestUtil.request("https://api.example.com/test", {});
        expect.fail("Should have thrown HttpResponseError");
      } catch (error) {
        expect(error).to.be.instanceOf(HttpResponseError);
        expect(error.message).to.equal("HTTP Error Response: 404: Not Found");
        expect(error.response).to.equal(mockResponse);
      }
    });

    it("should throw HttpResponseError for 5xx status codes", async () => {
      const mockResponse = {
        ok: false,
        status: 500,
        statusText: "Internal Server Error",
      };
      fetchStub.resolves(mockResponse);

      try {
        await httpRequestUtil.request("https://api.example.com/test", {});
        expect.fail("Should have thrown HttpResponseError");
      } catch (error) {
        expect(error).to.be.instanceOf(HttpResponseError);
        expect(error.message).to.equal(
          "HTTP Error Response: 500: Internal Server Error"
        );
        expect(error.response).to.equal(mockResponse);
      }
    });

    it("should handle fetch errors (network failures)", async () => {
      fetchStub.rejects(new Error("Network connection failed"));

      try {
        await httpRequestUtil.request("https://api.example.com/test", {});
        expect.fail("Should have thrown an error");
      } catch (error) {
        expect(error.message).to.equal("Network connection failed");
      }
    });
  });

  describe("HttpResponseError", () => {
    it("should create error with correct message and response", () => {
      const mockResponse = {
        status: 403,
        statusText: "Forbidden",
      } as Response;

      const error = new HttpResponseError(mockResponse);

      expect(error.message).to.equal("HTTP Error Response: 403: Forbidden");
      expect(error.response).to.equal(mockResponse);
      expect(error).to.be.instanceOf(Error);
    });

    it("should handle response with empty statusText", () => {
      const mockResponse = {
        status: 422,
        statusText: "",
      } as Response;

      const error = new HttpResponseError(mockResponse);

      expect(error.message).to.equal("HTTP Error Response: 422: ");
      expect(error.response).to.equal(mockResponse);
    });
  });
});
