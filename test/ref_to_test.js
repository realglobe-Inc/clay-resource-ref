/**
 * Test case for refTo.
 * Runs with mocha.
 */
'use strict'

const refTo = require('../lib/ref_to.js')
const clayResource = require('clay-resource')
const clayEntity = require('clay-entity')
const { ok } = require('assert')
const co = require('co')

describe('ref-to', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Ref to', () => co(function * () {
    let User = clayResource('User')
    let user = clayEntity({})
    let ref = refTo(User, user.id)
    ok(ref)
  }))
})

/* global describe, before, after, it */
