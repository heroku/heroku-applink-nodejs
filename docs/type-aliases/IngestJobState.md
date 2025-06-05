[**@heroku/applink v1.0.0-ea**](../README.md) • **Docs**

***

[@heroku/applink v1.0.0-ea](../README.md) / IngestJobState

# Type Alias: IngestJobState

```ts
type IngestJobState: 
  | "Open"
  | "UploadComplete"
  | "InProgress"
  | "Aborted"
  | "JobComplete"
  | "Failed";
```

The state of processing for an ingest job. Values include:
- `Open`: The job has been created, and job data can be uploaded to the job.
- `UploadComplete`: All data for a job has been uploaded, and the job is ready to be queued and processed. No new data can be added to this job. You can’t edit or save a closed job.
- `InProgress`: The job is being processed by Salesforce. This includes automatic optimized chunking of job data and processing of job operations.
- `Aborted`: The job has been aborted. You can abort a job if you created it or if you have the “Manage Data Integrations” permission.
- `JobComplete`: The job was processed by Salesforce.
- `Failed`: Some records in the job failed. Job data that was successfully processed isn’t rolled back.

## Defined in

[src/index.ts:858](https://github.com/heroku/heroku-applink-nodejs/blob/e2c7093bff3682e3a10211f985cb37467f6d2de7/src/index.ts#L858)
