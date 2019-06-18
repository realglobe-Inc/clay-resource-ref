/**
 * Resource refs for clay entity
 * @module clay-resource-ref
 */

'use strict'


const Enums = require('./enums')
const parse = require('./parse')
const refTo = require('./ref_to')

exports.Enums = Enums
exports.parse = parse
exports.refTo = refTo

module.exports = {
  Enums,
  parse,
  refTo
}
