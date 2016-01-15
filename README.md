#### ORIGINAL REPO: https://github.com/Medium/local-dynamo - thanks for the great work!

Unfortunately, it felt like the original Medium repo was stagnant and had some amazing unmerged PRs.
So, I grabbed them, merged them, and hope to keep improving this library!

Please leave issues and, most importantly, PRs - I hope to keep this repo as active as necessary.

---

# A Node.js wrapper of [AWS DynamoDB Local](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tools.html)

This is a thin wrapper of the [AWS DynamoDB Local](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tools.html).
You can start the DynamoDB Local within a Node.js program and easily
specify where the database files should be.

Release notes can be found at http://aws.amazon.com/releasenotes/SDK/JavaScript

## Installing

    npm install better-local-dynamo

## Usage

From command line:

    $ node bin/launch_local_dynamo.js --database_dir=/database/dir --port=4567

or inside a Node.js application:

```javascript
localDynamo = require('local-dynamo');
localDynamo.launch('/database/dir', 4567);
```

For more options, pass an object like the following:

```javascript
localDynamo = require('local-dynamo');
localDynamo.launch({
  dir: '/database/dir', // null will run DynamoDB in memory
  port: 4567, // defaults to 8000
  cors: [ 'http://whitelisted-domain.com' ], // defaults to '*'
  version: '2015-07-16_1.0' // defaults to 'latest'
});
```

## Things I'd love to do: (feel free to open a PR)

- Reduce dependencies
- Add missing options to CLI
- Add a sensible default value for `dir`
- Add a logger
- Fix tests
