const { join } = require('path')
const { readFileSync } = require('fs')
const { test } = require('tap')

const schema = require('..')

test('object structure', assert => {
  assert.plan(3)

  assert.equal(typeof schema, 'object')
  assert.equal(typeof schema[1.0], 'object')
  assert.equal(typeof schema.latest, 'object')
})

test('same file', assert => {
  assert.plan(1)

  const spec = JSON.parse(readFileSync(join(__dirname, '../vendor/1.0/spec.json')))

  assert.match(schema[1.0], spec)
})
