[**@heroku/salesforce-sdk-nodejs v1.0.0-ea**](../README.md) • **Docs**

***

[@heroku/salesforce-sdk-nodejs v1.0.0-ea](../README.md) / QueryJobState

# Type Alias: QueryJobState

```ts
type QueryJobState: 
  | "UploadComplete"
  | "InProgress"
  | "Aborted"
  | "JobComplete"
  | "Failed";
```

The state of processing for an query job. Values include:
- `UploadComplete`: All data for a job has been uploaded, and the job is ready to be queued and processed. No new data can be added to this job. You can’t edit or save a closed job.
- `InProgress`: The job is being processed by Salesforce. This includes automatic optimized chunking of job data and processing of job operations.
- `Aborted`: The job has been aborted. You can abort a job if you created it or if you have the “Manage Data Integrations” permission.
- `JobComplete`: The job was processed by Salesforce.
- `Failed`: Some records in the job failed. Job data that was successfully processed isn’t rolled back.

## Defined in

[src/index.ts:874](https://github.com/heroku/heroku-applink-nodejs/blob/964a49b1b7eff1b886f572faf2baab589b474aff/src/index.ts#L874)
