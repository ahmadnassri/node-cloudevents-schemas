This package publishes all versions of the [CloudEvents](https://cloudevents.io/) Schema JSON spec

```
.
├── LICENSE
├── index.js
└── schemas
    ├── latest.json
    ├── 1.0.2.json
    ├── 1.0.1.json
    ├── 1.0.0.json
    └── 1.0.json
```

## How

```js
// directly require the JSON schema files
const latest = require('cloudevents-schemas/schemas/latest.json')
const versioned = require('cloudevents-schemas/schemas/1.0.json')

// require all the schemas in one object
const schemas = require('cloudevents-schemas')

/** schemas is an object with the following shape:
  {
    latest: ...
    1.0: ...
    1.0.0: ...
    1.0.1: ...
    1.0.2: ...
  }
*/
```
