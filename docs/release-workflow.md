# Release Workflow

This document outlines the process for releasing new versions of the Heroku Salesforce SDK Node.js package.

## Release Process

### 1. Creating a Release Branch

There are two ways to start a release:

#### Option 1: GitHub Actions Workflow
1. Go to the "Actions" tab in GitHub
2. Select "Draft Release Branch" workflow
3. Click "Run workflow"
4. Select the type of version bump (major, minor, patch)

#### Option 2: Command Line Script
Run the draft-release script locally:
```bash
./scripts/release/draft-release [<newversion> | major | minor | patch]
```

This will:
1. Run `npm version` with the provided version type
* `npm version` will update the version in package.json and commit that change. 
2. Create a release branch named `release-v{version}`
3. Update `CHANGELOG.md` with all commits since the last tag
4. Create a draft PR from the release branch to main

### 2. Testing and Building

When a PR is created or updated, the following GitHub Actions workflows run automatically:

1. `package.yml`:
   - Runs on pushes to main and PRs
   - Lints the code
   - Runs tests
   - Builds the package
   - Uploads build artifacts for release branches

### 3. Creating a Release Tag

After the PR is merged to main and tests pass:
1. The `create-tag.yml` workflow runs automatically
2. Creates a git tag with the version number
3. Pushes the tag to the repository

### 4. Publishing the Release

When a new tag is pushed:
1. The `publish.yml` workflow runs automatically
2. Publishes the package to npm
3. Creates a GitHub release with the changelog

## Workflow Files

- `.github/workflows/package.yml`: Runs tests and builds on PRs and pushes
- `.github/workflows/create-tag.yml`: Creates git tags after successful merges
- `.github/workflows/publish.yml`: Publishes to npm and creates GitHub releases

## Requirements

- GitHub Actions permissions for:
  - Contents (read/write)
  - Packages (read/write)
- Environment secrets:
  - `NPM_TOKEN`: For publishing to npm

## Best Practices

1. **Version Naming**:
   - Use semantic versioning (MAJOR.MINOR.PATCH)
   - Major: Breaking changes
   - Minor: New features, no breaking changes
   - Patch: Bug fixes, no breaking changes

2. **Changelog**:
   - Review the generated changelog in the PR
   - Ensure all significant changes are documented
   - Follow conventional commit format for better changelog generation

3. **Testing**:
   - Ensure all tests pass before merging
   - Test the package locally before releasing

## Rolling Back

If issues are found in a production release:
1. Create a new patch release to fix the issue
2. Follow the standard release process
3. Document the fix in the changelog

Note: We follow a "fix forward" approach rather than reverting releases to maintain a clear audit trail and versioning history. 