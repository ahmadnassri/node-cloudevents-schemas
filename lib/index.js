const { join } = require('path')
const { readFileSync } = require('fs')

/* istanbul ignore next */
const load = process.platform === 'win32' ? file => JSON.parse(readFileSync(file)) : require

const root = join(__dirname, '..', 'schemas')

module.exports = {
  1.0: load(join(root, '1.0.json')),
  latest: load(join(root, 'latest.json'))
}
