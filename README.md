#### ORIGINAL REPO: https://github.com/Medium/local-dynamo - thanks for the great work!

Unfortunately, it felt like the original Medium repo was stagnant and had some amazing unmerged PRs.
So, I grabbed them, merged them, and hope to keep improving this library!

Please leave issues and, most importantly, PRs - I hope to keep this repo as active as necessary.

---

# A Node.js wrapper of [AWS DynamoDB Local](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tools.html)

This is a thin wrapper of the [AWS DynamoDB Local](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tools.html).
You can start the DynamoDB Local within a Node.js program and easily
specify where the database files should be.

Official Amazon release notes can be found at http://aws.amazon.com/releasenotes/SDK/JavaScript

## Installing

    npm install better-local-dynamo

## Usage

```javascript
localDynamo = require('local-dynamo');

localDynamo.launch({
  dir: '/database/dir', // null will run DynamoDB in memory; defaults to null
  port: 4567, // defaults to 8000
  cors: [ 'http://whitelisted-domain.com' ], // defaults to '*'
  heap: '512m', // defaults to JVM default values
  version: '2015-07-16_1.0' // defaults to 'latest'
});
```

## Things I'd love to do: (feel free to open a PR)

- Reduce dependencies
- Convert to promises
- Fix and reimplement CLI
- Add a logger
- Fix tests
