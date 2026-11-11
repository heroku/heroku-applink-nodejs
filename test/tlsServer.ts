import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { createServer, type Server } from "node:https";
import type { IncomingMessage, ServerResponse } from "node:http";
import type { AddressInfo } from "node:net";
import { tmpdir } from "node:os";
import { join } from "node:path";

export type Handler = (req: IncomingMessage, res: ServerResponse) => void;

export interface TlsServer {
  readonly url: string;
  readonly ca: string;
  readonly requests: IncomingMessage[];
  respond(...handlers: Handler[]): void;
  close(): Promise<void>;
}

export function generateCertificate(): { key: string; cert: string } {
  const dir = mkdtempSync(join(tmpdir(), "applink-test-"));
  try {
    execFileSync(
      "openssl",
      [
        "req",
        "-x509",
        "-newkey",
        "ec",
        "-pkeyopt",
        "ec_paramgen_curve:prime256v1",
        "-nodes",
        "-keyout",
        join(dir, "key.pem"),
        "-out",
        join(dir, "cert.pem"),
        "-days",
        "1",
        "-subj",
        "/CN=localhost",
        "-addext",
        "subjectAltName=DNS:localhost,IP:127.0.0.1",
      ],
      { stdio: "ignore" },
    );
    return {
      key: readFileSync(join(dir, "key.pem"), "utf8"),
      cert: readFileSync(join(dir, "cert.pem"), "utf8"),
    };
  } finally {
    rmSync(dir, { recursive: true });
  }
}

export async function startTlsServer(): Promise<TlsServer> {
  const { key, cert } = generateCertificate();
  const requests: IncomingMessage[] = [];
  let handlers: Handler[] = [];
  const server: Server = createServer({ key, cert }, (req, res) => {
    requests.push(req);
    const handler = handlers.length > 1 ? handlers.shift() : handlers[0];
    if (handler === undefined) {
      res.writeHead(599).end();
    } else {
      handler(req, res);
    }
  });
  await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
  const { port } = server.address() as AddressInfo;
  return {
    url: `https://localhost:${String(port)}`,
    ca: cert,
    requests,
    respond(...next) {
      handlers = next;
      requests.length = 0;
    },
    close() {
      server.closeAllConnections();
      return new Promise((resolve) =>
        server.close(() => {
          resolve();
        }),
      );
    },
  };
}
