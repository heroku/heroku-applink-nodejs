/*
 * Copyright (c) 2025, Salesforce.com, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import {
  BulkApi,
  DataTable,
  IngestJobReference,
  IngestJobInfo,
  QueryJobInfo,
  QueryJobReference,
  DataTableFieldValueExtractor,
  IngestJobOptions,
  IngestJobFailure,
  DataTableBuilder,
  QueryJobResults,
  BulkApiError,
  IngestJobOperation,
  QueryJobOperation,
  QueryJobState,
  IngestJobState,
  GetQueryJobResultsOptions,
  QueryJobOptions,
} from "../index";
import {
  createConnection,
  CreateConnectionOptions,
} from "../utils/create-connections";
import {
  IngestJobV2,
  IngestJobV2FailedResults,
  IngestJobV2SuccessfulResults,
  IngestJobV2UnprocessedRecords,
  JobInfoV2,
  QueryJobV2,
} from "jsforce/lib/api/bulk";
import {
  HttpResponse,
  Schema,
  Record as JSForceRecord,
} from "jsforce/lib/types";
import { stringify } from "csv-stringify/sync";
import { stringify as stringifyStream } from "csv-stringify";
import { HttpApi } from "jsforce/lib/http-api";
import { Connection } from "jsforce/lib/connection";
import { parse } from "csv-parse/sync";
import { DateTime } from "luxon";

const SIZE_1_MB = 1_000_000;
const SIZE_100_MB = 100 * SIZE_1_MB;
const CSV_OPTIONS = { delimiter: "," };

export function createBulkApi(clientOptions: CreateConnectionOptions): BulkApi {
  const connection = createConnection(clientOptions);

  // the bulk2 object on jsforce contains a global pollingInterval and pollingTimeout
  const getDefaultPollingOptions = () => {
    return {
      pollInterval: connection.bulk2.pollInterval,
      pollTimeout: connection.bulk2.pollTimeout,
    };
  };

  // NOTE: this is used to reconstruct the http api object that is used internally
  //       by jsforce which attaches its ingest operations to an IngestJobV2 object
  const getIngestJob = (jobReference: IngestJobReference) => {
    return new IngestJobV2({
      connection: connection,
      jobInfo: {
        id: jobReference.id,
      },
      pollingOptions: getDefaultPollingOptions(),
    });
  };

  // NOTE: this is used to reconstruct the http api object that is used internally
  //       by jsforce which attaches its query operations to an QueryJobV2 object
  //       and this one looks extra weird since the job info isn't directly exposed
  //       in the same way the IngestJobV2 allows so we have to muck around manually
  //       with the job info.
  const getQueryJob = (jobReference: QueryJobReference) => {
    const job = new QueryJobV2({
      connection: connection,
      query: undefined,
      operation: undefined,
      pollingOptions: getDefaultPollingOptions(),
    });
    job.jobInfo = Object.assign({}, job.jobInfo, { id: jobReference.id });
    return job;
  };

  const bulkApi: BulkApi = {
    abort(jobReference: IngestJobReference | QueryJobReference): Promise<void> {
      switch (jobReference.type) {
        case "ingestJob":
          return getIngestJob(jobReference).abort();
        case "queryJob":
          return getQueryJob(jobReference).abort();
      }
    },

    delete(
      jobReference: IngestJobReference | QueryJobReference
    ): Promise<void> {
      switch (jobReference.type) {
        case "ingestJob":
          return getIngestJob(jobReference).delete();
        case "queryJob":
          return getQueryJob(jobReference).delete();
      }
    },

    getFailedResults(jobReference: IngestJobReference): Promise<DataTable> {
      return fetchIngestResults({
        connection,
        jobReference,
        resultType: "failedResults",
      });
    },

    getInfo(
      jobReference: IngestJobReference | QueryJobReference
    ): Promise<IngestJobInfo | QueryJobInfo> {
      switch (jobReference.type) {
        case "ingestJob":
          return getIngestJob(jobReference).check().then(toIngestJobInfo);
        case "queryJob":
          return getQueryJob(jobReference).check().then(toQueryJobInfo);
      }
    },

    getMoreQueryResults(
      currentResult: QueryJobResults,
      getQueryJobResultsOptions?: GetQueryJobResultsOptions
    ): Promise<QueryJobResults> {
      return fetchQueryResults({
        connection,
        getQueryJobResultsOptions,
        jobReference: currentResult.jobReference,
        locator: currentResult.locator,
      });
    },

    getQueryResults(
      jobReference: QueryJobReference,
      getQueryJobResultsOptions?: GetQueryJobResultsOptions
    ): Promise<QueryJobResults> {
      return fetchQueryResults({
        connection,
        jobReference,
        getQueryJobResultsOptions,
      });
    },

    getSuccessfulResults(jobReference: IngestJobReference): Promise<DataTable> {
      return fetchIngestResults({
        connection,
        jobReference,
        resultType: "successfulResults",
      });
    },

    getUnprocessedRecords(
      jobReference: IngestJobReference
    ): Promise<DataTable> {
      return fetchIngestResults({
        connection,
        jobReference,
        resultType: "unprocessedrecords",
      });
    },

    async ingest(
      options: IngestJobOptions
    ): Promise<Array<IngestJobReference | IngestJobFailure>> {
      const results: Array<IngestJobReference | IngestJobFailure> = [];
      const { dataTable } = options;

      for await (const ingestDataTablePayload of bulkApi.splitDataTable(
        dataTable
      )) {
        let job: IngestJobV2<Schema, IngestJobOperation>;
        try {
          job = connection.bulk2.createJob(options);
          await job.open();
          await streamDataTableIntoJob(job, dataTable);
          await job.close();
          results.push({ id: job.id, type: "ingestJob" });
        } catch (e) {
          if (e instanceof Error) {
            results.push({
              unprocessedRecords: ingestDataTablePayload,
              error: toClientError(e),
              jobReference:
                typeof job?.id === "string"
                  ? { id: job.id, type: "ingestJob" }
                  : undefined,
            });
          }
        }
      }

      return results;
    },

    async query(options: QueryJobOptions): Promise<QueryJobReference> {
      const url = new URL(
        [
          connection.instanceUrl,
          "services/data",
          `v${connection.version}`,
          "jobs/query",
        ].join("/")
      );

      const apiClient = new BulkApiClient(connection);

      const job = await apiClient.request<JobInfoV2>({
        url: url.toString(),
        method: "POST",
        body: JSON.stringify({
          operation: options.operation ?? "query",
          query: options.soql,
        }),
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });

      return {
        id: job.id,
        type: "queryJob",
      };
    },

    createDataTableBuilder(columns: [string, ...string[]]): DataTableBuilder {
      const rows: Array<Map<string, string>> = [];

      function addArrayRow(row: string[]) {
        addRowWithExtractor(row, (array, columnName) => {
          return array[columns.indexOf(columnName)];
        });
      }

      function addMapRow(row: Map<string, string>) {
        addRowWithExtractor(row, (map, columnName) => map.get(columnName));
      }

      function addRowWithExtractor<T>(
        row: T,
        fieldValueExtractor: DataTableFieldValueExtractor<T>
      ) {
        const mappedRow = columns.reduce((acc, column) => {
          const value = fieldValueExtractor(row, column);
          acc.set(column, value);
          return acc;
        }, new Map<string, string>());
        rows.push(mappedRow);
      }

      return {
        addRow<T extends string[] | Map<string, string> | unknown>(
          row: T,
          fieldValueExtractor?: DataTableFieldValueExtractor<T>
        ): DataTableBuilder {
          if (Array.isArray(row)) {
            addArrayRow(row);
          } else if (row instanceof Map) {
            addMapRow(row);
          } else {
            addRowWithExtractor(row, fieldValueExtractor);
          }
          return this;
        },
        addRows<T extends string[] | Map<string, string> | unknown>(
          rows: Array<T>,
          fieldValueExtractor?: DataTableFieldValueExtractor<T>
        ): DataTableBuilder {
          rows.forEach((row) => {
            this.addRow(row, fieldValueExtractor);
          });
          return this;
        },
        build(): DataTable {
          return Object.assign(rows, {
            columns,
          });
        },
      };
    },

    splitDataTable(dataTable: DataTable): DataTable[] {
      const columns = dataTable.columns;
      const splitDataTables: DataTable[] = [];
      const columnsLine = stringify([columns], CSV_OPTIONS);
      const columnsSize = Buffer.byteLength(columnsLine);

      let currentSize = columnsSize;
      let dataTableBuilder = bulkApi.createDataTableBuilder(columns);

      dataTable.forEach((row) => {
        const rowValues = dataTable.columns.map((column) => row.get(column));
        const rowLine = stringify([rowValues], CSV_OPTIONS);
        const rowSize = Buffer.byteLength(rowLine);
        if (currentSize + rowSize < SIZE_100_MB) {
          currentSize += rowSize;
        } else {
          splitDataTables.push(dataTableBuilder.build());
          currentSize = columnsSize + rowSize;
          dataTableBuilder = bulkApi.createDataTableBuilder(columns);
        }
        dataTableBuilder.addRow(row);
      });

      splitDataTables.push(dataTableBuilder.build());

      return splitDataTables;
    },

    formatDate(value: Date): string {
      const dateTime = DateTime.fromJSDate(value).toUTC();
      if (dateTime.isValid) {
        return dateTime.toISODate();
      }
      throw new Error(`Invalid Date`);
    },

    formatDateTime(value: Date): string {
      const dateTime = DateTime.fromJSDate(value).toUTC();
      if (dateTime.isValid) {
        return dateTime.toISO();
      }
      throw new Error(`Invalid DateTime`);
    },

    formatNullValue(): string {
      return "#N/A";
    },
  };

  return bulkApi;
}

function toClientError(error: Error): BulkApiError {
  if (isClientError(error)) {
    return error;
  }
  return Object.assign(error, {
    errorCode: "UNKNOWN",
  });
}

function isClientError(error: Error): error is BulkApiError {
  return typeof (error as BulkApiError).errorCode === "string";
}

async function streamDataTableIntoJob(
  job: IngestJobV2<Schema, IngestJobOperation>,
  dataTable: DataTable
) {
  await new Promise<void>((resolve, reject) => {
    const stringifier = stringifyStream(CSV_OPTIONS);
    stringifier.on("error", reject);
    job.uploadData(stringifier).then(resolve, reject);
    stringifier.write(dataTable.columns);
    dataTable.forEach((row) => {
      const rowValues = dataTable.columns.map((column) => row.get(column));
      stringifier.write(rowValues);
    });
    stringifier.end();
  });
}

function toIngestJobInfo(jobInfo: JobInfoV2): IngestJobInfo {
  return {
    ...toJobInfo(jobInfo),
    jobType: "V2Ingest",
    operation: jobInfo.operation as IngestJobOperation,
    state: jobInfo.state as IngestJobState,
  };
}

function toQueryJobInfo(jobInfo: JobInfoV2): QueryJobInfo {
  return {
    ...toJobInfo(jobInfo),
    jobType: "V2Query",
    operation: jobInfo.operation as QueryJobOperation,
    state: jobInfo.state as QueryJobState,
  };
}

function toJobInfo(jobInfo: JobInfoV2): QueryJobInfo | IngestJobInfo {
  if (jobInfo.jobType === "BigObjectIngest" || jobInfo.jobType === "Classic") {
    throw new Error(`JobType "${jobInfo.jobType}" is not supported`);
  }

  return {
    ...jobInfo,
    apiVersion: parseInt(`${jobInfo.apiVersion}`, 10),
    columnDelimiter: "COMMA",
    concurrencyMode: "Parallel",
    contentType: "CSV",
    createdById: jobInfo.createdById,
    createdDate: jobInfo.createdDate,
    id: jobInfo.id,
    lineEnding: "LF",
    object: jobInfo.object,
    operation: jobInfo.operation as IngestJobOperation,
    state: jobInfo.state as IngestJobState,
    systemModstamp: jobInfo.systemModstamp,
    jobType: jobInfo.jobType,
  };
}

function resultsToDataTable(
  results:
    | IngestJobV2FailedResults<Schema>
    | IngestJobV2SuccessfulResults<Schema>
    | IngestJobV2UnprocessedRecords<Schema>
    | JSForceRecord[],
  responseColumns: string[]
): DataTable {
  const columns = convertToColumns(responseColumns);

  const rows = results.map((result) => {
    return columns.reduce((acc, column) => {
      acc.set(column, result[column]);
      return acc;
    }, new Map<string, string>());
  });

  const dataTable: DataTable = Object.assign(rows, {
    columns,
  });

  return dataTable;
}

function convertToColumns(columns: string[]): [string, ...string[]] {
  if (columns.length < 1) {
    throw new Error("parsed data table has no columns");
  }
  const [first, ...rest] = columns;
  return [first, ...rest];
}

function parseColumnsFromResponse(response: HttpResponse): string[] {
  try {
    const headerLine = response.body.substring(0, response.body.indexOf("\n"));
    return parse(headerLine, CSV_OPTIONS)[0];
  } catch (e) {
    return [];
  }
}

async function fetchIngestResults(options: {
  connection: Connection;
  jobReference: IngestJobReference;
  resultType: "successfulResults" | "failedResults" | "unprocessedrecords";
}): Promise<DataTable> {
  const { connection, jobReference } = options;

  const url = [
    connection.instanceUrl,
    "services/data",
    `v${connection.version}`,
    "jobs/ingest",
    jobReference.id,
    options.resultType,
  ].join("/");

  const api = new BulkApiClient(connection);

  // read the columns directly from the response since there is no way to access
  // them from the parsed records when there are no results...
  let columns: string[] = [];
  api.once("response", (res: HttpResponse) => {
    columns = parseColumnsFromResponse(res);
  });

  const records = await api.request<
    | IngestJobV2FailedResults<Schema>
    | IngestJobV2SuccessfulResults<Schema>
    | IngestJobV2UnprocessedRecords<Schema>
  >({
    method: "GET",
    url: url.toString(),
    headers: {
      Accept: "text/csv",
    },
  });

  return resultsToDataTable(records, columns);
}

async function fetchQueryResults(options: {
  connection: Connection;
  jobReference: QueryJobReference;
  locator?: string;
  getQueryJobResultsOptions?: GetQueryJobResultsOptions;
}): Promise<QueryJobResults> {
  const { connection, jobReference } = options;

  const url = new URL(
    [
      connection.instanceUrl,
      "services/data",
      `v${connection.version}`,
      "jobs/query",
      jobReference.id,
      "results",
    ].join("/")
  );

  if (options.locator) {
    url.searchParams.set("locator", options.locator);
  }

  if (options.getQueryJobResultsOptions?.maxRecords) {
    url.searchParams.set(
      "maxRecords",
      `${options.getQueryJobResultsOptions.maxRecords}`
    );
  }

  const api = new BulkApiClient(connection);

  let columns: string[] = [];
  let locator: string | undefined;
  let numberOfRecords = 0;
  api.once("response", (res: HttpResponse) => {
    columns = parseColumnsFromResponse(res);

    if ("sforce-locator" in res.headers) {
      const headerValue = res.headers["sforce-locator"];
      if (headerValue && headerValue !== "null") {
        locator = headerValue;
      }
    }

    if ("sforce-numberofrecords" in res.headers) {
      const headerValue = res.headers["sforce-numberofrecords"];
      if (headerValue && /^\d+$/.test(headerValue)) {
        numberOfRecords = parseInt(headerValue, 10);
      }
    }
  });

  const records = await api.request<JSForceRecord[]>({
    method: "GET",
    url: url.toString(),
    headers: {
      Accept: "text/csv",
    },
  });

  return {
    locator,
    numberOfRecords,
    jobReference,
    done: locator === undefined,
    dataTable: resultsToDataTable(records, columns),
  };
}

class BulkApiClient extends HttpApi<Schema> {
  constructor(connection: Connection) {
    super(connection, {});
  }

  hasErrorInResponseBody(body: any) {
    return (
      Array.isArray(body) &&
      typeof body[0] === "object" &&
      "errorCode" in body[0]
    );
  }

  isSessionExpired(response: HttpResponse): boolean {
    return (
      response.statusCode === 401 && /INVALID_SESSION_ID/.test(response.body)
    );
  }

  parseError(body: any) {
    return {
      errorCode: body[0].errorCode,
      message: body[0].message,
    };
  }
}
