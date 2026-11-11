import type { ClientRequest } from "node:http";
import { request } from "node:https";
import { ConfigurationError, TransportError } from "./errors.ts";

export const MAX_BODY_BYTES = 1024 * 1024;

export interface HttpSettings {
  readonly timeoutMs: number;
  readonly retryDelaysMs: readonly number[];
  readonly ca?: string;
}

export const DEFAULT_HTTP_SETTINGS: HttpSettings = {
  timeoutMs: 5000,
  retryDelaysMs: [250, 500, 1000],
};

export interface HttpResponse {
  readonly status: number;
  readonly body: Buffer;
  readonly bodyTooLarge: boolean;
}

export async function getWithRetries(
  url: URL,
  path: string,
  headers: Readonly<Record<string, string>>,
  settings: HttpSettings,
): Promise<HttpResponse> {
  for (let attempt = 0; ; attempt++) {
    let result: HttpResponse | TransportError;
    try {
      result = await get(url, path, headers, settings);
    } catch (error) {
      if (!(error instanceof TransportError)) {
        throw error;
      }
      result = error;
    }

    const delay = settings.retryDelaysMs[attempt];
    if (delay === undefined || !isRetryable(result)) {
      if (result instanceof TransportError) {
        throw result;
      }
      return result;
    }
    await new Promise((resolve) => setTimeout(resolve, delay));
  }
}

function isRetryable(result: HttpResponse | TransportError): boolean {
  return (
    result instanceof TransportError ||
    result.status === 429 ||
    (result.status >= 500 && result.status <= 599)
  );
}

function get(
  url: URL,
  path: string,
  headers: Readonly<Record<string, string>>,
  settings: HttpSettings,
): Promise<HttpResponse> {
  return new Promise((resolve, reject) => {
    const signal = AbortSignal.timeout(settings.timeoutMs);
    let req: ClientRequest;
    try {
      req = request(
        {
          protocol: "https:",
          hostname: url.hostname.replace(/^\[(.*)\]$/, "$1"),
          port: url.port,
          path,
          method: "GET",
          headers,
          signal,
          ...(settings.ca === undefined ? {} : { ca: settings.ca }),
        },
        (res) => {
          const chunks: Buffer[] = [];
          let length = 0;
          let bodyTooLarge = false;
          const finish = () => {
            resolve({
              status: res.statusCode ?? 0,
              body: Buffer.concat(chunks).subarray(0, MAX_BODY_BYTES),
              bodyTooLarge,
            });
          };
          res.on("data", (chunk: Buffer) => {
            if (bodyTooLarge) {
              return;
            }
            chunks.push(chunk);
            length += chunk.length;
            if (length > MAX_BODY_BYTES) {
              bodyTooLarge = true;
              finish();
              req.destroy();
            }
          });
          res.on("end", finish);
          res.on("error", (error) => {
            reject(transportError(signal, error));
          });
        },
      );
    } catch (error) {
      reject(
        new ConfigurationError(
          "The config vars don't form a valid AppLink API request.",
          { cause: error },
        ),
      );
      return;
    }
    req.on("error", (error) => {
      reject(transportError(signal, error));
    });
    req.end();
  });
}

function transportError(signal: AbortSignal, cause: Error): TransportError {
  return new TransportError(
    signal.aborted
      ? "The request to the AppLink API timed out."
      : `The request to the AppLink API failed: ${cause.message}`,
    { cause },
  );
}
