/**
 * Resource refs for clay entity
 * @module clay-resource-ref
 */

'use strict'

const _d = (module) => module && module.default || module

const Enums = _d(require('./enums'))
const parse = _d(require('./parse'))
const refTo = _d(require('./ref_to'))

module.exports = {
  Enums,
  parse,
  refTo
}
