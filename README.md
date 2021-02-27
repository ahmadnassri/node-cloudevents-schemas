# Node Lib Template

node library project template

[![license][license-img]][license-url]
[![release][release-img]][release-url]
[![super linter][super-linter-img]][super-linter-url]
[![test][test-img]][test-url]
[![semantic][semantic-img]][semantic-url]

This package publishes all versions of the [CloudEvents][] Schema JSON spec

    .
    ├── LICENSE
    ├── index.js
    └── schemas
        ├── latest
        │   └── spec.json
        └── 1.0
            └── spec.json

## How

``` js
// directly require the JSON schema files
const latest = require('cloudevents-schemas/schemas/latest/spec.json')
const versioned = require('cloudevents-schemas/schemas/1.0/spec.json')

// require all the schemas in one object
const schemas = require('cloudevents-schemas')

/** schemas is an object with the following shape:
  {
    latest: ...
    1.0: ...
  }
*/
```

  [CloudEvents]: https://cloudevents.io/

----
> Author: [Ahmad Nassri](https://www.ahmadnassri.com/) &bull;
> Twitter: [@AhmadNassri](https://twitter.com/AhmadNassri)

[license-url]: LICENSE
[license-img]: https://badgen.net/github/license/ahmadnassri/node-cloudevents-schemas

[release-url]: https://github.com/ahmadnassri/node-cloudevents-schemas/releases
[release-img]: https://badgen.net/github/release/ahmadnassri/node-cloudevents-schemas

[super-linter-url]: https://github.com/ahmadnassri/node-cloudevents-schemas/actions?query=workflow%3Asuper-linter
[super-linter-img]: https://github.com/ahmadnassri/node-cloudevents-schemas/workflows/super-linter/badge.svg

[test-url]: https://github.com/ahmadnassri/node-cloudevents-schemas/actions?query=workflow%3Atest
[test-img]: https://github.com/ahmadnassri/node-cloudevents-schemas/workflows/test/badge.svg

[semantic-url]: https://github.com/ahmadnassri/node-cloudevents-schemas/actions?query=workflow%3Arelease
[semantic-img]: https://badgen.net/badge/📦/semantically%20released/blue
