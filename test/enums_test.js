/**
 * Test case for enums.
 * Runs with mocha.
 */
'use strict'

const Enums = require('../lib/enums.js')
const { ok } = require('assert')
const co = require('co')

describe('enums', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Enums', () => co(function * () {
    for (let name of Object.keys(Enums)) {
      ok(Enums[ name ])
    }
  }))
})

/* global describe, before, after, it */
