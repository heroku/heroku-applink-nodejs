[**@heroku/applink v1.1.0**](../README.md)

***

[@heroku/applink](../README.md) / QueryJobState

# Type Alias: QueryJobState

```ts
type QueryJobState = "UploadComplete" | "InProgress" | "Aborted" | "JobComplete" | "Failed";
```

Defined in: [src/index.ts:874](https://github.com/heroku/heroku-applink-nodejs/blob/f1676b57abf95f048d2affbf5184af7ba68d8a26/src/index.ts#L874)

The state of processing for an query job. Values include:
- `UploadComplete`: All data for a job has been uploaded, and the job is ready to be queued and processed. No new data can be added to this job. You can’t edit or save a closed job.
- `InProgress`: The job is being processed by Salesforce. This includes automatic optimized chunking of job data and processing of job operations.
- `Aborted`: The job has been aborted. You can abort a job if you created it or if you have the “Manage Data Integrations” permission.
- `JobComplete`: The job was processed by Salesforce.
- `Failed`: Some records in the job failed. Job data that was successfully processed isn’t rolled back.
