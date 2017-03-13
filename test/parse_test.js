/**
 * Test case for parse.
 * Runs with mocha.
 */
'use strict'

const parse = require('../lib/parse.js')
const { equal } = require('assert')
const co = require('co')

describe('parse', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Parse', () => co(function * () {
    let { resource, id } = parse('Org#1')
    equal(String(resource), 'Org')
    equal(String(id), '1')
  }))
})

/* global describe, before, after, it */
