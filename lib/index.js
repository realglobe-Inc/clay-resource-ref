/**
 * Resource referenece for cleay entity
 * @module clay-resource-ref
 */

'use strict'

const d = (module) => module && module.default || module

const Enums = d(require('./enums'))
const parse = d(require('./parse'))
const refTo = d(require('./ref_to'))

module.exports = {
  Enums,
  parse,
  refTo
}
